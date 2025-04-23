import Navbar from '../../components/Navbar';
import WhoWeAre from '@/components/WhoWeAre';
import OurStory from '@/components/OurStory';
import OurMission from '@/components/OurMission';
import OurVision from '@/components/OurVision';
import { Metadata } from 'next';
import Script from 'next/script';
import OurCommitment from '@/components/OurCommitment';

export const metadata: Metadata = {
  title: 'About ASUH On The Move | Our Story and Mission in Childcare Services',
  description: 'Learn about ASUH On The Move, our journey, mission, and commitment to providing the highest quality childcare services in Brunei with trained nannies and flexible options.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About ASUH On The Move | Our Story and Mission',
    description: 'Learn about ASUH On The Move, our journey, mission and dedication to childcare excellence in Brunei. Meet our team of trained nannies and discover our values.',
    url: 'https://asuhonthemove.com/about',
  },
};

export default function About() {
  return (
    <>
      <Script 
        id="about-schema-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'ASUH On The Move',
              description: 'Professional childcare services in Brunei',
              foundingDate: '2020', // Update with actual founding date
              founder: {
                '@type': 'Person',
                name: 'Founder Name' // Update with actual founder name
              }
            },
            url: 'https://asuhonthemove.com/about',
          })
        }}
      />
      <Navbar />
      <main className="pt-20">
        <WhoWeAre />
        <OurStory />
        <OurMission />
        <OurVision />
        <OurCommitment />
      </main>
    </>
  );
} 