"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getCvSuggestions } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  cvData: z.string().min(100, 'Please provide more detail in your CV (at least 100 characters).'),
  jobDescription: z.string().min(100, 'Please provide a more detailed job description (at least 100 characters).'),
});

export function CvEnhancer() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedKeywords, setSuggestedKeywords] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cvData: '',
      jobDescription: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestedKeywords([]);

    const result = await getCvSuggestions(values);

    if (result.success) {
      setSuggestedKeywords(result.keywords);
      if(result.keywords.length === 0){
        toast({
          title: 'Analysis Complete',
          description: "Your CV seems well-aligned! No new keywords suggested.",
        });
      } else {
        toast({
          title: 'Success!',
          description: `Found ${result.keywords.length} keyword suggestions for you.`,
        });
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.error || 'There was a problem with your request.',
      });
    }

    setIsLoading(false);
  }

  return (
    <section id="ai-cv-tool" className="py-20 md:py-28">
      <div className="container">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Wand2 className="mx-auto h-10 w-10 text-accent mb-2" />
            <CardTitle className="font-headline text-3xl">AI-Powered CV Enhancement</CardTitle>
            <CardDescription>
              Paste your CV and a job description to get AI-suggested keywords to boost your application's relevance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="cvData"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Your CV Text</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste your current CV here..."
                            className="h-64 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jobDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Target Job Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste the job description you are targeting..."
                            className="h-64 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="text-center">
                  <Button type="submit" disabled={isLoading} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Get Suggestions
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>

            {(isLoading || suggestedKeywords.length > 0) && (
              <div className="mt-12">
                <Separator />
                <div className="mt-8 text-center">
                    <h3 className="font-headline text-2xl mb-4">Suggested Keywords</h3>
                    {isLoading ? (
                        <p className="text-muted-foreground">The AI is thinking...</p>
                    ) : (
                        <div className="flex flex-wrap justify-center gap-2">
                            {suggestedKeywords.map((keyword, index) => (
                                <Badge key={index} variant="default" className="text-base px-4 py-2 bg-primary text-primary-foreground">
                                    {keyword}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
