'use server';

import { onboardingAssistant } from '@/ai/flows/marketing-problem-assistant';
import type { OnboardingAssistantInput, OnboardingAssistantOutput } from '@/ai/schemas';

export async function onboardingAssistantAction(input: OnboardingAssistantInput): Promise<OnboardingAssistantOutput> {
  try {
    const result = await onboardingAssistant(input);
    return result;
  } catch (error) {
    console.error('Error in onboarding assistant action:', error);
    return {
      response: "I'm sorry, but I've encountered an technical issue. Please try again in a moment.",
      updatedState: input.currentState
    };
  }
}
