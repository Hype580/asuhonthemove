import Link from 'next/link';

export default function NeedHelp() {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="max-w-[996px] mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-[#44AEC5] text-[28px] md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-8">
        Need Help Right Away?
        </h2>
        
        <p className="text-gray-700 text-[14px] md:text-base lg:text-lg max-w-[800px] mb-8 md:mb-16 mx-auto">
        Got questions beyond email? If you&apos;d like instant answers or need help now, try our ASUH AI Assistant — available anytime to assist you!
        </p>
        <Link 
          href="https://agent.jotform.com/0195d8ca37cf7d338cdd8361f0037288baf1"
          className="bg-[#F5B7B6] hover:bg-[#f3a3a2] transition-colors duration-200 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-[14px] md:text-base"
          aria-label="Chat with Our AI Assistant"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat with Our AI Assistant
        </Link>
      </div>
    </section>
  );
} 