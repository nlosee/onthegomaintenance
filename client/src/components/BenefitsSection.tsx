import { TrendingDown, BarChart3, CheckCircle2, MessageSquare, LayoutDashboard, DollarSign } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingDown,
      title: t.benefits.benefit1Title,
      description: t.benefits.benefit1Desc
    },
    {
      icon: BarChart3,
      title: t.benefits.benefit2Title,
      description: t.benefits.benefit2Desc
    },
    {
      icon: CheckCircle2,
      title: t.benefits.benefit3Title,
      description: t.benefits.benefit3Desc
    },
    {
      icon: MessageSquare,
      title: t.benefits.benefit4Title,
      description: t.benefits.benefit4Desc
    },
    {
      icon: LayoutDashboard,
      title: t.benefits.benefit5Title,
      description: t.benefits.benefit5Desc
    },
    {
      icon: DollarSign,
      title: t.benefits.benefit6Title,
      description: t.benefits.benefit6Desc
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            {t.benefits.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`benefit-card-${index}`}>
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
