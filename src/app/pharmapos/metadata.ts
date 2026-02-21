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

// FAQ data for PharmaPOS page
export const pharmaPOSFaqs = [
  {
    question: 'What is PharmaPOS?',
    answer: 'PharmaPOS is a comprehensive pharmacy management software that combines point of sale (POS), inventory management, prescription tracking, drug interaction checking, insurance claims processing (NHIS/NHIF), and mobile money payments in one integrated desktop application. It is designed for pharmacies in Africa, the Middle East, Asia, and worldwide.',
  },
  {
    question: 'How much does PharmaPOS cost?',
    answer: 'PharmaPOS starts at $299 for a single workstation license (Basic plan). The Standard plan is $499 for up to 3 workstations, and the Premium plan is $899 for up to 10 workstations. All plans are one-time payments with no monthly subscription fees. Free updates and support are included.',
  },
  {
    question: 'Does PharmaPOS work offline without internet?',
    answer: 'Yes, PharmaPOS is a native desktop application that works 100% offline. All data is stored locally on your computer, so your pharmacy operations continue without interruption even when there is no internet connection. When connectivity is restored, data can sync across branches automatically.',
  },
  {
    question: 'Can PharmaPOS process NHIS and insurance claims?',
    answer: 'Yes, PharmaPOS has built-in NHIS (National Health Insurance Scheme) integration for Ghana, NHIF support for Kenya, and flexible insurance claims processing for private insurance and corporate plans. It handles claim submission, reimbursement tracking, and co-pay calculations.',
  },
  {
    question: 'Does PharmaPOS support mobile money payments?',
    answer: 'Yes, PharmaPOS integrates with all major mobile money providers across Africa including MTN Mobile Money, Vodafone Cash, Airtel Money, Orange Money, M-Pesa, Wave, Telecel Cash, and Moov Money. Transactions are automatically recorded with reference numbers.',
  },
  {
    question: 'Can I manage multiple pharmacy branches with PharmaPOS?',
    answer: 'Yes, the Standard and Premium plans support multi-branch pharmacy management with real-time data synchronization, inter-branch stock transfers, consolidated reporting across all locations, and centralized inventory management.',
  },
  {
    question: 'Does PharmaPOS check for drug interactions?',
    answer: 'Yes, PharmaPOS includes a built-in drug interaction checker that identifies drug-drug interactions with severity levels (mild, moderate, severe, and contraindicated). It provides recommendations and reference sources to help pharmacists make informed dispensing decisions.',
  },
  {
    question: 'How does PharmaPOS compare to cloud-based pharmacy software?',
    answer: 'Unlike cloud-based pharmacy software that requires constant internet and charges monthly subscription fees, PharmaPOS is a desktop application with a one-time payment. It offers faster performance, works offline, keeps data private on your local system, and has no recurring costs. This makes it ideal for pharmacies in areas with unreliable internet.',
  },
];

// FAQ JSON-LD schema
export const pharmaPOSFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pharmaPOSFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
