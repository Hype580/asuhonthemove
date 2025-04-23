import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500'],
});

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, imageAlt, title }) => {
  return (
    <div className="flex flex-col w-[300px] sm:w-[340px] lg:w-[396px] gap-[20px] lg:gap-[30px]">
      <div className="relative w-full aspect-[396/276]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 396px"
          className="object-cover rounded-[20px] lg:rounded-[40px] border-[3px] lg:border-[5px] border-[#E7ADAE]"
        />
      </div>
      <h3 className={cn(
        poppins.className,
        'text-center text-[16px] sm:text-[18px] lg:text-[20px]',
        'font-[500] leading-[120%]'
      )}>
        {title}
      </h3>
    </div>
  );
};

export default FeatureCard; 