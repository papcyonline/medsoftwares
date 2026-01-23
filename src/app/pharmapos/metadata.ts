import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PharmaPOS - Complete Pharmacy Management Software | Point of Sale, Inventory & Prescriptions',
  description: 'PharmaPOS is a comprehensive pharmacy management system featuring Point of Sale, inventory tracking, prescription management, drug interactions checker, controlled substances tracking, NHIS/insurance claims, mobile money payments, and multi-branch support. Perfect for pharmacies in Africa.',
  keywords: [
    // Core product keywords
    'pharmacy management software',
    'pharmacy POS system',
    'pharmacy point of sale',
    'pharmacy inventory management',
    'prescription management software',
    'drug interaction checker',
    'controlled substances tracking',
    // Insurance & Claims
    'NHIS pharmacy software',
    'NHIF pharmacy software',
    'pharmacy insurance claims',
    // Payment integration
    'mobile money pharmacy',
    'MTN mobile money pharmacy',
    'M-Pesa pharmacy integration',
    'Vodafone Cash pharmacy',
    // Geographic targeting - Africa
    'pharmacy software Africa',
    'pharmacy software Ghana',
    'pharmacy software Nigeria',
    'pharmacy software Kenya',
    'pharmacy software South Africa',
    'pharmacy software Tanzania',
    'pharmacy software Uganda',
    'pharmacy software Rwanda',
    'pharmacy software Senegal',
    'pharmacy software Ethiopia',
    // Geographic - Middle East
    'pharmacy software UAE',
    'pharmacy software Dubai',
    'pharmacy software Saudi Arabia',
    // Geographic - Asia
    'pharmacy software India',
    'pharmacy software Philippines',
    // Feature keywords
    'retail pharmacy software',
    'pharmacy billing system',
    'pharmacy stock management',
    'pharmacy expiry tracking',
    'pharmacy batch management',
    'multi-branch pharmacy software',
    'chain pharmacy management',
    'offline pharmacy software',
    'desktop pharmacy application',
    // Long-tail keywords
    'best pharmacy software for small business',
    'pharmacy software with offline mode',
    'pharmacy software without subscription',
    'one-time payment pharmacy software',
    'affordable pharmacy management system',
    'pharmacy software for developing countries',
  ],
  openGraph: {
    title: 'PharmaPOS - Complete Pharmacy Management Software',
    description: 'Streamline your pharmacy operations with PharmaPOS. Features POS, inventory, prescriptions, drug interactions, controlled substances, insurance claims, and mobile money payments.',
    url: 'https://medsoftwares.com/pharmapos',
    siteName: 'MedSoftwares',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'PharmaPOS - Pharmacy Management Software',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PharmaPOS - Complete Pharmacy Management Software',
    description: 'Streamline your pharmacy operations with PharmaPOS. POS, inventory, prescriptions, and more.',
    images: ['/og.png'],
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
  alternates: {
    canonical: 'https://medsoftwares.com/pharmapos',
  },
};

// JSON-LD Structured Data for PharmaPOS
export const pharmaPOSJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PharmaPOS',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Pharmacy Management Software',
  operatingSystem: 'Windows, macOS, Linux',
  description: 'Complete pharmacy management system with Point of Sale, inventory tracking, prescription management, drug interactions checker, controlled substances tracking, and insurance claims processing.',
  offers: {
    '@type': 'Offer',
    price: '299',
    priceCurrency: 'USD',
    description: 'Starting from $299 - Contact for pricing',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'Point of Sale (POS)',
    'Inventory Management',
    'Prescription Management',
    'Drug Interaction Checker',
    'Controlled Substances Tracking',
    'NHIS/Insurance Claims',
    'Mobile Money Payments',
    'Multi-Branch Support',
    'Barcode Scanning',
    'Batch & Expiry Tracking',
    'Credit Sales Management',
    'Customer Loyalty',
    'Staff Management',
    'Audit Trail',
    'Reports & Analytics',
    'Multi-Language Support',
    'Offline Capability',
  ],
  screenshot: [
    {
      '@type': 'ImageObject',
      url: 'https://medsoftwares.com/screenshots/pharmapos-dashboard.png',
      caption: 'PharmaPOS Dashboard',
    },
    {
      '@type': 'ImageObject',
      url: 'https://medsoftwares.com/screenshots/pharmapos-pos.png',
      caption: 'PharmaPOS Point of Sale',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Organization',
    name: 'MedSoftwares',
    url: 'https://medsoftwares.com',
  },
};
