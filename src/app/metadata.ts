import { Metadata } from 'next';
import { siteConfig } from '@/data/navigation';

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://asuhonthemove.com'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Brunei nanny',
    'nanny Brunei',
    'Brunei childcare',
    'nanny agency Brunei',
    'professional nanny Brunei',
    'childcare services Brunei',
    'babysitting Brunei',
    'ASUH On The Move',
    'experienced nannies',
    'trained childcare providers',
    'family childcare',
    'in-home childcare',
    'child development',
    'childcare solutions',
    'reliable nannies',
    'trusted childcare',
    'professional babysitting',
    'child care provider'
  ],
  authors: [
    {
      name: 'ASUH On The Move',
      url: 'https://asuhonthemove.com',
    },
  ],
  creator: 'ASUH On The Move',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asuhonthemove.com',
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/logo.png'],
    creator: '@asuhonthemove',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo.png', sizes: '192x192' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  other: {
    'preload': [
      '/fonts/poppins-regular.woff2',
      '/fonts/poppins-semibold.woff2',
    ],
    'dns-prefetch': [
      'https://asuhonthemove.com',
      'https://vercel-analytics.com',
    ],
    'preconnect': [
      'https://asuhonthemove.com',
      'https://vercel-analytics.com',
    ],
  },
}; 