import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'PharmaPOS Documentation',
    template: '%s - PharmaPOS | MedSoftwares',
  },
  description: 'Complete documentation for PharmaPOS - Pharmacy Management and POS System. Learn about sales, inventory, prescriptions, and more.',
};

export default function PharmaPOSDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
