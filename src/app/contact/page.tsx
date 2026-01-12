import { Metadata } from 'next';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Script from 'next/script';
import NeedHelp from './NeedHelp';
import ContactForm from './ContactForm';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Contact Us | ASUH On The Move - Brunei Nanny Services',
  description: 'Contact ASUH On The Move for professional nanny services in Brunei. We connect Brunei families with trained nannies who provide safe and quality childcare.',
  openGraph: {
    title: 'Contact Us | ASUH On The Move - Brunei Nanny Services',
    description: 'Contact ASUH On The Move for professional nanny services in Brunei. We connect Brunei families with trained nannies who provide safe and quality childcare.',
    url: 'https://asuhonthemove.com/contact',
    siteName: 'ASUH On The Move',
    images: [
      {
        url: '/nanny_contact.png',
        width: 600,
        height: 650,
        alt: 'ASUH On The Move Contact - Brunei Nanny Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | ASUH On The Move - Brunei Nanny Services',
    description: 'Contact ASUH On The Move for professional nanny services in Brunei.',
    images: ['/nanny_contact.png'],
  },
  keywords: ['Brunei nanny contact', 'nanny Brunei booking', 'hire nanny Brunei', 'contact nanny service Brunei'],
};

export default function Contact() {
  return (
    <>
      <Script
        id="contact-schema-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'ASUH On The Move',
              description: 'Professional nanny services in Brunei',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+673 819 7773',
                contactType: 'customer service',
                email: 'contact@asuhonthemove.com',
                areaServed: {
                  '@type': 'Country',
                  name: 'Brunei'
                },
                availableLanguage: 'English',
                contactOption: 'TollFree',
                productSupported: 'Nanny Services in Brunei'
              },
              makesOffer: {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Professional Nanny Services in Brunei',
                  description: 'Connect with our experienced nannies in Brunei for top-quality childcare'
                }
              }
            },
            url: 'https://asuhonthemove.com/contact',
            keywords: 'Brunei nanny, nanny Brunei, contact nanny service, hire nanny in Brunei'
          })
        }}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#FFF5F5] overflow-hidden relative">
        <div className="min-w-screen py-12 relative z-10">
          <div className="flex flex-col md:flex-row w-full">
            {/* Contact Form */}
            <div className="w-full md:w-1/2 flex justify-center relative z-20">
              <div className="w-full max-w-[534px] px-4 md:px-6 lg:px-0">
                <h1 className={cn(
                  poppins.className,
                  'w-full',
                  'text-[36px] md:text-[48px]',
                  'font-[600]',
                  'leading-[1.2]',
                  'tracking-[0%]',
                  'text-[#44AEC5]',
                  'mb-4',
                  'mt-6 md:mt-10',
                  'text-center',
                  'pb-10 md:pb-10'
                )}>
                  Get in Touch
                </h1>

                <p className={cn(
                  poppins.className,
                  'text-md',
                  'font-[400]',
                  'text-[#2F2F2F]',
                  'mb-8',
                  'pb-8',
                  'text-center md:text-left'
                )}>
                  Have questions, want to book a nanny in Brunei, or need help choosing the right caregiver? We&apos;re here to help!
                </p>

                <ContactForm />
              </div>
            </div>

            {/* Right side - Nanny Image - Hidden on mobile */}
            <div className="hidden md:block w-full md:w-1/2 relative z-0">
              {/* Ellipse Decoration */}
              {/* Pink Triangle Decoration - Hidden on mobile */}
              <div className="absolute right-0 hidden lg:block z-0">
                <Image
                  src="/Polygon 8.svg"
                  alt="Decorative triangle"
                  width={200}
                  height={200}
                  className="translate-y-[-1px] w-[200px] h-[200px] lg:w-[200px] lg:h-[200px]"
                />
              </div>
              <div className="absolute w-[500px] h-[500px] translate-x-[8%] translate-y-[70%] bg-[#E7ADAE] rounded-full z-0 hidden lg:block"></div>

              <div className="absolute w-[500px] h-[500px] translate-x-[60%] translate-y-[40%] bg-[#C5E6ED] rounded-full z-0 hidden lg:block"></div>
              <div className="absolute w-[815px] h-[883px] bottom-[-50px] right-[-35px]">
                <Image
                  src="/nanny_contact.png"
                  alt="Professional nanny in Brunei"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
        <NeedHelp />
      </main>
    </>
  );
} 