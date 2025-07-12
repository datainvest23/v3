'use server';

/**
 * @fileOverview AI-powered onboarding assistant chatbot flow.
 *
 * - onboardingAssistant - A function that handles the chatbot conversation.
 */

import {ai} from '@/ai/genkit';
import { 
    OnboardingAssistantInputSchema,
    OnboardingOutputSchema,
    type OnboardingAssistantInput,
    type OnboardingAssistantOutput,
} from '@/ai/schemas';

export async function onboardingAssistant(input: OnboardingAssistantInput): Promise<OnboardingAssistantOutput> {
  return onboardingAssistantFlow(input);
}

const onboardingAssistantFlow = ai.defineFlow(
  {
    name: 'onboardingAssistantFlow',
    inputSchema: OnboardingAssistantInputSchema,
    outputSchema: OnboardingOutputSchema,
  },
  async (input) => {
    let combinedInput = input.userInput ? `User typed: ${input.userInput}` : '';
    let transcription = '';

    if (input.audioDataUri) {
        try {
            const transcriptionResponse = await ai.generate({
                prompt: [{text: "Transcribe the following audio."}, {media: {url: input.audioDataUri}}]
            });
            transcription = transcriptionResponse.text;
            combinedInput += `\nUser said: ${transcription}`;
        } catch(e) {
            console.error("Audio transcription failed", e);
            transcription = "[Audio transcription failed]";
        }
    }

    if (input.fileContent) {
        combinedInput += `\nContent from uploaded file: ${input.fileContent}`;
    }

    const systemPrompt = `You are "SYM-bot", a friendly, expert onboarding assistant for SYM, a next-generation marketing agency. Your goal is to collect key information from a potential client. Be conversational and natural.

    Current information collected:
    - Name: ${input.currentState.name || 'not yet collected'}
    - Email: ${input.currentState.email || 'not yet collected'}
    - Company Name: ${input.currentState.companyName || 'not yet collected'}
    - Business Vertical: ${input.currentState.businessVertical || 'not yet collected'}
    - Problem Description: ${input.currentState.problemDescription ? 'partially collected' : 'not yet collected'}
    - Document Uploaded: ${input.currentState.documentContent ? 'Yes' : 'No'}

    Follow this conversational script:
    1.  If name is missing, greet the user warmly (e.g., "Welcome to SYM! I'm here to help get you started.") and ask for their full name.
    2.  Once you have the name, ask for their work email.
    3.  Once you have the email, ask for their company name and business vertical.
    4.  Next, ask them to describe their marketing problem. Let them know they can type, record a short audio message, or upload a document.
    5.  Acknowledge receipt of the problem description. If they provide it, add it to the 'problemDescription' field.
    6.  Once you have Name, Email, Company, Vertical, and a Problem Description, your task is complete. Generate a final message that includes:
        a. A confirmation that you have everything you need.
        b. An "INTERNAL ONBOARDING SUMMARY" with all the collected information, clearly formatted.
        c. A thank you message and assurance that the SYM team will be in touch within 24 hours.
    7. Set 'isComplete' to true in the final step.

    Analyze the user's input and the current state. Generate your next response and update the state object with any new information. If the user provides multiple pieces of information at once, update all relevant fields. ALWAYS carry over existing data in the state.
    
    User's latest input:
    ${combinedInput.trim()}
    `;
    
    const { output } = await ai.generate({
      prompt: systemPrompt,
      output: {
          schema: OnboardingOutputSchema,
          format: 'json'
      }
    });

    // Combine problem descriptions
    let newProblemDescription = input.currentState.problemDescription || '';
    if (combinedInput.trim()) {
        newProblemDescription += (newProblemDescription ? '\n\n' : '') + combinedInput.trim();
    }
    
    const finalState = {
        ...input.currentState,
        ...output!.updatedState,
    };

    if (newProblemDescription.length > (input.currentState.problemDescription?.length || 0)) {
        finalState.problemDescription = newProblemDescription;
    }
    if (input.fileContent) {
        finalState.documentContent = (finalState.documentContent || '') + input.fileContent;
    }


    return {
        response: output!.response,
        updatedState: finalState
    };
  }
);
