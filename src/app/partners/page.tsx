import Navbar from '@/components/Navbar';
import Partners from '@/components/Partners';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Partners | ASUH On The Move',
  description: 'Meet the collaborative partners, award recognitions, and associations that support ASUH On The Move in delivering professional childcare services in Brunei.',
  alternates: {
    canonical: '/partners',
  },
  openGraph: {
    title: 'Our Partners | ASUH On The Move',
    description: 'Meet the collaborative partners and associations supporting ASUH On The Move.',
    url: 'https://asuhonthemove.com/partners',
  },
};

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <Partners />
      </main>
    </>
  );
}
