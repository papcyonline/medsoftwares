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
    features: ['HIPAA compliant', 'HL7 FHIR support', 'Insurance integrations'],
  },
  {
    name: 'Europe',
    countries: ['United Kingdom', 'Germany', 'France', 'Spain'],
    features: ['GDPR compliant', 'NHS compatible', 'EU healthcare standards'],
  },
  {
    name: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman'],
    features: ['Arabic interface', 'MOH compliance', 'Islamic calendar support'],
  },
  {
    name: 'Asia Pacific',
    countries: ['India', 'Singapore', 'Thailand', 'Indonesia'],
    features: ['Multi-language', 'Regional insurance', 'Government schemes'],
  },
  {
    name: 'Africa',
    countries: ['Ghana', 'Nigeria', 'Kenya', 'South Africa'],
    features: ['NHIS/NHIF integration', 'Offline capability', 'Mobile money'],
  },
  {
    name: 'Latin America',
    countries: ['Brazil', 'Argentina', 'Mexico', 'Colombia'],
    features: ['Spanish/Portuguese', 'SUS integration', 'Regional compliance'],
  },
];

const modules = [
  { name: 'Patient Registration', description: 'Complete patient demographics and medical history' },
  { name: 'OPD Management', description: 'Outpatient scheduling, queuing, and consultations' },
  { name: 'IPD Management', description: 'Inpatient admissions, bed management, and discharge' },
  { name: 'Emergency Care', description: 'Triage, critical care tracking, and emergency protocols' },
  { name: 'Electronic Medical Records', description: 'Complete EMR with clinical notes and diagnoses' },
  { name: 'Laboratory (LIS)', description: 'Test orders, sample tracking, and result delivery' },
  { name: 'Radiology (RIS)', description: 'Imaging orders, PACS integration, and reports' },
  { name: 'Pharmacy', description: 'Drug dispensing, formulary, and prescription management' },
  { name: 'Billing & Finance', description: 'Patient billing, insurance claims, and accounting' },
  { name: 'Human Resources', description: 'Staff management, scheduling, and payroll' },
  { name: 'Inventory', description: 'Medical supplies, equipment, and procurement' },
  { name: 'Telemedicine', description: 'Video consultations and remote patient monitoring' },
];

const testimonials = [
  {
    quote: 'HospitalOS helped us digitize our entire hospital. The implementation was smooth and support is excellent.',
    author: 'Dr. Ahmed Hassan',
    role: 'Medical Director',
    location: 'Dubai, UAE',
  },
  {
    quote: 'We manage 3 facilities with HospitalOS. The centralized reporting saves us hours every week.',
    author: 'Marie Dubois',
    role: 'Hospital Administrator',
    location: 'Paris, France',
  },
  {
    quote: 'The offline capability ensures we never lose patient data even during power outages.',
    author: 'Dr. David Kim',
    role: 'Chief Medical Officer',
    location: 'Seoul, South Korea',
  },
];

export default function HospitalSoftwarePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'HospitalOS - Global Hospital Management System',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Hospital Management System',
    description: 'Comprehensive hospital management software for healthcare facilities worldwide. 25+ integrated modules including EMR, OPD, IPD, Laboratory, Radiology, and Billing.',
    operatingSystem: 'Windows, macOS, Linux, Web',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '999',
      highPrice: '2999',
      priceCurrency: 'USD',
      offerCount: '3',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      ratingCount: '85',
      bestRating: '5',
    },
    featureList: [
      'Electronic Medical Records (EMR)',
      'Outpatient Department (OPD)',
      'Inpatient Department (IPD)',
      'Laboratory Management (LIS)',
      'Radiology Management (RIS)',
      'Pharmacy Management',
      'Billing & Insurance',
      'Human Resources',
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
                Hospital Software
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
                Hospital Management Software for Healthcare Worldwide
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                HospitalOS is a complete hospital management system with 25+ integrated modules. From small clinics to large medical centers, manage every aspect of your healthcare facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all"
                >
                  Get Free Demo
                  <ArrowOutwardIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-4 border">
                <Image
                  src="/screenshots/hospitalos/admin-dashboard.png"
                  alt="HospitalOS Dashboard"
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
              Hospital Software for Every Region
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compliant with healthcare regulations worldwide. Multi-language, multi-currency, and locally adapted.
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
                      <CheckCircleIcon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-4">
              25+ Integrated Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a modern hospital, fully integrated in one system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module) => (
              <div key={module.name} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold text-gray-900 mb-1">{module.name}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-4">
            Affordable Hospital Software
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            One-time license fee with optional annual maintenance for updates and support.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-4xl font-extrabold text-blue-600 mb-4">$999</div>
              <p className="text-gray-600 text-sm">Small clinics, core modules</p>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white transform scale-105">
              <h3 className="text-lg font-bold mb-2">Professional</h3>
              <div className="text-4xl font-extrabold mb-4">$1,999</div>
              <p className="text-blue-100 text-sm">Full modules, multi-department</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-4xl font-extrabold text-blue-600 mb-4">$2,999</div>
              <p className="text-gray-600 text-sm">Unlimited users, multi-facility</p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 mt-10 text-blue-600 font-semibold hover:underline"
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
              Trusted by Healthcare Facilities Worldwide
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.location}</p>
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the best hospital management software?</h3>
              <p className="text-gray-600">HospitalOS is rated among the best hospital management systems for its comprehensive 25+ modules, affordable one-time pricing, and global compliance. It serves hospitals across North America, Europe, Asia, Middle East, Africa, and Latin America.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How much does hospital management software cost?</h3>
              <p className="text-gray-600">HospitalOS costs $999-$2,999 as a one-time license fee, with an optional annual maintenance fee for updates and support. Unlike competitors charging $500-2,000 monthly, you save significantly over time.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Does HospitalOS include EMR/EHR?</h3>
              <p className="text-gray-600">Yes, HospitalOS includes a comprehensive Electronic Medical Records (EMR) system with patient history, clinical notes, diagnoses, lab results, imaging reports, and prescription management.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can hospital software integrate with lab equipment?</h3>
              <p className="text-gray-600">Yes, HospitalOS supports HL7 FHIR standards and provides APIs for integration with laboratory equipment, imaging systems, and other medical devices.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/faq" className="text-blue-600 font-semibold hover:underline">
              View all FAQs →
            </Link>
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
            Join healthcare facilities worldwide using HospitalOS to improve patient care and operational efficiency.
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
              href="/hospitalos"
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
