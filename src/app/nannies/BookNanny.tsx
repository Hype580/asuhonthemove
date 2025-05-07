import Link from 'next/link';

export default function BookNanny() {
  return (
    <section className="w-full bg-[#F8E6E6] py-8 md:py-16">
      <div className="max-w-[996px] mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-[#44AEC5] text-[28px] md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-8">
        Book a Nanny Today
        </h2>
        
        <p className="text-gray-700 text-[14px] md:text-base lg:text-lg max-w-[800px] mb-8 md:mb-16 mx-auto">
        We&apos;re here to support your family&apos;s needs. Whether you need part-time help or full-time care, our trusted ASUH nannies are ready to assist.
        </p>
        <Link 
          href="https://linktr.ee/AsuhOnTheMove.com"
          className="bg-[#E7ADAE] hover:bg-[#f3a3a2] transition-colors duration-200 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-[14px] md:text-base"
          aria-label="Book a Nanny Now"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Nanny Now
        </Link>
      </div>
    </section>
  );
} 