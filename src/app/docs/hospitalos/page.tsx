import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HospitalOS Documentation',
  description: 'Complete documentation for HospitalOS - Hospital Management System. Learn about all modules including OPD, IPD, Emergency, Laboratory, Pharmacy, and more.',
};

const modules = [
  {
    title: 'Getting Started',
    description: 'Installation, setup, and first steps with HospitalOS',
    href: '/docs/hospitalos/getting-started',
    icon: '🚀',
  },
  {
    title: 'Reception & OPD',
    description: 'Patient registration, appointments, queue management, and outpatient workflow',
    href: '/docs/hospitalos/opd',
    icon: '🏥',
  },
  {
    title: 'Emergency Department',
    description: 'Triage system, emergency care, and critical patient management',
    href: '/docs/hospitalos/emergency',
    icon: '🚑',
  },
  {
    title: 'Inpatient (IPD)',
    description: 'Admissions, ward management, nursing care, and discharge',
    href: '/docs/hospitalos/ipd',
    icon: '🛏️',
  },
  {
    title: 'Laboratory',
    description: 'Lab requests, sample collection, test results, and reporting',
    href: '/docs/hospitalos/laboratory',
    icon: '🔬',
  },
  {
    title: 'Radiology',
    description: 'Imaging requests, scheduling, and radiology reports',
    href: '/docs/hospitalos/radiology',
    icon: '📷',
  },
  {
    title: 'Pharmacy & Dispensary',
    description: 'Drug inventory, prescriptions, dispensing, and stock management',
    href: '/docs/hospitalos/pharmacy',
    icon: '💊',
  },
  {
    title: 'Billing & Cashier',
    description: 'Patient billing, payments, receipts, and financial management',
    href: '/docs/hospitalos/billing',
    icon: '💰',
  },
  {
    title: 'Human Resources',
    description: 'Staff management, attendance, payroll, and leave management',
    href: '/docs/hospitalos/hr',
    icon: '👥',
  },
  {
    title: 'User Roles',
    description: 'Understanding user roles, permissions, and access control',
    href: '/docs/hospitalos/roles',
    icon: '🔐',
  },
];

export default function HospitalOSDocsPage() {
  return (
    <>
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/docs" className="hover:text-[#166534]">Docs</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">HospitalOS</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">HospitalOS Documentation</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              HospitalOS is a comprehensive hospital management system designed to streamline healthcare operations.
              From patient registration to discharge, manage every aspect of your hospital efficiently.
            </p>
          </div>

          {/* Quick Start Banner */}
          <div className="bg-gradient-to-r from-[#166534] to-[#14532d] rounded-2xl p-6 md:p-8 mb-12 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold mb-2">New to HospitalOS?</h2>
                <p className="text-white/80">Start with our getting started guide to set up your hospital in minutes.</p>
              </div>
              <Link
                href="/docs/hospitalos/getting-started"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#166534] font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Modules Grid */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modules</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Link
                key={module.title}
                href={module.href}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#166534]/30 transition-all"
              >
                <div className="text-3xl mb-3">{module.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#166534] transition-colors mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </Link>
            ))}
          </div>

          {/* System Overview */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">System Overview</h2>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Patient Flow</h3>
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                      Registration at Reception
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                      Vitals recorded by Nurse
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                      Doctor consultation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                      Lab/Radiology/Pharmacy
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">5</span>
                      Billing and discharge
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Multi-department support
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Role-based access control
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Real-time queue management
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Integrated billing
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Inventory tracking
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Supported Roles</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Receptionist</li>
                    <li>Nurse (OPD & IPD)</li>
                    <li>Doctor / Specialist</li>
                    <li>Lab Technician</li>
                    <li>Pharmacist</li>
                    <li>Cashier</li>
                    <li>Administrator</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
