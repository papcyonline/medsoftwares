import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Hospital Management Software 2026 | HMS for Clinics & Hospitals',
  description: 'HospitalOS is a complete hospital management system with 25+ modules including EMR, OPD, IPD, Laboratory, Radiology, and Billing. Used by healthcare facilities worldwide. One-time pricing from $999.',
  keywords: [
    'hospital management software',
    'hospital management system',
    'HMS software',
    'clinic management software',
    'healthcare software',
    'hospital information system',
    'HIS software',
    'EMR software',
    'EHR software',
    'electronic medical records',
    'patient management system',
    'hospital software USA',
    'hospital software UK',
    'hospital software India',
    'hospital software Europe',
    'hospital software Asia',
    'hospital software Africa',
    'hospital software Middle East',
    'medical practice management',
    'healthcare management system',
    'clinical management software',
    'hospital billing software',
    'laboratory management system',
    'radiology information system',
  ],
  openGraph: {
    title: 'Best Hospital Management Software | HospitalOS',
    description: 'Complete HMS with 25+ modules. EMR, OPD, IPD, Lab, Radiology, Billing. One-time payment from $999.',
    url: 'https://medsoftwares.com/solutions/hospital-software',
    type: 'website',
  },
  alternates: {
    canonical: 'https://medsoftwares.com/solutions/hospital-software',
  },
};

export default function HospitalSoftwareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
