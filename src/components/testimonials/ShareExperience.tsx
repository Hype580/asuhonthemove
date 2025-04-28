import Link from 'next/link';

export default function ShareExperience() {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="max-w-[996px] mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-[#44AEC5] text-[28px] md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-8">
          Share Your Experience
        </h2>
        
        <p className="text-gray-700 text-[14px] md:text-base lg:text-lg max-w-[800px] mb-8 md:mb-16 mx-auto">
          We love hearing from our ASUH families! If you&apos;ve had a great experience with 
          our nannies, let us know.
        </p>
        <Link 
          href="https://linktr.ee/AsuhOnTheMove.com"
          className="bg-[#F5B7B6] hover:bg-[#f3a3a2] transition-colors duration-200 text-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-[14px] md:text-base"
          aria-label="Submit your testimonial"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit Your Testimonial
        </Link>
      </div>
    </section>
  );
} 