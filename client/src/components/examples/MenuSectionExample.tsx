import { useState } from 'react';
import MenuSection from '../MenuSection';
import steakImage from '@assets/generated_images/gourmet_beef_steak_plating.png';
import salmonImage from '@assets/generated_images/seared_salmon_fine_dining.png';
import lobsterImage from '@assets/generated_images/luxury_lobster_tail_dish.png';
import risottoImage from '@assets/generated_images/creamy_truffle_risotto_dish.png';
import lavaImage from '@assets/generated_images/chocolate_lava_cake_dessert.png';
import cocktailImage from '@assets/generated_images/craft_cocktail_bar_drink.png';

// todo: remove mock functionality
const mockMenuItems = [
  {
    id: '1',
    name: 'Nebula Prime Ribeye',
    description: 'Dry-aged prime ribeye with constellation herb butter, charred asparagus, and truffle meteor dust.',
    price: 68.00,
    image: steakImage,
    category: 'mains',
  },
  {
    id: '2',
    name: 'Stellar Salmon',
    description: 'Pan-seared Atlantic salmon with citrus glaze, served over cosmic grain risotto.',
    price: 42.00,
    image: salmonImage,
    category: 'mains',
  },
  {
    id: '3',
    name: 'Galactic Lobster Tail',
    description: 'Butter-poached Maine lobster tail with starlight sauce and asteroid vegetables.',
    price: 85.00,
    image: lobsterImage,
    category: 'appetizers',
  },
  {
    id: '4',
    name: 'Cosmic Truffle Risotto',
    description: 'Creamy arborio rice with black truffle shavings and aged parmesan meteor shower.',
    price: 38.00,
    image: risottoImage,
    category: 'mains',
  },
  {
    id: '5',
    name: 'Supernova Lava Cake',
    description: 'Molten dark chocolate cake with vanilla nebula ice cream and berry constellation.',
    price: 18.00,
    image: lavaImage,
    category: 'desserts',
  },
  {
    id: '6',
    name: 'Orbit Elixir',
    description: 'Handcrafted cocktail with premium spirits, cosmic citrus, and stardust rim.',
    price: 22.00,
    image: cocktailImage,
    category: 'beverages',
  },
];

export default function MenuSectionExample() {
  const [favorites, setFavorites] = useState<string[]>(['1']);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-background">
      <MenuSection 
        items={mockMenuItems}
        isLoggedIn={true}
        favorites={favorites}
        onFavoriteToggle={toggleFavorite}
      />
    </div>
  );
}
