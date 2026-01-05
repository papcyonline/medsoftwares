'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const categories = [
  { id: 'all', label: 'All News' },
  { id: 'product', label: 'Product Updates' },
  { id: 'company', label: 'Company News' },
  { id: 'industry', label: 'Industry Insights' },
  { id: 'press', label: 'Press Releases' },
];

const newsArticles = [
  {
    id: 1,
    slug: 'pharmapos-3-0-release',
    title: 'PharmaPOS 3.0: Major Update Brings AI-Powered Inventory Predictions',
    excerpt: 'Our latest release introduces machine learning algorithms that predict stock levels and automatically suggest reorder quantities based on historical sales data.',
    category: 'product',
    date: '2024-12-01',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    slug: 'expansion-east-africa',
    title: 'MedSoftwares Expands Operations to East Africa',
    excerpt: 'We are excited to announce our expansion into Kenya, Tanzania, and Uganda, bringing world-class pharmacy management solutions to more healthcare facilities.',
    category: 'company',
    date: '2024-11-15',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
    featured: true,
  },
  {
    id: 3,
    slug: 'digital-transformation-pharmacies',
    title: 'The Digital Transformation of African Pharmacies: A 2024 Report',
    excerpt: 'Our comprehensive report reveals how pharmacies across Africa are adopting technology to improve patient care and business operations.',
    category: 'industry',
    date: '2024-11-01',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    slug: 'partnership-nhis-ghana',
    title: 'MedSoftwares Partners with NHIS Ghana for Seamless Insurance Claims',
    excerpt: 'Our new partnership enables pharmacies to process National Health Insurance Scheme claims directly through PharmaPOS, reducing paperwork and delays.',
    category: 'press',
    date: '2024-10-20',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    slug: 'hospitalos-laboratory-module',
    title: 'New HospitalOS Laboratory Module Streamlines Test Management',
    excerpt: 'The new laboratory module allows hospitals to manage test orders, track samples, and deliver results electronically to physicians and patients.',
    category: 'product',
    date: '2024-10-10',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
    featured: false,
  },
  {
    id: 6,
    slug: 'mobile-money-integration-guide',
    title: 'Complete Guide to Mobile Money Integration in Healthcare',
    excerpt: 'Learn how healthcare facilities can leverage mobile money payments to improve cash flow, reduce theft, and provide better patient experiences.',
    category: 'industry',
    date: '2024-09-25',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    featured: false,
  },
  {
    id: 7,
    slug: 'customer-success-story-accra',
    title: 'How Accra Central Pharmacy Increased Sales by 40% with PharmaPOS',
    excerpt: 'A deep dive into how one of Ghana\'s busiest pharmacies transformed their operations and dramatically improved their bottom line.',
    category: 'company',
    date: '2024-09-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80',
    featured: false,
  },
  {
    id: 8,
    slug: 'data-security-healthcare',
    title: 'Data Security Best Practices for Healthcare Facilities in Africa',
    excerpt: 'Protecting patient data is critical. Learn the essential security measures every pharmacy and hospital should implement.',
    category: 'industry',
    date: '2024-09-01',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    featured: false,
  },
  {
    id: 9,
    slug: 'pharmacy-inventory-management-best-practices',
    title: '10 Pharmacy Inventory Management Best Practices to Reduce Waste and Boost Profits',
    excerpt: 'Master drug inventory control with proven strategies for stock optimization, expiry tracking, and automated reordering that leading African pharmacies use to maximize profitability.',
    category: 'industry',
    date: '2024-08-20',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    featured: false,
  },
  {
    id: 10,
    slug: 'hospital-management-system-benefits',
    title: 'Why Every Hospital Needs a Modern Hospital Management System in 2025',
    excerpt: 'Discover how integrated HMS solutions streamline patient care, reduce administrative burden, and improve healthcare outcomes across clinical departments.',
    category: 'industry',
    date: '2024-08-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: false,
  },
  {
    id: 11,
    slug: 'emr-implementation-guide-africa',
    title: 'Complete Guide to EMR Implementation for African Healthcare Facilities',
    excerpt: 'Step-by-step electronic medical records implementation guide covering system selection, data migration, staff training, and compliance requirements for hospitals and clinics.',
    category: 'industry',
    date: '2024-08-01',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    featured: false,
  },
  {
    id: 12,
    slug: 'patient-queue-management-system',
    title: 'How Smart Patient Queue Management Systems Reduce Wait Times by 60%',
    excerpt: 'Learn how digital queue management and appointment scheduling software transforms patient flow, improves satisfaction scores, and optimizes staff efficiency in busy healthcare settings.',
    category: 'product',
    date: '2024-07-25',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    featured: false,
  },
  {
    id: 13,
    slug: 'pharmacy-pos-automation-guide',
    title: 'Pharmacy POS Automation: From Manual Sales to Digital Excellence',
    excerpt: 'Transform your pharmacy operations with point-of-sale automation featuring barcode scanning, mobile money integration, credit sales tracking, and real-time reporting.',
    category: 'product',
    date: '2024-07-15',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
    featured: false,
  },
  {
    id: 14,
    slug: 'healthcare-compliance-regulations-africa',
    title: 'Healthcare Compliance and Regulations: What African Providers Must Know',
    excerpt: 'Navigate pharmaceutical regulations, patient data protection laws, and insurance compliance requirements across Ghana, Nigeria, Kenya, and other African markets.',
    category: 'industry',
    date: '2024-07-01',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    featured: false,
  },
  {
    id: 15,
    slug: 'multi-branch-pharmacy-management',
    title: 'Multi-Branch Pharmacy Management: Centralized Control for Growing Chains',
    excerpt: 'Scale your pharmacy business with multi-location inventory sync, centralized reporting, inter-branch transfers, and unified customer management across all outlets.',
    category: 'product',
    date: '2024-06-20',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80',
    featured: false,
  },
  {
    id: 16,
    slug: 'laboratory-information-system-hospitals',
    title: 'Laboratory Information Systems: Streamlining Diagnostics in Modern Hospitals',
    excerpt: 'Optimize lab operations with sample tracking, automated result delivery, quality control monitoring, and seamless integration with hospital electronic medical records.',
    category: 'product',
    date: '2024-06-10',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&q=80',
    featured: false,
  },
  {
    id: 17,
    slug: 'telemedicine-integration-hospital-software',
    title: 'Telemedicine Integration: Expanding Healthcare Access Through Technology',
    excerpt: 'Implement virtual consultations, remote patient monitoring, and telehealth services that connect patients with providers across distances while maintaining quality care.',
    category: 'industry',
    date: '2024-05-28',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    featured: false,
  },
  {
    id: 18,
    slug: 'healthcare-analytics-reporting-dashboards',
    title: 'Healthcare Analytics: Data-Driven Decisions for Better Patient Outcomes',
    excerpt: 'Leverage business intelligence dashboards, predictive analytics, and real-time reporting to optimize operations, track KPIs, and improve clinical decision-making.',
    category: 'industry',
    date: '2024-05-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: false,
  },
  {
    id: 19,
    slug: 'best-pharmacy-software-ghana-2025',
    title: 'Best Pharmacy Management Software in Ghana 2025: Complete Buyer\'s Guide',
    excerpt: 'Compare top pharmacy software solutions in Ghana including features, pricing, NHIS integration, mobile money support, and customer reviews to find the perfect fit for your pharmacy.',
    category: 'industry',
    date: '2025-01-02',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    featured: true,
  },
  {
    id: 20,
    slug: 'hospital-software-nigeria-guide',
    title: 'Hospital Management Software in Nigeria: Features, Costs & Implementation Guide',
    excerpt: 'Everything Nigerian hospitals need to know about choosing and implementing hospital management systems, including HMO integration, NHIS compliance, and cost considerations.',
    category: 'industry',
    date: '2025-01-01',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: true,
  },
  {
    id: 21,
    slug: 'pharmacy-pos-vs-manual-records',
    title: 'Pharmacy POS System vs Manual Records: Why It\'s Time to Switch in 2025',
    excerpt: 'Discover the hidden costs of manual pharmacy management and how modern POS systems can increase profits by 40%, reduce errors, and save 20+ hours weekly.',
    category: 'industry',
    date: '2024-12-28',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
    featured: false,
  },
  {
    id: 22,
    slug: 'drug-expiry-tracking-software',
    title: 'Drug Expiry Tracking Software: Reduce Pharmaceutical Waste by 60%',
    excerpt: 'Learn how automated expiry tracking and FEFO inventory management helps pharmacies minimize losses, ensure patient safety, and maintain regulatory compliance.',
    category: 'product',
    date: '2024-12-20',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    featured: false,
  },
  {
    id: 23,
    slug: 'mtn-mobile-money-pharmacy-integration',
    title: 'MTN Mobile Money Integration for Pharmacies: Complete Setup Guide',
    excerpt: 'Step-by-step guide to integrating MTN MoMo payments in your pharmacy POS system, including setup, fees, reconciliation, and troubleshooting common issues.',
    category: 'product',
    date: '2024-12-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    featured: false,
  },
  {
    id: 24,
    slug: 'clinic-management-software-small-clinics',
    title: 'Affordable Clinic Management Software for Small Healthcare Facilities',
    excerpt: 'Budget-friendly clinic management solutions designed for small practices, health centers, and outpatient facilities in Africa with essential features and easy setup.',
    category: 'product',
    date: '2024-12-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    featured: false,
  },
];

const pressReleases = [
  {
    date: '2024-12-01',
    title: 'MedSoftwares Announces PharmaPOS 3.0 with AI Features',
  },
  {
    date: '2024-11-15',
    title: 'MedSoftwares Expands to East African Markets',
  },
  {
    date: '2024-10-20',
    title: 'MedSoftwares and NHIS Ghana Announce Partnership',
  },
  {
    date: '2024-08-01',
    title: 'MedSoftwares Reaches 2,500 Customer Milestone',
  },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = activeCategory === 'all'
    ? newsArticles
    : newsArticles.filter(article => article.category === activeCategory);

  const featuredArticles = newsArticles.filter(article => article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryLabel = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.label : categoryId;
  };

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

  return (
    <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-6">
              News & Media
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
              Latest Updates from MedSoftwares
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed about product updates, company news, industry insights, and how we&apos;re transforming healthcare technology across Africa.
            </p>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-heading font-extrabold text-gray-900 mb-8">Featured Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <Link href={`/news/${article.slug}`} className="block aspect-video relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                        {getCategoryLabel(article.category)}
                      </span>
                      <span className="text-gray-500 text-sm">{formatDate(article.date)}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#166534] transition-colors">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <Link
                        href={`/news/${article.slug}`}
                        className="text-[#166534] font-semibold text-sm hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter & Articles */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-[#166534] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <Link href={`/news/${article.slug}`} className="block aspect-video relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                        {getCategoryLabel(article.category)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#166534] transition-colors line-clamp-2">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{formatDate(article.date)}</span>
                      <span className="text-gray-500">{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Press Releases Sidebar */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Newsletter Signup */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-[#166534] to-green-700 rounded-3xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-4">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-green-100 mb-6">
                    Get the latest news, product updates, and industry insights delivered to your inbox monthly.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40 outline-none transition-all"
                    />
                    <button
                      type="submit"
                      className="px-8 py-3 bg-white text-[#166534] font-bold rounded-xl hover:bg-green-50 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-green-200 text-sm mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>

              {/* Press Releases */}
              <div>
                <h2 className="text-xl font-heading font-extrabold text-gray-900 mb-6">Press Releases</h2>
                <div className="space-y-4">
                  {pressReleases.map((release, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <p className="text-sm text-gray-500 mb-1">{formatDate(release.date)}</p>
                      <p className="text-gray-900 font-medium text-sm">{release.title}</p>
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-block mt-6 text-[#166534] font-semibold text-sm hover:underline"
                >
                  View All Press Releases →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-gray-900 mb-4">
              Media Resources
            </h2>
            <p className="text-gray-600 mb-8">
              Download our media kit for logos, brand guidelines, executive photos, and company information.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#166534] text-white font-semibold rounded-xl hover:bg-[#14532d] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Media Kit
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Contact PR Team
              </Link>
            </div>
          </div>
        </section>

        <Footer />
    </main>
  );
}
