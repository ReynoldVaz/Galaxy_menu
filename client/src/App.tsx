import { useState } from 'react';
import { Switch, Route } from 'wouter';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import GalaxyBackground from '@/components/GalaxyBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import UserDashboard from '@/components/UserDashboard';

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

function HomePage() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  // todo: remove mock functionality
  const mockUser = {
    name: 'Aurora Stellar',
    email: 'aurora@nebulakitchen.com',
  };

  const handleLogin = (provider: string) => {
    console.log('Login with:', provider);
    setIsLoggedIn(true);
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDashboard(false);
    setFavorites([]);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showDashboard && isLoggedIn) {
    return (
      <UserDashboard
        userName={mockUser.name}
        userEmail={mockUser.email}
        onLogout={handleLogout}
        onClose={() => setShowDashboard(false)}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <GalaxyBackground />
      
      <Header
        onLoginClick={() => isLoggedIn ? setShowDashboard(true) : setLoginModalOpen(true)}
        isLoggedIn={isLoggedIn}
        userName={mockUser.name}
        onLogout={handleLogout}
      />

      <main>
        <HeroSection
          onViewMenuClick={scrollToMenu}
          onLoginClick={() => setLoginModalOpen(true)}
        />

        <MenuSection
          items={mockMenuItems}
          isLoggedIn={isLoggedIn}
          favorites={favorites}
          onFavoriteToggle={toggleFavorite}
        />

        <AboutSection />
      </main>

      <Footer />

      <LoginModal
        open={loginModalOpen}
        onOpenChange={setLoginModalOpen}
        onLogin={handleLogin}
      />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={HomePage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
