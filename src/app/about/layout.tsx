import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Mission to Transform Healthcare in Africa',
  description: 'Learn about MedSoftware, the team behind PharmaPOS and HospitalOS. We are dedicated to providing affordable, powerful healthcare management solutions for pharmacies and hospitals across Africa.',
  keywords: [
    'about MedSoftware',
    'healthcare software company',
    'pharmacy software developers',
    'hospital software company',
    'African healthcare technology',
    'healthcare innovation Africa',
    'medical software company Ghana',
    'healthcare IT solutions',
  ],
  openGraph: {
    title: 'About MedSoftware - Transforming Healthcare Technology',
    description: 'Meet the team behind PharmaPOS and HospitalOS. Dedicated to providing affordable healthcare management solutions across Africa.',
    url: 'https://medsoftwares.com/about',
    siteName: 'MedSoftware',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About MedSoftware - Healthcare Technology Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MedSoftware - Transforming Healthcare Technology',
    description: 'Meet the team behind PharmaPOS and HospitalOS.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://medsoftwares.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
