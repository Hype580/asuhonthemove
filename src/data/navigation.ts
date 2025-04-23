export interface NavigationItem {
  name: string;
  href: string;
  isActive?: boolean;
}

export const navigationItems: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    isActive: true,
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Testimonials',
    href: '/testimonials',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Nannies',
    href: '/nannies',
  },
];

export const siteConfig = {
  name: 'ASUH On The Move | Professional Nanny & Childcare Services in Brunei',
  description: 'Brunei\'s trusted childcare provider offering professional nanny services, babysitting, and child care solutions for families. Experienced, trained nannies for your peace of mind.',
  mainNav: navigationItems,
  links: {
    facebook: 'https://facebook.com/asuhonthemove',
    instagram: 'https://instagram.com/asuhonthemove',
    twitter: 'https://twitter.com',
  },
} as const; 