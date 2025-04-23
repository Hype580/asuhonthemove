import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const WhoWeAre = () => {
  return (
    <div className="flex justify-center w-full">
      <section 
        className="relative w-full min-h-[400px] md:min-h-[450px] lg:h-[483px] bg-[#44AEC5] overflow-hidden"
      >
        {/* Pink Triangle Decoration */}
        <div className="absolute right-0 top-9 hidden lg:block">
          <svg 
            width="150" 
            height="150" 
            viewBox="0 0 150 150" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="translate-y-[-1px]"
          >
            <path 
              d="M 0 75 L 150 150 L 150 0 Z" 
              fill="#E7ADAE"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-6 lg:px-8 py-12 lg:py-0">
          <div className="flex flex-col items-center text-center">
            <h2 className={cn(
              poppins.className,
              'text-[32px] lg:text-[40px]',
              'font-[600]',
              'leading-[120%]',
              'tracking-[0%]',
              'text-white',
              'mb-4 lg:mb-6'
            )}>
              Who We Are
            </h2>
            
            <h3 className={cn(
              poppins.className,
              'text-[20px] lg:text-[24px]',
              'font-[600]',
              'leading-[130%]',
              'tracking-[0%]',
              'text-white',
              'mb-4 lg:mb-8'
            )}>
              Nurturing Brunei&apos;s Future with Quality Childcare
            </h3>

            <p className={cn(
              poppins.className,
              'text-[16px] lg:text-[20px]',
              'font-[400]',
              'leading-[160%]',
              'tracking-[0%]',
              'text-white',
              'max-w-[335px] md:max-w-[600px] lg:max-w-[1000px]',
              'space-y-4'
            )}>
              We are pioneering Brunei&apos;s first E-Nanny service, a digital platform designed to train and certify local nannies, 
              transforming childcare into a professional career. As a mobile childcare provider, Asuh offers flexible and 
              personalised services tailored to the needs of each family. Whether at home or on the go, our platform ensures 
              that parents have access to trusted caregivers who provide not just supervision, but meaningful care and early 
              childhood development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre; 