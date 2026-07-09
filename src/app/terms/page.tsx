import Navbar from '@/components/Navbar';
import TermsContent from '@/components/TermsContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use and Service Agreement | ASUH On The Move',
  description:
    'Read the ASUH On The Move Terms of Use and Service Agreement governing the use of the ASUH app, website, booking platform, and childcare services in Brunei.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Use and Service Agreement | ASUH On The Move',
    description:
      'The Terms of Use and Service Agreement for ASUH On The Move childcare services in Brunei.',
    url: 'https://asuhonthemove.com/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <TermsContent />
      </main>
    </>
  );
}
