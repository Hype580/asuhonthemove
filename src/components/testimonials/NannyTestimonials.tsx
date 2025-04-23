'use client';

import { useState, useEffect, useRef, TouchEvent } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: "Nurul S.",
    title: "A Rewarding Career in Childcare",
    content: "Being part of ASUH has given me a rewarding career in childcare. Their training helped me grow professionally, and I love working with the families I meet!",
    image: "/nanny_with_baby.jpeg"
  },
  {
    id: 2,
    name: "Sarah M.",
    title: "Professional Growth and Support",
    content: "The ongoing training and support from ASUH has helped me become a better childcare provider. I feel confident in my ability to nurture and educate children.",
    image: "/happy_nanny_with_kids.jpeg"
  },
  {
    id: 3,
    name: "Lisa K.",
    title: "Making a Difference",
    content: "Working with ASUH allows me to make a real difference in children&apos;s lives. The families are wonderful, and I feel valued as a professional.",
    image: "/nanny_feeding_kid.jpeg"
  }
];

export default function NannyTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout>();

  // Handle touch start
  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
    
    // Pause auto-play while dragging
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  // Handle touch move
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50; // minimum distance for swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        // Swipe right - previous slide
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }

    setIsDragging(false);
    
    // Resume auto-play
    startAutoPlay();
  };

  // Start auto-play
  const startAutoPlay = () => {
    autoPlayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  // Initialize auto-play
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, []);

  // Scroll to the current card
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section className="py-8 md:py-16 bg-[#FFF5F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[28px] md:text-[40px] font-poppins font-semibold text-[#44AEC5] mb-8 md:mb-12">
          Nannies&apos; Testimonials
        </h2>

        {/* Carousel */}
        <div className="relative w-full max-w-[1031px] md:max-w-[90vw] lg:max-w-[1200px] mx-auto">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="w-full mx-auto min-h-[356px] h-auto rounded-[20px] p-4 md:p-[66px] flex flex-col justify-center overflow-hidden">
                    <TestimonialCard
                      {...testimonial}
                      quoteVariant="blue"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-[#44AEC5] w-6 md:w-8'
                    : 'bg-[#44AEC5] opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 