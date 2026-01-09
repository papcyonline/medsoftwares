'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StarIcon from '@mui/icons-material/Star';

const softwareList = [
  {
    rank: 1,
    name: 'PharmaPOS',
    company: 'MedSoftwares',
    rating: 4.8,
    reviews: 150,
    pricing: '$299-$899 (one-time)',
    bestFor: 'Global pharmacies, multi-branch operations',
    pros: [
      'One-time payment (no monthly fees)',
      'Works completely offline',
      'Mobile money & global payments',
      'Multi-currency & multi-language',
      'Expiry tracking & FEFO',
      'Insurance/NHIS integration',
    ],
    cons: [
      'Desktop-focused (web version coming)',
    ],
    url: '/pharmapos',
    featured: true,
  },
  {
    rank: 2,
    name: 'McKesson Pharmacy Systems',
    company: 'McKesson',
    rating: 4.2,
    reviews: 89,
    pricing: '$500-2000/month',
    bestFor: 'Large US pharmacy chains',
    pros: [
      'Enterprise-grade features',
      'Strong US market presence',
      'Extensive integrations',
    ],
    cons: [
      'Expensive monthly fees',
      'Complex implementation',
      'US-focused only',
    ],
    url: null,
    featured: false,
  },
  {
    rank: 3,
    name: 'PioneerRx',
    company: 'PioneerRx',
    rating: 4.1,
    reviews: 76,
    pricing: '$400-1500/month',
    bestFor: 'Independent US pharmacies',
    pros: [
      'Good workflow automation',
      'Patient engagement tools',
      'US insurance integrations',
    ],
    cons: [
      'High monthly costs',
      'Limited international support',
      'Requires internet connection',
    ],
    url: null,
    featured: false,
  },
  {
    rank: 4,
    name: 'Liberty Software',
    company: 'Transaction Data Systems',
    rating: 4.0,
    reviews: 54,
    pricing: '$300-1000/month',
    bestFor: 'US retail pharmacies',
    pros: [
      'User-friendly interface',
      'Good customer support',
      'Integrated POS',
    ],
    cons: [
      'Monthly subscription required',
      'Limited global features',
      'No offline mode',
    ],
    url: null,
    featured: false,
  },
  {
    rank: 5,
    name: 'Computer-Rx',
    company: 'Computer-Rx',
    rating: 3.9,
    reviews: 45,
    pricing: '$350-900/month',
    bestFor: 'Small US pharmacies',
    pros: [
      'Affordable entry point',
      'Easy to learn',
      'Basic features included',
    ],
    cons: [
      'Limited advanced features',
      'US-only support',
      'Requires stable internet',
    ],
    url: null,
    featured: false,
  },
];

const comparisonFactors = [
  { factor: 'One-Time Pricing', pharmapos: true, others: false },
  { factor: 'Offline Capability', pharmapos: true, others: false },
  { factor: 'Mobile Money Integration', pharmapos: true, others: false },
  { factor: 'Multi-Currency Support', pharmapos: true, others: 'Limited' },
  { factor: 'Global Coverage', pharmapos: true, others: 'Limited' },
  { factor: 'NHIS/Insurance Claims', pharmapos: true, others: 'US Only' },
  { factor: 'Multi-Branch Management', pharmapos: true, others: true },
  { factor: 'Barcode Scanning', pharmapos: true, others: true },
];

export default function BestPharmacySoftwarePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Pharmacy Management Software 2026 - Top 5 Compared',
    description: 'Compare the best pharmacy software solutions for 2026. Features, pricing, pros and cons of PharmaPOS, McKesson, PioneerRx, and more.',
    author: {
      '@type': 'Organization',
      name: 'MedSoftwares',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MedSoftwares',
      logo: {
        '@type': 'ImageObject',
        url: 'https://medsoftwares.com/logo.png',
      },
    },
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best pharmacy management software in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PharmaPOS is rated the best pharmacy management software for 2026 due to its comprehensive features, one-time pricing model, offline capability, and global payment integrations. It serves pharmacies worldwide with pricing starting at $299.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does pharmacy software cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pharmacy software costs vary: PharmaPOS offers one-time licensing from $299-$899, while competitors like McKesson and PioneerRx charge $400-2000 per month. Over 3 years, one-time pricing saves $10,000-70,000.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which pharmacy software works offline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PharmaPOS is one of the few pharmacy management systems that works completely offline. Most competitors require constant internet connectivity, making PharmaPOS ideal for areas with unreliable internet.',
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-6">
            2026 Comparison Guide
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
            Best Pharmacy Management Software 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We compared the top pharmacy software solutions based on features, pricing, ease of use, and customer reviews. Here are the best options for your pharmacy.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 2026 • Based on 500+ user reviews
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#166534]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Our Top Pick: PharmaPOS</h2>
          <p className="text-green-100 mb-6">
            Best overall pharmacy software for features, value, and global coverage
          </p>
          <Link
            href="/pharmapos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#166534] font-bold rounded-full hover:bg-green-50 transition-all"
          >
            Learn More About PharmaPOS
            <ArrowOutwardIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-12 text-center">
            Top 5 Pharmacy Software Solutions
          </h2>

          <div className="space-y-8">
            {softwareList.map((software) => (
              <div
                key={software.rank}
                className={`rounded-2xl border-2 p-6 md:p-8 ${
                  software.featured
                    ? 'border-[#166534] bg-green-50/50 shadow-lg'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Rank Badge */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-extrabold ${
                    software.featured ? 'bg-[#166534] text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    #{software.rank}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{software.name}</h3>
                      {software.featured && (
                        <span className="px-3 py-1 bg-[#166534] text-white text-xs font-bold rounded-full">
                          EDITOR&apos;S CHOICE
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 mb-3">by {software.company}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(software.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-gray-900">{software.rating}</span>
                      <span className="text-gray-500">({software.reviews} reviews)</span>
                    </div>

                    {/* Key Info */}
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-500">Pricing:</span>
                        <p className="font-semibold text-gray-900">{software.pricing}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Best For:</span>
                        <p className="font-semibold text-gray-900">{software.bestFor}</p>
                      </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
                        <ul className="space-y-1">
                          {software.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
                        <ul className="space-y-1">
                          {software.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500">−</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    {software.url && (
                      <div className="mt-6">
                        <Link
                          href={software.url}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#166534] text-white font-semibold rounded-full hover:bg-green-700 transition-all"
                        >
                          View {software.name}
                          <ArrowOutwardIcon className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-8 text-center">
            Feature Comparison
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-[#166534]">PharmaPOS</th>
                  <th className="text-center p-4 font-semibold text-gray-500">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFactors.map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-4 text-gray-700">{row.factor}</td>
                    <td className="p-4 text-center">
                      {row.pharmapos === true ? (
                        <CheckCircleIcon className="w-6 h-6 text-green-600 mx-auto" />
                      ) : (
                        <span className="text-gray-600">{row.pharmapos}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.others === true ? (
                        <CheckCircleIcon className="w-6 h-6 text-green-600 mx-auto" />
                      ) : row.others === false ? (
                        <span className="text-red-500">✕</span>
                      ) : (
                        <span className="text-gray-500">{row.others}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the best pharmacy management software in 2026?</h3>
              <p className="text-gray-600">PharmaPOS is rated the best pharmacy management software for 2026 due to its comprehensive features, one-time pricing model, offline capability, and global payment integrations. It serves pharmacies worldwide with pricing starting at $299.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How much does pharmacy software cost?</h3>
              <p className="text-gray-600">Pharmacy software costs vary significantly. PharmaPOS offers one-time licensing from $299-$899 with optional annual maintenance, while competitors like McKesson and PioneerRx charge $400-2000 per month. Over 3 years, one-time pricing can save $10,000-70,000.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Which pharmacy software works offline?</h3>
              <p className="text-gray-600">PharmaPOS is one of the few pharmacy management systems that works completely offline. Most competitors require constant internet connectivity, making PharmaPOS ideal for areas with unreliable internet or during outages.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What features should pharmacy software have?</h3>
              <p className="text-gray-600">Essential pharmacy software features include: Point of Sale (POS), inventory management with expiry tracking, prescription management, barcode scanning, customer/patient profiles, reporting and analytics, multi-payment support, and ideally offline capability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-6">
            Ready to Try the #1 Pharmacy Software?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Join thousands of pharmacies worldwide using PharmaPOS
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#166534] text-lg font-bold rounded-full shadow-lg hover:bg-green-50 transition-all"
            >
              Get Free Demo
              <ArrowOutwardIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
