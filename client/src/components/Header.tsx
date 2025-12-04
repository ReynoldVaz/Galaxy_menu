import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Menu, X, User } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn?: boolean;
  userName?: string;
  onLogout?: () => void;
}

export default function Header({ onLoginClick, isLoggedIn = false, userName, onLogout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <a href="#home" className="flex items-center gap-2" data-testid="link-home">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-serif text-xl font-bold tracking-wide">Nebula Kitchen</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate"
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-sm text-muted-foreground">{userName}</span>
                <Button variant="ghost" size="icon" data-testid="button-profile">
                  <User className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="sm" onClick={onLogout} data-testid="button-logout">
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={onLoginClick} data-testid="button-login">
                Login
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/40">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
