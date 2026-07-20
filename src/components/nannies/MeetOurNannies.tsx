const APPLY_URL = 'https://forms.gle/Pc6Fdsx1nZdp8qYu5';

export default function MeetOurNannies() {
  return (
    <div className="w-full md:w-[996px] min-h-[174px] mx-auto mt-[100px] md:mt-[181px] flex flex-col gap-5 md:gap-[30px] px-4 md:px-0">
      {/* Title */}
      <h1 className="font-poppins font-semibold text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[0%] text-center text-[#44AEC5]">
        Meet Our Nannies
      </h1>
      
      {/* Description */}
      <div className="max-w-full md:max-w-[800px] mx-auto">
        <p className="font-poppins font-normal text-[16px] md:text-[20px] leading-[150%] md:leading-[160%] tracking-[0%] text-center text-[#2F2F2F] mb-6">
          At ASUH, we understand that leaving your child in someone else&apos;s care is a big decision. That&apos;s why we carefully select compassionate, skilled, and trustworthy nannies who treat your child like family.
        </p>

        <p className="font-poppins font-normal text-[16px] md:text-[20px] leading-[150%] md:leading-[160%] tracking-[0%] text-center text-[#2F2F2F]">
          We may be small in number for now, but our commitment to quality is big. Each nanny brings a unique blend of warmth, experience, and dedication to every home they enter.
        </p>

        {/* Apply CTA */}
        <div className="flex justify-center mt-6 md:mt-8">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apply as a Nanny"
            className="flex items-center justify-center h-[48px] sm:h-[56px] px-8 sm:px-10 bg-[#E7ADAE] border-[3px] border-[#E7ADAE] rounded-[100px] font-poppins font-bold text-[#2F2F2F] text-sm sm:text-base whitespace-nowrap transition-colors hover:bg-opacity-90"
          >
            Apply as a Nanny
          </a>
        </div>
      </div>
    </div>
  );
} 