import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      title: t.process.step1Title,
      description: t.process.step1Desc,
      duration: t.process.step1Duration
    },
    {
      number: 2,
      title: t.process.step2Title,
      description: t.process.step2Desc,
      duration: t.process.step2Duration
    },
    {
      number: 3,
      title: t.process.step3Title,
      description: t.process.step3Desc,
      duration: t.process.step3Duration
    },
    {
      number: 4,
      title: t.process.step4Title,
      description: t.process.step4Desc,
      duration: t.process.step4Duration
    },
    {
      number: 5,
      title: t.process.step5Title,
      description: t.process.step5Desc,
      duration: t.process.step5Duration
    }
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            {t.process.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.process.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="hover-elevate" data-testid={`process-step-${index}`}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="h-12 w-12 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="self-start sm:self-center">
                    {step.duration}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
