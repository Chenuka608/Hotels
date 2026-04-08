import Hero from '@/components/Hero';
import FeaturedHotels from '@/components/FeaturedHotels';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedHotels />
    </main>
  );
}
