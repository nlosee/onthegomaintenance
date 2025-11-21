import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import obcImage from '@assets/generated_images/technician_using_digital_maintenance_checklist.png';

export function OBCSection() {
  const { t } = useLanguage();

  const keyPoints = [
    t.obc.keyPoint1,
    t.obc.keyPoint2,
    t.obc.keyPoint3,
    t.obc.keyPoint4
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            {t.obc.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.obc.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-8">
              {t.obc.description}
            </p>
            <div className="space-y-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`keypoint-${index}`}>
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-base">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md overflow-hidden">
            <img
              src={obcImage}
              alt="Operator using digital maintenance checklist"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
