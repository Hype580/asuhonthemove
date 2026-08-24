import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const trustedPartners = [
  { name: 'DilTech', src: '/partners/DilTech.png' },
  { name: 'Saving Life Resources Company', src: '/partners/Saving Life Resources Company.png' },
  { name: 'Safe Fast', src: '/partners/Safe Fast.png' },
  { name: 'Jungle GYM', src: '/partners/Jungle GYM.png' },
  { name: 'Beebeeboo', src: '/partners/Beebeeboo.png' },
];

const supportedBy = [
  { name: 'Brunei Innovation Lab', src: '/partners/Brunei Innovation Lab.png' },
  { name: 'DARE - Darussalam Enterprise', src: '/partners/DARE.png' },
  { name: 'Shell LiveWire Brunei', src: '/partners/Shell LiveWire Brunei.png' },
];

const affiliations = [
  { name: 'Proud member of INA', src: '/partners/Proud member of INA.png' },
  { name: 'International Nanny Association', src: '/partners/INA.png' },
];

const sectionHeading = 'text-[24px] lg:text-[32px] font-[600] text-center';

const Partners = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-[90px] py-16 lg:py-24">
      {/* Our Trusted Partners */}
      <div className="mb-16 lg:mb-24">
        <h2 className={cn(poppins.className, sectionHeading, 'text-[#44AEC5] mb-10 lg:mb-14')}>
          Our Trusted Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 lg:gap-x-6 items-center justify-items-center">
          {trustedPartners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.name}
                width={400}
                height={240}
                className="object-contain w-full max-w-[180px] lg:max-w-[300px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Supported By */}
      <div className="mb-16 lg:mb-24">
        <h2 className={cn(poppins.className, sectionHeading, 'text-[#44AEC5] mb-10 lg:mb-14')}>
          Supported By
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 items-center justify-items-center max-w-[820px] mx-auto">
          {supportedBy.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.name}
                width={400}
                height={240}
                className="object-contain w-full max-w-[200px] lg:max-w-[240px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Achievements & Affiliations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Our Achievements */}
        <div className="flex flex-col items-center">
          <h2 className={cn(poppins.className, sectionHeading, 'text-[#E7ADAE] mb-8')}>
            Our Achievements
          </h2>
          <p className={cn(poppins.className, 'text-[16px] lg:text-[18px] font-[600] text-[#2F2F2F] mb-4 text-center')}>
            NatHack Cycle 3 Winner
          </p>
          <Image
            src="/partners/NatHack Cycle 3 Winner.png"
            alt="NatHack Cycle 3 Winner"
            width={480}
            height={240}
            className="object-contain w-full max-w-[220px] lg:max-w-[280px] h-auto"
          />
        </div>

        {/* Recognition & Affiliations */}
        <div className="flex flex-col items-center">
          <h2 className={cn(poppins.className, sectionHeading, 'text-[#E7ADAE] mb-8')}>
            Recognition &amp; Affiliations
          </h2>
          <div className="flex flex-row items-center justify-center gap-4 lg:gap-6">
            {affiliations.map((partner) => (
              <Image
                key={partner.name}
                src={partner.src}
                alt={partner.name}
                width={400}
                height={400}
                className="object-contain w-full max-w-[150px] lg:max-w-[200px] h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
