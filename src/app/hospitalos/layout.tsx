import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HospitalOS - Complete Hospital Management System',
  description: 'HospitalOS is a comprehensive hospital management system with 25+ integrated modules including EMR, OPD, IPD, Emergency Triage, Laboratory, Radiology, Pharmacy, Billing, HR & Payroll, Maternity, and more. Built for African healthcare facilities.',
  keywords: [
    'hospital management system',
    'hospital management software',
    'HMS software',
    'electronic medical records',
    'EMR software',
    'EHR system',
    'OPD management',
    'IPD management',
    'hospital billing software',
    'laboratory information system',
    'radiology information system',
    'pharmacy management',
    'patient registration',
    'hospital queue management',
    'triage system',
    'emergency department software',
    'maternity management system',
    'blood bank management',
    'hospital HR payroll',
    'hospital software Africa',
    'hospital software Ghana',
    'hospital software Nigeria',
    'hospital software Kenya',
    'clinic management software',
    'healthcare management system',
    'NHIS hospital software',
    'hospital insurance claims',
    'offline hospital software',
    'desktop hospital application',
  ],
  openGraph: {
    title: 'HospitalOS - Complete Hospital Management System',
    description: 'Manage your entire hospital with HospitalOS. 25+ integrated modules for OPD, IPD, Emergency, Lab, Radiology, Pharmacy, Billing, HR, and specialized departments.',
    url: 'https://medsoftwares.com/hospitalos',
    siteName: 'MedSoftware',
    images: [
      {
        url: '/og/hospitalos.png',
        width: 1200,
        height: 630,
        alt: 'HospitalOS - Hospital Management System Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HospitalOS - Complete Hospital Management System',
    description: 'Manage your entire hospital with HospitalOS. 25+ integrated modules for all departments.',
    images: ['/og/hospitalos.png'],
  },
  alternates: {
    canonical: 'https://medsoftwares.com/hospitalos',
  },
};

export default function HospitalOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
