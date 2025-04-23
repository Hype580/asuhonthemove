import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconBGColor: string;
  shadowColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  bgColor, 
  iconBGColor,
  shadowColor
}) => {
  return (
    <div className={cn(
      'w-full max-w-[542px] sm:w-[542px]',
      'h-[328px]',
      'rounded-[24px]',
      'pt-[40px] pr-[40px] pb-[64px] pl-[40px]',
      'flex flex-col',
      'gap-[8px]',
      bgColor,
      'shadow-[4px_8px_20px_0px_rgba(0,0,0,0.08)]'
    )}>
      <div 
        className={cn(
          'w-[96px] h-[96px]',
          'rounded-full',
          'flex items-center justify-center',
          'relative',
          'overflow-hidden'
        )}
        style={{
          background: iconBGColor,
          boxShadow: shadowColor
        }}
      >
        <Image
          src={icon}
          alt={`${title} icon`}
          width={48}
          height={48}
          className="relative z-10"
        />
      </div>
      <h3 className={cn(
        poppins.className,
        'text-[24px] font-[600]',
        'text-[#2F2F2F]',
        'mt-4'
      )}>
        {title}
      </h3>
      <p className={cn(
        poppins.className,
        'text-[18px] font-[300]',
        'text-[#2F2F2F]',
        'leading-[150%]'
      )}>
        {description}
      </p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '/icons/Vector.svg',
      title: 'Personalized Childcare Plans',
      description: 'Customized to fit your child&apos;s unique needs.',
      bgColor: 'bg-[#F8E6E6]',
      iconBGColor: 'linear-gradient(323.2deg, rgba(255, 128, 128, 0.8) 14.53%, rgba(246, 204, 204, 0.8) 84.99%)',
      shadowColor: '4px 8px 20px 0px rgba(227,80,79,0.32)'
    },
    {
      icon: '/icons/Handshake.svg',
      title: 'Parental Support & Guidance',
      description: 'Helping you make informed decisions about your child&apos;s care.',
      bgColor: 'bg-[#D8EDEE]',
      iconBGColor: 'linear-gradient(323.2deg, rgba(68, 174, 197, 0.8) 14.53%, rgba(164, 221, 232, 0.8) 84.99%)',
      shadowColor: '4px 8px 20px 0px rgba(68,174,197,0.32)'
    },
    {
      icon: '/icons/Time.svg',
      title: 'Flexible Scheduling',
      description: 'Unlock the value of your home for financial flexibility.',
      bgColor: 'bg-[#D8EDEE]',
      iconBGColor: 'linear-gradient(323.2deg, rgba(68, 174, 197, 0.8) 14.53%, rgba(164, 221, 232, 0.8) 84.99%)',
      shadowColor: '4px 8px 20px 0px rgba(68,174,197,0.32)'
    },
    {
      icon: '/icons/Heart.svg',
      title: 'Specialized Care',
      description: 'Designed for children with specific developmental or learning needs.',
      bgColor: 'bg-[#F8E6E6]',
      iconBGColor: 'linear-gradient(323.2deg, rgba(255, 128, 128, 0.8) 14.53%, rgba(246, 204, 204, 0.8) 84.99%)',
      shadowColor: '4px 8px 20px 0px rgba(227,80,79,0.32)'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex flex-col items-center w-full max-w-[860px] h-[180px] gap-[50px] mx-auto">
        <h2 className={cn(
          poppins.className,
          'w-full',
          'text-[32px] md:text-[40px] lg:text-[48px]',
          'font-[600]',
          'leading-[120%]',
          'tracking-[0%]',
          'text-center text-[#44AEC5]'
        )}>
          Our Services
        </h2>
        
        <p className={cn(
          poppins.className,
          'text-[16px] md:text-[18px] lg:text-[20px]',
          'font-[300]',
          'leading-[120%]',
          'tracking-[0%]',
          'text-center text-[#2F2F2F]',
          'w-full mx-auto'
        )}>
          ASUH offers a range of <span className={cn(
            'font-[500]'
          )}>customizable childcare solutions</span> designed to fit the unique needs of every family. Whether you need assistance at home, specialized caregiving, or flexible options, we have the right solution for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center mt-24 max-w-[1200px] mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            bgColor={service.bgColor}
            iconBGColor={service.iconBGColor}
            shadowColor={service.shadowColor}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection; 