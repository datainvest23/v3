import { z } from 'zod';

export const OnboardingStateSchema = z.object({
    name: z.string().optional().describe("User's full name."),
    email: z.string().optional().describe("User's email address."),
    companyName: z.string().optional().describe("User's company name."),
    businessVertical: z.string().optional().describe("The company's business vertical."),
    problemDescription: z.string().optional().describe("The user's description of their marketing problem. Concatenate all problem descriptions here."),
    documentContent: z.string().optional().describe("Content of the uploaded document."),
    isComplete: z.boolean().default(false).describe("Whether all information has been collected and the final summary has been generated."),
});
export type OnboardingState = z.infer<typeof OnboardingStateSchema>;

export const OnboardingAssistantInputSchema = z.object({
  currentState: OnboardingStateSchema,
  userInput: z.string().optional().describe("The user's latest text message."),
  audioDataUri: z.string().optional().describe("An audio recording from the user as a data URI to be transcribed."),
  fileContent: z.string().optional().describe("Text content from a user-uploaded file."),
});
export type OnboardingAssistantInput = z.infer<typeof OnboardingAssistantInputSchema>;

export const OnboardingOutputSchema = z.object({
    response: z.string().describe("The chatbot's response to the user. This is what you will say next."),
    updatedState: OnboardingStateSchema.describe("The updated state object after processing the user's input. Carry over all existing data."),
});
export type OnboardingAssistantOutput = z.infer<typeof OnboardingOutputSchema>;
