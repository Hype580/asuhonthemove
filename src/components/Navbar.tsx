'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { navigationItems } from '@/data/navigation';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
});

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  // Check if we're on desktop size
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1060);
    };
    
    // Check initially
    checkIfDesktop();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIfDesktop);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'transition-colors',
            poppins.className,
            'text-base font-normal',
            'flex items-center justify-center',
            'h-[48px]',
            isMobile ? 'w-[767px]' : 'w-auto',
            isMobile ? 'text-center' : 'text-left',
            pathname === item.href
              ? 'text-[#E7ADAE]'
              : 'text-[#2F2F2F] hover:text-[#E7ADAE]'
          )}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
      <Link
        href="/contact"
        className={cn(
          'inline-flex items-center justify-center',
          'w-full min-[900px]:w-[138px]',
          'h-[48px]',
          'py-[12px] px-[24px]',
          'gap-[8px]',
          'text-[#44AEC5] bg-white',
          'border-[3px] border-[#44AEC5]',
          'rounded-[100px]',
          'whitespace-nowrap',
          poppins.className,
          'text-base font-medium',
          'transition-colors hover:bg-[#44AEC5] hover:text-white'
        )}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        Contact Us
      </Link>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
      <nav className="w-full mx-auto bg-white shadow-md min-[1060px]:shadow-none" role="navigation" aria-label="Main navigation">
        <div className="h-[80px] min-[1060px]:h-[112px] flex justify-between items-center px-4 sm:px-6 min-[1060px]:px-[90px] relative w-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="ASUH Home">
            <Image
              src="/logo.png"
              alt="ASUH Logo"
              width={165}
              height={72}
              priority
              className="w-auto h-[40px] min-[1060px]:h-[72px]"
            />
          </Link>

          {/* Desktop Navigation - with state management */}
          {isDesktop && (
            <div className="flex items-center gap-[30px] min-[1200px]:gap-[50px]">
              <NavItems />
            </div>
          )}

          {/* Mobile Menu Button */}
          {!isDesktop && (
            <button
              type="button"
              className="flex bg-[#44AEC5] text-white rounded-full w-10 h-10 items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Toggle navigation menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {!isDesktop && (
          <div 
            id="mobile-menu"
            className={cn(
              'absolute left-0 right-0 bg-white',
              'px-4 sm:px-6 py-4',
              'border-t border-gray-200',
              'transition-all duration-300 ease-in-out',
              'transform',
              isMobileMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-2 pointer-events-none'
            )}
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="flex flex-col space-y-6 items-center">
              <NavItems isMobile />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;