import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Hospital Management Software 2026 | Top 5 HMS Compared',
  description: 'Compare the best hospital management software for 2026. HospitalOS vs Epic vs Cerner vs MEDITECH - features, pricing, implementation time. Find the right HMS for your facility.',
  keywords: [
    'best hospital management software',
    'best hospital software',
    'top HMS 2026',
    'hospital management system comparison',
    'hospital software reviews',
    'HospitalOS vs Epic',
    'HospitalOS vs Cerner',
    'best HMS for small hospitals',
    'affordable hospital software',
    'hospital EMR comparison',
    'best clinic management software',
    'hospital information system',
  ],
  openGraph: {
    title: 'Best Hospital Management Software 2026 | Top 5 Compared',
    description: 'Compare the top hospital management systems. Features, pricing, pros & cons of the best HMS solutions.',
    url: 'https://medsoftwares.com/best-hospital-software',
    type: 'article',
  },
  alternates: {
    canonical: 'https://medsoftwares.com/best-hospital-software',
  },
};

export default function BestHospitalSoftwareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
