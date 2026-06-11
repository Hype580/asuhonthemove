import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const collaborativePartners = [
  { name: 'Shell LiveWire Brunei', src: '/partners/Shell LiveWire Brunei.png' },
  { name: 'Brunei Innovation Lab', src: '/partners/Brunei Innovation Lab.png' },
  { name: 'DARE - Darussalam Enterprise', src: '/partners/DARE.png' },
  { name: 'Saving Life Resources Company', src: '/partners/Saving Life Resources Company.png' },
];

const Partners = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-[90px] py-16 lg:py-24">
      {/* Collaborative Partners */}
      <div className="mb-16 lg:mb-24">
        <h2 className={cn(
          poppins.className,
          'text-[24px] lg:text-[32px] font-[600] text-[#2F2F2F] mb-10 lg:mb-14'
        )}>
          Our Collaborative Partners
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          {collaborativePartners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.name}
                width={400}
                height={240}
                className="object-contain w-full max-w-[150px] lg:max-w-[210px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hackathon Winner & INA Membership */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Hackathon Winner */}
        <div>
          <h2 className={cn(
            poppins.className,
            'text-[24px] lg:text-[32px] font-[600] text-[#2F2F2F] mb-8'
          )}>
            2025 National Hackathon Winner
          </h2>
          <Image
            src="/partners/NatHack Cycle 3 Winner.png"
            alt="NatHack Cycle 3 Winner"
            width={480}
            height={240}
            className="object-contain w-full max-w-[220px] lg:max-w-[320px] h-auto"
          />
        </div>

        {/* INA Membership */}
        <div>
          <h2 className={cn(
            poppins.className,
            'text-[24px] lg:text-[32px] font-[600] text-[#2F2F2F] mb-8'
          )}>
            A Proud member of INA
          </h2>
          <Image
            src="/partners/INA.png"
            alt="International Nanny Association"
            width={400}
            height={400}
            className="object-contain w-full max-w-[180px] lg:max-w-[260px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
