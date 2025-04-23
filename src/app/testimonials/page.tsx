import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import TestimonialHeader from '@/components/testimonials/TestimonialHeader';
import TestimonialCarousel from '@/components/testimonials/TestimonialCarousel';
import ShareExperience from '@/components/testimonials/ShareExperience';

export const metadata: Metadata = {
  title: 'What Parents & Nannies Say About ASUH | ASUH On The Move',
  description: 'At ASUH, we take pride in providing safe, professional, and flexible childcare solutions for families in Brunei. Hear from the parents who trust us and the nannies who love being part of ASUH!',
  openGraph: {
    title: 'What Parents & Nannies Say About ASUH | ASUH On The Move',
    description: 'At ASUH, we take pride in providing safe, professional, and flexible childcare solutions for families in Brunei. Hear from the parents who trust us and the nannies who love being part of ASUH!',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="w-full mx-auto pb-16">
        <TestimonialHeader />
        <TestimonialCarousel />
        <div className="h-16" />
        {/* <NannyTestimonials /> */}
        <ShareExperience />
      </main>
    </>
  );
} 