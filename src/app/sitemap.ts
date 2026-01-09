import { MetadataRoute } from 'next';

// News articles - keep in sync with src/app/news/page.tsx
const newsArticles = [
  // 2026 Competitor-Focused SEO Articles
  { slug: 'mckesson-pharmacy-software-alternatives-2026', date: '2026-01-09' },
  { slug: 'best-pharmacy-software-developing-countries-2026', date: '2026-01-09' },
  { slug: 'hospital-emr-software-comparison-2026', date: '2026-01-09' },
  { slug: 'pharmacy-inventory-management-software-2026', date: '2026-01-09' },
  { slug: 'pioneerrx-alternatives-2026', date: '2026-01-08' },
  { slug: 'epic-alternatives-small-hospitals-2026', date: '2026-01-08' },
  { slug: 'pharmacy-software-offline-mode-2026', date: '2026-01-08' },
  { slug: 'pharmacy-software-no-monthly-fees-2026', date: '2026-01-07' },
  { slug: 'cerner-alternatives-2026', date: '2026-01-07' },
  { slug: 'affordable-hospital-management-software-2026', date: '2026-01-06' },
  // 2026 SEO-Optimized Articles
  { slug: 'best-hospital-management-software-2026', date: '2026-01-07' },
  { slug: 'free-hospital-management-software-download', date: '2026-01-06' },
  { slug: 'best-pharmacy-management-software-2026', date: '2026-01-05' },
  { slug: 'pharmacy-pos-system-africa-guide', date: '2026-01-04' },
  { slug: 'hospital-software-small-hospitals-clinics', date: '2026-01-03' },
  { slug: 'emr-ehr-software-africa-2026', date: '2026-01-02' },
  // 2025 December Articles
  { slug: 'cloud-vs-on-premise-hospital-software', date: '2025-12-28' },
  { slug: 'pharmacy-inventory-software-expiry-tracking', date: '2025-12-25' },
  { slug: 'hospital-billing-software-insurance-claims', date: '2025-12-22' },
  { slug: 'how-to-choose-pharmacy-software', date: '2025-12-20' },
  { slug: 'laboratory-information-management-system-2026', date: '2025-12-18' },
  { slug: 'hospital-management-system-modules-explained', date: '2025-12-15' },
  { slug: 'pharmacy-software-nigeria-2026', date: '2025-12-12' },
  { slug: 'hospital-software-kenya-east-africa', date: '2025-12-10' },
  { slug: 'patient-management-system-features', date: '2025-12-08' },
  { slug: 'pharmacy-software-mobile-money-integration', date: '2025-12-05' },
  { slug: 'ai-healthcare-software-2026-trends', date: '2025-12-03' },
  { slug: 'opd-ipd-management-software-hospitals', date: '2025-12-01' },
  // 2025 November Articles
  { slug: 'prescription-management-software-pharmacies', date: '2025-11-28' },
  { slug: 'hospital-revenue-cycle-management-software', date: '2025-11-25' },
  { slug: 'controlled-substance-tracking-pharmacy-software', date: '2025-11-22' },
  { slug: 'telemedicine-software-african-hospitals', date: '2025-11-20' },
  { slug: 'pharmacy-chain-management-software', date: '2025-11-18' },
  { slug: 'hospital-queue-management-system', date: '2025-11-15' },
  { slug: 'drug-interaction-checker-software', date: '2025-11-12' },
  { slug: 'hospital-bed-management-software', date: '2025-11-10' },
  { slug: 'pharmacy-software-barcode-scanning', date: '2025-11-08' },
  { slug: 'radiology-information-system-ris', date: '2025-11-05' },
  { slug: 'pharmacy-software-credit-sales-management', date: '2025-11-02' },
  // 2025 October Articles
  { slug: 'hospital-appointment-scheduling-software', date: '2025-10-30' },
  { slug: 'nhis-nhif-integration-healthcare-software', date: '2025-10-28' },
  { slug: 'pharmacy-supplier-management-purchase-orders', date: '2025-10-25' },
  { slug: 'hospital-hr-payroll-management-software', date: '2025-10-22' },
  { slug: 'pharmacy-analytics-sales-reports', date: '2025-10-20' },
  { slug: 'hospital-pharmacy-management-system', date: '2025-10-18' },
  { slug: 'digital-health-transformation-africa-2026', date: '2025-10-15' },
  // 2025 January Articles
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
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Best of comparison pages (high SEO value)
    {
      url: `${baseUrl}/best-pharmacy-software`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-hospital-software`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Global solution pages
    {
      url: `${baseUrl}/solutions/pharmacy-software`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/hospital-software`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
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
    // AI/LLM discovery files
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ai.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/.well-known/llms.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
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
