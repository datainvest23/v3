'use server';

/**
 * @fileOverview AI-powered marketing assistant flow that generates marketing ideas based on business vertical and problem description.
 *
 * - generateMarketingIdeas - A function that generates marketing ideas.
 * - MarketingIdeasInput - The input type for the generateMarketingIdeas function.
 * - MarketingIdeasOutput - The return type for the generateMarketingIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MarketingIdeasInputSchema = z.object({
  businessVertical: z
    .string()
    .describe('The business vertical or industry, e.g., e-commerce, SaaS, healthcare.'),
  problemDescription: z
    .string()
    .describe("A description of the marketing problem or challenge the user is facing."),
});
export type MarketingIdeasInput = z.infer<typeof MarketingIdeasInputSchema>;

const MarketingIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('An array of innovative marketing ideas.'),
});
export type MarketingIdeasOutput = z.infer<typeof MarketingIdeasOutputSchema>;

export async function generateMarketingIdeas(input: MarketingIdeasInput): Promise<MarketingIdeasOutput> {
  return marketingIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'marketingIdeasPrompt',
  input: {schema: MarketingIdeasInputSchema},
  output: {schema: MarketingIdeasOutputSchema},
  prompt: `You are a marketing expert specializing in generating innovative marketing ideas.

  Given the business vertical and a description of the marketing problem, generate a list of marketing ideas that could help address the problem. The ideas should be specific, actionable, and tailored to the business vertical. Focus on ideas that typical marketing agencies do not offer.

  Business Vertical: {{{businessVertical}}}
  Problem Description: {{{problemDescription}}}

  Please provide the response as a list of marketing ideas.
  `,
});

const marketingIdeasFlow = ai.defineFlow(
  {
    name: 'marketingIdeasFlow',
    inputSchema: MarketingIdeasInputSchema,
    outputSchema: MarketingIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
