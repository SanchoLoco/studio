import { GraduationCap } from "lucide-react";
import { educationHistory } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function EducationTimeline() {
  return (
    <section id="education" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          Education
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 -translate-x-1/2 md:left-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
          
          <div className="space-y-12">
            {educationHistory.map((item, index) => (
              <div key={index} className="relative md:grid md:grid-cols-2 md:gap-x-8 items-start">
                
                <div className="absolute top-0 left-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background shadow-md">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                <div className={`pl-16 md:pl-0 ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1 md:text-right'}`}>
                  <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 w-full ${index % 2 !== 0 ? 'md:text-left' : ''}`}>
                    <CardHeader>
                      <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                          <div>
                              <CardTitle className="font-headline text-xl mb-1">
                                  {item.degree}
                              </CardTitle>
                              <CardDescription className="text-base">
                                  {item.institution}
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
      </div>
    </section>
  );
}
