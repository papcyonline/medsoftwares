'use client';

import Image from 'next/image';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    title: 'Patient Management',
    description: 'Complete patient records, medical history, appointments, and treatment tracking in one place.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Appointment Scheduling',
    description: 'Smart scheduling system for doctors and patients with automated reminders and calendar sync.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Billing & Insurance',
    description: 'Streamlined billing with insurance claims processing, NHIS integration, and payment tracking.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Laboratory Management',
    description: 'Lab test ordering, sample tracking, result management, and automated report generation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Pharmacy Integration',
    description: 'Seamless integration with PharmaPOS for prescription fulfillment and inventory management.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Ward Management',
    description: 'Bed allocation, patient transfers, nursing notes, and real-time ward occupancy tracking.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Doctor Dashboard',
    description: 'Personal dashboard for doctors with patient queue, appointments, and clinical notes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Reports & Analytics',
    description: 'Comprehensive reports on patient flow, revenue, department performance, and more.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const modules = [
  { name: 'Outpatient (OPD)', description: 'Queue management, consultations, prescriptions' },
  { name: 'Inpatient (IPD)', description: 'Admissions, ward management, discharge summaries' },
  { name: 'Emergency', description: 'Triage, emergency care, quick registration' },
  { name: 'Laboratory', description: 'Test ordering, sample tracking, results' },
  { name: 'Radiology', description: 'Imaging orders, reports, PACS integration' },
  { name: 'Pharmacy', description: 'Prescription fulfillment, stock management' },
  { name: 'Billing', description: 'Invoicing, payments, insurance claims' },
  { name: 'HR & Payroll', description: 'Staff management, attendance, salaries' },
];

export default function HospixPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 pt-24 md:pt-32 pb-20 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-white/20 text-blue-100 text-sm font-semibold rounded-full mb-6">
                  Hospital Management System
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6">
                  Hospix
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Complete hospital management solution. From patient registration to discharge, manage every aspect of your healthcare facility with ease.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 text-lg font-bold rounded-full shadow-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200"
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
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    {modules.slice(0, 4).map((module, index) => (
                      <div key={index} className="bg-white/10 rounded-xl p-4">
                        <h4 className="text-white font-semibold text-sm mb-1">{module.name}</h4>
                        <p className="text-blue-200 text-xs">{module.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-blue-200 text-sm">+ 4 more modules</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                Integrated Hospital Modules
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All departments connected in one unified system for seamless patient care and operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4 font-bold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{module.name}</h3>
                  <p className="text-gray-600 text-sm">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage a modern healthcare facility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#166534] to-green-700 rounded-3xl p-8 md:p-12 lg:p-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
                    Seamless PharmaPOS Integration
                  </h2>
                  <p className="text-green-100 text-lg mb-6">
                    Connect your hospital pharmacy with Hospix for automated prescription fulfillment, real-time inventory sync, and unified billing.
                  </p>
                  <Link
                    href="/pharmapos"
                    className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
                  >
                    Learn about PharmaPOS
                    <ArrowOutwardIcon className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-blue-600">H</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="w-8 h-1 bg-white/50 rounded"></div>
                      <div className="w-8 h-1 bg-white/50 rounded"></div>
                      <div className="w-8 h-1 bg-white/50 rounded"></div>
                    </div>
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-[#166534]">P</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
              Ready to Modernize Your Hospital?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Book a demo and see how Hospix can transform your healthcare facility operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 text-lg font-bold rounded-full shadow-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200"
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
