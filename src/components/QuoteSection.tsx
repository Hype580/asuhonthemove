import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const QuoteSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[500px] h-auto py-12 lg:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/children-playing.jpeg"
          alt="Children playing outdoors"
          fill
          sizes="100vw"
          priority
          className="object-cover w-full h-full"
          style={{ objectPosition: 'center center' }}
        />
        {/* Overlay with specific color and 63% opacity */}
        <div className="absolute inset-0" style={{ backgroundColor: '#C5E6ED', opacity: 0.63 }} />
      </div>
      
      {/* Quote Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[500px] h-full w-full px-4 sm:px-6">
        <blockquote className={cn(
          poppins.className,
          'text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px]',
          'font-[500]',
          'leading-[130%] lg:leading-[120%]',
          'tracking-[0%]',
          'text-center text-white',
          'max-w-[280px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px]',
          'drop-shadow-lg'
        )}>
          &ldquo;Childcare is not just about supervision; it&apos;s about 
          creating a nurturing environment where every child 
          feels valued, supported, and empowered to thrive.&rdquo;
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection; 