export default function PricingHeader() {
    return (
      <div className="w-full md:w-[996px] min-h-[174px] mx-auto mt-[100px] md:mt-[181px] flex flex-col gap-5 md:gap-[30px] px-4 md:px-0 pb-16">
        {/* Title with exact typography */}
        <h1 className="font-poppins font-semibold text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[0%] text-center text-[#E7ADAE]">
            Flexible & Affordable Childcare Services
        </h1>
        
        {/* Description with exact typography */}
        <p className="font-poppins font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] tracking-[0%] text-center text-gray-700 max-w-full md:max-w-[800px] mx-auto">
            We believe in providing <strong>high-quality childcare</strong> at <strong>affordable rates</strong>, ensuring every family gets the support they need.  
        </p>
      </div>
    );
  } 