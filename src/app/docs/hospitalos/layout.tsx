import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'HospitalOS Documentation',
    template: '%s - HospitalOS | MedSoftwares',
  },
  description: 'Complete documentation for HospitalOS - Hospital Management System. Learn about all modules including OPD, IPD, Emergency, Laboratory, Pharmacy, and more.',
};

export default function HospitalOSDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
