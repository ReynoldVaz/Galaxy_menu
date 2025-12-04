import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <div className="bg-background">
      <HeroSection 
        onViewMenuClick={() => console.log('View menu clicked')}
        onLoginClick={() => console.log('Login clicked')}
      />
    </div>
  );
}
