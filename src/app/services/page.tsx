import { Metadata } from 'next';
import ServiceCard from '@/components/services/ServiceCard';
import { servicesData } from '@/data/services';
import Navbar from '@/components/Navbar';
export const metadata: Metadata = {
  title: 'Our Services | ASUH On The Move',
  description: 'Discover our comprehensive childcare services including personalized care plans, parental support, flexible scheduling, and specialized care options.',
  openGraph: {
    title: 'Our Services | ASUH On The Move',
    description: 'Discover our comprehensive childcare services including personalized care plans, parental support, flexible scheduling, and specialized care options.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-32 max-w-[1200px]">
        <h1 className="text-center text-[40px] md:text-[48px] font-semibold text-[#FF9999] mt-12 mb-20">
          Our Services
        </h1>
        
        <div className="space-y-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              bulletPoints={service.bulletPoints}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              variant={service.variant}
            />
          ))}
        </div>
      </main>
    </>
  );
} 