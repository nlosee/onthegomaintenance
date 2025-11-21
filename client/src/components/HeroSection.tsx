import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@assets/generated_images/factory_maintenance_technician_with_tablet.png';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          {t.hero.title}
          <br />
          <span className="text-primary">{t.hero.titleHighlight}</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary text-primary-foreground border border-primary-border backdrop-blur-sm"
            data-testid="button-cta-primary"
          >
            {t.hero.ctaPrimary}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('case-studies')}
            className="bg-background/10 backdrop-blur-sm text-white border-white/30 hover:bg-background/20"
            data-testid="button-cta-secondary"
          >
            {t.hero.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
