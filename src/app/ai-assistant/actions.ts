'use server';

import { generateMarketingIdeas, MarketingIdeasInput, MarketingIdeasOutput } from '@/ai/flows/marketing-problem-assistant';

export async function marketingIdeasAction(input: MarketingIdeasInput): Promise<MarketingIdeasOutput> {
  try {
    const result = await generateMarketingIdeas(input);
    return result;
  } catch (error) {
    console.error('Error generating marketing ideas:', error);
    // In a real app, you might want to return a more specific error object
    return { ideas: [] };
  }
}
