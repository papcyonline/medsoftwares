'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
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
    image: '/screenshots/dashboard.png',
    featured: true,
  },
  {
    id: 2,
    slug: 'expansion-east-africa',
    title: 'MedSoftware Expands Operations to East Africa',
    excerpt: 'We are excited to announce our expansion into Kenya, Tanzania, and Uganda, bringing world-class pharmacy management solutions to more healthcare facilities.',
    category: 'company',
    date: '2024-11-15',
    readTime: '3 min read',
    image: '/screenshots/sales.png',
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
    image: '/screenshots/inventory.png',
    featured: false,
  },
  {
    id: 4,
    slug: 'partnership-nhis-ghana',
    title: 'MedSoftware Partners with NHIS Ghana for Seamless Insurance Claims',
    excerpt: 'Our new partnership enables pharmacies to process National Health Insurance Scheme claims directly through PharmaPOS, reducing paperwork and delays.',
    category: 'press',
    date: '2024-10-20',
    readTime: '3 min read',
    image: '/screenshots/reports.png',
    featured: false,
  },
  {
    id: 5,
    slug: 'hospix-laboratory-module',
    title: 'New Hospix Laboratory Module Streamlines Test Management',
    excerpt: 'The new laboratory module allows hospitals to manage test orders, track samples, and deliver results electronically to physicians and patients.',
    category: 'product',
    date: '2024-10-10',
    readTime: '5 min read',
    image: '/screenshots/mobilemoney.png',
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
    image: '/screenshots/currency.png',
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
    image: '/hero image.png',
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
    image: '/Mockup.png',
    featured: false,
  },
];

const pressReleases = [
  {
    date: '2024-12-01',
    title: 'MedSoftware Announces PharmaPOS 3.0 with AI Features',
  },
  {
    date: '2024-11-15',
    title: 'MedSoftware Expands to East African Markets',
  },
  {
    date: '2024-10-20',
    title: 'MedSoftware and NHIS Ghana Announce Partnership',
  },
  {
    date: '2024-08-01',
    title: 'MedSoftware Reaches 2,500 Customer Milestone',
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
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-6">
              News & Media
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
              Latest Updates from MedSoftware
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
    </>
  );
}
