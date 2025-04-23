'use client';

import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
});

interface ServiceCardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  imageSrc: string;
  imageAlt: string;
  variant: 'blue' | 'pink';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  bulletPoints,
  imageSrc,
  imageAlt,
  variant
}) => {
  return (
    <div className={cn(
      'rounded-[20px] p-12 flex flex-col md:flex-row gap-6 items-center border-l-[5px]',
      variant === 'blue' 
        ? 'bg-[#C5E6ED] border-l-[#44AEC5]' 
        : 'bg-[#F8E6E6] border-l-[#E7ADAE]'
    )}>
      <div className="flex-1 space-y-4">
        <h3 className={cn(
          poppins.className,
          'text-[24px] font-[500] leading-[32px] tracking-[0%] text-[#1A1919]'
        )}>
          {title}
        </h3>
        <p className={cn(
          poppins.className,
          'text-[18px] font-[500] leading-[26px] tracking-[0%] pb-5',
          variant === 'blue' ? 'text-[#307C8C]' : 'text-[#A47B7C]'
        )}>
          {description}
        </p>
        <ul className="space-y-6 pl-5">
          {bulletPoints.map((point, index) => (
            <li key={index} className={cn(
              poppins.className,
              'flex items-center gap-2 text-[16px] font-[400] leading-[24px] tracking-[0%] text-[#1A1919] -ml-4'
            )}>
              <span className="w-1 h-1 rounded-full bg-black" />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className={cn(
        "w-[242px] h-[220px] relative rounded-[10px] overflow-hidden flex-shrink-0 border-[3.5px]",
        variant === 'blue' ? 'border-[#44AEC5]' : 'border-[#E7ADAE]'
      )}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceCard;