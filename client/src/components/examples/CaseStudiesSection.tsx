import { CaseStudiesSection } from '../CaseStudiesSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function CaseStudiesSectionExample() {
  return (
    <LanguageProvider>
      <CaseStudiesSection />
    </LanguageProvider>
  );
}
