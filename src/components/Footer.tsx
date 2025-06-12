'use client';

import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { footerDetails } from '@/data/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const typographyStyles = cn(
  poppins.className,
  'text-[16px]',
  'font-[400]',
  'leading-[24px]',
  'tracking-[0%]',
  'text-[#2F2F2F]'
);

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="relative bg-[#ECF7F9] min-h-[437px] h-auto">
      {/* Left Teal Square with Rounded Edges - Only shown on home page */}
      {isHomePage && (
        <div className="absolute left-0 top-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] bg-[#44AEC5] rounded-br-[20px] sm:rounded-br-[30px] md:rounded-br-[40px]" />
      )}

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="flex flex-col mt-12">
          {/* Main Content in Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo Column */}
            <div className="flex flex-col items-center">
              <Image 
                src="/logo.png" 
                alt="ASUH Logo" 
                width={180} 
                height={65}
                className="w-auto h-[40px] md:h-[65px]"
              />
            </div>
            
            {/* Location Column */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className={cn(typographyStyles, 'font-[600] text-[#3E9EB3] mb-4')}>Our Locations</h3>
              <div className="flex flex-col gap-3">
                {footerDetails.locations.map((location, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-[25px] h-[25px] relative flex items-center justify-center">
                      <Image 
                        src="/icons/location.svg" 
                        alt="Location icon" 
                        width={18} 
                        height={22}
                        className="w-[18px] h-[22px]"
                      />
                    </div>
                    <span className={cn(typographyStyles, 'text-[#3E9EB3]')}>
                      {location.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Column */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className={cn(typographyStyles, 'font-[600] text-[#3E9EB3] mb-4')}>Contact Us</h3>
              <div className="flex items-center gap-2">
                <div className="w-[25px] h-[25px] relative flex items-center justify-center">
                  <Image 
                    src="/icons/contact.svg" 
                    alt="Phone icon" 
                    width={20} 
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                </div>
                <span className={cn(typographyStyles, 'text-[#3E9EB3]')}>
                  {footerDetails.contact.phone}
                </span>
              </div>
            </div>
            
            {/* Email Column */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className={cn(typographyStyles, 'font-[600] text-[#3E9EB3] mb-4')}>Email</h3>
              <div className="flex items-center gap-2 max-w-full">
                <div className="w-[25px] h-[25px] relative flex items-center justify-center flex-shrink-0">
                  <Image 
                    src="/icons/email.svg" 
                    alt="Email icon" 
                    width={20} 
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                </div>
                <span className={cn(typographyStyles, 'text-[#3E9EB3] break-words min-w-0 overflow-hidden')}>
                  {footerDetails.contact.email}
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:mt-auto">
            <hr className="border-t border-[#3E9EB3] mb-6" />
            
            {/* Social Links */}
            <div className="flex justify-center gap-8">
              <Link href={footerDetails.socials.instagram} className="flex items-center justify-center hover:opacity-80 transition-opacity p-2">
                <Image 
                  src="/icons/instagram.svg" 
                  alt="Instagram" 
                  width={36} 
                  height={36}
                  className="w-[36px] h-[36px]"
                />
              </Link>
              <Link href={footerDetails.socials.linktree} className="flex items-center justify-center hover:opacity-80 transition-opacity p-2">
                <Image 
                  src="/icons/Linktree.svg" 
                  alt="Linktree" 
                  width={36} 
                  height={36}
                  className="w-[36px] h-[36px]"
                />
              </Link>
              <Link href={footerDetails.socials.whatsapp} className="flex items-center justify-center hover:opacity-80 transition-opacity p-2">
                <Image 
                  src="/icons/whatsapp.svg" 
                  alt="WhatsApp" 
                  width={36} 
                  height={36}
                  className="w-[36px] h-[36px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 