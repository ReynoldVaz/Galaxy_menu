import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface MenuCardProps {
  item: MenuItem;
  isLoggedIn?: boolean;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
}

export default function MenuCard({ item, isLoggedIn = false, isFavorite = false, onFavoriteToggle }: MenuCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover-elevate">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className={`absolute inset-0 bg-muted animate-pulse transition-opacity duration-300 ${
              imageLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={item.image}
            alt={item.name}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {isLoggedIn && (
            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-3 right-3 bg-background/30 backdrop-blur-sm border border-white/10 ${
                isFavorite ? 'text-red-500' : 'text-white/80'
              }`}
              onClick={() => onFavoriteToggle?.(item.id)}
              data-testid={`button-favorite-${item.id}`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </Button>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-serif text-xl font-semibold leading-tight" data-testid={`text-menu-name-${item.id}`}>
              {item.name}
            </h3>
            <span className="text-lg font-medium text-primary whitespace-nowrap" data-testid={`text-menu-price-${item.id}`}>
              ${item.price.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-menu-desc-${item.id}`}>
            {item.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
