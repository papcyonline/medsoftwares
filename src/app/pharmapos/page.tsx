'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Footer from '@/components/Footer';
import { pharmaPOSJsonLd } from './metadata';

const screenshots = [
  {
    src: '/screenshots/dashboard.png',
    title: 'Dashboard',
    description: 'Real-time overview of sales, inventory, and key metrics at a glance.',
    badge: 'Admin View',
    badgeColor: 'text-[#166534]',
  },
  {
    src: '/screenshots/sales.png',
    title: 'Point of Sale',
    description: 'Lightning-fast checkout with barcode scanning and keyboard shortcuts.',
    badge: 'Cashier View',
    badgeColor: 'text-[#166534]',
  },
  {
    src: '/screenshots/inventory.png',
    title: 'Inventory Management',
    description: 'Complete stock control with batch tracking and expiry alerts.',
    badge: 'Store Keeper',
    badgeColor: 'text-teal-600',
  },
  {
    src: '/screenshots/reports.png',
    title: 'Sales Reports',
    description: 'Detailed analytics, profit margins, and business insights.',
    badge: 'Analytics',
    badgeColor: 'text-violet-600',
  },
  {
    src: '/screenshots/mobilemoney.png',
    title: 'Mobile Money',
    description: 'Accept payments from MTN, Vodafone, Airtel, M-Pesa, and more.',
    badge: 'Payments',
    badgeColor: 'text-orange-600',
  },
  {
    src: '/screenshots/currency.png',
    title: 'Multi-Currency',
    description: 'Support for multiple currencies with automatic conversion.',
    badge: 'Global',
    badgeColor: 'text-rose-600',
  },
];

// All features from the actual PharmaPOS software
const salesFeatures = [
  {
    name: 'Point of Sale',
    description: 'Lightning-fast checkout with intuitive interface, barcode scanning, and keyboard shortcuts for efficient sales processing.',
    details: ['Barcode scanner support', 'Quick product search', 'Keyboard shortcuts', 'Cart management'],
  },
  {
    name: 'Multi-Unit Pricing',
    description: 'Sell products by piece, card, or box with automatic price calculations and flexible unit conversions.',
    details: ['Piece/Card/Box pricing', 'Auto price calculation', 'Unit conversion', 'Custom units'],
  },
  {
    name: 'Pending Sales Queue',
    description: 'Pharmacist prepares orders, sends to cashier queue for payment processing - perfect workflow separation.',
    details: ['Order preparation', 'Cashier queue', 'Status tracking', 'Priority handling'],
  },
  {
    name: 'Credit Sales',
    description: 'Track customer credit accounts with payment history, due dates, and automatic balance calculations.',
    details: ['Credit limits', 'Payment tracking', 'Due date alerts', 'Balance history'],
  },
  {
    name: 'Returns Management',
    description: 'Process returns and exchanges with full audit trail, stock restoration, and refund tracking.',
    details: ['Return reasons', 'Stock restoration', 'Refund processing', 'Audit logging'],
  },
  {
    name: 'Receipt Printing',
    description: 'Professional thermal receipt printing with customizable templates, logo, and footer messages.',
    details: ['Thermal printer support', 'Custom templates', 'Logo printing', 'Tax display'],
  },
];

const inventoryFeatures = [
  {
    name: 'Medicine Catalog',
    description: 'Comprehensive medicine database with generic names, categories, dosage forms, and prescription requirements.',
    details: ['Generic names', 'Drug categories', 'Dosage forms', 'Manufacturer info'],
  },
  {
    name: 'Stock Management',
    description: 'Real-time stock tracking across store and pharmacy counter with automatic reorder level alerts.',
    details: ['Real-time quantities', 'Location tracking', 'Reorder levels', 'Stock valuation'],
  },
  {
    name: 'Batch & Expiry',
    description: 'Track batch numbers and expiry dates with automatic alerts for expiring products.',
    details: ['Batch tracking', 'Expiry alerts', 'FEFO handling', 'Lot numbers'],
  },
  {
    name: 'Shelf Management',
    description: 'Organize products by physical shelf location for quick retrieval and efficient inventory management.',
    details: ['Shelf locations', 'Bin numbers', 'Quick lookup', 'Location labels'],
  },
  {
    name: 'Stock Transfers',
    description: 'Transfer stock between main store and pharmacy counter with approval workflow and tracking.',
    details: ['Request workflow', 'Approval system', 'Transfer history', 'Quantity tracking'],
  },
  {
    name: 'Purchase Orders',
    description: 'Create and manage purchase orders with supplier tracking, receiving, and cost management.',
    details: ['PO creation', 'Supplier selection', 'Receiving', 'Cost tracking'],
  },
];

const pharmacyFeatures = [
  {
    name: 'Prescriptions',
    description: 'Manage prescriptions with patient info, prescriber details, refill tracking, and dispensing history.',
    details: ['Prescription entry', 'Refill tracking', 'Prescriber info', 'Dispensing log'],
  },
  {
    name: 'Patient Records',
    description: 'Comprehensive patient profiles with medical history, allergies, chronic conditions, and medication history.',
    details: ['Medical history', 'Drug allergies', 'Chronic conditions', 'Medication list'],
  },
  {
    name: 'Drug Interactions',
    description: 'Check for drug-drug interactions with severity levels: mild, moderate, severe, and contraindicated.',
    details: ['Interaction checker', 'Severity levels', 'Recommendations', 'Reference sources'],
  },
  {
    name: 'Controlled Substances',
    description: 'Track Schedule I-V controlled substances with witness logs, prescriber verification, and DEA compliance.',
    details: ['Schedule I-V tracking', 'Witness logging', 'Balance tracking', 'Audit reports'],
  },
  {
    name: 'Label Printing',
    description: 'Print professional prescription labels with patient info, dosage instructions, and warnings.',
    details: ['Label templates', 'Dosage instructions', 'Warning labels', 'Barcode printing'],
  },
  {
    name: 'Insurance/NHIS',
    description: 'Process insurance claims for NHIS, private insurance, and corporate plans with claim tracking.',
    details: ['NHIS integration', 'Claim submission', 'Reimbursement tracking', 'Co-pay calculation'],
  },
];

const adminFeatures = [
  {
    name: 'Sales Reports',
    description: 'Comprehensive sales analytics with daily, weekly, monthly reports and profit analysis.',
    details: ['Daily summaries', 'Trend analysis', 'Profit margins', 'Top products'],
  },
  {
    name: 'User Management',
    description: 'Role-based access control with 5 roles: Super Admin, Admin, Store Keeper, Pharmacist, and Cashier.',
    details: ['5 user roles', 'Custom permissions', 'Activity tracking', 'Session management'],
  },
  {
    name: 'Multi-Branch',
    description: 'Connect multiple pharmacy branches with real-time data sync and inter-branch stock transfers.',
    details: ['Branch management', 'Data sync', 'Stock transfers', 'Consolidated reports'],
  },
  {
    name: 'Audit Trail',
    description: 'Complete activity logging for compliance, tracking all user actions with timestamps.',
    details: ['Action logging', 'User tracking', 'Time stamps', 'Export capability'],
  },
  {
    name: 'Expense Tracking',
    description: 'Track business expenses by category with reporting and budget management.',
    details: ['Expense categories', 'Receipt upload', 'Monthly reports', 'Budget tracking'],
  },
  {
    name: 'Supplier Management',
    description: 'Manage supplier information, payment terms, credit limits, and purchase history.',
    details: ['Supplier profiles', 'Payment terms', 'Credit management', 'Order history'],
  },
];

const paymentMethods = [
  { name: 'MTN Mobile Money', logo: '/images/momo/mtn.svg' },
  { name: 'Vodafone Cash', logo: '/images/momo/vodafone.svg' },
  { name: 'Airtel Money', logo: '/images/momo/airtel.svg' },
  { name: 'Orange Money', logo: '/images/momo/orange.svg' },
  { name: 'M-Pesa', logo: '/images/momo/mpesa.svg' },
  { name: 'Wave', logo: '/images/momo/wave.svg' },
  { name: 'Telecel Cash', logo: '/images/momo/telecel.svg' },
  { name: 'Moov Money', logo: '/images/momo/moov.svg' },
];

const userRoles = [
  {
    role: 'Admin',
    description: 'Full system access with management dashboard and all permissions',
    image: '/admin.jpg',
  },
  {
    role: 'Store Keeper',
    description: 'Inventory management, stock transfers, and purchase orders',
    image: '/storekeeper.jpg',
  },
  {
    role: 'Pharmacist',
    description: 'Sales preparation, prescriptions, and pharmacy operations',
    image: '/pharmacist.jpg',
  },
  {
    role: 'Cashier',
    description: 'Payment processing, checkout, and customer service',
    image: '/cashier.jpg',
  },
];

const stats = [
  { value: '30+', label: 'Features' },
  { value: '4', label: 'User Roles' },
  { value: '8+', label: 'Payment Methods' },
  { value: '100%', label: 'Offline Capable' },
];

function FeatureSection({
  title,
  subtitle,
  features,
  id,
  bgColor = 'bg-white'
}: {
  title: string;
  subtitle: string;
  features: typeof salesFeatures;
  id: string;
  bgColor?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              id={feature.name.toLowerCase().replace(/\s+/g, '-')}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-[#166534] mb-4 group-hover:bg-[#166534] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
              <ul className="space-y-1.5">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PharmaPOSPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmaPOSJsonLd) }}
      />

      <main itemScope itemType="https://schema.org/SoftwareApplication">
        <meta itemProp="name" content="PharmaPOS" />
        <meta itemProp="applicationCategory" content="Pharmacy Management Software" />

        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#166534] via-[#15803d] to-[#14532d] pt-24 md:pt-32 pb-20 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-5"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-white/20 text-green-100 text-sm font-semibold rounded-full mb-6 backdrop-blur-sm">
                  Complete Pharmacy Management System
                </span>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6"
                  itemProp="name"
                >
                  PharmaPOS
                </h1>
                <p
                  className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed max-w-xl"
                  itemProp="description"
                >
                  The complete pharmacy management solution built for pharmacies worldwide. Streamline sales, manage inventory, track prescriptions, process insurance claims, and accept mobile money payments - all in one powerful system.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#166534] text-lg font-bold rounded-full shadow-lg hover:bg-green-50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Book a Free Demo
                    <ArrowOutwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/hero-image.png"
                    alt="PharmaPOS Dashboard showing sales analytics and inventory overview"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                    priority
                    itemProp="screenshot"
                  />
                </div>
                {/* Floating feature badges */}
                <div className="absolute -left-4 top-1/4 bg-white rounded-xl p-3 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Offline Ready</span>
                  </div>
                </div>
                <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl p-3 shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Mobile Money</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-heading font-extrabold text-[#166534] mb-1">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Carousel */}
        <section className="py-16 md:py-24 bg-[#166534] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
            <div className="text-center">
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-white/20 text-green-100 text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4">
                See It In Action
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 md:mb-6">
                Software Screenshots
              </h2>
              <p className="text-base md:text-xl text-green-100 max-w-2xl mx-auto px-4">
                Designed for speed and ease of use. Every screen optimized for pharmacy workflows.
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
                          <div className="bg-[#14532d] px-2 py-2 md:px-4 md:py-3 flex items-center gap-2 md:gap-3 border-b border-[#166534]">
                            <div className="flex gap-1 md:gap-2">
                              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 flex justify-center">
                              <div className="bg-[#166534] rounded px-2 py-0.5 md:rounded-lg md:px-4 md:py-1 text-xs md:text-sm text-gray-300 font-medium">
                                PharmaPOS - {slide.title}
                              </div>
                            </div>
                            <div className={`hidden sm:block px-2 py-0.5 bg-white/10 rounded text-xs font-medium ${slide.badgeColor}`}>
                              {slide.badge}
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
                        {/* Caption */}
                        <div className={`text-center mt-4 md:mt-6 transition-opacity duration-500 ${isCurrent ? 'opacity-100' : 'opacity-0'}`}>
                          <h3 className="text-white font-bold text-lg md:text-2xl mb-2">{slide.title}</h3>
                          <p className="text-green-100 text-sm md:text-base max-w-xl mx-auto">{slide.description}</p>
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

          {/* Feature highlights below carousel */}
          <div className="max-w-4xl mx-auto mt-8 md:mt-12 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/10">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-green-100">Module Screens</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-green-100">User Roles</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10">
                <div className="text-2xl font-bold text-white">Dark</div>
                <div className="text-sm text-green-100">Sidebar Theme</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10">
                <div className="text-2xl font-bold text-white">Clean</div>
                <div className="text-sm text-green-100">Modern UI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-4">
                Watch Demo
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-4">
                See PharmaPOS in Action
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Watch how PharmaPOS streamlines pharmacy operations from sales to inventory management.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/MufbRP7jO-Q?rel=0"
                  title="PharmaPOS Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#166534] text-white font-semibold rounded-full hover:bg-[#14532d] transition-colors"
              >
                Request a Personalized Demo
                <ArrowOutwardIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section id="features" className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200 sticky top-[72px] z-30">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide" aria-label="Feature sections">
              {[
                { label: 'Sales & POS', href: '#sales-pos' },
                { label: 'Inventory', href: '#inventory' },
                { label: 'Pharmacy', href: '#pharmacy' },
                { label: 'Administration', href: '#administration' },
                { label: 'Payments', href: '#payments' },
                { label: 'User Roles', href: '#user-roles' },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-full border border-gray-200 hover:border-green-300 hover:text-[#166534] hover:bg-green-50 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        {/* Sales & POS Features */}
        <FeatureSection
          id="sales-pos"
          title="Sales & Point of Sale"
          subtitle="Fast, efficient checkout with everything you need to process sales quickly and accurately."
          features={salesFeatures}
          bgColor="bg-white"
        />

        {/* Inventory Features */}
        <FeatureSection
          id="inventory"
          title="Inventory Management"
          subtitle="Complete stock control from purchase to sale with real-time tracking and automated alerts."
          features={inventoryFeatures}
          bgColor="bg-gray-50"
        />

        {/* Pharmacy Operations Features */}
        <FeatureSection
          id="pharmacy"
          title="Pharmacy Operations"
          subtitle="Professional pharmacy features for prescriptions, patient care, and regulatory compliance."
          features={pharmacyFeatures}
          bgColor="bg-white"
        />

        {/* Administration Features */}
        <FeatureSection
          id="administration"
          title="Administration & Reports"
          subtitle="Powerful management tools for insights, compliance, and business growth."
          features={adminFeatures}
          bgColor="bg-gray-50"
        />

        {/* Mobile Money Payments Section */}
        <section id="payments" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-4">
                Built for Africa
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-4">
                Accept Mobile Money Payments
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Integrated with all major mobile money providers across Africa for seamless payment processing.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-green-50 transition-colors">
                    <span className="text-2xl font-bold text-gray-400">{method.name.charAt(0)}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-600">{method.name}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Collection</h3>
                  <p className="text-gray-600 text-sm">Customers pay with their mobile phones - no special equipment needed.</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Transactions</h3>
                  <p className="text-gray-600 text-sm">All transactions are recorded with reference numbers for full traceability.</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Automatic Recording</h3>
                  <p className="text-gray-600 text-sm">Payment details automatically added to receipts and reports.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Roles Section */}
        <section id="user-roles" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-4">
                Role-Based Access Control
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Four specialized user roles with custom dashboards and granular permissions for secure operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {userRoles.map((role, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all group"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={role.image}
                      alt={`${role.role} using PharmaPOS`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{role.role}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Desktop Software Highlight */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full mb-6">
                  Desktop Application
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-6">
                  True Offline-First Software
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
                  Unlike web-based systems, PharmaPOS is a native desktop application built for speed, reliability, and 100% offline operation. Your pharmacy never stops working.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">Lightning Fast</h3>
                      <p className="text-gray-400 text-sm">Native performance with instant response times, no browser lag.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">Offline Ready</h3>
                      <p className="text-gray-400 text-sm">Full functionality without internet, auto-sync when online.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">Secure & Private</h3>
                      <p className="text-gray-400 text-sm">Local data storage, no cloud dependency, complete control.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/Mockup.png"
                    alt="PharmaPOS running on desktop computer"
                    width={700}
                    height={500}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-green-500/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Integration with HospitalOS */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/Mockup 2.png"
                  alt="PharmaPOS on multiple devices"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-4">
                  Seamless Integration
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                  Connect with HospitalOS
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  PharmaPOS integrates seamlessly with HospitalOS for automated prescription fulfillment, real-time inventory sync, and unified billing across your healthcare facility.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Electronic prescription transfer from doctors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Real-time inventory synchronization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Unified billing and patient records</span>
                  </li>
                </ul>
                <Link
                  href="/hospitalos"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#166534] text-white font-semibold rounded-full hover:bg-[#14532d] transition-colors"
                >
                  Learn about HospitalOS
                  <ArrowOutwardIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#166534]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-6">
              Ready to Transform Your Pharmacy?
            </h2>
            <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Join pharmacies worldwide using PharmaPOS to streamline operations, improve customer service, and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#166534] text-lg font-bold rounded-full shadow-lg hover:bg-green-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a Free Demo
                <ArrowOutwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
