'use client';

import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

interface StatisticItemProps {
  prefix?: string;
  number: string;
  label: string;
  suffix?: string;
}

const StatisticItem = ({ prefix, number, label, suffix }: StatisticItemProps) => (
  <div className="flex flex-col items-center text-center">
    {prefix && (
      <div className={cn(
        poppins.className,
        'text-sm md:text-base text-[#2F2F2F] mb-1 text-center font-normal'
      )}>
        {prefix}
      </div>
    )}
    <div className={cn(
      poppins.className,
      'text-3xl md:text-4xl lg:text-5xl font-bold text-[#E7ADAE] mb-2 text-center'
    )}>
      {number}
      {suffix && <span className="text-[#E7ADAE] text-2xl md:text-3xl">{suffix}</span>}
    </div>
    <div className={cn(
      poppins.className,
      'text-sm md:text-base text-[#2F2F2F] font-medium text-center'
    )}>
      {label}
    </div>
  </div>
);

// SVG Plant Illustration Component
const PlantIllustration = () => (
  <div className="flex items-center justify-center h-full">
    <svg 
      width="300" 
      height="400" 
      viewBox="0 0 300 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[250px] md:max-w-[300px]"
    >
      {/* Main stem */}
      <path 
        d="M150 350 Q150 300 140 250 Q130 200 145 150 Q160 100 150 50" 
        stroke="#2F5233" 
        strokeWidth="4" 
        fill="none"
      />
      
      {/* Left branch */}
      <path 
        d="M140 200 Q120 180 100 170 Q80 160 70 150" 
        stroke="#2F5233" 
        strokeWidth="3" 
        fill="none"
      />
      
      {/* Right branch */}
      <path 
        d="M160 180 Q180 160 200 150 Q220 140 230 130" 
        stroke="#2F5233" 
        strokeWidth="3" 
        fill="none"
      />
      
      {/* Leaves on main stem */}
      <ellipse cx="130" cy="120" rx="15" ry="25" fill="#44AEC5" transform="rotate(-20 130 120)" />
      <ellipse cx="170" cy="100" rx="15" ry="25" fill="#44AEC5" transform="rotate(20 170 100)" />
      <ellipse cx="125" cy="160" rx="12" ry="20" fill="#44AEC5" transform="rotate(-30 125 160)" />
      <ellipse cx="175" cy="140" rx="12" ry="20" fill="#44AEC5" transform="rotate(30 175 140)" />
      
      {/* Leaves on left branch */}
      <ellipse cx="110" cy="175" rx="10" ry="15" fill="#44AEC5" transform="rotate(-45 110 175)" />
      <ellipse cx="90" cy="165" rx="8" ry="12" fill="#44AEC5" transform="rotate(-60 90 165)" />
      
      {/* Leaves on right branch */}
      <ellipse cx="190" cy="155" rx="10" ry="15" fill="#44AEC5" transform="rotate(45 190 155)" />
      <ellipse cx="210" cy="145" rx="8" ry="12" fill="#44AEC5" transform="rotate(60 210 145)" />
      
      {/* Flowers/buds */}
      <circle cx="150" cy="50" r="8" fill="#E7ADAE" />
      <circle cx="70" cy="150" r="6" fill="#E7ADAE" />
      <circle cx="230" cy="130" r="6" fill="#E7ADAE" />
      
      {/* Additional decorative leaves */}
      <ellipse cx="140" cy="80" rx="10" ry="18" fill="#44AEC5" transform="rotate(-15 140 80)" />
      <ellipse cx="160" cy="70" rx="10" ry="18" fill="#44AEC5" transform="rotate(15 160 70)" />
      
      {/* Base/pot */}
      <rect x="130" y="340" width="40" height="30" rx="5" fill="#2F5233" />
    </svg>
  </div>
);

const statistics = [
  {
    prefix: 'More than',
    number: '100',
    label: 'families helped'
  },
  {
    prefix: 'More than',
    number: '1,000',
    label: 'hours of childcare delivered'
  },
  {
    prefix: 'Rated',
    number: '4.8',
    suffix: '★★★★★',
    label: 'on Google'
  },
  {
    prefix: 'More than',
    number: '50',
    label: 'nannies in Brunei'
  },
  {
    prefix: 'Rated',
    number: '4.6',
    label: 'on Trustpilot'
  }
];

export default function StatisticsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#F8F9FA] to-[#F0F8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Plant Illustration */}
          <div className="order-2 lg:order-1">
            <PlantIllustration />
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className={cn(
                poppins.className,
                'text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F5233] mb-4 text-center'
              )}>
                Join the childcare revolution
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {/* First row - 2 items */}
              <StatisticItem
                prefix={statistics[0].prefix}
                number={statistics[0].number}
                label={statistics[0].label}
                suffix={statistics[0].suffix}
              />
              <StatisticItem
                prefix={statistics[1].prefix}
                number={statistics[1].number}
                label={statistics[1].label}
                suffix={statistics[1].suffix}
              />
              
              {/* Second row - 1 item centered */}
              <div className="col-span-2 flex justify-center">
                <StatisticItem
                  prefix={statistics[2].prefix}
                  number={statistics[2].number}
                  label={statistics[2].label}
                  suffix={statistics[2].suffix}
                />
              </div>
              
              {/* Third row - 2 items */}
              <StatisticItem
                prefix={statistics[3].prefix}
                number={statistics[3].number}
                label={statistics[3].label}
                suffix={statistics[3].suffix}
              />
              <StatisticItem
                prefix={statistics[4].prefix}
                number={statistics[4].number}
                label={statistics[4].label}
                suffix={statistics[4].suffix}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
