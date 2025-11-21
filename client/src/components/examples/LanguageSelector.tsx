import { LanguageSelector } from '../LanguageSelector';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function LanguageSelectorExample() {
  return (
    <LanguageProvider>
      <LanguageSelector />
    </LanguageProvider>
  );
}
