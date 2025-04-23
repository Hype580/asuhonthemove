import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const OurVision = () => {
  return (
    <div className="flex justify-center w-full bg-[#FDF7F7] py-8 px-4 md:px-6 lg:px-8">
      <section className="relative w-full min-h-[600px] lg:h-[600px] overflow-hidden">
        <div className="container mx-auto h-full flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-12">
          {/* Image Container */}
          <div className="relative w-full lg:w-auto order-2 lg:order-1">
            {/* Pink Triangle */}
            <div className="absolute -right-20 lg:-right-40 -bottom-10 lg:-bottom-20 hidden lg:block">
              <Image 
                src="/icons/Polygon 6.svg"
                alt="Decorative triangle"
                width={250}
                height={250}
                className="translate-y-[-1px] w-[150px] h-[150px] lg:w-[250px] lg:h-[250px]"
              />
            </div>
            
            {/* Image */}
            <div className="relative z-10 w-full h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-[20px] lg:rounded-[40px]">
              <Image
                src="/vision-child.jpg"
                alt="Professional nanny interacting with children"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-full lg:max-w-[600px] order-1 lg:order-2 text-center lg:text-left">
            <h2 className={cn(
              poppins.className,
              'text-[32px] lg:text-[40px]',
              'font-[600]',
              'leading-[120%]',
              'tracking-[0%]',
              'text-[#E7ADAE]',
              'mb-4 lg:mb-8'
            )}>
              Our Vision
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
              To be Brunei&apos;s leading childcare provider, setting the benchmark for excellence in professional nanny services and early childhood care. We aim to create a community where every child receives the best care, support, and foundation for a bright future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVision; 