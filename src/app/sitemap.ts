import { MetadataRoute } from 'next';

// News articles - keep in sync with src/app/news/page.tsx
const newsArticles = [
  { slug: 'pharmapos-3-0-release', date: '2024-12-01' },
  { slug: 'expansion-east-africa', date: '2024-11-15' },
  { slug: 'digital-transformation-pharmacies', date: '2024-11-01' },
  { slug: 'partnership-nhis-ghana', date: '2024-10-20' },
  { slug: 'hospitalos-laboratory-module', date: '2024-10-10' },
  { slug: 'mobile-money-integration-guide', date: '2024-09-25' },
  { slug: 'customer-success-story-accra', date: '2024-09-15' },
  { slug: 'data-security-healthcare', date: '2024-09-01' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://medsoftwares.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pharmapos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hospitalos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // News article pages
  const newsPages: MetadataRoute.Sitemap = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...newsPages];
}
