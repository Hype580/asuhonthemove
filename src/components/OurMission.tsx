import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const OurMission = () => {
  return (
    <div className="flex justify-center w-full py-8 px-4 md:px-6 lg:px-8">
      <section className="relative w-full min-h-[600px] lg:h-[600px] overflow-hidden">
        <div className="container mx-auto h-full flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="max-w-full lg:max-w-[600px] text-center lg:text-left">
            <h2 className={cn(
              poppins.className,
              'text-[32px] lg:text-[40px]',
              'font-[600]',
              'leading-[120%]',
              'tracking-[0%]',
              'text-[#E7ADAE]',
              'mb-4 lg:mb-8'
            )}>
              Our Mission
            </h2>

            <p className={cn(
              poppins.className,
              'text-[16px] lg:text-[20px]',
              'font-[400]',
              'leading-[160%]',
              'tracking-[0%]',
              'text-black',
              'max-w-full lg:max-w-[500px]'
            )}>
              To provide high-quality, trusted, and professional childcare services that support the well-being and development of children while giving parents peace of mind. We are committed to nurturing a safe, caring, and stimulating environment through well-trained nannies and innovative childcare solutions.
            </p>
          </div>

          {/* Image Container */}
          <div className="relative w-full lg:w-auto">
            {/* Teal Background Rectangle */}
            <div className="hidden md:absolute md:-left-10 lg:-left-20 md:-bottom-10 lg:-bottom-20 md:block md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] bg-[#44AEC5] md:rounded-tl-[20px] lg:rounded-tl-[40px]" />
            
            {/* Image */}
            <div className="relative z-10 w-full h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-[20px] lg:rounded-[40px]">
              <Image
                src="/new/mission.jpg"
                alt="Happy child with pink bow"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission; 