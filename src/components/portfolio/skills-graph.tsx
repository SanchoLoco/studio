"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  proficiency: {
    label: "Proficiency",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;


export function SkillsGraph() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Skills & Expertise</CardTitle>
            <CardDescription>A visualization of my proficiency in various technologies and methodologies.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
               <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={skills} layout="vertical" margin={{ left: 10, right: 30 }}>
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={150} 
                    tickLine={false} 
                    axisLine={false} 
                    tick={{ fill: "hsl(var(--foreground))", fontSize: 14 }}
                  />
                  <ChartTooltip
                    cursor={{ fill: 'hsl(var(--muted))' }}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Bar dataKey="proficiency" radius={[0, 4, 4, 0]} barSize={30} fill="var(--color-proficiency)">
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
