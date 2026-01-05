import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Demo | Sales & Support',
  description: 'Contact MedSoftwares for a free demo of PharmaPOS or HospitalOS. Reach our sales team, technical support, or schedule a personalized walkthrough. We respond within 24 hours.',
  keywords: [
    'contact MedSoftwares',
    'pharmacy software demo',
    'hospital software demo',
    'PharmaPOS demo',
    'HospitalOS demo',
    'healthcare software support',
    'pharmacy software sales',
    'hospital software pricing',
    'request demo pharmacy software',
    'book demo hospital software',
  ],
  openGraph: {
    title: 'Contact MedSoftwares - Get a Free Demo Today',
    description: 'Schedule a free demo of PharmaPOS or HospitalOS. Our team responds within 24 hours.',
    url: 'https://medsoftwares.com/contact',
    siteName: 'MedSoftwares',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact MedSoftwares - Request a Demo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MedSoftwares - Get a Free Demo Today',
    description: 'Schedule a free demo of PharmaPOS or HospitalOS.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://medsoftwares.com/contact',
  },
};

// JSON-LD for Contact Page
export const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact MedSoftwares',
  description: 'Contact MedSoftwares for sales inquiries, demos, and support.',
  url: 'https://medsoftwares.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'MedSoftwares',
    email: 'info@medsoftwares.com',
    telephone: '+9715677266520',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21 Chartfield Drive, Kirby-Le-Soken',
      addressLocality: 'Frinton-On-Sea',
      addressRegion: 'England',
      postalCode: 'CO13 0DR',
      addressCountry: 'United Kingdom',
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
