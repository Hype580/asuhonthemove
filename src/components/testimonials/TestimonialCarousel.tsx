'use client';

import { useState, useEffect, useRef, TouchEvent } from 'react';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from '@/types/testimonial';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Happy Client From Gadong',
    title: 'Surprisingly Experienced and a Huge Help for Our Family',
    content: 'Alhamdulillah, everything went well. My wife was actually quite happy as she could get some rest while someone took care of our baby. We were quite surprised that the nanny was young but very experienced with babies. We are planning to rehire her this Sunday.'
  },
  {
    id: 2,
    name: 'Happy mom from Rimba', 
    title: 'Calm and Adaptable Childcare',
    content: 'Alhamdulillah, thanks to your nanny, I was able to move around without worrying too much about my baby. I did not have to give a lot of instructions, and the nanny remained calm at all times while handling my baby. We were honestly quite impressed with how well she adapted. I would love to book the same nanny again for another wedding event on the 4th!',
    image: '/images/testimonial-2.webp'
  },
  // {
  //   id: 3,
  //   name: 'Maria C.',
  //   title: 'Flexible and Reliable',
  //   content: 'As a working mother, I needed flexible childcare that I could rely on. ASUH delivered exactly that, with caring and experienced nannies available when we need them.',
  //   image: '/images/testimonial-3.webp'
  // }
];

export default function TestimonialCarousel() {
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
    <section className="w-full bg-[#F5FBFD] py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="font-poppins font-semibold text-[28px] md:text-[36px] leading-[36px] md:leading-[56px] tracking-[0%] text-center text-[#FF9999] mb-8 md:mb-12">
          Parents&apos; Testimonials
        </h2>

        {/* Carousel */}
        <div className="relative w-full md:max-w-[90vw] lg:max-w-[1200px] mx-auto">
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
                    <TestimonialCard {...testimonial} />
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