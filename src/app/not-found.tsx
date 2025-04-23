import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '600'],
});

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <h1 className={cn(
          poppins.className,
          'text-4xl md:text-6xl font-semibold text-[#E7ADAE] mb-4'
        )}>
          Page Not Found
        </h1>
        
        <p className={cn(
          poppins.className,
          'text-lg md:text-xl text-gray-600 mb-8'
        )}>
          We couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        
        <div className="relative w-full max-w-md h-64 mx-auto mb-8">
          <Image
            src="/children-playing.jpeg"
            alt="Children playing"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover rounded-lg"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className={cn(
              poppins.className,
              'px-6 py-3 bg-[#E7ADAE] text-white rounded-md hover:bg-opacity-90 transition-colors'
            )}
          >
            Return Home
          </Link>
          
          <Link 
            href="/contact"
            className={cn(
              poppins.className,
              'px-6 py-3 bg-[#44AEC5] text-white rounded-md hover:bg-opacity-90 transition-colors'
            )}
          >
            Contact Us
          </Link>
        </div>
        
        <div className="mt-12">
          <h2 className={cn(
            poppins.className,
            'text-xl font-medium text-gray-800 mb-4'
          )}>
            You might be interested in:
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link 
              href="/services"
              className={cn(
                poppins.className,
                'p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-gray-700'
              )}
            >
              Our Services
            </Link>
            
            <Link 
              href="/about"
              className={cn(
                poppins.className,
                'p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-gray-700'
              )}
            >
              About ASUH
            </Link>
            
            <Link 
              href="/testimonials"
              className={cn(
                poppins.className,
                'p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-gray-700'
              )}
            >
              Testimonials
            </Link>
            
            <Link 
              href="/nannies"
              className={cn(
                poppins.className,
                'p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-gray-700'
              )}
            >
              Meet Our Nannies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 