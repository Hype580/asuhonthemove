import Navbar from '@/components/Navbar';
import PrivacyContent from '@/components/PrivacyContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ASUH On The Move',
  description:
    'The ASUH On The Move Privacy Policy explaining how we collect, use, share, store, and protect personal data across the ASUH app, website, and booking platform in Brunei.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | ASUH On The Move',
    description:
      'How ASUH On The Move collects, uses, and protects your personal data.',
    url: 'https://asuhonthemove.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <PrivacyContent />
      </main>
    </>
  );
}
