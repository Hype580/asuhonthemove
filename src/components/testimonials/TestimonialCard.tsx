import Image from 'next/image';
import { Testimonial } from '@/types/testimonial';

interface TestimonialCardProps extends Omit<Testimonial, 'id'> {
  quoteVariant?: 'default' | 'blue';
}

export default function TestimonialCard({ name, title, content, quoteVariant = 'default' }: TestimonialCardProps) {
  const quoteImage = quoteVariant === 'blue' ? '/QuoteBlue.png' : '/Quote.png';

  return (
    <div className="w-full max-w-[90vw] min-h-[332px] bg-white rounded-[20px] p-4 sm:p-8 md:p-[66px] shadow-lg mx-auto">
      <div className="flex flex-col gap-2">
        {/* Quote mark - hidden on mobile */}
        <div className="relative w-[32px] h-[32px] md:w-[48px] md:h-[48px] mb-4 md:mb-8 hidden md:block">
          <Image
            src={quoteImage}
            alt="Quote mark"
            fill
            sizes="48px"
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="font-poppins font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[30px] tracking-[0%] text-[#2D2D2D] mb-2 text-center md:text-left">
          {title}
        </h3>

        {/* Content */}
        <p className="font-poppins font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0%] text-gray-600 mb-4 text-center md:text-left">
          {content}
        </p>
        
        {/* Name */}
        <p className="font-poppins font-normal text-[16px] leading-[24px] tracking-[0%] text-[#505050] py-2 px-4 rounded-md text-right mt-auto">
        — {name}
        </p>
      </div>
    </div>
  );
} 