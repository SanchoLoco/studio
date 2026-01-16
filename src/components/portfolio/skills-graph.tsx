
"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { skills } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
            <CardTitle className="font-headline text-3xl">
              Skills & Expertise
            </CardTitle>
            <CardDescription>
              A visualization of my proficiency in various technologies and
              methodologies.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <BarChart
                  data={skills}
                  layout="vertical"
                  margin={{ left: 10, right: 30 }}
                  accessibilityLayer
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <XAxis type="number" dataKey="proficiency" hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 14 }}
                    width={120}
                  />
                  <Bar
                    dataKey="proficiency"
                    fill="var(--color-proficiency)"
                    radius={4}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
