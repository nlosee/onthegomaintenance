import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import caseStudyImage from '@assets/generated_images/industrial_facility_with_digital_maintenance.png';

export function CaseStudiesSection() {
  const { t } = useLanguage();

  const caseStudies = [
    {
      industry: t.caseStudies.case1Industry,
      challenge: t.caseStudies.case1Challenge,
      solution: t.caseStudies.case1Solution,
      result: t.caseStudies.case1Result,
      quote: t.caseStudies.case1Quote,
      author: t.caseStudies.case1Author
    },
    {
      industry: t.caseStudies.case2Industry,
      challenge: t.caseStudies.case2Challenge,
      solution: t.caseStudies.case2Solution,
      result: t.caseStudies.case2Result,
      quote: t.caseStudies.case2Quote,
      author: t.caseStudies.case2Author
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            {t.caseStudies.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover-elevate flex flex-col" data-testid={`case-study-${index}`}>
              <div className="h-48 overflow-hidden">
                <img
                  src={caseStudyImage}
                  alt={study.industry}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{study.industry}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Challenge</p>
                  <p className="text-base">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Solution</p>
                  <p className="text-base">{study.solution}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Results</p>
                  <p className="text-base font-semibold">{study.result}</p>
                </div>
                <div className="bg-accent p-4 rounded-md relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute top-2 left-2" />
                  <p className="text-base italic relative z-10 ml-6">{study.quote}</p>
                  <p className="text-sm text-muted-foreground mt-2 ml-6">— {study.author}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" data-testid={`button-read-case-${index}`}>
                  {t.caseStudies.readMore} →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
