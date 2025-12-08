'use client';

import Image from 'next/image';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    title: 'Point of Sale',
    description: 'Lightning-fast checkout with barcode scanning, multi-unit pricing, discounts, and thermal receipt printing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Inventory Management',
    description: 'Track stock levels, batch numbers, expiry dates with automatic low-stock and expiry alerts.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Mobile Money',
    description: 'Accept MTN, Vodafone, Airtel, M-Pesa, Orange Money, Wave and more mobile payment providers.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Prescription Management',
    description: 'Manage prescriptions, patient records, drug interactions, and NHIS insurance integration.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Credit Sales Tracking',
    description: 'Track customer credit accounts, payment history, outstanding balances with automatic reminders.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: 'Reports & Analytics',
    description: 'Sales trends, profit analysis, staff performance, inventory valuation and exportable reports.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Branch Support',
    description: 'Connect multiple workstations and branches with real-time synchronization and stock transfers.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'User Roles & Permissions',
    description: 'Admin, Pharmacist, Cashier, Storekeeper roles with granular access control and audit trails.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const screenshots = [
  { src: '/screenshots/dashboard.png', title: 'Dashboard' },
  { src: '/screenshots/sales.png', title: 'Sales' },
  { src: '/screenshots/inventory.png', title: 'Inventory' },
  { src: '/screenshots/reports.png', title: 'Reports' },
];

export default function PharmaPOSPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center bg-[#166534] pt-24 md:pt-32 pb-20 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-white/20 text-green-100 text-sm font-semibold rounded-full mb-6">
                  Pharmacy Management System
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6">
                  PharmaPOS
                </h1>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  The complete pharmacy management solution. Streamline sales, manage inventory, track prescriptions, and grow your business with powerful analytics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#166534] text-lg font-bold rounded-full shadow-lg hover:bg-green-50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Book a Demo
                    <ArrowOutwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/screenshots/dashboard.png"
                    alt="PharmaPOS Dashboard"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                Everything You Need to Run Your Pharmacy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From point of sale to inventory management, PharmaPOS has all the tools you need in one integrated system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-[#166534] mb-4 group-hover:bg-[#166534] group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                See PharmaPOS in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A clean, intuitive interface designed for busy pharmacy professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="bg-gray-200 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-sm text-gray-600 font-medium ml-2">{screenshot.title}</span>
                  </div>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#166534]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
              Ready to Transform Your Pharmacy?
            </h2>
            <p className="text-xl text-green-100 mb-10">
              Join thousands of pharmacies using PharmaPOS to streamline operations and boost sales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#166534] text-lg font-bold rounded-full shadow-lg hover:bg-green-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a Free Demo
                <ArrowOutwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
