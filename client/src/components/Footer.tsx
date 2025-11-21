import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

export function Footer() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    toast({
      title: 'Subscribed!',
      description: 'You will receive our latest updates.',
    });
    setEmail('');
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.company}</h3>
            <ul className="space-y-2">
              <li><Button variant="ghost" className="h-auto p-0 hover:text-primary" data-testid="link-about">{t.footer.aboutUs}</Button></li>
              <li><Button variant="ghost" className="h-auto p-0 hover:text-primary" data-testid="link-careers">{t.footer.careers}</Button></li>
              <li><Button variant="ghost" className="h-auto p-0 hover:text-primary" data-testid="link-partners">{t.footer.partners}</Button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li><Button variant="ghost" className="h-auto p-0 hover:text-primary" data-testid="link-implementation">{t.footer.implementation}</Button></li>
              <li><Button variant="ghost" className="h-auto p-0 hover:text-primary" data-testid="link-training">{t.footer.training}</Button></li>
              <li><Button variant="ghost" className="h-auto p-0 hover:text-primary" data-testid="link-support">{t.footer.support}</Button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li><Button variant="ghost" className="h-auto p-0 hover:text-primary" data-testid="link-privacy">{t.footer.privacy}</Button></li>
              <li><Button variant="ghost" className="h-auto p-0 hover:text-primary" data-testid="link-terms">{t.footer.terms}</Button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.newsletter}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t.footer.newsletterDesc}</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.newsletterPlaceholder}
                required
                data-testid="input-newsletter"
              />
              <Button type="submit" data-testid="button-subscribe">{t.footer.subscribe}</Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
