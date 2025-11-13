import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import QuoteSection from '@/components/QuoteSection';
import WhyPickUsSection from '@/components/WhyPickUsSection';
import StatisticsSection from '@/components/StatisticsSection';
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
            description: 'Brunei\'s premier nanny agency offering professional nanny services in Brunei. Find trusted and experienced nannies for your family in Brunei.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'Brunei',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '', // Add your telephone here
              contactType: 'customer service',
              email: '', // Add your email here
              areaServed: 'Brunei',
              availableLanguage: 'English',
            },
            sameAs: [
              'https://facebook.com/asuhonthemove', // Update with actual social media links
              'https://instagram.com/asuhonthemove',
            ],
            areaServed: {
              '@type': 'Country',
              name: 'Brunei'
            },
            offers: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Nanny Services in Brunei',
                  description: 'Professional nanny services in Brunei for families seeking reliable childcare'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Babysitting Services in Brunei',
                  description: 'Reliable babysitting services for Brunei families'
                }
              }
            ],
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://asuhonthemove.com'
            },
            keywords: 'Brunei nanny, nanny Brunei, professional nannies Brunei, childcare Brunei, babysitting Brunei'
          })
        }}
      />
      <Layout>
        <main className="mx-auto">
          <Hero />
          <AboutSection />
          <ServicesSection />
          <QuoteSection />
          {/* <StatisticsSection /> */}
          <WhyPickUsSection />
          <ContactCTASection />
        </main>
      </Layout>
    </>
  );
};

export default HomePage;
