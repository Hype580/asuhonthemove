import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { termsContent } from '@/data/termsContent';
import { renderBlock, termsBodyText } from './TermsContent';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

// The privacy policy reuses the "Privacy, Confidentiality, and Data Protection"
// section from the Terms of Use so both stay in sync (single source: termsContent.json).
const privacySection = termsContent.sections.find(
  (s) => s.id === 'privacy-confidentiality-and-data-protection'
);

const PrivacyContent = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="mb-10 pb-8 border-b border-[#E7ADAE]/40">
          <h1
            className={cn(
              poppins.className,
              'text-[28px] lg:text-[40px] font-[600] leading-[120%] text-[#3E9EB3]'
            )}
          >
            Privacy Policy
          </h1>
        </div>

        {/* Intro */}
        <div className="mb-10">
          <p className={cn(termsBodyText, 'mb-4')}>
            This Privacy Policy explains how ASUH On The Move (&ldquo;ASUH&rdquo;) collects, uses,
            shares, stores, and protects the personal information of families, children, nannies,
            and service users of the ASUH app, website, and booking platform. It forms part of, and
            should be read together with, our{' '}
            <a href="/terms" className="text-[#3E9EB3] underline hover:opacity-80">
              Terms of Use and Service Agreement
            </a>
            .
          </p>
        </div>

        {/* Privacy section content */}
        {privacySection && (
          <div className="mb-10">
            {privacySection.blocks.map((block, i) => renderBlock(block, i))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PrivacyContent;
