
"use client";

import {
  PolarGrid,
  PolarAngleAxis,
  Radar,
  RadarChart,
} from "recharts";
import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

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
              <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[400px]">
                <RadarChart data={skills}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                  <PolarAngleAxis dataKey="name" />
                  <PolarGrid />
                  <Radar
                    dataKey="proficiency"
                    fill="var(--color-proficiency)"
                    fillOpacity={0.6}
                    stroke="var(--color-proficiency)"
                  />
                </RadarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
