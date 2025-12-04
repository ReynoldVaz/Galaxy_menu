import GalaxyBackground from '../GalaxyBackground';

export default function GalaxyBackgroundExample() {
  return (
    <div className="relative h-screen w-full">
      <GalaxyBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-white text-2xl font-semibold">Galaxy Background Demo</p>
      </div>
    </div>
  );
}
