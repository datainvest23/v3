'use client';

import { useState, useEffect, useRef } from 'react';
import { onboardingAssistantAction } from '@/app/ai-assistant/actions';
import type { OnboardingState, OnboardingAssistantInput } from '@/ai/schemas';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback } from './ui/avatar';
import { BrainCircuitIcon, Loader2, Mic, Paperclip, Send, User } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'model';
  content: React.ReactNode;
};

// Main component
export default function AIAssistantChatbot() {
    const [state, setState] = useState<OnboardingState>({});
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    // Audio recording state
    const [isRecording, setIsRecording] = useState(false);
    const [hasMicPermission, setHasMicPermission] = useState<boolean | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    // Initial greeting
    useEffect(() => {
        const getGreeting = async () => {
            setIsLoading(true);
            const result = await onboardingAssistantAction({ currentState: {} });
            if (result.response) {
                setMessages([{ role: 'model', content: result.response }]);
                setState(result.updatedState);
            } else {
                 toast({ variant: "destructive", title: "Connection Error", description: "Could not connect to the AI assistant." });
            }
            setIsLoading(false);
        };
        getGreeting();
    }, [toast]);

    // Auto-scroll
    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (data: Omit<OnboardingAssistantInput, 'currentState'>) => {
        const userInput = data.userInput || (data.audioDataUri ? '[Audio Recording]' : '') || (data.fileContent ? '[Uploaded File]' : '');
        if (!userInput && !data.audioDataUri && !data.fileContent) return;

        if (userInput) {
            setMessages(prev => [...prev, { role: 'user', content: userInput }]);
        }
        setIsLoading(true);
        setInput('');

        const result = await onboardingAssistantAction({ 
            currentState: state,
            ...data
        });

        if (result.response) {
            setMessages(prev => [...prev, { role: 'model', content: <div className="whitespace-pre-wrap">{result.response}</div> }]);
            setState(result.updatedState);
        } else {
            toast({ variant: "destructive", title: "An error occurred.", description: "Failed to get a response. Please try again." });
        }
        setIsLoading(false);
    };

    // --- Media Handlers ---

    const handleMicClick = async () => {
        if (isRecording) {
            mediaRecorderRef.current?.stop();
            setIsRecording(false);
        } else {
            if (hasMicPermission === null) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    setHasMicPermission(true);
                    mediaRecorderRef.current = new MediaRecorder(stream);
                    mediaRecorderRef.current.ondataavailable = (event) => {
                        audioChunksRef.current.push(event.data);
                    };
                    mediaRecorderRef.current.onstop = () => {
                        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                        const reader = new FileReader();
                        reader.readAsDataURL(audioBlob);
                        reader.onloadend = () => {
                            handleSubmit({ audioDataUri: reader.result as string });
                            setMessages(prev => [...prev, { role: 'user', content: '[Audio Recording]' }]);
                        };
                        audioChunksRef.current = [];
                    };
                    mediaRecorderRef.current.start();
                    setIsRecording(true);
                } catch (error) {
                    console.error("Microphone access denied:", error);
                    setHasMicPermission(false);
                    toast({ variant: "destructive", title: "Microphone Access Denied", description: "Please enable microphone permissions in your browser settings." });
                }
            } else if (hasMicPermission) {
                 mediaRecorderRef.current?.start();
                 setIsRecording(true);
            }
        }
    };
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                handleSubmit({ fileContent: e.target?.result as string });
                setMessages(prev => [...prev, { role: 'user', content: `[Uploaded File: ${file.name}]` }]);
            };
            reader.readAsText(file);
        }
    };

    return (
        <Card className="flex flex-col h-[70vh]">
             <CardHeader className="border-b">
                 <h2 className="text-lg font-headline font-semibold">SYM Onboarding Assistant</h2>
             </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
                <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                    <div className="space-y-4">
                        {messages.map((message, index) => (
                            <div key={index} className={cn("flex items-start gap-3", message.role === 'user' ? 'justify-end' : '')}>
                                {message.role === 'model' && (
                                    <Avatar className="w-8 h-8">
                                        <AvatarFallback className="bg-primary text-primary-foreground"><BrainCircuitIcon size={20} /></AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={cn("rounded-lg px-4 py-2 max-w-sm", message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                                    {message.content}
                                </div>
                                 {message.role === 'user' && (
                                    <Avatar className="w-8 h-8">
                                        <AvatarFallback><User size={20} /></AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        ))}
                         {isLoading && (
                            <div className="flex items-start gap-3">
                                <Avatar className="w-8 h-8">
                                    <AvatarFallback className="bg-primary text-primary-foreground"><BrainCircuitIcon size={20} /></AvatarFallback>
                                </Avatar>
                                <div className="rounded-lg px-4 py-2 bg-muted flex items-center">
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                </div>
                            </div>
                        )}
                        { state.isComplete && (
                             <Alert variant="default" className="border-green-500 bg-green-50">
                                <AlertTitle className="text-green-700">Onboarding Complete!</AlertTitle>
                                <AlertDescription className="text-green-600">
                                    Thank you! A member of the SYM team will review your information and get in touch shortly.
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>
                </ScrollArea>
            </CardContent>
             <div className="p-4 border-t">
                <form
                    onSubmit={(e) => { e.preventDefault(); handleSubmit({ userInput: input }); }}
                    className="flex items-center gap-2"
                >
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        disabled={isLoading || state.isComplete}
                    />
                    <Button type="button" variant="ghost" size="icon" onClick={handleMicClick} disabled={isLoading || state.isComplete}>
                        <Mic className={cn("h-5 w-5", isRecording ? "text-red-500 animate-pulse" : "")}/>
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => fileInputRef.current?.click()} disabled={isLoading || state.isComplete}>
                        <Paperclip className="h-5 w-5" />
                    </Button>
                     <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".txt,.md" />
                    <Button type="submit" size="icon" disabled={isLoading || !input.trim() || state.isComplete}>
                        <Send className="h-5 w-5" />
                    </Button>
                </form>
             </div>
        </Card>
    );
}
