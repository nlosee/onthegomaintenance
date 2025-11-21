import { OBCSection } from '../OBCSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function OBCSectionExample() {
  return (
    <LanguageProvider>
      <OBCSection />
    </LanguageProvider>
  );
}
