import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import MenuCard, { MenuItem } from './MenuCard';
import { motion } from 'framer-motion';

interface MenuSectionProps {
  items: MenuItem[];
  isLoggedIn?: boolean;
  favorites?: string[];
  onFavoriteToggle?: (id: string) => void;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'mains', label: 'Main Courses' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' },
];

export default function MenuSection({ items, isLoggedIn = false, favorites = [], onFavoriteToggle }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4" data-testid="text-menu-heading">
            Our Celestial Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each dish is crafted with cosmic precision, blending the finest earthly ingredients 
            with otherworldly techniques.
          </p>
        </motion.div>

        <ScrollArea className="w-full whitespace-nowrap mb-10">
          <div className="flex gap-2 pb-4 justify-center flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full px-6"
                data-testid={`button-category-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              isLoggedIn={isLoggedIn}
              isFavorite={favorites.includes(item.id)}
              onFavoriteToggle={onFavoriteToggle}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
