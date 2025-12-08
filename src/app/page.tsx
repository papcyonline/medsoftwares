'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

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

const screenshots = [
  {
    src: '/screenshots/dashboard.png',
    title: 'Real-Time Dashboard',
    description: 'Sales trends, inventory value, revenue charts, and business insights at a glance.',
    color: 'from-[#166534] to-green-700',
  },
  {
    src: '/screenshots/sales.png',
    title: 'Sales & Credit Tracking',
    description: 'Track transactions, manage credit sales, and monitor payment status in real-time.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    src: '/screenshots/inventory.png',
    title: 'Smart Inventory',
    description: 'Track stock levels, batch numbers, expiry dates with automatic low-stock alerts.',
    color: 'from-amber-500 to-amber-700',
  },
  {
    src: '/screenshots/reports.png',
    title: 'Detailed Reports',
    description: 'Comprehensive profit analysis, transaction history, and exportable reports.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    src: '/screenshots/mobilemoney.png',
    title: 'Mobile Money Integration',
    description: 'Accept MTN, Vodafone, Airtel, M-Pesa, Orange Money, Wave, and more.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    src: '/screenshots/currency.png',
    title: 'Multi-Currency Support',
    description: 'Support for GHS, NGN, KES, TZS, UGX, ZAR, CFA and more African currencies.',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    src: '/screenshots/language.png',
    title: 'Multi-Language Support',
    description: 'Available in English, French, Arabic, Swahili, Portuguese, and Hausa.',
    color: 'from-indigo-500 to-pink-600',
  },
];

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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[80vh] md:min-h-screen flex items-center justify-center bg-[#166534] pt-20 md:pt-24 pb-40 md:pb-72 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 md:top-20 left-5 md:left-10 w-40 md:w-72 h-40 md:h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-52 md:w-96 h-52 md:h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-white tracking-tight mb-4 md:mb-6">
            Manage Your Pharmacy
            <span className="block text-green-200">Smarter, Not Harder</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto px-2 mb-8 md:mb-10">
            Transform your healthcare operations with intelligent software that automates inventory, boosts sales, and delivers real-time insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#166534] text-base md:text-lg font-bold rounded-full shadow-lg shadow-black/20 hover:bg-green-50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a Demo
              <ArrowOutwardIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white text-base md:text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              Learn More
              <ArrowOutwardIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Floating Hero Image - 70% in hero, 30% below */}
      <div className="relative z-20 -mt-32 md:-mt-56 mb-10 md:mb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-lg md:rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/hero image.png"
              alt="MedSoftware Dashboard"
              width={800}
              height={450}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* What It Can Do Section */}
      <section id="features" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-gray-900 mb-4 md:mb-6">
              What Our Software Can Do
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
              A complete pharmacy management solution built for African healthcare providers.
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

            {/* Feature 4 - Prescriptions */}
            <div className="group relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#166534] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Prescriptions</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Manage prescriptions, patient records, drug interactions, and NHIS integration.</p>
            </div>

            {/* Feature 5 - Credit Sales */}
            <div className="group relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#166534] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Credit Sales</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Track customer credit accounts, payment status, and outstanding balances.</p>
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

      {/* Workflow Section */}
      <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-[#166534]/10 text-[#166534] text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4">
              Seamless Integration
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-gray-900 mb-4 md:mb-6">
              How It All Connects
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Four roles, one unified system. Watch how data flows seamlessly across your pharmacy.
            </p>
          </div>

          {/* Desktop Workflow */}
          <div className="hidden lg:block">
            <div className="relative max-w-6xl mx-auto">
              {/* Central Connection Hub with Logo - Higher z-index to be in front of lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-[#166534]/5 rounded-full flex items-center justify-center" style={{zIndex: 5}}>
                <div className="w-28 h-28 bg-[#166534]/10 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg shadow-[#166534]/20 flex items-center justify-center p-2">
                    <Image
                      src="/logo.png"
                      alt="MedSoftware"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Connection Lines SVG with Animated Lights - Next.js Style */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}} viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
                <defs>
                  {/* Gradient for lines */}
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e5e7eb" />
                    <stop offset="100%" stopColor="#d1d5db" />
                  </linearGradient>

                  {/* Glow filters for animated dots */}
                  <filter id="glow-amber" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="glow-blue" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="glow-green" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="glow-purple" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Path definitions - 4 SEPARATE lines from logo */}
                {/* Store Keeper: from center, go UP-LEFT diagonally a bit, then bend LEFT */}
                <path id="path-storekeeper" d="M 500 300 L 420 200 L 180 200" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                {/* Pharmacist: from center, go UP-RIGHT diagonally a bit, then bend RIGHT */}
                <path id="path-pharmacist" d="M 500 300 L 580 200 L 820 200" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                {/* Cashier: from center, go DOWN-LEFT diagonally a bit, then bend LEFT */}
                <path id="path-cashier" d="M 500 300 L 420 400 L 180 400" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                {/* Admin: from center, go DOWN-RIGHT diagonally a bit, then bend RIGHT */}
                <path id="path-admin" d="M 500 300 L 580 400 L 820 400" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />

                {/* Animated dot - Store Keeper (Amber) */}
                <circle r="5" fill="#f59e0b" filter="url(#glow-amber)">
                  <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1">
                    <mpath href="#path-storekeeper" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" />
                </circle>
                {/* Trail effect */}
                <circle r="3" fill="#fbbf24" opacity="0.6">
                  <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="0.1s">
                    <mpath href="#path-storekeeper" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="0.1s" />
                </circle>

                {/* Animated dot - Pharmacist (Blue) */}
                <circle r="5" fill="#3b82f6" filter="url(#glow-blue)">
                  <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="0.6s">
                    <mpath href="#path-pharmacist" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
                </circle>
                {/* Trail effect */}
                <circle r="3" fill="#60a5fa" opacity="0.6">
                  <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="0.7s">
                    <mpath href="#path-pharmacist" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="0.7s" />
                </circle>

                {/* Animated dot - Cashier (Green) */}
                <circle r="5" fill="#22c55e" filter="url(#glow-green)">
                  <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="1.2s">
                    <mpath href="#path-cashier" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
                </circle>
                {/* Trail effect */}
                <circle r="3" fill="#4ade80" opacity="0.6">
                  <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="1.3s">
                    <mpath href="#path-cashier" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="1.3s" />
                </circle>

                {/* Animated dot - Admin (Purple) */}
                <circle r="5" fill="#8b5cf6" filter="url(#glow-purple)">
                  <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="1.8s">
                    <mpath href="#path-admin" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="1.8s" />
                </circle>
                {/* Trail effect */}
                <circle r="3" fill="#a78bfa" opacity="0.6">
                  <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="1.9s">
                    <mpath href="#path-admin" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="1.9s" />
                </circle>

                {/* Return path animations - from center back to cards */}
                {/* Return to Store Keeper */}
                <circle r="4" fill="#166534">
                  <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="2s" keyPoints="1;0" keyTimes="0;1">
                    <mpath href="#path-storekeeper" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="2s" />
                </circle>

                {/* Return to Pharmacist */}
                <circle r="4" fill="#166534">
                  <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="2.5s" keyPoints="1;0" keyTimes="0;1">
                    <mpath href="#path-pharmacist" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="2.5s" />
                </circle>

                {/* Return to Cashier */}
                <circle r="4" fill="#166534">
                  <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="3s" keyPoints="1;0" keyTimes="0;1">
                    <mpath href="#path-cashier" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="3s" />
                </circle>

                {/* Return to Admin */}
                <circle r="4" fill="#166534">
                  <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="3.5s" keyPoints="1;0" keyTimes="0;1">
                    <mpath href="#path-admin" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="3.5s" />
                </circle>
              </svg>

              {/* Workflow Cards Grid */}
              <div className="grid grid-cols-2 gap-x-64 gap-y-12 relative" style={{zIndex: 1}}>

                {/* Store Keeper - Top Left */}
                <div className="flex justify-start">
                  <div className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 max-w-xs">
                    <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/storekeeper.jpg"
                          alt="Store Keeper"
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4 mt-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center overflow-hidden">
                        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Store Keeper</h3>
                        <span className="text-xs text-amber-600 font-medium">Inventory Manager</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Manages stock levels, receives deliveries, and releases inventory to the pharmacy floor.</p>
                    <div className="mt-4 flex items-center gap-2 text-amber-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Releases stock to Pharmacist</span>
                    </div>
                  </div>
                </div>

                {/* Pharmacist - Top Right */}
                <div className="flex justify-end">
                  <div className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 max-w-xs">
                    <div className="absolute -top-5 -right-5 w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-0.5 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/pharmacist.jpg"
                          alt="Pharmacist"
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4 mt-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center overflow-hidden">
                        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Pharmacist</h3>
                        <span className="text-xs text-blue-600 font-medium">Customer Service</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Serves customers, processes prescriptions, and prepares medication orders for checkout.</p>
                    <div className="mt-4 flex items-center gap-2 text-blue-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Sends sales to Cashier</span>
                    </div>
                  </div>
                </div>

                {/* Cashier - Bottom Left */}
                <div className="flex justify-start">
                  <div className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 max-w-xs">
                    <div className="absolute -bottom-5 -left-5 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-0.5 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/cashier.jpg"
                          alt="Cashier"
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center overflow-hidden">
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Cashier</h3>
                        <span className="text-xs text-green-600 font-medium">Payment Handler</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Processes payments, handles mobile money transactions, and prints customer receipts.</p>
                    <div className="mt-4 flex items-center gap-2 text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Completes transactions</span>
                    </div>
                  </div>
                </div>

                {/* Admin - Bottom Right */}
                <div className="flex justify-end">
                  <div className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 max-w-xs">
                    <div className="absolute -bottom-5 -right-5 w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 p-0.5 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/admin.jpg"
                          alt="Admin"
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center overflow-hidden">
                        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Admin</h3>
                        <span className="text-xs text-purple-600 font-medium">System Oversight</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Monitors all activities, views comprehensive reports, and manages system settings.</p>
                    <div className="mt-4 flex items-center gap-2 text-purple-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Real-time monitoring</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile Workflow */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-blue-400 via-green-400 to-purple-400"></div>

              <div className="space-y-6 sm:space-y-8">
                {/* Store Keeper */}
                <div className="relative flex gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/30 flex-shrink-0 z-10">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/storekeeper.jpg"
                        alt="Store Keeper"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-100 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Store Keeper</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Manages inventory and releases stock to pharmacy</p>
                    <div className="mt-2 sm:mt-3 flex items-center gap-2 text-amber-600">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Releases stock</span>
                    </div>
                  </div>
                </div>

                {/* Pharmacist */}
                <div className="relative flex gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-0.5 shadow-lg shadow-blue-500/30 flex-shrink-0 z-10">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/pharmacist.jpg"
                        alt="Pharmacist"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-100 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Pharmacist</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Serves customers and prepares medication orders</p>
                    <div className="mt-2 sm:mt-3 flex items-center gap-2 text-blue-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Sends to cashier</span>
                    </div>
                  </div>
                </div>

                {/* Cashier */}
                <div className="relative flex gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-0.5 shadow-lg shadow-green-500/30 flex-shrink-0 z-10">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/cashier.jpg"
                        alt="Cashier"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-100 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Cashier</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Processes payments and prints receipts</p>
                    <div className="mt-2 sm:mt-3 flex items-center gap-2 text-green-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Completes payment</span>
                    </div>
                  </div>
                </div>

                {/* Admin */}
                <div className="relative flex gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 p-0.5 shadow-lg shadow-purple-500/30 flex-shrink-0 z-10">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/admin.jpg"
                        alt="Admin"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-100 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Admin</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Monitors all activities and views reports</p>
                    <div className="mt-2 sm:mt-3 flex items-center gap-2 text-purple-600">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Real-time oversight</span>
                    </div>
                  </div>
                </div>
              </div>
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
            <p className="text-base md:text-xl text-green-100 max-w-2xl mx-auto px-4">
              A clean, intuitive interface designed for busy pharmacy professionals.
            </p>
          </div>
        </div>

        {/* Full Width Carousel */}
        <div className="relative">
          {/* Gradient Overlays for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-[#166534] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-[#166534] to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Container */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
            {screenshots.map((slide, index) => {
              const isPrev = index === (currentSlide - 1 + screenshots.length) % screenshots.length;
              const isNext = index === (currentSlide + 1) % screenshots.length;
              const isCurrent = index === currentSlide;

              return (
                <div
                  key={index}
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
                      <div className="relative rounded-lg md:rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                        {/* Browser Header */}
                        <div className="bg-white/90 backdrop-blur-sm px-2 py-2 md:px-4 md:py-3 flex items-center gap-2 md:gap-3 border-b border-gray-200">
                          <div className="flex gap-1 md:gap-2">
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex-1 flex justify-center">
                            <div className="bg-gray-100 rounded px-2 py-0.5 md:rounded-lg md:px-4 md:py-1 text-xs md:text-sm text-gray-600 font-medium">
                              PharmaPOS
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
            {screenshots.map((_, index) => (
              <button
                key={index}
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
              Join thousands of pharmacies across the globe who trust PharmaPOS to run their business.
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
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-1 md:mb-2">2,500+</div>
              <div className="text-green-200 text-xs md:text-sm font-medium">Active Pharmacies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-1 md:mb-2">45+</div>
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
                    <a href="mailto:hello@medsoftware.com" className="text-white font-semibold hover:underline">hello@medsoftware.com</a>
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
                    <a href="tel:+233200000000" className="text-white font-semibold hover:underline">+233 20 000 0000</a>
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
                    <p className="text-white font-semibold">Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Demo Form */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2">Book a Free Demo</h3>
              <p className="text-gray-600 text-sm md:text-base mb-6">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

              <form className="space-y-4 md:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all text-sm md:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@pharmacy.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+233 20 000 0000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="pharmacyName" className="block text-sm font-medium text-gray-700 mb-1.5">Pharmacy Name</label>
                  <input
                    type="text"
                    id="pharmacyName"
                    placeholder="Your Pharmacy Ltd."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your pharmacy and what you're looking for..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all resize-none text-sm md:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#166534] text-white font-bold rounded-xl shadow-lg shadow-green-900/20 hover:bg-[#14532d] hover:shadow-xl transition-all duration-200 group"
                >
                  Book My Free Demo
                  <ArrowOutwardIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <p className="text-center text-xs text-gray-500">
                  By submitting, you agree to our{' '}
                  <a href="#" className="text-[#166534] hover:underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#" className="text-[#166534] hover:underline">Terms of Service</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-900">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/logo.png"
                  alt="MedSoftware Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-heading font-extrabold tracking-tight text-gray-900">
                  MedSoftware
                </span>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                Empowering pharmacies worldwide with intelligent software solutions. Streamline operations, boost sales, and deliver better healthcare.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 hover:bg-[#166534] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 hover:bg-[#166534] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 hover:bg-[#166534] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 hover:bg-[#166534] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 hover:bg-[#166534] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Products</h4>
              <ul className="space-y-3">
                <li><a href="/pharmapos" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">PharmaPOS</a></li>
                <li><a href="/hospix" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">Hospix (HMS)</a></li>
                <li><a href="#features" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">Pricing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">Partners</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">Video Tutorials</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">Contact Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#166534] transition-colors text-sm">System Status</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} MedSoftware. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <a href="#" className="text-gray-500 hover:text-[#166534] transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-[#166534] transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-[#166534] transition-colors text-sm">Cookie Policy</a>
                <a href="#" className="text-gray-500 hover:text-[#166534] transition-colors text-sm">GDPR</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
