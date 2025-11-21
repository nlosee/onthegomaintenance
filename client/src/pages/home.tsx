import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { OBCSection } from '@/components/OBCSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <OBCSection />
      <BenefitsSection />
      <ProcessSection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
