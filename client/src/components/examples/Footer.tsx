import { Footer } from '../Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';

export default function FooterExample() {
  return (
    <TooltipProvider>
      <LanguageProvider>
        <Footer />
        <Toaster />
      </LanguageProvider>
    </TooltipProvider>
  );
}
