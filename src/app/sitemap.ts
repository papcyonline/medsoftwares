import { MetadataRoute } from 'next';

// News articles - keep in sync with src/app/news/page.tsx
const newsArticles = [
  // 2025 Articles
  { slug: 'best-pharmacy-software-ghana-2025', date: '2025-01-02' },
  { slug: 'hospital-software-nigeria-guide', date: '2025-01-01' },
  // 2024 December
  { slug: 'pharmacy-pos-vs-manual-records', date: '2024-12-28' },
  { slug: 'drug-expiry-tracking-software', date: '2024-12-20' },
  { slug: 'mtn-mobile-money-pharmacy-integration', date: '2024-12-15' },
  { slug: 'clinic-management-software-small-clinics', date: '2024-12-10' },
  { slug: 'pharmapos-3-0-release', date: '2024-12-01' },
  // 2024 Earlier
  { slug: 'expansion-east-africa', date: '2024-11-15' },
  { slug: 'digital-transformation-pharmacies', date: '2024-11-01' },
  { slug: 'partnership-nhis-ghana', date: '2024-10-20' },
  { slug: 'hospitalos-laboratory-module', date: '2024-10-10' },
  { slug: 'mobile-money-integration-guide', date: '2024-09-25' },
  { slug: 'customer-success-story-accra', date: '2024-09-15' },
  { slug: 'data-security-healthcare', date: '2024-09-01' },
  { slug: 'pharmacy-inventory-management-best-practices', date: '2024-08-20' },
  { slug: 'hospital-management-system-benefits', date: '2024-08-15' },
  { slug: 'emr-implementation-guide-africa', date: '2024-08-01' },
  { slug: 'patient-queue-management-system', date: '2024-07-25' },
  { slug: 'pharmacy-pos-automation-guide', date: '2024-07-15' },
  { slug: 'healthcare-compliance-regulations-africa', date: '2024-07-01' },
  { slug: 'multi-branch-pharmacy-management', date: '2024-06-20' },
  { slug: 'laboratory-information-system-hospitals', date: '2024-06-10' },
  { slug: 'telemedicine-integration-hospital-software', date: '2024-05-28' },
  { slug: 'healthcare-analytics-reporting-dashboards', date: '2024-05-15' },
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
      url: `${baseUrl}/pharmapos/pos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pharmapos/inventory`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pharmapos/prescriptions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pharmapos/payments`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hospitalos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hospitalos/opd`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hospitalos/ipd`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hospitalos/emergency`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hospitalos/laboratory`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hospitalos/radiology`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hospitalos/billing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
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
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
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
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/hospitalos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/hospitalos/getting-started`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/hospitalos/opd`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/hospitalos/emergency`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/hospitalos/ipd`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/hospitalos/laboratory`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/hospitalos/pharmacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/hospitalos/billing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/pharmapos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/pharmapos/getting-started`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/pharmapos/pos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/pharmapos/inventory`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/pharmapos/prescriptions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/pharmapos/reports`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/pharmapos/purchases`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/pharmapos/customers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/pharmapos/settings`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
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
