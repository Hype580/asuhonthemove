import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const OurStory = () => {
  return (
    <div className="flex justify-center w-full">
      <section 
        className="relative w-full min-h-[400px] md:min-h-[450px] lg:h-[483px] bg-[#E7ADAE] overflow-hidden"
      >
        {/* Teal Triangle Decoration */}
        <div className="absolute left-0 bottom-0 hidden lg:block">
        <svg 
            width="150" 
            height="150" 
            viewBox="0 0 150 150" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="translate-y-[-1px]"
          >
            <path 
              d="M 150 75 L 0 150 L 0 0 Z" 
              fill="#44AEC5"
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
              'mb-4 lg:mb-8'
            )}>
              Our Story
            </h2>

            <p className={cn(
              poppins.className,
              'text-[16px] lg:text-[20px]',
              'font-[400]',
              'leading-[160%]',
              'tracking-[0%]',
              'text-white',
              'max-w-[335px] md:max-w-[600px] lg:max-w-[1000px]'
            )}>
              Asuh was founded with a vision to provide reliable, flexible and trustworthy childcare in Brunei. 
              Our platform gives parents full access to nanny profiles, specialities and certifications, 
              ensuring transparency and peace of mind. By combining personalised care and professional training, 
              Asuh supports families while empowering caregivers to build a meaningful career in childcare.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory; 