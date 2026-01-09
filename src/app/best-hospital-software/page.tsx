'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StarIcon from '@mui/icons-material/Star';

const softwareList = [
  {
    rank: 1,
    name: 'HospitalOS',
    company: 'MedSoftwares',
    rating: 4.7,
    reviews: 85,
    pricing: '$999-$2,999 (one-time)',
    bestFor: 'Global hospitals & clinics of all sizes',
    pros: [
      'One-time license (no monthly fees)',
      '25+ integrated modules',
      'Works completely offline',
      'Multi-language & multi-currency',
      'Telemedicine included',
      'Affordable for any size facility',
    ],
    cons: [
      'Newer to North American market',
    ],
    url: '/hospitalos',
    featured: true,
  },
  {
    rank: 2,
    name: 'Epic Systems',
    company: 'Epic Systems Corporation',
    rating: 4.3,
    reviews: 245,
    pricing: '$500K-$5M+ implementation',
    bestFor: 'Large US hospital networks',
    pros: [
      'Industry leader in US',
      'Comprehensive EMR',
      'Strong interoperability',
    ],
    cons: [
      'Extremely expensive',
      'Long implementation (1-3 years)',
      'Requires dedicated IT team',
    ],
    url: null,
    featured: false,
  },
  {
    rank: 3,
    name: 'Cerner (Oracle Health)',
    company: 'Oracle',
    rating: 4.1,
    reviews: 189,
    pricing: '$100K-$2M+ implementation',
    bestFor: 'Mid-to-large US hospitals',
    pros: [
      'Strong analytics',
      'Cloud options available',
      'Good integration capabilities',
    ],
    cons: [
      'High total cost of ownership',
      'Complex implementation',
      'Oracle transition concerns',
    ],
    url: null,
    featured: false,
  },
  {
    rank: 4,
    name: 'MEDITECH',
    company: 'MEDITECH',
    rating: 3.9,
    reviews: 134,
    pricing: '$50K-$500K+ implementation',
    bestFor: 'Community hospitals in US',
    pros: [
      'More affordable than Epic/Cerner',
      'Good for mid-size hospitals',
      'Established vendor',
    ],
    cons: [
      'Interface feels dated',
      'Limited global support',
      'Ongoing licensing fees',
    ],
    url: null,
    featured: false,
  },
  {
    rank: 5,
    name: 'Allscripts',
    company: 'Veradigm (Allscripts)',
    rating: 3.7,
    reviews: 98,
    pricing: '$25K-$200K+ implementation',
    bestFor: 'Small-medium US practices',
    pros: [
      'Lower entry cost',
      'Ambulatory focused',
      'Open architecture',
    ],
    cons: [
      'Multiple product lines confusing',
      'Integration challenges',
      'Customer support issues reported',
    ],
    url: null,
    featured: false,
  },
];

const comparisonFactors = [
  { factor: 'One-Time Pricing', hospitalos: true, others: false },
  { factor: 'Offline Capability', hospitalos: true, others: false },
  { factor: 'Implementation Time', hospitalos: '1-2 weeks', others: '6-36 months' },
  { factor: 'Total Cost (3 years)', hospitalos: '$999-$5,000', others: '$100K-$10M+' },
  { factor: '25+ Integrated Modules', hospitalos: true, others: 'Extra Cost' },
  { factor: 'Telemedicine Included', hospitalos: true, others: 'Extra Cost' },
  { factor: 'Global Multi-Language', hospitalos: true, others: 'Limited' },
  { factor: 'Small Clinic Friendly', hospitalos: true, others: false },
];

export default function BestHospitalSoftwarePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Hospital Management Software 2026 - Top 5 Compared',
    description: 'Compare the best hospital management systems for 2026. Features, pricing, pros and cons of HospitalOS, Epic, Cerner, MEDITECH, and more.',
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
        name: 'What is the best hospital management software in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HospitalOS is rated the best hospital management software for 2026 for value and features, offering 25+ modules with one-time pricing from $999. For large US hospital networks with unlimited budgets, Epic remains the market leader but costs $500K-$5M+.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does hospital management software cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hospital software costs vary dramatically: HospitalOS offers one-time licensing from $999-$2,999, while enterprise solutions like Epic cost $500K-$5M+ for implementation plus ongoing fees. Mid-market options like MEDITECH range from $50K-$500K.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best HMS for small hospitals and clinics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HospitalOS is the best choice for small hospitals and clinics due to its affordable one-time pricing ($999 basic), quick implementation (1-2 weeks), and comprehensive features including EMR, OPD, IPD, lab, and billing modules.',
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
            2026 Comparison Guide
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
            Best Hospital Management Software 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We compared the top hospital management systems based on features, pricing, implementation time, and customer reviews. Find the best HMS for your facility.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 2026 • Based on 750+ user reviews
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Best Value: HospitalOS</h2>
          <p className="text-blue-100 mb-6">
            Best hospital software for features, affordability, and global coverage
          </p>
          <Link
            href="/hospitalos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all"
          >
            Learn More About HospitalOS
            <ArrowOutwardIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-12 text-center">
            Top 5 Hospital Management Systems
          </h2>

          <div className="space-y-8">
            {softwareList.map((software) => (
              <div
                key={software.rank}
                className={`rounded-2xl border-2 p-6 md:p-8 ${
                  software.featured
                    ? 'border-blue-600 bg-blue-50/50 shadow-lg'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Rank Badge */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-extrabold ${
                    software.featured ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    #{software.rank}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{software.name}</h3>
                      {software.featured && (
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                          BEST VALUE
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
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all"
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
            Feature & Cost Comparison
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-blue-600">HospitalOS</th>
                  <th className="text-center p-4 font-semibold text-gray-500">Enterprise HMS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFactors.map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-4 text-gray-700">{row.factor}</td>
                    <td className="p-4 text-center">
                      {row.hospitalos === true ? (
                        <CheckCircleIcon className="w-6 h-6 text-green-600 mx-auto" />
                      ) : (
                        <span className="text-blue-600 font-semibold">{row.hospitalos}</span>
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the best hospital management software in 2026?</h3>
              <p className="text-gray-600">HospitalOS is rated the best hospital management software for 2026 for value and features, offering 25+ modules with one-time pricing from $999. For large US hospital networks with unlimited budgets, Epic remains the market leader but costs $500K-$5M+.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How much does hospital management software cost?</h3>
              <p className="text-gray-600">Hospital software costs vary dramatically: HospitalOS offers one-time licensing from $999-$2,999 with optional annual maintenance, while enterprise solutions like Epic cost $500K-$5M+ for implementation plus ongoing fees. Mid-market options like MEDITECH range from $50K-$500K.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the best HMS for small hospitals and clinics?</h3>
              <p className="text-gray-600">HospitalOS is the best choice for small hospitals and clinics due to its affordable one-time pricing ($999 basic), quick implementation (1-2 weeks), and comprehensive features including EMR, OPD, IPD, lab, and billing modules.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does hospital software implementation take?</h3>
              <p className="text-gray-600">Implementation time varies greatly: HospitalOS can be implemented in 1-2 weeks, while enterprise systems like Epic or Cerner typically take 12-36 months. Mid-market solutions usually require 3-12 months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-6">
            Ready to Transform Your Hospital?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            See why hospitals worldwide choose HospitalOS
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-full shadow-lg hover:bg-blue-50 transition-all"
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
