import Navbar from '@/components/Navbar';
import MeetOurNannies from '@/components/nannies/MeetOurNannies';
import NannyList from '@/components/nannies/NannyList';
import BookNanny from './BookNanny';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Professional Nannies in Brunei | Brunei Nanny Service',
  description: 'Find the perfect nanny in Brunei for your family. Our trained and experienced Brunei nannies provide exceptional childcare services tailored to your needs.',
  keywords: ['Brunei nanny', 'nanny Brunei', 'professional nannies Brunei', 'hire nanny Brunei', 'childcare Brunei', 'babysitting Brunei'],
  alternates: {
    canonical: 'https://asuhonthemove.com/nannies',
  },
  openGraph: {
    title: 'Professional Nannies in Brunei | ASUH On The Move',
    description: 'Find the perfect nanny in Brunei for your family. Our trained and experienced Brunei nannies provide exceptional childcare services tailored to your needs.',
    url: 'https://asuhonthemove.com/nannies',
    siteName: 'ASUH On The Move',
    images: [
      {
        url: '/nannies-hero.png',
        width: 1200,
        height: 630,
        alt: 'Professional Nannies in Brunei',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Nannies in Brunei | ASUH On The Move',
    description: 'Find the perfect nanny in Brunei for your family. Our trained and experienced Brunei nannies provide exceptional childcare.',
    images: ['/nannies-hero.png'],
  },
};

export default function Nannies() {
  return (
    <>
      <Script 
        id="nannies-schema-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Professional Nanny Services in Brunei',
            description: 'Find the perfect nanny in Brunei for your family. Our trained and experienced Brunei nannies provide exceptional childcare services tailored to your needs.',
            provider: {
              '@type': 'Organization',
              name: 'ASUH On The Move',
              url: 'https://asuhonthemove.com'
            },
            serviceType: 'Nanny Services',
            areaServed: {
              '@type': 'Country',
              name: 'Brunei'
            },
            serviceOutput: 'Professional childcare and child development',
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              availabilityStarts: 'T00:00',
              availabilityEnds: 'T23:59',
              availableAtOrFrom: 'Brunei',
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'BND'
              }
            }
          })
        }}
      />
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="w-full mx-auto flex-grow">
          <MeetOurNannies />
          <NannyList />
          <BookNanny />
        </div>
      </main>
    </>
  );
} 