export const heroContent = {
  title: 'Trusted Nannies, Happy Families',
  description: 'Finding a caring and professional nanny has never been easier. ASUH connects you with trained nannies who provide safe and loving childcare – anytime, anywhere.',
  image: {
    src: '/heroimage.png',
    alt: 'Nanny caring for child',
  },
  cta: {
    text: 'Contact Us',
    href: '/contact',
    ariaLabel: 'Contact us to learn more about our nanny services',
  },
  layout: {
    contentWidth: 672,
    contentPosition: {
      top: 515,
      left: 134,
      gap: 45,
    },
  },
  style: {
    title: {
      fontSize: 40,
      lineHeight: '120%',
      fontWeight: 700,
    },
    description: {
      fontSize: 20,
      lineHeight: '120%',
      fontWeight: 300,
    },
    button: {
      width: 154,
      height: 56,
      borderRadius: 100,
      backgroundColor: '#E7ADAE',
      textColor: '#2F2F2F',
    },
  },
} as const; 