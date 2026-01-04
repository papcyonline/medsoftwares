import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Media | MedSoftware - Healthcare Technology Updates',
  description: 'Stay updated with the latest news from MedSoftware. Read about product updates, company announcements, industry insights, and how we are transforming healthcare technology across Africa.',
  keywords: [
    'MedSoftware news',
    'pharmacy software updates',
    'healthcare technology news',
    'PharmaPOS updates',
    'HospitalOS updates',
    'African healthcare technology',
    'pharmacy management news',
    'hospital management updates',
  ],
  openGraph: {
    title: 'News & Media | MedSoftware',
    description: 'Stay updated with the latest news from MedSoftware. Product updates, company announcements, and industry insights.',
    type: 'website',
    url: 'https://medsoftwares.com/news',
    siteName: 'MedSoftware',
    images: [
      {
        url: '/og-news.jpg',
        width: 1200,
        height: 630,
        alt: 'MedSoftware News & Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Media | MedSoftware',
    description: 'Stay updated with the latest news from MedSoftware.',
    images: ['/og-news.jpg'],
  },
  alternates: {
    canonical: 'https://medsoftwares.com/news',
  },
};
