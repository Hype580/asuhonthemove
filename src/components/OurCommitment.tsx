import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const OurCommitment = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">      
      {/* Main Content */}
      <div className="relative max-w-[1100px] mx-auto min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto py-8 sm:py-12 md:py-16 space-y-6 sm:space-y-8">
          <h2 className={cn(
            poppins.className,
            'text-[28px] sm:text-[36px] md:text-[48px]',
            'font-[600]',
            'text-[#44AEC5]',
            'leading-[1.2] md:leading-[56px]',
            'tracking-[0%]'
          )}>
            Our Commitment
          </h2>
          
          <p className={cn(
            poppins.className,
            'text-[16px] sm:text-[18px]',
            'font-[400]',
            'text-[#2F2F2F]',
            'leading-[1.5] md:leading-[32px]',
            'tracking-[0%]',
            'max-w-[700px]'
          )}>
            At ASUH, we don&apos;t just provide nannies—we build trust, create opportunities, and support families. Our team works hard to ensure every parent finds the perfect childcare solution while empowering local caregivers through professional training.
          </p>
          
          <Link 
            href="/contact" 
            className={cn(
              poppins.className,
              'text-[#44AEC5]',
              'text-[16px] sm:text-[18px]',
              'font-[500]',
              'underline',
              'hover:text-[#3797ac]',
              'transition-colors duration-300',
              'mt-4'
            )}
          >
            Join us in redefining childcare in Brunei!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment; 