
import { skills } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsGraph() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl">
              Skills & Expertise
            </CardTitle>
            <CardDescription>
              My key skills and areas of expertise.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              {skills.map((skill) => (
                <Badge 
                  key={skill.name} 
                  variant="secondary" 
                  className="text-base font-medium px-4 py-2"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
