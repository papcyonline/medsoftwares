'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const regions = [
  {
    name: 'North America',
    countries: ['United States', 'Canada', 'Mexico'],
    features: ['FDA compliance ready', 'Insurance integrations', 'Multi-location support'],
  },
  {
    name: 'Europe',
    countries: ['United Kingdom', 'Germany', 'France', 'Netherlands'],
    features: ['GDPR compliant', 'Multi-currency', 'EU pharmacy regulations'],
  },
  {
    name: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait'],
    features: ['Arabic language support', 'VAT compliant', 'Local payment methods'],
  },
  {
    name: 'Asia Pacific',
    countries: ['India', 'Singapore', 'Malaysia', 'Philippines'],
    features: ['GST/VAT support', 'Multi-language', 'Local integrations'],
  },
  {
    name: 'Africa',
    countries: ['Ghana', 'Nigeria', 'Kenya', 'South Africa'],
    features: ['Mobile money (MTN, M-Pesa)', 'NHIS/NHIF integration', 'Offline capability'],
  },
  {
    name: 'Latin America',
    countries: ['Brazil', 'Argentina', 'Colombia', 'Chile'],
    features: ['Spanish/Portuguese', 'Local tax compliance', 'Regional payments'],
  },
];

const features = [
  {
    title: 'Point of Sale',
    description: 'Fast checkout with barcode scanning, multiple payment methods, and receipt printing.',
  },
  {
    title: 'Inventory Management',
    description: 'Real-time stock tracking, expiry alerts, automatic reorder points, and batch management.',
  },
  {
    title: 'Prescription Management',
    description: 'Digital prescriptions, refill tracking, drug interaction checks, and patient history.',
  },
  {
    title: 'Multi-Branch Support',
    description: 'Manage multiple pharmacy locations from a single dashboard with stock transfers.',
  },
  {
    title: 'Offline Capability',
    description: 'Continue operations without internet. Data syncs automatically when connected.',
  },
  {
    title: 'Reports & Analytics',
    description: 'Sales reports, profit margins, inventory analysis, and custom business insights.',
  },
];

const testimonials = [
  {
    quote: 'PharmaPOS transformed how we manage our pharmacy. The inventory tracking alone saved us thousands.',
    author: 'Sarah Mitchell',
    role: 'Pharmacy Owner',
    location: 'London, UK',
  },
  {
    quote: 'The offline capability is essential for our location. We never miss a sale even during outages.',
    author: 'Kwame Asante',
    role: 'Head Pharmacist',
    location: 'Accra, Ghana',
  },
  {
    quote: 'Managing 5 branches from one system has streamlined our entire operation.',
    author: 'Dr. Priya Sharma',
    role: 'Pharmacy Chain Owner',
    location: 'Mumbai, India',
  },
];

export default function PharmacySoftwarePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PharmaPOS - Global Pharmacy Management Software',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Pharmacy Management Software',
    description: 'Comprehensive pharmacy management software for pharmacies worldwide. Features POS, inventory management, prescription tracking, and multi-branch support.',
    operatingSystem: 'Windows, macOS, Linux',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '299',
      highPrice: '899',
      priceCurrency: 'USD',
      offerCount: '3',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
    },
    featureList: [
      'Point of Sale (POS)',
      'Inventory Management',
      'Prescription Management',
      'Multi-Branch Support',
      'Offline Capability',
      'Barcode Scanning',
      'Expiry Tracking',
      'Reports & Analytics',
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-6">
                Pharmacy Software
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
                Pharmacy Management Software for the World
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                PharmaPOS is trusted by pharmacies across 6 continents. From single-location pharmacies to multi-branch chains, manage your entire operation with one powerful system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#166534] text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-700 transition-all"
                >
                  Get Free Demo
                  <ArrowOutwardIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-full hover:border-[#166534] hover:text-[#166534] transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-4 border">
                <Image
                  src="/screenshots/dashboard.png"
                  alt="PharmaPOS Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-4">
              Pharmacy Software for Every Region
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Localized features, multi-currency support, and compliance with regional regulations worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <div key={region.name} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{region.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{region.countries.join(' • ')}</p>
                <ul className="space-y-2">
                  {region.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircleIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-4">
              Everything You Need to Run Your Pharmacy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive features designed for modern pharmacies of all sizes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-4">
            Affordable One-Time Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            One-time license fee with optional annual maintenance for updates and support.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-4xl font-extrabold text-[#166534] mb-4">$299</div>
              <p className="text-gray-600 text-sm">Single location, core features</p>
            </div>
            <div className="bg-[#166534] rounded-2xl p-8 text-white transform scale-105">
              <h3 className="text-lg font-bold mb-2">Standard</h3>
              <div className="text-4xl font-extrabold mb-4">$499</div>
              <p className="text-green-100 text-sm">Multi-branch, advanced reports</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Premium</h3>
              <div className="text-4xl font-extrabold text-[#166534] mb-4">$899</div>
              <p className="text-gray-600 text-sm">Enterprise features, priority support</p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 mt-10 text-[#166534] font-semibold hover:underline"
          >
            See full pricing details
            <ArrowOutwardIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-4">
              Trusted by Pharmacies Worldwide
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-[#166534]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-extrabold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the best pharmacy software?</h3>
              <p className="text-gray-600">The best pharmacy software depends on your needs, but PharmaPOS is highly rated for its comprehensive features, offline capability, global payment support, and affordable one-time pricing. It serves pharmacies in North America, Europe, Asia, Middle East, Africa, and Latin America.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How much does pharmacy management software cost?</h3>
              <p className="text-gray-600">PharmaPOS costs $299-$899 as a one-time license fee, with an optional annual maintenance fee for updates and support. Most competitors charge $50-200 per month, meaning PharmaPOS saves you significantly over time.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Does PharmaPOS work internationally?</h3>
              <p className="text-gray-600">Yes, PharmaPOS works worldwide with multi-currency support, multiple languages, regional tax compliance, and local payment integrations including mobile money, card payments, and bank transfers.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can pharmacy software work offline?</h3>
              <p className="text-gray-600">Yes, PharmaPOS has full offline capability. You can process sales, manage inventory, and run your pharmacy without internet. Data automatically syncs when connectivity is restored.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/faq" className="text-[#166534] font-semibold hover:underline">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-6">
            Ready to Modernize Your Pharmacy?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Join pharmacies worldwide using PharmaPOS to streamline operations and increase profits.
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
              href="/pharmapos"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
