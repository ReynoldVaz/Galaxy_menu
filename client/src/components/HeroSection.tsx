import { Button } from '@/components/ui/button';
import { ChevronDown, Utensils, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onViewMenuClick: () => void;
  onLoginClick: () => void;
}

export default function HeroSection({ onViewMenuClick, onLoginClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Cosmic Fine Dining
          </span>
          <Star className="w-4 h-4 text-primary fill-primary" />
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide mb-6">
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Nebula Kitchen
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Embark on a culinary journey through the cosmos. Where celestial flavors 
          meet earthly ingredients, creating an otherworldly dining experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={onViewMenuClick}
            className="px-8 py-6 text-lg rounded-full gap-2"
            data-testid="button-view-menu"
          >
            <Utensils className="w-5 h-5" />
            View Our Menu
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onLoginClick}
            className="px-8 py-6 text-lg rounded-full backdrop-blur-sm bg-background/20"
            data-testid="button-hero-login"
          >
            Reserve a Table
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#menu"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="link-scroll-down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
