import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import QuoteSection from '@/components/QuoteSection';
import WhyPickUsSection from '@/components/WhyPickUsSection';
import ContactCTASection from '@/components/ContactCTASection';
import Layout from '@/components/Layout';
import Script from 'next/script';

const HomePage: React.FC = () => {
  return (
    <>
      <Script 
        id="schema-org-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ASUH On The Move',
            url: 'https://asuhonthemove.com',
            logo: 'https://asuhonthemove.com/logo.png',
            description: 'Your trusted partner in professional childcare services in Brunei. We offer trained nannies, flexible care options, and holistic child development programs for peace of mind.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'Brunei',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '', // Add your telephone here
              contactType: 'customer service',
              email: '', // Add your email here
            },
            sameAs: [
              'https://facebook.com/asuhonthemove', // Update with actual social media links
              'https://instagram.com/asuhonthemove',
            ],
            areaServed: 'Brunei',
            offers: {
              '@type': 'Offer',
              service: 'Professional childcare services in Brunei',
            },
          })
        }}
      />
      <Layout>
        <main className="mx-auto">
          <Hero />
          <AboutSection />
          <ServicesSection />
          <QuoteSection />
          <WhyPickUsSection />
          <ContactCTASection />
        </main>
      </Layout>
    </>
  );
};

export default HomePage;
