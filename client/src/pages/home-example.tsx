import Home from './home';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function HomeExample() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}
