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
  name: 'ASUH On The Move | Professional Nanny Services Brunei',
  description: 'Brunei\'s premier nanny agency offering professional nanny services in Brunei. Find trusted and experienced nannies for your family. Nanny Brunei service with trained childcare professionals.',
  mainNav: navigationItems,
  links: {
    facebook: 'https://facebook.com/asuhonthemove',
    instagram: 'https://instagram.com/asuhonthemove',
    twitter: 'https://twitter.com',
  },
} as const; 