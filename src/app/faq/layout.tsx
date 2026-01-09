import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about PharmaPOS pharmacy software and HospitalOS hospital management system. Learn about pricing, features, support, installation, and more.',
  keywords: [
    'pharmacy software FAQ',
    'hospital software questions',
    'PharmaPOS help',
    'HospitalOS FAQ',
    'pharmacy management software cost',
    'hospital software pricing',
    'medical software support',
    'healthcare software questions',
    'pharmacy POS FAQ',
    'EMR software FAQ',
  ],
  openGraph: {
    title: 'FAQ - MedSoftwares',
    description: 'Find answers to common questions about PharmaPOS and HospitalOS. Pricing, features, support, and more.',
    url: 'https://medsoftwares.com/faq',
    type: 'website',
  },
  alternates: {
    canonical: 'https://medsoftwares.com/faq',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
