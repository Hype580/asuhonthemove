import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

interface FeatureCardProps {
  title?: string;
  description?: string;
  image?: string;
  bgColor: string;
  textOnly?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  image,
  bgColor,
  textOnly = false
}) => {
  if (textOnly) {
    return (
      <div className={cn(
        'rounded-[4px]',
        'p-[40px]',
        'flex flex-col justify-center h-full',
        'gap-[8px]',
        bgColor || 'bg-[#EFC8C9]'
      )}>
        <h3 className={cn(
          poppins.className,
          'text-[18px] md:text-[22px]',
          'font-[600]',
          'text-[#2F2F2F]'
        )}>
          {title}
        </h3>
        <p className={cn(
          poppins.className,
          'text-[14px] md:text-[16px]',
          'font-[300]',
          'text-[#2F2F2F]',
          'leading-[150%]'
        )}>
          {description}
        </p>
      </div>
    );
  }
  
  return (
    <div className={cn(
      'rounded-[4px]',
      'overflow-hidden',
      'relative',
      'h-full w-full'
    )}>
      <Image 
        src={image || ''}
        alt={title || 'Feature image'}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );
};

const WhyPickUsSection: React.FC = () => {
  const features = [
    // Row 1
    {
      title: "Expertly Trained Nannies",
      description: "Professionals committed to quality childcare.",
      bgColor: "bg-[#EFC8C9]",
      textOnly: true
    },
    {
      image: "/baby_playing_toy.jpeg",
      bgColor: "bg-transparent",
    },
    {
      title: "Child-Centered Approach",
      description: "Prioritizing emotional and cognitive development.",
      bgColor: "bg-[#EFC8C9]",
      textOnly: true
    },
    // Row 2
    {
      image: "/baby_playing_with_nanny.jpeg",
      bgColor: "bg-transparent",
    },
    {
      title: "Safe & Engaging Environments",
      description: "Creating positive and enriching experiences.",
      bgColor: "bg-[#EFC8C9]",
      textOnly: true
    },
    {
      image: "/child_eating.jpeg", 
      bgColor: "bg-transparent",
    }
  ];

  return (
    <section className="relative py-16 md:py-48 px-4 sm:px-8 bg-[#FCF0F0] overflow-hidden">
      {/* Right Teal Triangle */}
      <div 
        className="absolute bottom-0 right-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[150px] md:h-[150px]"
        style={{
          clipPath: 'polygon(100% 100%, 0 100%, 100% 0)',
          background: '#44AEC5'
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        <h2 className={cn(
          poppins.className,
          'text-[32px] md:text-[40px]',
          'font-[500]',
          'text-center text-[#D8A0A0]',
          'mb-12 md:mb-16'
        )}>
          Why Pick Us?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px]">
          {features.map((feature, index) => (
            <div key={index} className={cn(
              'w-full h-[320px]',
              'flex'
            )}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                image={feature.image}
                bgColor={feature.bgColor}
                textOnly={feature.textOnly}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPickUsSection; 