'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Footer from '@/components/Footer';
import DemoForm from '@/components/DemoForm';

const testimonials = [
  // Row 1 - Left to Right
  {
    name: 'Kwame Asante',
    role: 'Owner, Asante Pharmacy',
    location: 'Accra, Ghana',
    initials: 'KA',
    quote: 'PharmaPOS transformed our pharmacy operations. We reduced checkout time by 60% and inventory errors are now a thing of the past.',
    color: 'from-[#166534] to-green-600',
    bgColor: 'from-green-50',
    borderColor: 'border-green-100',
    textColor: 'text-[#166534]',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Director, HealthFirst Pharmacy',
    location: 'London, UK',
    initials: 'SM',
    quote: 'The multi-currency support is brilliant. We serve international customers and PharmaPOS handles every currency seamlessly.',
    color: 'from-blue-500 to-blue-700',
    bgColor: 'from-blue-50',
    borderColor: 'border-blue-100',
    textColor: 'text-blue-600',
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Pharmacist, Farmacia Central',
    location: 'Mexico City, Mexico',
    initials: 'CR',
    quote: 'Incredible inventory tracking! We never run out of essential medications now. The expiry alerts have saved us thousands.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50',
    borderColor: 'border-amber-100',
    textColor: 'text-amber-600',
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, MedPlus Chain',
    location: 'Mumbai, India',
    initials: 'PS',
    quote: 'Managing 15 branches from one dashboard is a dream come true. Real-time sync across all locations keeps us efficient.',
    color: 'from-purple-500 to-purple-700',
    bgColor: 'from-purple-50',
    borderColor: 'border-purple-100',
    textColor: 'text-purple-600',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Owner, Al-Shifa Pharmacy',
    location: 'Dubai, UAE',
    initials: 'AH',
    quote: 'The Arabic language support and local payment integrations make it perfect for our region. Highly recommended!',
    color: 'from-teal-500 to-teal-700',
    bgColor: 'from-teal-50',
    borderColor: 'border-teal-100',
    textColor: 'text-teal-600',
  },
  {
    name: 'Marie Dubois',
    role: 'Manager, Pharmacie Moderne',
    location: 'Paris, France',
    initials: 'MD',
    quote: 'French language support and intuitive interface made training a breeze. My team was up and running in just hours.',
    color: 'from-rose-500 to-rose-700',
    bgColor: 'from-rose-50',
    borderColor: 'border-rose-100',
    textColor: 'text-rose-600',
  },
  {
    name: 'David Kim',
    role: 'Pharmacist, Seoul Med Pharmacy',
    location: 'Seoul, South Korea',
    initials: 'DK',
    quote: 'The prescription management system is exceptional. It integrates perfectly with our healthcare protocols.',
    color: 'from-indigo-500 to-indigo-700',
    bgColor: 'from-indigo-50',
    borderColor: 'border-indigo-100',
    textColor: 'text-indigo-600',
  },
  {
    name: 'Fatou Diallo',
    role: 'Manager, Pharmacie Centrale',
    location: 'Dakar, Senegal',
    initials: 'FD',
    quote: 'Credit management was our biggest challenge. Now our outstanding payments dropped by 80% in just 3 months!',
    color: 'from-cyan-500 to-cyan-700',
    bgColor: 'from-cyan-50',
    borderColor: 'border-cyan-100',
    textColor: 'text-cyan-600',
  },
  {
    name: 'Michael O\'Brien',
    role: 'Owner, Dublin Pharmacy',
    location: 'Dublin, Ireland',
    initials: 'MO',
    quote: 'Support team is fantastic! Any issue we have is resolved within hours. They truly care about their customers.',
    color: 'from-emerald-500 to-emerald-700',
    bgColor: 'from-emerald-50',
    borderColor: 'border-emerald-100',
    textColor: 'text-emerald-600',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Director, Tokyo Health Pharmacy',
    location: 'Tokyo, Japan',
    initials: 'YT',
    quote: 'Barcode scanning and batch tracking are incredibly accurate. We\'ve eliminated manual errors completely.',
    color: 'from-pink-500 to-pink-700',
    bgColor: 'from-pink-50',
    borderColor: 'border-pink-100',
    textColor: 'text-pink-600',
  },
  // Row 2 - Right to Left
  {
    name: 'Adaeze Nwosu',
    role: 'CEO, HealthPlus Pharmacies',
    location: 'Lagos, Nigeria',
    initials: 'AN',
    quote: 'Managing 3 pharmacy branches used to be a nightmare. With PharmaPOS, I can monitor all locations from my phone.',
    color: 'from-blue-500 to-blue-700',
    bgColor: 'from-blue-50',
    borderColor: 'border-blue-100',
    textColor: 'text-blue-600',
  },
  {
    name: 'Hans Mueller',
    role: 'Pharmacist, Apotheke Berlin',
    location: 'Berlin, Germany',
    initials: 'HM',
    quote: 'The reporting module is comprehensive. We make better business decisions with real-time data analytics.',
    color: 'from-slate-500 to-slate-700',
    bgColor: 'from-slate-50',
    borderColor: 'border-slate-100',
    textColor: 'text-slate-600',
  },
  {
    name: 'Joseph Mutua',
    role: 'Pharmacist, Dawa Pharmacy',
    location: 'Nairobi, Kenya',
    initials: 'JM',
    quote: 'The expiry date tracking alone has saved us thousands. We no longer lose money on expired medications.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50',
    borderColor: 'border-amber-100',
    textColor: 'text-amber-600',
  },
  {
    name: 'Isabella Santos',
    role: 'Owner, Farmacia Popular',
    location: 'Sao Paulo, Brazil',
    initials: 'IS',
    quote: 'Portuguese language support and local currency handling make it feel like it was built just for us!',
    color: 'from-green-500 to-green-700',
    bgColor: 'from-green-50',
    borderColor: 'border-green-100',
    textColor: 'text-green-600',
  },
  {
    name: 'James Thompson',
    role: 'Director, MediCare Pharmacy',
    location: 'Sydney, Australia',
    initials: 'JT',
    quote: 'Cloud-based system means I can check on my pharmacy from anywhere. The mobile app is a game-changer.',
    color: 'from-sky-500 to-sky-700',
    bgColor: 'from-sky-50',
    borderColor: 'border-sky-100',
    textColor: 'text-sky-600',
  },
  {
    name: 'Amina Okonkwo',
    role: 'Owner, Unity Pharmacy',
    location: 'Abuja, Nigeria',
    initials: 'AO',
    quote: 'They helped us migrate from our old system in just 2 days. Truly a partner, not just a vendor.',
    color: 'from-rose-500 to-rose-700',
    bgColor: 'from-rose-50',
    borderColor: 'border-rose-100',
    textColor: 'text-rose-600',
  },
  {
    name: 'Chen Wei',
    role: 'Manager, Beijing Med Center',
    location: 'Beijing, China',
    initials: 'CW',
    quote: 'Multi-user access with role permissions keeps our operations secure and organized. Very impressed!',
    color: 'from-red-500 to-red-700',
    bgColor: 'from-red-50',
    borderColor: 'border-red-100',
    textColor: 'text-red-600',
  },
  {
    name: 'Emmanuel Mensah',
    role: 'Director, MedCare Pharmacy',
    location: 'Kumasi, Ghana',
    initials: 'EM',
    quote: 'The multi-language support is fantastic! My staff speaks different languages and everyone can use it comfortably.',
    color: 'from-teal-500 to-teal-700',
    bgColor: 'from-teal-50',
    borderColor: 'border-teal-100',
    textColor: 'text-teal-600',
  },
  {
    name: 'Anna Kowalski',
    role: 'Pharmacist, Warsaw Pharmacy',
    location: 'Warsaw, Poland',
    initials: 'AK',
    quote: 'Excellent value for money. We upgraded from expensive legacy software and saved 40% on annual costs.',
    color: 'from-violet-500 to-violet-700',
    bgColor: 'from-violet-50',
    borderColor: 'border-violet-100',
    textColor: 'text-violet-600',
  },
  {
    name: 'Robert van der Berg',
    role: 'Owner, Amsterdam Apotheek',
    location: 'Amsterdam, Netherlands',
    initials: 'RB',
    quote: 'The customer loyalty program integration helped us retain 30% more customers. Brilliant feature!',
    color: 'from-orange-500 to-orange-700',
    bgColor: 'from-orange-50',
    borderColor: 'border-orange-100',
    textColor: 'text-orange-600',
  },
];

const pharmaPOSScreenshots = [
  {
    src: '/screenshots/dashboard.png',
    title: 'Real-Time Dashboard',
    description: 'Sales trends, inventory value, revenue charts, and business insights at a glance.',
  },
  {
    src: '/screenshots/sales.png',
    title: 'Sales & Credit Tracking',
    description: 'Track transactions, manage credit sales, and monitor payment status in real-time.',
  },
  {
    src: '/screenshots/inventory.png',
    title: 'Smart Inventory',
    description: 'Track stock levels, batch numbers, expiry dates with automatic low-stock alerts.',
  },
  {
    src: '/screenshots/reports.png',
    title: 'Detailed Reports',
    description: 'Comprehensive profit analysis, transaction history, and exportable reports.',
  },
  {
    src: '/screenshots/mobilemoney.png',
    title: 'Mobile Money Integration',
    description: 'Accept MTN, Vodafone, Airtel, M-Pesa, Orange Money, Wave, and more.',
  },
  {
    src: '/screenshots/currency.png',
    title: 'Multi-Currency Support',
    description: 'Support for USD, EUR, GBP, GHS, NGN, KES, TZS, UGX, ZAR, CFA and more.',
  },
  {
    src: '/screenshots/language.png',
    title: 'Multi-Language Support',
    description: 'Available in English, French, Arabic, Swahili, Portuguese, and Hausa.',
  },
];

const hospitalOSScreenshots = [
  {
    src: '/screenshots/hospitalos/admin-dashboard.png',
    title: 'Admin Dashboard',
    description: 'Real-time hospital metrics, department workload, revenue analytics, and bed occupancy.',
  },
  {
    src: '/screenshots/hospitalos/patients.png',
    title: 'Patient Management',
    description: 'Comprehensive patient records, visit history, vitals tracking, and medical history.',
  },
  {
    src: '/screenshots/hospitalos/laboratory.png',
    title: 'Laboratory Module',
    description: 'Manage test orders, sample tracking, results entry, and automated reporting.',
  },
  {
    src: '/screenshots/hospitalos/analytics.png',
    title: 'Analytics & Reports',
    description: 'Department performance, revenue trends, patient statistics, and custom reports.',
  },
  {
    src: '/screenshots/hospitalos/user-management.png',
    title: 'User & Role Management',
    description: '11+ user roles with granular permissions for doctors, nurses, lab techs, and staff.',
  },
];

type ProductType = 'pharmapos' | 'hospitalos';

const productScreenshots = {
  pharmapos: pharmaPOSScreenshots,
  hospitalos: hospitalOSScreenshots,
};

const faqs = [
  {
    question: 'How long does it take to set up PharmaPOS?',
    answer: 'Most pharmacies are up and running within 24-48 hours. Our team handles the complete setup including data migration from your existing system, staff training, and initial configuration. We ensure zero downtime during the transition.',
  },
  {
    question: 'Can I use PharmaPOS offline?',
    answer: 'Yes! PharmaPOS works seamlessly offline. All transactions are stored locally and automatically sync when you reconnect to the internet. You will never lose a sale due to connectivity issues.',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'We support cash, card payments, mobile money (MTN, Vodafone, Airtel, M-Pesa, Orange Money, Wave), bank transfers, and credit sales. You can also split payments across multiple methods for a single transaction.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level 256-bit SSL encryption, daily automated backups, and store data on secure cloud servers. Your data is compliant with healthcare data protection standards and you maintain full ownership.',
  },
  {
    question: 'Can I manage multiple pharmacy branches?',
    answer: 'Yes! Our multi-branch feature lets you manage unlimited locations from a single dashboard. You can view consolidated reports, transfer stock between branches, and set branch-specific pricing and permissions.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 customer support via phone, email, and live chat. Every customer gets a dedicated account manager. We also provide free training sessions, video tutorials, and a comprehensive knowledge base.',
  },
  {
    question: 'Can I try PharmaPOS before purchasing?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can also book a personalized demo where we will show you exactly how PharmaPOS can work for your pharmacy.',
  },
  {
    question: 'How does the expiry tracking work?',
    answer: 'PharmaPOS automatically tracks expiry dates for all inventory items. You will receive alerts 90, 60, and 30 days before expiration. The system also suggests FEFO (First Expiry, First Out) during sales to minimize waste.',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProduct, setActiveProduct] = useState<ProductType>('pharmapos');

  const activeScreenshots = productScreenshots[activeProduct];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % activeScreenshots.length);
  }, [activeScreenshots.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + activeScreenshots.length) % activeScreenshots.length);
  }, [activeScreenshots.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const switchProduct = (product: ProductType) => {
    if (product !== activeProduct) {
      setActiveProduct(product);
      setCurrentSlide(0);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 1000);
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // JSON-LD Structured Data
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MedSoftware',
    url: 'https://medsoftwares.com',
    logo: 'https://medsoftwares.com/logo.png',
    description: 'Healthcare software solutions for pharmacies and hospitals worldwide.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21 Chartfield Drive, Kirby-Le-Soken',
      addressLocality: 'Frinton-On-Sea',
      addressRegion: 'England',
      postalCode: 'CO13 0DR',
      addressCountry: 'United Kingdom',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+9715677266520',
      contactType: 'sales',
      email: 'info@medsoftwares.com',
      availableLanguage: ['English', 'French'],
    },
    sameAs: [
      'https://facebook.com/medsoftwares',
      'https://twitter.com/medsoftwares',
      'https://linkedin.com/company/medsoftwares',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MedSoftware',
    url: 'https://medsoftwares.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://medsoftwares.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MedSoftware Suite',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Windows, macOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Contact for pricing',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#166534] to-green-700 pt-24 md:pt-32 pb-20 md:pb-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight mb-6">
              Healthcare Management
              <span className="block text-green-200">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Complete software solutions for pharmacies and hospitals worldwide. One-time purchase, lifetime value.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* PharmaPOS Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#166534] to-green-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-extrabold text-gray-900">PharmaPOS</h2>
                  <p className="text-sm text-gray-600 font-medium">Pharmacy Management System</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete POS solution for pharmacies. Manage inventory, process sales, track prescriptions, and integrate mobile money payments.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Point of Sale & Inventory
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Mobile Money Integration
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-Branch Support
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Reports & Analytics
                </div>
              </div>
              <div className="flex justify-center pt-6 border-t border-gray-200">
                <a
                  href="/pharmapos"
                  className="group/btn inline-flex items-center gap-2 px-8 py-3 bg-[#166534] text-white font-semibold rounded-full hover:bg-[#14532d] transition-all duration-200"
                >
                  Learn More
                  <ArrowOutwardIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* HospitalOS Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#166534] to-green-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-extrabold text-gray-900">HospitalOS</h2>
                  <p className="text-sm text-gray-600 font-medium">Hospital Management System</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete operating system for hospitals. Manage 25+ departments, from OPD to ICU, with real-time patient flow tracking.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  25+ Integrated Modules
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Patient Queue Management
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Lab & Radiology Integration
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  11+ User Roles & Permissions
                </div>
              </div>
              <div className="flex justify-center pt-6 border-t border-gray-200">
                <a
                  href="/hospitalos"
                  className="group/btn inline-flex items-center gap-2 px-8 py-3 bg-[#166534] text-white font-semibold rounded-full hover:bg-[#14532d] transition-all duration-200"
                >
                  Learn More
                  <ArrowOutwardIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-green-100 mb-4 text-lg">Not sure which solution you need?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#166534] font-bold rounded-full shadow-lg hover:bg-green-50 hover:-translate-y-0.5 transition-all duration-200"
            >
              Talk to Our Team
              <ArrowOutwardIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-[#166534] mb-2">25+</div>
              <div className="text-gray-600 font-medium">Healthcare Facilities</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-[#166534] mb-2">12</div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-[#166534] mb-2">98%</div>
              <div className="text-gray-600 font-medium">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-[#166534] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
              Why Healthcare Providers Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of pharmacies and hospitals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Windows & Mac</h3>
              <p className="text-gray-600 leading-relaxed">
                Runs seamlessly on both Windows and Mac computers. Choose your preferred platform.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick setup in minutes. Simple installation process with step-by-step guidance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Offline & Online</h3>
              <p className="text-gray-600 leading-relaxed">
                Works offline without internet and syncs when online. Uninterrupted operations guaranteed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built for Global Healthcare</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-currency, mobile money integration, and support for 6+ languages to serve diverse markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations & Payments Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider">
              Integrated Payment Solutions
            </p>
          </div>

          {/* Payment Logos - Scrolling on mobile, static on desktop */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for mobile scroll */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden"></div>

            <div className="flex items-center justify-start md:justify-center gap-8 md:gap-12 lg:gap-16 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
              {/* MTN Mobile Money */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFCC00] rounded-2xl flex items-center justify-center">
                  <span className="text-black font-bold text-lg md:text-xl">MTN</span>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">MTN MoMo</span>
              </div>

              {/* Vodafone Cash */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#E60000] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-base">Vodafone</span>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">Vodafone Cash</span>
              </div>

              {/* AirtelTigo */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF0000] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-base">Airtel</span>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">AirtelTigo</span>
              </div>

              {/* M-Pesa */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00A650] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-base">M-PESA</span>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">M-Pesa</span>
              </div>

              {/* Visa */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1A1F71] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg md:text-xl italic">VISA</span>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">Visa Card</span>
              </div>

              {/* Mastercard */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#EB001B] to-[#F79E1B] rounded-2xl flex items-center justify-center">
                  <div className="flex">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-[#EB001B] rounded-full -mr-2"></div>
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-[#F79E1B] rounded-full opacity-80"></div>
                  </div>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">Mastercard</span>
              </div>

              {/* Bank Transfer */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">Bank Transfer</span>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6 md:mt-8">
            And many more payment methods across Africa
          </p>
        </div>
      </section>

      {/* What It Can Do Section */}
      <section id="features" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-gray-900 mb-4 md:mb-6">
              Powerful Features for Every Healthcare Need
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
              From pharmacy management to complete hospital operations, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {/* Feature 1 - POS */}
            <div className="group relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#166534] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Point of Sale</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Fast checkout with barcode scanning, multi-unit pricing, and receipt printing.</p>
            </div>

            {/* Feature 2 - Mobile Money */}
            <div className="group relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#166534] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Mobile Money</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Accept MTN, Vodafone, Airtel, M-Pesa, Orange Money, Wave, and more.</p>
            </div>

            {/* Feature 3 - Inventory */}
            <div className="group relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#166534] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Inventory</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Track stock levels, expiry dates, batch numbers, and get low-stock alerts.</p>
            </div>

            {/* Feature 4 - Patient Management */}
            <div className="group relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#166534] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Patient Management</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Comprehensive patient records, visit history, vitals tracking, and NHIS integration.</p>
            </div>

            {/* Feature 5 - Lab & Radiology */}
            <div className="group relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#166534] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Lab & Radiology</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Integrated lab tests, imaging requests, results tracking, and report generation.</p>
            </div>

            {/* Feature 6 - Reports */}
            <div className="group relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#166534] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Analytics</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Sales trends, staff performance, inventory valuation, and expense tracking.</p>
            </div>

            {/* Feature 7 - Multi-Branch */}
            <div className="group relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#166534] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Multi-Branch</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Connect multiple workstations and branches with real-time sync.</p>
            </div>

            {/* Feature 8 - User Roles */}
            <div className="group relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#166534] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">User Roles</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Admin, Pharmacist, Cashier, and Storekeeper roles with access control.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Before vs After Comparison Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-[#166534]/10 text-[#166534] text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4">
              The Difference
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-4 md:mb-6">
              Before &amp; After MedSoftware
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              See how healthcare facilities transform their operations with our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Before Card */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-red-100 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">BEFORE</span>
              </div>
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Manual Methods</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600">Paper records prone to loss and errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600">Hours spent counting inventory manually</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600">Expired medications discovered too late</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600">No visibility into sales or profit margins</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600">Credit customers hard to track</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600">Staff errors and potential theft undetected</span>
                </li>
              </ul>
            </div>

            {/* After Card */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-green-200 relative overflow-hidden shadow-lg shadow-green-100/50">
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <span className="px-3 py-1 bg-green-100 text-[#166534] text-xs font-bold rounded-full">AFTER</span>
              </div>
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">With MedSoftware</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#166534] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Digital records with automatic cloud backup</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#166534] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Real-time inventory tracking with barcode scanning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#166534] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Automatic expiry alerts 90, 60, 30 days ahead</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#166534] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Complete sales reports and profit analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#166534] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Credit management with payment reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#166534] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">User roles with audit trail for every action</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results Stats */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-gray-100">
              <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-[#166534] mb-1">60%</div>
              <p className="text-xs md:text-sm text-gray-600">Faster Checkout</p>
            </div>
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-gray-100">
              <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-[#166534] mb-1">80%</div>
              <p className="text-xs md:text-sm text-gray-600">Less Inventory Loss</p>
            </div>
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-gray-100">
              <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-[#166534] mb-1">5hrs</div>
              <p className="text-xs md:text-sm text-gray-600">Saved Per Week</p>
            </div>
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-gray-100">
              <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-[#166534] mb-1">100%</div>
              <p className="text-xs md:text-sm text-gray-600">Transaction Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section - Full Width Carousel */}
      <section className="py-16 md:py-24 bg-[#166534] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
          <div className="text-center">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-white/20 text-green-100 text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4">
              See It In Action
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 md:mb-6">
              Powerful Yet Simple
            </h2>
            <p className="text-base md:text-xl text-green-100 max-w-2xl mx-auto px-4 mb-8">
              Clean, intuitive interfaces designed for busy healthcare professionals.
            </p>

            {/* Product Tabs */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1.5">
              <button
                onClick={() => switchProduct('pharmapos')}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeProduct === 'pharmapos'
                    ? 'bg-white text-[#166534] shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  PharmaPOS
                </span>
              </button>
              <button
                onClick={() => switchProduct('hospitalos')}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeProduct === 'hospitalos'
                    ? 'bg-white text-[#166534] shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  HospitalOS
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Full Width Carousel */}
        <div className="relative">
          {/* Gradient Overlays for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-[#166534] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-[#166534] to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Container */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
            {activeScreenshots.map((slide, index) => {
              const isPrev = index === (currentSlide - 1 + activeScreenshots.length) % activeScreenshots.length;
              const isNext = index === (currentSlide + 1) % activeScreenshots.length;
              const isCurrent = index === currentSlide;

              return (
                <div
                  key={`${activeProduct}-${index}`}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    isCurrent
                      ? 'opacity-100 scale-100 z-[5]'
                      : isPrev
                      ? 'opacity-30 scale-90 sm:scale-95 -translate-x-[15%] sm:-translate-x-[20%] z-[1]'
                      : isNext
                      ? 'opacity-30 scale-90 sm:scale-95 translate-x-[15%] sm:translate-x-[20%] z-[1]'
                      : 'opacity-0 scale-90 z-0'
                  }`}
                >
                  <div className="h-full flex items-center justify-center px-8 sm:px-12 md:px-16 lg:px-20">
                    <div className="relative w-full max-w-6xl">
                      {/* Browser Frame */}
                      <div className={`relative rounded-lg md:rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ${
                        activeProduct === 'hospitalos' ? 'flex' : ''
                      }`}>
                        {/* HospitalOS Sidebar */}
                        {activeProduct === 'hospitalos' && (
                          <div className="hidden md:flex w-12 lg:w-14 bg-[#1e293b] flex-col items-center py-3 gap-2">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 rounded-lg"></div>
                            <div className="flex-1 flex flex-col gap-2 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-6 h-6 lg:w-8 lg:h-8 bg-white/5 rounded-lg mx-auto"></div>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="flex-1">
                          {/* Browser Header */}
                          <div className={`px-2 py-2 md:px-4 md:py-3 flex items-center gap-2 md:gap-3 border-b ${
                            activeProduct === 'hospitalos'
                              ? 'bg-[#1e293b] border-slate-700'
                              : 'bg-white/90 backdrop-blur-sm border-gray-200'
                          }`}>
                            <div className="flex gap-1 md:gap-2">
                              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 flex justify-center">
                              <div className={`rounded px-2 py-0.5 md:rounded-lg md:px-4 md:py-1 text-xs md:text-sm font-medium ${
                                activeProduct === 'hospitalos'
                                  ? 'bg-slate-700 text-slate-300'
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                {activeProduct === 'pharmapos' ? 'PharmaPOS' : 'HospitalOS'}
                              </div>
                            </div>
                          </div>
                          {/* Screenshot */}
                          <div className="relative aspect-[16/9] bg-gray-100">
                            <Image
                              src={slide.src}
                              alt={slide.title}
                              fill
                              className="object-cover object-top"
                              priority={index === 0}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 5000); }}
            className="absolute left-1 sm:left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 5000); }}
            className="absolute right-1 sm:right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 md:gap-2">
            {activeScreenshots.map((_, index) => (
              <button
                key={`${activeProduct}-dot-${index}`}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-6 h-2 md:w-8 md:h-3 bg-white'
                    : 'w-2 h-2 md:w-3 md:h-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-[#166534]/10 text-[#166534] text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4">
              Trusted Worldwide
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-gray-900 mb-4 md:mb-6">
              What Our Customers Say
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Join thousands of healthcare facilities across the globe who trust our software to run their operations.
            </p>
          </div>
        </div>

        {/* Scrolling Testimonials - Row 1 (Left to Right) */}
        <div className="relative mb-6">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-left">
            {/* First set */}
            {testimonials.slice(0, 10).map((t, index) => (
              <div
                key={`row1-${index}`}
                className={`flex-shrink-0 w-[320px] md:w-[400px] mx-3 bg-gradient-to-br ${t.bgColor} to-white p-5 md:p-6 rounded-2xl border ${t.borderColor} hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  &quot;{t.quote}&quot;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                    <p className={`${t.textColor} text-xs font-medium`}>{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.slice(0, 10).map((t, index) => (
              <div
                key={`row1-dup-${index}`}
                className={`flex-shrink-0 w-[320px] md:w-[400px] mx-3 bg-gradient-to-br ${t.bgColor} to-white p-5 md:p-6 rounded-2xl border ${t.borderColor} hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  &quot;{t.quote}&quot;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                    <p className={`${t.textColor} text-xs font-medium`}>{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Testimonials - Row 2 (Right to Left) */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-right">
            {/* First set */}
            {testimonials.slice(10, 20).map((t, index) => (
              <div
                key={`row2-${index}`}
                className={`flex-shrink-0 w-[320px] md:w-[400px] mx-3 bg-gradient-to-br ${t.bgColor} to-white p-5 md:p-6 rounded-2xl border ${t.borderColor} hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  &quot;{t.quote}&quot;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                    <p className={`${t.textColor} text-xs font-medium`}>{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.slice(10, 20).map((t, index) => (
              <div
                key={`row2-dup-${index}`}
                className={`flex-shrink-0 w-[320px] md:w-[400px] mx-3 bg-gradient-to-br ${t.bgColor} to-white p-5 md:p-6 rounded-2xl border ${t.borderColor} hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  &quot;{t.quote}&quot;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                    <p className={`${t.textColor} text-xs font-medium`}>{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-6 md:p-10 bg-gradient-to-r from-[#166534] to-green-700 rounded-2xl md:rounded-3xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-1 md:mb-2">25+</div>
              <div className="text-green-200 text-xs md:text-sm font-medium">Active Pharmacies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-1 md:mb-2">12</div>
              <div className="text-green-200 text-xs md:text-sm font-medium">Countries Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-1 md:mb-2">10M+</div>
              <div className="text-green-200 text-xs md:text-sm font-medium">Transactions/Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-1 md:mb-2">99.9%</div>
              <div className="text-green-200 text-xs md:text-sm font-medium">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-[#166534]/10 text-[#166534] text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-gray-900 mb-4 md:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Everything you need to know about PharmaPOS. Can&apos;t find what you&apos;re looking for? Contact our support team.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`
                  bg-white rounded-2xl border transition-all duration-300
                  ${openFaq === index ? 'border-[#166534]/30 shadow-lg shadow-green-900/5' : 'border-gray-200 hover:border-gray-300'}
                `}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className={`text-base md:text-lg font-semibold pr-4 ${openFaq === index ? 'text-[#166534]' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`
                      flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300
                      ${openFaq === index ? 'bg-[#166534] text-white rotate-180' : 'bg-gray-100 text-gray-600'}
                    `}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-10 md:mt-12 text-center p-6 md:p-8 bg-white rounded-2xl border border-gray-200">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#166534] font-semibold hover:underline"
            >
              Contact our support team
              <ArrowOutwardIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#166534] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-white/20 text-green-100 text-xs md:text-sm font-semibold rounded-full mb-4 md:mb-6">
                Get Started Today
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6">
                Ready to Transform Your Pharmacy?
              </h2>
              <p className="text-lg md:text-xl text-green-100 mb-8 md:mb-10">
                Book a free demo and see how PharmaPOS can streamline your operations, boost sales, and save you time.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-200 text-sm">Email us</p>
                    <a href="mailto:info@medsoftwares.com" className="text-white font-semibold hover:underline">info@medsoftwares.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-200 text-sm">Call us</p>
                    <a href="tel:+9715677266520" className="text-white font-semibold hover:underline">+971 567 726 6520</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-200 text-sm">Visit us</p>
                    <p className="text-white font-semibold">Frinton-On-Sea, England</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Demo Form */}
            <DemoForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
