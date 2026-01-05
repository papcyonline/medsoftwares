import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Media | MedSoftwares - Healthcare Technology Updates',
  description: 'Stay updated with the latest news from MedSoftwares. Read about product updates, company announcements, industry insights, and how we are transforming healthcare technology across Africa.',
  keywords: [
    'MedSoftwares news',
    'pharmacy software updates',
    'healthcare technology news',
    'PharmaPOS updates',
    'HospitalOS updates',
    'African healthcare technology',
    'pharmacy management news',
    'hospital management updates',
  ],
  openGraph: {
    title: 'News & Media | MedSoftwares',
    description: 'Stay updated with the latest news from MedSoftwares. Product updates, company announcements, and industry insights.',
    type: 'website',
    url: 'https://medsoftwares.com/news',
    siteName: 'MedSoftwares',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'MedSoftwares News & Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Media | MedSoftwares',
    description: 'Stay updated with the latest news from MedSoftwares.',
    images: ['/og.png'],
  },
  alternates: {
    canonical: 'https://medsoftwares.com/news',
  },
};
