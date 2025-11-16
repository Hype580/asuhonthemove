'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { heroContent } from '@/data/heroContent';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600', '700'],
});

interface HeroButtonProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const HeroButton = ({ href, ariaLabel, children }: HeroButtonProps) => (
  <Link
    href={href}
    aria-label={ariaLabel}
    className={cn(
      'flex items-center justify-center',
      'w-[120px] sm:w-[154px]',
      'h-[48px] sm:h-[56px]',
      'bg-[#E7ADAE]',
      'border-[3px] border-[#E7ADAE]',
      'rounded-[100px]',
      'text-[#2F2F2F]',
      'text-sm sm:text-base font-medium',
      'whitespace-nowrap',
      'transition-colors hover:bg-opacity-90',
      'font-bold',
      poppins.className
    )}
  >
    {children}
  </Link>
);

export function Hero() {
  return (
    <section 
      className="relative w-full overflow-hidden aspect-video mt-[80px] sm:mt-[80px] md:mt-[105px]"
      aria-label="Hero section"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroContent.image.src}
          alt={heroContent.image.alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={100}
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative h-full w-full max-w-[1440px] mx-auto">
        {/* Hero Content */}
        <div 
          className={cn(
            'absolute flex flex-col',
            'w-full max-w-[672px]',
            'px-4 sm:px-6 lg:px-0',
            'top-[50%] sm:top-[52%] md:top-[55%]',
            'left-0 sm:left-[5%] md:left-[8%] lg:left-[134px]',
            '-translate-y-[45%]',
            'pb-8 sm:pb-10 md:pb-6'
          )}
          style={{
            gap: `${heroContent.layout.contentPosition.gap}px`
          }}
        >
          <div className="flex flex-col gap-[12px] sm:gap-[16px] md:gap-[24px]">
            <h1 
              className={cn(
                poppins.className,
                'text-[22px] sm:text-[32px] md:text-[36px] lg:text-[40px]',
                'leading-[120%]',
                'font-[700]',
                'text-white',
                'max-w-[90%] md:max-w-full'
              )}
            >
              {heroContent.title}
            </h1>
            <p 
              className={cn(
                poppins.className,
                'text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px]',
                'leading-[120%]',
                'font-[300]',
                'text-white',
                'max-w-[95%] md:max-w-full'
              )}
            >
              {heroContent.description}
            </p>
          </div>
          <div className="-mt-2 sm:-mt-2 md:mt-0">
            <HeroButton
              href={heroContent.cta.href}
              ariaLabel={heroContent.cta.ariaLabel}
            >
              {heroContent.cta.text}
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 