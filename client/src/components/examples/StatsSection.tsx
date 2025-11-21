import { StatsSection } from '../StatsSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function StatsSectionExample() {
  return (
    <LanguageProvider>
      <StatsSection />
    </LanguageProvider>
  );
}
