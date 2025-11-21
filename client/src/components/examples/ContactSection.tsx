import { ContactSection } from '../ContactSection';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';

export default function ContactSectionExample() {
  return (
    <TooltipProvider>
      <LanguageProvider>
        <ContactSection />
        <Toaster />
      </LanguageProvider>
    </TooltipProvider>
  );
}
