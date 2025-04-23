import { Metadata } from 'next';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Contact Us | ASUH On The Move',
  description: 'Get in touch with ASUH On The Move for professional childcare services in Brunei. We connect you with trained nannies who provide safe and loving childcare.',
  openGraph: {
    title: 'Contact Us | ASUH On The Move',
    description: 'Get in touch with ASUH On The Move for professional childcare services in Brunei. We connect you with trained nannies who provide safe and loving childcare.',
    url: 'https://asuhonthemove.com/contact',
    siteName: 'ASUH On The Move',
    images: [
      {
        url: '/nanny_contact.png',
        width: 600,
        height: 650,
        alt: 'ASUH On The Move Contact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | ASUH On The Move',
    description: 'Get in touch with ASUH On The Move for professional childcare services in Brunei.',
    images: ['/nanny_contact.png'],
  },
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
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+673 819 7773',
                contactType: 'customer service',
                email: 'contact@asuhonthemove.com',
                areaServed: 'Brunei',
                availableLanguage: 'English',
              },
            },
            url: 'https://asuhonthemove.com/contact',
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
                  Have questions, want to book a nanny, or need help choosing the right caregiver? We&apos;re here to help!
                </p>
                
                <form className="flex flex-col gap-[25px]">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={cn(
                        poppins.className,
                        'block text-[18px] md:text-[20px] font-[500] text-[#2F2F2F]',
                        'leading-[100%] tracking-[0%] mb-[10px]'
                      )}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={cn(
                        poppins.className,
                        'w-full h-[46px]',
                        'px-[15px] py-[8px]',
                        'rounded-[20px]',
                        'border-[1.5px] border-[#44AEC5]',
                        'bg-white',
                        'text-[14px]',
                        'placeholder:text-[#2F2F2F]/50',
                        'focus:outline-none focus:ring-2 focus:ring-[#44AEC5]'
                      )}
                      placeholder="Type your full name..."
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className={cn(
                        poppins.className,
                        'block text-[18px] md:text-[20px] font-[500] text-[#2F2F2F]',
                        'leading-[100%] tracking-[0%] mb-[10px]'
                      )}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={cn(
                        poppins.className,
                        'w-full h-[46px]',
                        'px-[15px] py-[8px]',
                        'rounded-[20px]',
                        'border-[1.5px] border-[#44AEC5]',
                        'bg-white',
                        'text-[14px]',
                        'placeholder:text-[#2F2F2F]/50',
                        'focus:outline-none focus:ring-2 focus:ring-[#44AEC5]'
                      )}
                      placeholder="Type your email address..."
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="phone" 
                      className={cn(
                        poppins.className,
                        'block text-[18px] md:text-[20px] font-[500] text-[#2F2F2F]',
                        'leading-[100%] tracking-[0%] mb-[10px]'
                      )}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={cn(
                        poppins.className,
                        'w-full h-[46px]',
                        'px-[15px] py-[8px]',
                        'rounded-[20px]',
                        'border-[1.5px] border-[#44AEC5]',
                        'bg-white',
                        'text-[14px]',
                        'placeholder:text-[#2F2F2F]/50',
                        'focus:outline-none focus:ring-2 focus:ring-[#44AEC5]'
                      )}
                      placeholder="Type your phone number..."
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className={cn(
                        poppins.className,
                        'block text-[18px] md:text-[20px] font-[500] text-[#2F2F2F]',
                        'leading-[100%] tracking-[0%] mb-[10px]'
                      )}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={cn(
                        poppins.className,
                        'w-full',
                        'px-[15px] py-[8px]',
                        'rounded-[20px]',
                        'border-[1.5px] border-[#44AEC5]',
                        'bg-white',
                        'text-[14px]',
                        'placeholder:text-[#2F2F2F]/50',
                        'focus:outline-none focus:ring-2 focus:ring-[#44AEC5]',
                        'resize-none'
                      )}
                      placeholder="Type your message..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className={cn(
                      poppins.className,
                      'w-full md:w-[192px] h-[56px]',
                      'px-[32px] py-[16px]',
                      'bg-[#44AEC5] text-white',
                      'rounded-[100px]',
                      'text-[16px] font-[600]',
                      'leading-[24px] tracking-[0%]',
                      'transition-all duration-300',
                      'hover:bg-[#3797ac]',
                      'focus:outline-none focus:ring-2 focus:ring-[#44AEC5]',
                      'mx-auto md:mx-0'
                    )}
                  >
                    Submit
                  </button>
                </form>
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
                  alt="Professional nanny"
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
      </main>
    </>
  );
} 