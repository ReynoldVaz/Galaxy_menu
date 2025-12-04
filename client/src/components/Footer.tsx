import { Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SiInstagram, SiFacebook } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup submitted');
  };

  return (
    <footer id="contact" className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-serif text-xl font-bold">Nebula Kitchen</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              Where celestial flavors meet earthly ingredients for an otherworldly dining experience.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full" data-testid="link-instagram">
                <SiInstagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" data-testid="link-facebook">
                <SiFacebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" data-testid="link-twitter">
                <FaXTwitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {['Home', 'Menu', 'About', 'Reservations', 'Private Events', 'Careers'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-footer-${link.toLowerCase().replace(' ', '-')}`}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact & Hours</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>42 Starlight Avenue<br />Cosmic City, CC 00001</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>(555) 123-STAR</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>hello@nebulakitchen.com</span>
              </div>
              <div className="flex gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Tue - Sun: 5pm - 11pm<br />Mon: Closed</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive offers, new menu items, and cosmic updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-background/50"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" className="w-full" data-testid="button-newsletter-submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p data-testid="text-copyright">2024 Nebula Kitchen. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
