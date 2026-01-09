import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare - PharmaPOS & HospitalOS vs Competitors',
  description: 'Compare MedSoftwares PharmaPOS and HospitalOS with other pharmacy and hospital management software. See features, pricing, offline capability, and mobile money integration compared.',
  keywords: [
    'pharmacy software comparison',
    'hospital software comparison',
    'PharmaPOS vs competitors',
    'HospitalOS vs competitors',
    'best pharmacy software Africa',
    'best hospital software Africa',
    'pharmacy management software comparison',
    'hospital management system comparison',
    'healthcare software comparison',
    'affordable pharmacy software',
    'affordable hospital software',
  ],
  openGraph: {
    title: 'Compare Healthcare Software - MedSoftwares',
    description: 'See how PharmaPOS and HospitalOS compare to competitors on features, pricing, and capabilities.',
    url: 'https://medsoftwares.com/compare',
    type: 'website',
  },
  alternates: {
    canonical: 'https://medsoftwares.com/compare',
  },
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
