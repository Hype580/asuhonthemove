import Navbar from '@/components/Navbar';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingCards from '@/components/pricing/PricingCards';

export default function Pricing() {
  return (
    <main>
      <Navbar />
      <main className="w-full mx-auto">
        <PricingHeader />
        <PricingCards />
      </main>
    </main>
  );
} 