import Image from 'next/image';

interface NannyCardProps {
  name: string;
  image: string;
  background: {
    label: string;
    items: string[];
  };
  education: {
    label: string;
    value: string;
  };
  experience: {
    label: string;
    value: string;
  };
  color: string;
  circleColor: string;
  zoom?: boolean;
  zoomLevel?: number;
  objectPosition?: string;
}

export default function NannyCard({ name, image, background, education, experience, color, circleColor, zoom, zoomLevel = 1.4, objectPosition = '50% 50%' }: NannyCardProps) {
  return (
    <div style={{backgroundColor: color}} className="w-[90%] md:w-[795px] min-h-[298px] md:h-auto rounded-[10px] p-4 md:p-[30px] shadow-[0px_10px_30px_0px_#0000000D]">
      <div className="w-full md:w-[735px] min-h-[238px] md:h-auto rounded-[10px] bg-white shadow-[0px_10px_30px_0px_#0000000D] p-4 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Image Circle */}
        <div className="relative w-[160px] h-[160px] md:w-[198px] md:h-[198px] flex-shrink-0 overflow-hidden rounded-[1000px]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 160px, 198px"
            className="rounded-[1000px] object-cover"
            style={{ 
              objectPosition,
              transform: zoom ? `scale(${zoomLevel})` : 'scale(1)',
              transformOrigin: objectPosition
            }}
          />
          <div 
            style={{borderColor: circleColor}} 
            className="absolute inset-0 rounded-[1000px] border-[5px] z-10 pointer-events-none" 
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 md:gap-5 text-center md:text-left w-full md:w-auto overflow-hidden">
          {/* Name */}
          <h3 className="font-outfit font-semibold text-[20px] md:text-[24px] leading-[120%] tracking-[0%] text-[#2D2D2D] break-words">
            {name}
          </h3>

          {/* Background */}
          <div className="flex flex-col md:flex-row gap-1 md:gap-2">
            <span className="font-outfit font-semibold text-[14px] md:text-[16px] leading-[160%] tracking-[0%] text-[#2D2D2D] whitespace-nowrap">
              {background.label}:
            </span>
            <span className="font-outfit font-normal text-[14px] md:text-[16px] leading-[160%] tracking-[0%] text-[#2D2D2D] break-words">
              {background.items.join(', ')}
            </span>
          </div>

          {/* Education */}
          <div className="flex flex-col md:flex-row gap-1 md:gap-2">
            <span className="font-outfit font-semibold text-[14px] md:text-[16px] leading-[160%] tracking-[0%] text-[#2D2D2D] whitespace-nowrap">
              {education.label}:
            </span>
            <span className="font-outfit font-normal text-[14px] md:text-[16px] leading-[160%] tracking-[0%] text-[#2D2D2D] break-words">
              {education.value}
            </span>
          </div>

          {/* Experience */}
          <div className="flex flex-col md:flex-row gap-1 md:gap-2">
            <span className="font-outfit font-semibold text-[14px] md:text-[16px] leading-[160%] tracking-[0%] text-[#2D2D2D] whitespace-nowrap">
              {experience.label}:
            </span>
            <span className="font-outfit font-normal text-[14px] md:text-[16px] leading-[160%] tracking-[0%] text-[#2D2D2D] break-words">
              {experience.value}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 