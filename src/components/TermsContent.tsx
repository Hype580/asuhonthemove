import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { termsContent, TermsBlock } from '@/data/termsContent';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const bodyText = cn(
  poppins.className,
  'text-[15px] lg:text-[16px]',
  'font-[400]',
  'leading-[26px]',
  'text-[#2F2F2F]'
);

function renderBlock(block: TermsBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className={cn(bodyText, 'mb-4')}>
          {block.text}
        </p>
      );
    case 'subheading':
      return (
        <h3
          key={index}
          className={cn(poppins.className, 'text-[17px] lg:text-[18px] font-[600] text-[#3E9EB3] mt-6 mb-3')}
        >
          {block.text}
        </h3>
      );
    case 'list':
      return block.ordered ? (
        <ol
          key={index}
          start={block.start}
          className={cn(bodyText, 'list-decimal pl-6 mb-4 space-y-2 marker:text-[#44AEC5]')}
        >
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">{item}</li>
          ))}
        </ol>
      ) : (
        <ul key={index} className={cn(bodyText, 'list-disc pl-6 mb-4 space-y-2 marker:text-[#44AEC5]')}>
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

const TermsContent = () => {
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
            {termsContent.title}
          </h1>
        </div>

        {/* Intro */}
        <div className="mb-10">
          {termsContent.intro.map((block, i) => renderBlock(block, i))}
        </div>

        {/* Sections */}
        {termsContent.sections.map((section) => (
          <div key={section.id} id={section.id} className="mb-10 scroll-mt-24">
            <h2
              className={cn(
                poppins.className,
                'text-[20px] lg:text-[24px] font-[600] leading-[130%] text-[#44AEC5] mb-4'
              )}
            >
              {section.heading}
            </h2>
            {section.blocks.map((block, i) => renderBlock(block, i))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsContent;
