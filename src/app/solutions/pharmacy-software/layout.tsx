import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Pharmacy Management Software 2026 | Global POS Solution',
  description: 'PharmaPOS is the leading pharmacy management software used worldwide. Features POS, inventory management, prescription tracking, multi-branch support, and offline capability. One-time pricing from $299.',
  keywords: [
    'pharmacy management software',
    'pharmacy software',
    'pharmacy POS system',
    'best pharmacy software',
    'pharmacy inventory software',
    'prescription management software',
    'pharmacy point of sale',
    'pharmacy software USA',
    'pharmacy software UK',
    'pharmacy software India',
    'pharmacy software Europe',
    'pharmacy software Asia',
    'pharmacy software Africa',
    'pharmacy software Middle East',
    'retail pharmacy software',
    'community pharmacy software',
    'pharmacy chain software',
    'drug store software',
    'chemist software',
    'apothecary software',
  ],
  openGraph: {
    title: 'Best Pharmacy Management Software | PharmaPOS',
    description: 'Trusted by pharmacies worldwide. POS, inventory, prescriptions, multi-branch support. One-time payment from $299.',
    url: 'https://medsoftwares.com/solutions/pharmacy-software',
    type: 'website',
  },
  alternates: {
    canonical: 'https://medsoftwares.com/solutions/pharmacy-software',
  },
};

export default function PharmacySoftwareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
