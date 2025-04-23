import Link from 'next/link';

interface PricingCardProps {
  price: string;
  title: string;
  timeCondition: string;
  benefits: string[];
  variant: 'turquoise' | 'pink';
}

const PricingCard = ({ price, title, timeCondition, benefits, variant }: PricingCardProps) => {
  const colorClasses = {
    turquoise: {
      title: 'text-[#44AEC5]',
      button: 'bg-[#44AEC5] hover:bg-[#3998ac]',
      card: 'bg-[#44AEC5]',
      shadow: 'shadow-[0_-8px_15px_0px_#44AEC578]'
    },
    pink: {
      title: 'text-[#E7ADAE]',
      button: 'bg-[#E7ADAE] hover:bg-[#d77884]',
      card: 'bg-[#E7ADAE]',
      shadow: 'shadow-[0_-8px_15px_0px_#E7ADAE78]'
    },
  };

  return (
    <div className="relative pb-12 w-full sm:w-[300px] md:w-[330px] lg:w-[360px] min-h-[430px]">
      {/* Front white card */}
      <div className="w-full bg-white rounded-lg p-4 sm:p-6 md:p-8 flex flex-col relative z-10 pb-12 md:pb-16 min-h-[430px]">
        <div className="flex items-baseline gap-2">
          <span className={`my-2 sm:my-3 md:my-4 text-[28px] sm:text-[32px] md:text-[36px] font-normal font-poppins leading-[36px] sm:leading-[42px] md:leading-[46px] ${colorClasses[variant].title}`}>{price}</span>
          <span className="text-gray-600 text-[15px] sm:text-[16px] md:text-[17px] font-normal font-poppins leading-[100%]">/hour</span>
        </div>
        
        <div className="my-1">
          <div className="flex items-center gap-2">
            <h3 className={`text-[20px] sm:text-[22px] md:text-[24px] font-medium font-poppins leading-[100%] ${colorClasses[variant].title}`}>{title}</h3>
            <span className={`text-sm sm:text-md ${colorClasses[variant].title}`}>{timeCondition}</span>
          </div>
        </div>

        <div className="h-[1px] bg-gray-200 w-full mt-3 md:mt-4"></div>

        <div className="mt-6 md:mt-8 space-y-3 sm:space-y-2 md:space-y-2 flex-grow">
          {benefits.map((benefit, index) => (
            <p key={index} className="text-gray-700 py-3 sm:py-3 md:py-4 text-md sm:text-md font-normal font-poppins leading-[100%]">{benefit}</p>
          ))}
        </div>
      </div>

      {/* Back colored card with button */}
      <div className={`w-full rounded-lg absolute top-4 -bottom-10 left-0 z-0 ${colorClasses[variant].card} m-4 sm:m-6 md:m-8 ${colorClasses[variant].shadow}`}>
        <Link 
          href="/contact"
          className="w-full py-2 sm:py-3 px-4 sm:px-6 md:px-8 text-white font-medium block text-left absolute bottom-0 text-sm sm:text-base"
        >
          CONTACT US NOW
        </Link>
      </div>
    </div>
  );
};

export default function PricingCards() {
  const flexiCareBenefits = [
    "Ideal for quick errands or short breaks.",
    "Perfect for parents with flexible schedules.",
    "Reliable care when you need it most."
  ];

  const fullCareBenefits = [
    "Best for full-day or extended care.",
    "Suitable for working parents with long hours.",
    "Consistent support for your child's daily routine."
  ];
  return (
    <div className="w-full mx-auto px-4 md:px-0 bg-[#FDF7F7] py-8 sm:py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-center md:justify-between items-center gap-20 sm:gap-16 md:gap-12 min-h-[500px]">
        <PricingCard
          price="$6"
          title="Flexi Care"
          timeCondition="for 4 hours below"
          benefits={flexiCareBenefits}
          variant="turquoise"
        />
        <PricingCard
          price="$5"
          title="Full Care"
          timeCondition="for more than 4 hours"
          benefits={fullCareBenefits}
          variant="pink"
        />
      </div>
    </div>
  );
}