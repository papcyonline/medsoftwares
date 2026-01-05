import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Affordable Plans for Pharmacies & Hospitals',
  description: 'View pricing for PharmaPOS pharmacy management software and HospitalOS hospital management system. One-time purchase, lifetime updates, no monthly fees. Affordable plans for small clinics to large hospitals.',
  keywords: [
    'pharmacy software pricing',
    'hospital software pricing',
    'PharmaPOS price',
    'HospitalOS price',
    'pharmacy POS cost',
    'hospital management system cost',
    'affordable pharmacy software',
    'cheap hospital software',
    'one-time purchase software',
    'no monthly fee pharmacy software',
    'healthcare software pricing Africa',
    'pharmacy software quote',
  ],
  openGraph: {
    title: 'Pricing - PharmaPOS & HospitalOS | Affordable Healthcare Software',
    description: 'One-time purchase, lifetime updates. View pricing for PharmaPOS and HospitalOS. No monthly fees.',
    url: 'https://medsoftwares.com/pricing',
    siteName: 'MedSoftwares',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MedSoftwares Pricing - Affordable Healthcare Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - PharmaPOS & HospitalOS',
    description: 'One-time purchase, lifetime updates. No monthly fees.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://medsoftwares.com/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
