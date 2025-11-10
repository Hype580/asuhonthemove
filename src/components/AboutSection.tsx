import FeatureCard from './FeatureCard';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '600'],
});

const AboutSection: React.FC = () => {
  return (
    <section className="py-8 lg:py-16 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex flex-col items-center w-full max-w-[910px] h-auto lg:h-[228px] gap-[30px] lg:gap-[50px] mx-auto">
        <h2 className={cn(
          poppins.className,
          'w-full max-w-[910px]',
          'text-[32px] lg:text-[48px]',
          'font-[600] leading-[120%]',
          'text-center text-[#E7ADAE]'
        )}>
          About ASUH – Putting Your Child First
        </h2>
        <p className={cn(
          poppins.className,
          'text-[16px] lg:text-[20px]',
          'font-[300] leading-[120%]',
          'text-center text-gray-600',
          'max-w-[910px] px-4'
        )}>
          We believe that childcare goes beyond supervision. ASUH is committed to{' '}
          <span className={cn(
            'font-[500]'
          )}>
            supporting your child&apos;s growth, well-being, and happiness
          </span>{' '}
          by offering personalized care solutions that cater to different family needs. Our approach ensures that children receive{' '}
          <span className={cn(
            'font-[500]'
          )}>
            engaging, nurturing, and developmentally appropriate care
          </span>
          , allowing parents to focus on what matters most.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-y-[40px] gap-x-[30px] sm:gap-x-[40px] lg:gap-x-[80px] mt-[40px] lg:mt-[80px] mx-auto">
        <FeatureCard
          imageSrc="/new/Flexible childcare solutions.png"
          imageAlt="Children engaged in learning activities"
          title="Flexible childcare solutions"
        />
        <FeatureCard
          imageSrc="/new/Holistic child development.png"
          imageAlt="Child playing outdoors"
          title="Holistic child development"
        />
        <FeatureCard
          imageSrc="/new/Trained caring nannies.png"
          imageAlt="Nanny interacting with child"
          title="Trained, caring nannies"
        />
      </div>
    </section>
  );
};

export default AboutSection; 