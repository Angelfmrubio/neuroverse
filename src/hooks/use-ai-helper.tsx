
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

// This is a basic implementation - in production you'd want to store the API key securely
// Consider using Supabase Edge Functions or server-side code for production
const DEFAULT_API_KEY = ''; // Empty by default for security

export function useAIHelper() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState(DEFAULT_API_KEY);
  const { toast } = useToast();

  const askGemini = async (prompt: string) => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please set your Gemini API key first",
        variant: "destructive",
      });
      return null;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Error calling Gemini API');
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      toast({
        title: 'AI Helper Error',
        description: error instanceof Error ? error.message : 'Failed to get response',
        variant: 'destructive',
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const diagnosePlaybackIssue = async () => {
    const diagnosisPrompt = `
      I'm having issues with HTML5 audio autoplay in a web application. 
      The audio player doesn't start automatically on page load.
      Error message: "Autoplay prevented: NotSupportedError: Failed to load because no supported source was found."
      What are the most likely causes and solutions?
    `;
    
    return askGemini(diagnosisPrompt);
  };

  return {
    askGemini,
    diagnosePlaybackIssue,
    isLoading,
    setApiKey,
    apiKey
  };
}
