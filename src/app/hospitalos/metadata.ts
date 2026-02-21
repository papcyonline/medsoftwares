import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HospitalOS - Complete Hospital Management System | EMR, OPD, IPD, Lab & More',
  description: 'HospitalOS is a comprehensive hospital management system with 25+ integrated modules including EMR, OPD, IPD, Emergency Triage, Laboratory, Radiology, Pharmacy, Billing, HR & Payroll, Maternity, and more. Built for African healthcare facilities.',
  keywords: [
    // Core product keywords
    'hospital management system',
    'hospital management software',
    'HMS software',
    'electronic medical records',
    'EMR software',
    'EHR system',
    'electronic health records',
    // Department modules
    'OPD management software',
    'IPD management software',
    'hospital billing software',
    'laboratory information system',
    'LIS software',
    'radiology information system',
    'RIS software',
    'pharmacy management hospital',
    'patient registration system',
    'hospital queue management',
    'triage system software',
    'emergency department software',
    'maternity management system',
    'blood bank management',
    'hospital HR payroll',
    'theatre management software',
    // Geographic targeting - Africa
    'hospital software Africa',
    'hospital software Ghana',
    'hospital software Nigeria',
    'hospital software Kenya',
    'hospital software South Africa',
    'hospital software Tanzania',
    'hospital software Uganda',
    'hospital software Rwanda',
    'hospital software Ethiopia',
    'hospital software Cameroon',
    // Geographic - Middle East
    'hospital software UAE',
    'hospital software Dubai',
    'hospital software Saudi Arabia',
    'hospital software Qatar',
    // Geographic - Asia
    'hospital software India',
    'hospital software Philippines',
    'hospital software Bangladesh',
    // Other keywords
    'clinic management software',
    'healthcare management system',
    'NHIS hospital software',
    'NHIF hospital software',
    'hospital insurance claims',
    'offline hospital software',
    'desktop hospital application',
    // Long-tail keywords
    'best hospital software for small hospitals',
    'affordable hospital management system',
    'hospital software without subscription',
    'one-time payment hospital software',
    'hospital software for developing countries',
    'hospital software with telemedicine',
    'hospital software for clinics',
  ],
  openGraph: {
    title: 'HospitalOS - Complete Hospital Management System',
    description: 'Manage your entire hospital with HospitalOS. 25+ integrated modules for OPD, IPD, Emergency, Lab, Radiology, Pharmacy, Billing, HR, and specialized departments.',
    url: 'https://medsoftwares.com/hospitalos',
    siteName: 'MedSoftwares',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'HospitalOS - Hospital Management System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HospitalOS - Complete Hospital Management System',
    description: 'Manage your entire hospital with HospitalOS. 25+ integrated modules for all departments.',
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
    canonical: 'https://medsoftwares.com/hospitalos',
  },
};

// JSON-LD Structured Data for HospitalOS
export const hospitalOSJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'HospitalOS',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Hospital Management Software',
  operatingSystem: 'Windows, macOS, Linux',
  description: 'Complete hospital management system with 25+ integrated modules including EMR, OPD, IPD, Emergency Triage, Laboratory, Radiology, Pharmacy, Billing, HR & Payroll, and specialized departments.',
  offers: {
    '@type': 'Offer',
    price: '799',
    priceCurrency: 'USD',
    description: 'Starting from $799 - Contact for pricing',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'OPD Management',
    'IPD Management',
    'Emergency/Triage',
    'Laboratory Information System',
    'Radiology Information System',
    'Pharmacy Integration',
    'Billing & Cashier',
    'HR & Payroll',
    'Maternity Care',
    'Pediatrics',
    'Dental Services',
    'Physiotherapy',
    'Dialysis Center',
    'Blood Bank',
    'Operation Theatre',
    'ICU/CCU',
    'Kitchen Management',
    'Mortuary',
    'Ambulance Fleet',
    'Equipment Maintenance',
    'Patient Registration',
    'Queue Management',
    'Vitals Recording',
    'Consultation Notes',
    'Multi-Language Support',
    'Offline Capability',
    'Role-Based Access',
    'Audit Trail',
    'NHIS/Insurance Claims',
  ],
  screenshot: [
    {
      '@type': 'ImageObject',
      url: 'https://medsoftwares.com/screenshots/hospitalos-dashboard.png',
      caption: 'HospitalOS Dashboard',
    },
    {
      '@type': 'ImageObject',
      url: 'https://medsoftwares.com/screenshots/hospitalos-opd.png',
      caption: 'HospitalOS OPD Queue',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '85',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Organization',
    name: 'MedSoftwares',
    url: 'https://medsoftwares.com',
  },
};

// FAQ data for HospitalOS page
export const hospitalOSFaqs = [
  {
    question: 'What is HospitalOS?',
    answer: 'HospitalOS is a comprehensive hospital management system (HMS) with 25+ integrated modules including Electronic Medical Records (EMR), OPD, IPD, Emergency Triage, Laboratory Information System, Radiology, Pharmacy, Billing, HR & Payroll, Maternity, Blood Bank, and more. It is built for hospitals and clinics worldwide with one-time pricing.',
  },
  {
    question: 'How much does HospitalOS cost?',
    answer: 'HospitalOS starts at $799 for the Clinic plan (up to 3 workstations), $1,499 for the Hospital plan (up to 10 workstations), and $2,999 for the Enterprise plan (unlimited workstations). All plans are one-time payments with no monthly subscription fees.',
  },
  {
    question: 'Does HospitalOS work offline?',
    answer: 'Yes, HospitalOS is a native desktop application that operates fully offline. All patient records, billing, laboratory results, and clinical data are stored locally. This makes it ideal for hospitals in areas with unreliable internet connectivity. Data syncs automatically when online.',
  },
  {
    question: 'What departments does HospitalOS cover?',
    answer: 'HospitalOS covers all major hospital departments: OPD (Outpatient), IPD (Inpatient), Emergency/Triage, Laboratory, Radiology & Imaging, Pharmacy, Billing & Cashier, HR & Payroll, Maternity, Pediatrics, Dental, Physiotherapy, Dialysis, Blood Bank, Operation Theatre, ICU/CCU, Kitchen Management, Mortuary, Ambulance Fleet, and Equipment Maintenance.',
  },
  {
    question: 'Can HospitalOS process insurance claims and NHIS?',
    answer: 'Yes, HospitalOS includes comprehensive insurance and NHIS integration. It supports claim submission, eligibility verification, reimbursement tracking, and co-pay calculations for Ghana NHIS, Kenya NHIF, and private insurance plans.',
  },
  {
    question: 'Does HospitalOS integrate with PharmaPOS?',
    answer: 'Yes, HospitalOS integrates seamlessly with PharmaPOS for automated prescription fulfillment, real-time pharmacy inventory synchronization, and unified billing across your healthcare facility. Doctor prescriptions flow directly to the pharmacy module.',
  },
  {
    question: 'How many user roles does HospitalOS support?',
    answer: 'HospitalOS supports 11+ specialized user roles including Super Admin, Doctor, Nurse, Lab Technician, Radiologist, Pharmacist, Cashier, Receptionist, HR Manager, Kitchen Staff, and Store Keeper. Each role has custom dashboards and granular permissions.',
  },
  {
    question: 'Is HospitalOS suitable for small clinics?',
    answer: 'Yes, HospitalOS is designed to scale from small clinics to large hospitals. The Clinic plan ($799) is specifically tailored for small healthcare facilities with up to 3 workstations. You only activate the modules you need, keeping the system simple and focused.',
  },
];

// FAQ JSON-LD schema
export const hospitalOSFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: hospitalOSFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
