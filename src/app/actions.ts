'use server';

import { enhanceCvWithAI, EnhanceCvWithAIInput } from '@/ai/flows/enhance-cv-with-ai';

export async function getCvSuggestions(data: EnhanceCvWithAIInput) {
  try {
    const result = await enhanceCvWithAI(data);
    if (!result || !result.suggestedKeywords) {
      return { success: true, keywords: [] };
    }
    return { success: true, keywords: result.suggestedKeywords };
  } catch (error) {
    console.error('AI Enhancement Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred while contacting the AI service.';
    return { success: false, error: errorMessage };
  }
}
