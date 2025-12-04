import MenuCard from '../MenuCard';
import steakImage from '@assets/generated_images/gourmet_beef_steak_plating.png';

export default function MenuCardExample() {
  const sampleItem = {
    id: '1',
    name: 'Nebula Prime Ribeye',
    description: 'Dry-aged prime ribeye with constellation herb butter, charred asparagus, and truffle meteor dust.',
    price: 68.00,
    image: steakImage,
    category: 'mains',
  };

  return (
    <div className="p-6 bg-background max-w-sm">
      <MenuCard 
        item={sampleItem}
        isLoggedIn={true}
        isFavorite={false}
        onFavoriteToggle={(id) => console.log('Toggled favorite:', id)}
      />
    </div>
  );
}
