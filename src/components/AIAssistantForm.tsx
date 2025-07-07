'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from 'react';
import { marketingIdeasAction } from '@/app/ai-assistant/actions';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Lightbulb, Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const formSchema = z.object({
    businessVertical: z.string().min(3, {
        message: "Business vertical must be at least 3 characters.",
    }),
    problemDescription: z.string().min(10, {
        message: "Problem description must be at least 10 characters.",
    }),
});

export default function AIAssistantForm() {
    const [ideas, setIdeas] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            businessVertical: "",
            problemDescription: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        setIdeas([]);
        try {
            const result = await marketingIdeasAction(values);
            if (result.ideas) {
                setIdeas(result.ideas);
            } else {
                 toast({
                    variant: "destructive",
                    title: "An error occurred.",
                    description: "Failed to generate ideas. Please try again.",
                });
            }
        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "An error occurred.",
                description: "Failed to generate ideas. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-center">Generate Marketing Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="businessVertical"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Business Vertical</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., E-commerce, SaaS, Healthcare" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="problemDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Problem Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Describe your marketing challenge..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={isLoading} className="w-full">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Generating...
                                    </>
                                ) : (
                                    <>
                                       <Sparkles className="mr-2 h-4 w-4" />
                                       Generate Ideas
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            {isLoading && (
                <div className="text-center p-8">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                    <p className="mt-4 text-muted-foreground">Our AI is thinking...</p>
                </div>
            )}

            {ideas.length > 0 && (
                <Card className="bg-primary/5">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2"><Lightbulb className="text-amber-400" /> Generated Ideas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {ideas.map((idea, index) => (
                                <li key={index} className="flex items-start gap-3 bg-background p-4 rounded-md border">
                                    <Sparkles className="h-5 w-5 text-primary mt-1 shrink-0" />
                                    <span>{idea}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
