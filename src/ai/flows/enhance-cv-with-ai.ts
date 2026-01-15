'use server';

/**
 * @fileOverview An AI-powered tool that analyzes a CV and suggests relevant keywords to improve its relevance to cybersecurity job requirements.
 *
 * - enhanceCvWithAI - A function that enhances a CV with AI suggestions.
 * - EnhanceCvWithAIInput - The input type for the enhanceCvWithAI function.
 * - EnhanceCvWithAIOutput - The return type for the enhanceCvWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceCvWithAIInputSchema = z.object({
  cvData: z.string().describe('The CV data in text format.'),
  jobDescription: z.string().describe('The job description for cybersecurity roles.'),
});
export type EnhanceCvWithAIInput = z.infer<typeof EnhanceCvWithAIInputSchema>;

const EnhanceCvWithAIOutputSchema = z.object({
  suggestedKeywords: z.array(z.string()).describe('An array of suggested keywords to improve the CV.'),
});
export type EnhanceCvWithAIOutput = z.infer<typeof EnhanceCvWithAIOutputSchema>;

export async function enhanceCvWithAI(input: EnhanceCvWithAIInput): Promise<EnhanceCvWithAIOutput> {
  return enhanceCvWithAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceCvWithAIPrompt',
  input: {schema: EnhanceCvWithAIInputSchema},
  output: {schema: EnhanceCvWithAIOutputSchema},
  prompt: `You are an AI assistant designed to enhance CVs for cybersecurity job applications.

  Analyze the provided CV data and the cybersecurity job description. Suggest keywords that are relevant to the job description but are missing from the CV.

  CV Data: {{{cvData}}}
  Job Description: {{{jobDescription}}}

  Suggested Keywords:`, // Changed prompt to request only keywords
});

const enhanceCvWithAIFlow = ai.defineFlow(
  {
    name: 'enhanceCvWithAIFlow',
    inputSchema: EnhanceCvWithAIInputSchema,
    outputSchema: EnhanceCvWithAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      suggestedKeywords: output?.suggestedKeywords || [], // Ensure it always returns an array
    };
  }
);
