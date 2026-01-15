import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          My Journey
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
          
          {experiences.map((item, index) => (
            <div key={index} className="relative mb-8 flex justify-between items-center w-full">
              <div className={`w-[calc(50%-2.5rem)] ${index % 2 !== 0 ? 'order-1 text-right' : ''}`}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-left">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline text-xl mb-1">
                                {item.type === 'work' ? item.role : item.degree}
                            </CardTitle>
                            <CardDescription className="text-base">
                                {item.type === 'work' ? item.company : item.institution}
                            </CardDescription>
                        </div>
                        <Badge variant="secondary">{item.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-secondary shadow-md absolute left-1/2 -translate-x-1/2">
                {item.type === 'work' ? <Briefcase className="w-6 h-6 text-primary" /> : <GraduationCap className="w-6 h-6 text-primary" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
