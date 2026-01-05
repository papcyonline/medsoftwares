import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PharmaPOS - Complete Pharmacy Management Software',
  description: 'PharmaPOS is a comprehensive pharmacy management system featuring Point of Sale, inventory tracking, prescription management, drug interactions checker, controlled substances tracking, NHIS/insurance claims, mobile money payments, and multi-branch support. Perfect for pharmacies in Africa.',
  keywords: [
    'pharmacy management software',
    'pharmacy POS system',
    'pharmacy point of sale',
    'pharmacy inventory management',
    'prescription management software',
    'drug interaction checker',
    'controlled substances tracking',
    'NHIS pharmacy software',
    'pharmacy insurance claims',
    'mobile money pharmacy',
    'MTN mobile money',
    'pharmacy software Africa',
    'pharmacy software Ghana',
    'pharmacy software Nigeria',
    'pharmacy software Kenya',
    'retail pharmacy software',
    'pharmacy billing system',
    'pharmacy stock management',
    'pharmacy expiry tracking',
    'pharmacy batch management',
    'multi-branch pharmacy software',
    'offline pharmacy software',
    'desktop pharmacy application',
  ],
  openGraph: {
    title: 'PharmaPOS - Complete Pharmacy Management Software',
    description: 'Streamline your pharmacy operations with PharmaPOS. Features POS, inventory, prescriptions, drug interactions, controlled substances, insurance claims, and mobile money payments.',
    url: 'https://medsoftwares.com/pharmapos',
    siteName: 'MedSoftwares',
    images: [
      {
        url: '/og/pharmapos.png',
        width: 1200,
        height: 630,
        alt: 'PharmaPOS - Pharmacy Management Software Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PharmaPOS - Complete Pharmacy Management Software',
    description: 'Streamline your pharmacy operations with PharmaPOS. POS, inventory, prescriptions, and more.',
    images: ['/og/pharmapos.png'],
  },
  alternates: {
    canonical: 'https://medsoftwares.com/pharmapos',
  },
};

export default function PharmaPOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
