import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const ContactCTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">      
      {/* Right Teal Triangle */}
      <div 
        className="absolute top-0 right-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[150px] md:h-[150px]"
        style={{
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          background: '#44AEC5'
        }}
      />
      
      {/* Left Teal Square with Rounded Edge */}
      <div className="absolute left-0 bottom-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] bg-[#44AEC5] rounded-tr-[20px] sm:rounded-tr-[30px] md:rounded-tr-[40px]" />
            
      {/* Main Content */}
      <div className="relative max-w-[1100px] mx-auto min-h-[350px] sm:min-h-[450px] md:min-h-[600px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto py-8 sm:py-12 md:py-24 space-y-6 sm:space-y-8 md:space-y-12">
          <h2 className={cn(
            poppins.className,
            'text-[28px] sm:text-[36px] md:text-[48px]',
            'font-[600]',
            'text-[#44AEC5]',
            'leading-[1.2] md:leading-[56px]',
            'tracking-[0%]'
          )}>
            Let&apos;s Make Childcare Easy for You!
          </h2>
          
          <p className={cn(
            poppins.className,
            'text-[16px] sm:text-[20px] md:text-[24px]',
            'font-[500]',
            'text-[#44AEC5]',
            'leading-[1.3] md:leading-[32px]',
            'tracking-[0%]'
          )}>
            Have questions? Need a trusted nanny? We&apos;re here to help!
          </p>
          
          <p className={cn(
            poppins.className,
            'text-[14px] sm:text-[16px]',
            'font-[400]',
            'text-[#2F2F2F]',
            'leading-[1.5] md:leading-[24px]',
            'tracking-[0%]',
            'max-w-[700px]'
          )}>
            We&apos;re here to help you find the best childcare solutions for your family. Whether you&apos;re looking for professional nannies or want to learn more about our services, feel free to reach out!
          </p>
          
          <Link 
            href="/contact" 
            className={cn(
              'bg-[#E6A7A7]',
              'text-white',
              'rounded-[100px]',
              'py-[12px] sm:py-[16px] px-[24px] sm:px-[32px]',
              'w-[140px] sm:w-[166px] h-[46px] sm:h-[56px]',
              'flex items-center justify-center',
              'text-[14px] sm:text-[16px] font-[500]',
              'transition-all duration-300',
              'hover:bg-[#D8A0A0]',
              'focus:outline-none focus:ring-2 focus:ring-[#D8A0A0]',
              'mt-4 sm:mt-6'
            )}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection; 