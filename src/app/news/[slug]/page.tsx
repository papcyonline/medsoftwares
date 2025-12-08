'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This would typically come from a CMS or database
const newsArticles = [
  {
    id: 1,
    slug: 'pharmapos-3-0-release',
    title: 'PharmaPOS 3.0: Major Update Brings AI-Powered Inventory Predictions',
    excerpt: 'Our latest release introduces machine learning algorithms that predict stock levels and automatically suggest reorder quantities based on historical sales data.',
    category: 'product',
    date: '2024-12-01',
    readTime: '4 min read',
    author: 'Charles Bah',
    authorRole: 'CEO',
    image: '/screenshots/dashboard.png',
    content: `
      <p>We are thrilled to announce the release of PharmaPOS 3.0, our most significant update yet. This release represents months of development work and direct feedback from our customers across Africa.</p>

      <h2>AI-Powered Inventory Predictions</h2>
      <p>The standout feature of this release is our new AI-powered inventory prediction system. By analyzing your historical sales data, seasonal patterns, and market trends, PharmaPOS 3.0 can now:</p>
      <ul>
        <li>Predict which products will run low before they do</li>
        <li>Suggest optimal reorder quantities to minimize waste</li>
        <li>Identify slow-moving inventory that may expire</li>
        <li>Alert you to unusual sales patterns that may indicate issues</li>
      </ul>

      <h2>Enhanced Mobile Money Integration</h2>
      <p>We've expanded our mobile money integration to support even more providers across Africa. New additions include Wave, Orange Money, and Airtel Money, joining our existing support for MTN MoMo, Vodafone Cash, and M-Pesa.</p>

      <h2>Improved User Interface</h2>
      <p>Based on user feedback, we've redesigned several key screens to be more intuitive and faster to use. The new sales screen reduces checkout time by up to 30% compared to previous versions.</p>

      <h2>How to Update</h2>
      <p>Existing customers will receive the update automatically over the next two weeks. If you'd like to update immediately, please contact our support team. New customers will receive PharmaPOS 3.0 by default with all new installations.</p>
    `,
  },
  {
    id: 2,
    slug: 'expansion-east-africa',
    title: 'MedSoftware Expands Operations to East Africa',
    excerpt: 'We are excited to announce our expansion into Kenya, Tanzania, and Uganda, bringing world-class pharmacy management solutions to more healthcare facilities.',
    category: 'company',
    date: '2024-11-15',
    readTime: '3 min read',
    author: 'Charles Bah',
    authorRole: 'CEO',
    image: '/screenshots/sales.png',
    content: `
      <p>Today marks a significant milestone in MedSoftware's journey. We are officially expanding our operations to East Africa, starting with Kenya, Tanzania, and Uganda.</p>

      <h2>Why East Africa?</h2>
      <p>East Africa represents one of the fastest-growing healthcare markets on the continent. With a combined population of over 150 million people and rapidly improving healthcare infrastructure, the region is primed for digital transformation.</p>

      <h2>Local Presence</h2>
      <p>We're not just selling software remotely. We're establishing local offices in Nairobi, Dar es Salaam, and Kampala. This means:</p>
      <ul>
        <li>Local support teams who understand your context</li>
        <li>Training conducted in person by our experts</li>
        <li>Faster response times for technical issues</li>
        <li>Pricing in local currencies</li>
      </ul>

      <h2>Localized Features</h2>
      <p>Our software will be customized for East African markets, including integration with local payment systems like M-Pesa and Airtel Money, support for local tax regulations, and compatibility with national health insurance schemes.</p>

      <h2>Launch Offer</h2>
      <p>To celebrate our expansion, we're offering 20% off all packages for the first 100 customers in each country. Contact our sales team to learn more.</p>
    `,
  },
  {
    id: 3,
    slug: 'digital-transformation-pharmacies',
    title: 'The Digital Transformation of African Pharmacies: A 2024 Report',
    excerpt: 'Our comprehensive report reveals how pharmacies across Africa are adopting technology to improve patient care and business operations.',
    category: 'industry',
    date: '2024-11-01',
    readTime: '8 min read',
    author: 'Junior Fonte',
    authorRole: 'CTO',
    image: '/screenshots/inventory.png',
    content: `
      <p>The African pharmacy sector is undergoing a remarkable transformation. Our 2024 report, based on surveys of over 500 pharmacies across 15 countries, reveals key trends shaping the industry.</p>

      <h2>Key Findings</h2>
      <p>Our research uncovered several important trends:</p>
      <ul>
        <li><strong>67% of pharmacies</strong> now use some form of digital management system, up from 45% in 2022</li>
        <li><strong>Mobile money adoption</strong> has reached 78% in urban areas</li>
        <li><strong>Inventory accuracy</strong> improved by an average of 34% after implementing POS systems</li>
        <li><strong>Customer satisfaction</strong> increased by 28% in digitized pharmacies</li>
      </ul>

      <h2>Challenges Remain</h2>
      <p>Despite progress, significant challenges persist:</p>
      <ul>
        <li>Unreliable internet connectivity in rural areas</li>
        <li>High initial costs of software solutions</li>
        <li>Limited technical skills among staff</li>
        <li>Resistance to change from traditional operators</li>
      </ul>

      <h2>The Path Forward</h2>
      <p>The report concludes with recommendations for pharmacy owners, software providers, and policymakers to accelerate digital transformation while ensuring no one is left behind.</p>

      <h2>Download the Full Report</h2>
      <p>The complete 50-page report is available for free download. It includes detailed country-by-country analysis, case studies, and actionable recommendations.</p>
    `,
  },
  {
    id: 4,
    slug: 'partnership-nhis-ghana',
    title: 'MedSoftware Partners with NHIS Ghana for Seamless Insurance Claims',
    excerpt: 'Our new partnership enables pharmacies to process National Health Insurance Scheme claims directly through PharmaPOS, reducing paperwork and delays.',
    category: 'press',
    date: '2024-10-20',
    readTime: '3 min read',
    author: 'Marbel Nfor',
    authorRole: 'Program Manager',
    image: '/screenshots/reports.png',
    content: `
      <p>MedSoftware is proud to announce a strategic partnership with the National Health Insurance Authority (NHIA) of Ghana to streamline insurance claims processing for pharmacies.</p>

      <h2>What This Means for Pharmacies</h2>
      <p>Starting January 2025, PharmaPOS users in Ghana will be able to:</p>
      <ul>
        <li>Verify patient insurance status in real-time</li>
        <li>Submit claims electronically directly from the POS</li>
        <li>Track claim status and receive payment notifications</li>
        <li>Generate compliance reports automatically</li>
      </ul>

      <h2>Reducing Administrative Burden</h2>
      <p>Currently, pharmacies spend an average of 15 hours per week on insurance paperwork. Our integration is expected to reduce this to under 2 hours, freeing staff to focus on patient care.</p>

      <h2>Faster Payments</h2>
      <p>Electronic claims processing will reduce the average reimbursement time from 45 days to under 14 days, improving cash flow for pharmacies.</p>

      <h2>Getting Started</h2>
      <p>The integration will be available as a free update for all PharmaPOS users in Ghana. Training sessions will be conducted throughout December 2024.</p>
    `,
  },
  {
    id: 5,
    slug: 'hospix-laboratory-module',
    title: 'New Hospix Laboratory Module Streamlines Test Management',
    excerpt: 'The new laboratory module allows hospitals to manage test orders, track samples, and deliver results electronically to physicians and patients.',
    category: 'product',
    date: '2024-10-10',
    readTime: '5 min read',
    author: 'Steve Nya',
    authorRole: 'Developer',
    image: '/screenshots/mobilemoney.png',
    content: `
      <p>We're excited to introduce the new Laboratory Module for Hospix, our hospital management system. This module brings modern laboratory information management to hospitals of all sizes.</p>

      <h2>Key Features</h2>
      <p>The Laboratory Module includes:</p>
      <ul>
        <li><strong>Test Order Management:</strong> Physicians can order tests directly from patient records</li>
        <li><strong>Sample Tracking:</strong> Barcode-based tracking from collection to results</li>
        <li><strong>Automated Workflows:</strong> Customizable workflows for different test types</li>
        <li><strong>Results Delivery:</strong> Electronic delivery to physicians and patient portals</li>
        <li><strong>Quality Control:</strong> Built-in QC tracking and alerts</li>
      </ul>

      <h2>Integration with Existing Systems</h2>
      <p>The module integrates seamlessly with existing Hospix modules, including:</p>
      <ul>
        <li>Patient Management - automatic patient data sync</li>
        <li>Billing - automatic charge capture for tests</li>
        <li>Pharmacy - drug interaction alerts based on test results</li>
        <li>EMR - results automatically added to patient records</li>
      </ul>

      <h2>Pricing</h2>
      <p>The Laboratory Module is available as an add-on to existing Hospix installations or included in new Hospital and Enterprise packages.</p>
    `,
  },
  {
    id: 6,
    slug: 'mobile-money-integration-guide',
    title: 'Complete Guide to Mobile Money Integration in Healthcare',
    excerpt: 'Learn how healthcare facilities can leverage mobile money payments to improve cash flow, reduce theft, and provide better patient experiences.',
    category: 'industry',
    date: '2024-09-25',
    readTime: '6 min read',
    author: 'Faith Yaje',
    authorRole: 'Financial Secretary',
    image: '/screenshots/currency.png',
    content: `
      <p>Mobile money has revolutionized payments across Africa. In healthcare, it offers unique advantages that can transform how facilities operate and serve patients.</p>

      <h2>Why Mobile Money for Healthcare?</h2>
      <p>Healthcare facilities that adopt mobile money payments experience:</p>
      <ul>
        <li><strong>Reduced cash handling:</strong> Less theft and counting errors</li>
        <li><strong>Faster transactions:</strong> No need for change or cash verification</li>
        <li><strong>Better records:</strong> Automatic digital trail for all payments</li>
        <li><strong>Patient convenience:</strong> Pay from anywhere, anytime</li>
        <li><strong>Improved cash flow:</strong> Funds available same-day</li>
      </ul>

      <h2>Implementation Steps</h2>
      <p>Successfully implementing mobile money requires:</p>
      <ol>
        <li>Choose the right providers for your market</li>
        <li>Integrate with your existing POS/HMS system</li>
        <li>Train staff on the new payment methods</li>
        <li>Educate patients about payment options</li>
        <li>Monitor and optimize based on usage data</li>
      </ol>

      <h2>Case Study: Accra General Hospital</h2>
      <p>After implementing mobile money through Hospix, Accra General Hospital saw a 45% reduction in payment collection time and a 23% increase in on-time payments.</p>
    `,
  },
  {
    id: 7,
    slug: 'customer-success-story-accra',
    title: 'How Accra Central Pharmacy Increased Sales by 40% with PharmaPOS',
    excerpt: 'A deep dive into how one of Ghana\'s busiest pharmacies transformed their operations and dramatically improved their bottom line.',
    category: 'company',
    date: '2024-09-15',
    readTime: '5 min read',
    author: 'Sonita Bah',
    authorRole: 'Marketer',
    image: '/hero image.png',
    content: `
      <p>Accra Central Pharmacy has been serving the community for over 20 years. When owner Kofi Mensah decided to modernize his operations with PharmaPOS, the results exceeded all expectations.</p>

      <h2>The Challenge</h2>
      <p>Before PharmaPOS, Accra Central faced several challenges:</p>
      <ul>
        <li>Manual inventory tracking leading to stockouts and overstocking</li>
        <li>Long checkout times frustrating customers</li>
        <li>Difficulty tracking credit sales and collections</li>
        <li>No visibility into sales trends or top-selling products</li>
      </ul>

      <h2>The Solution</h2>
      <p>After implementing PharmaPOS Standard package, the pharmacy saw immediate improvements:</p>
      <ul>
        <li><strong>Checkout time reduced by 60%</strong> with barcode scanning</li>
        <li><strong>Inventory accuracy improved to 98%</strong> from ~70%</li>
        <li><strong>Credit collections improved by 45%</strong> with automated reminders</li>
        <li><strong>Overall sales increased by 40%</strong> in the first year</li>
      </ul>

      <h2>Owner Testimonial</h2>
      <blockquote>
        "PharmaPOS didn't just change how we work - it changed how we think about our business. Now I can see exactly what's happening and make better decisions. I wish I had done this years ago."
        <footer>- Kofi Mensah, Owner</footer>
      </blockquote>
    `,
  },
  {
    id: 8,
    slug: 'data-security-healthcare',
    title: 'Data Security Best Practices for Healthcare Facilities in Africa',
    excerpt: 'Protecting patient data is critical. Learn the essential security measures every pharmacy and hospital should implement.',
    category: 'industry',
    date: '2024-09-01',
    readTime: '7 min read',
    author: 'Junior Fonte',
    authorRole: 'CTO',
    image: '/Mockup.png',
    content: `
      <p>As healthcare facilities digitize their operations, data security becomes increasingly critical. Patient data is sensitive and must be protected from unauthorized access, theft, and breaches.</p>

      <h2>Why Healthcare Data is a Target</h2>
      <p>Healthcare data is particularly valuable to cybercriminals because it contains:</p>
      <ul>
        <li>Personal identification information</li>
        <li>Financial and payment details</li>
        <li>Medical history that can be used for fraud</li>
        <li>Insurance information</li>
      </ul>

      <h2>Essential Security Measures</h2>
      <p>Every healthcare facility should implement these basic security measures:</p>
      <ol>
        <li><strong>Strong passwords:</strong> Require complex passwords and regular changes</li>
        <li><strong>Access controls:</strong> Limit data access based on job roles</li>
        <li><strong>Encryption:</strong> Encrypt data both in transit and at rest</li>
        <li><strong>Regular backups:</strong> Automated daily backups to secure locations</li>
        <li><strong>Staff training:</strong> Regular security awareness training</li>
        <li><strong>Physical security:</strong> Secure servers and workstations</li>
      </ol>

      <h2>MedSoftware's Security Approach</h2>
      <p>All MedSoftware products include enterprise-grade security features including encryption, role-based access, audit logging, and regular security updates.</p>
    `,
  },
];

const getCategoryColor = (categoryId: string) => {
  switch (categoryId) {
    case 'product':
      return 'bg-green-100 text-green-700';
    case 'company':
      return 'bg-blue-100 text-blue-700';
    case 'industry':
      return 'bg-purple-100 text-purple-700';
    case 'press':
      return 'bg-orange-100 text-orange-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const getCategoryLabel = (categoryId: string) => {
  switch (categoryId) {
    case 'product':
      return 'Product Updates';
    case 'company':
      return 'Company News';
    case 'industry':
      return 'Industry Insights';
    case 'press':
      return 'Press Release';
    default:
      return categoryId;
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function NewsArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link
              href="/news"
              className="px-6 py-3 bg-[#166534] text-white font-semibold rounded-xl hover:bg-[#14532d] transition-colors"
            >
              Back to News
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = newsArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-8 md:pt-40 md:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-[#166534]">Home</Link>
              <span>/</span>
              <Link href="/news" className="hover:text-[#166534]">News</Link>
              <span>/</span>
              <span className="text-gray-900">{article.title.substring(0, 30)}...</span>
            </nav>

            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                {getCategoryLabel(article.category)}
              </span>
              <span className="text-gray-500">{formatDate(article.date)}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{article.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {article.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#166534] to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{article.author}</p>
                <p className="text-gray-500 text-sm">{article.authorRole}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <article
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-[#166534] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[#166534] prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </section>

        {/* Share Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Share this article</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://medsoftware.com/news/${article.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-[#166534] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://medsoftware.com/news/${article.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-[#166534] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://medsoftware.com/news/${article.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-[#166534] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-heading font-extrabold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <article
                    key={related.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <Link href={`/news/${related.slug}`} className="block aspect-video relative overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#166534] transition-colors line-clamp-2">
                        <Link href={`/news/${related.slug}`}>
                          {related.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{related.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{formatDate(related.date)}</span>
                        <span className="text-gray-500">{related.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to News CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All News
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
