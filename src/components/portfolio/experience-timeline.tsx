
import { Briefcase } from "lucide-react";
import { workExperiences } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          My Journey
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 -translate-x-1/2 md:left-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
          
          {workExperiences.map((item, index) => (
            <div key={index} className={`relative mb-8 md:flex md:justify-between items-start w-full`}>
              <div className={`hidden md:block w-[calc(50%-2rem)] ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
              </div>

              <div className="absolute md:relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-secondary shadow-md md:order-2">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>

              <div className={`pl-20 md:pl-0 w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                        <div>
                            <CardTitle className="font-headline text-xl mb-1">
                                {item.role}
                            </CardTitle>
                            <CardDescription className="text-base">
                                {item.company}
                            </CardDescription>
                        </div>
                        <Badge variant="secondary" className="whitespace-nowrap">{item.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
