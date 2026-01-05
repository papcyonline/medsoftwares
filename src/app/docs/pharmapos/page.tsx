'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

const modules = [
  {
    title: 'Getting Started',
    description: 'Installation, setup, and first steps with PharmaPOS',
    href: '/docs/pharmapos/getting-started',
    icon: <RocketLaunchIcon className="w-6 h-6" />,
  },
  {
    title: 'Point of Sale',
    description: 'Process sales, manage cart, accept payments, and print receipts',
    href: '/docs/pharmapos/pos',
    icon: <PointOfSaleIcon className="w-6 h-6" />,
  },
  {
    title: 'Inventory Management',
    description: 'Stock tracking, batch management, expiry alerts, and reordering',
    href: '/docs/pharmapos/inventory',
    icon: <InventoryIcon className="w-6 h-6" />,
  },
  {
    title: 'Prescriptions',
    description: 'Prescription handling, patient records, and drug interactions',
    href: '/docs/pharmapos/prescriptions',
    icon: <ReceiptLongIcon className="w-6 h-6" />,
  },
  {
    title: 'Reports & Analytics',
    description: 'Sales reports, stock analysis, and business insights',
    href: '/docs/pharmapos/reports',
    icon: <AssessmentIcon className="w-6 h-6" />,
  },
  {
    title: 'Purchases & Suppliers',
    description: 'Manage suppliers, create purchase orders, and track deliveries',
    href: '/docs/pharmapos/purchases',
    icon: <LocalShippingIcon className="w-6 h-6" />,
  },
  {
    title: 'Customers & Credit',
    description: 'Customer management, credit sales, and payment tracking',
    href: '/docs/pharmapos/customers',
    icon: <PeopleIcon className="w-6 h-6" />,
  },
  {
    title: 'Settings & Configuration',
    description: 'System settings, network setup, and user management',
    href: '/docs/pharmapos/settings',
    icon: <SettingsIcon className="w-6 h-6" />,
  },
];

export default function PharmaPOSDocsPage() {
  return (
    <>
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/docs" className="hover:text-[#166534]">Docs</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">PharmaPOS</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">PharmaPOS Documentation</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              PharmaPOS is a complete pharmacy management and point-of-sale system.
              Manage inventory, process sales, track prescriptions, and grow your pharmacy business.
            </p>
          </div>

          {/* Quick Start Banner */}
          <div className="bg-gradient-to-r from-[#166534] to-[#14532d] rounded-2xl p-6 md:p-8 mb-12 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold mb-2">New to PharmaPOS?</h2>
                <p className="text-white/80">Get up and running quickly with our step-by-step setup guide.</p>
              </div>
              <Link
                href="/docs/pharmapos/getting-started"
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
                <div className="w-10 h-10 bg-[#166534]/10 rounded-lg flex items-center justify-center text-[#166534] mb-3">
                  {module.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#166534] transition-colors mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </Link>
            ))}
          </div>

          {/* Key Features */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Sales & POS</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Multi-unit selling (piece/card/box)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Multiple payment methods
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Barcode scanning
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Receipt printing
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Inventory</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Batch & expiry tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Low stock alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Excel import
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Store/Pharmacy locations
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Advanced</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Network mode (multi-user)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Drug interaction checking
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Controlled substances
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Insurance/NHIS claims
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* User Roles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">User Roles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Admin</h3>
                <p className="text-sm text-gray-600">Full system access, user management, settings</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Pharmacist</h3>
                <p className="text-sm text-gray-600">Sales, prescriptions, patients, stock requests</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Cashier</h3>
                <p className="text-sm text-gray-600">Process payments, customers, credit sales</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Storekeeper</h3>
                <p className="text-sm text-gray-600">Inventory, purchases, stock approvals</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Super Admin</h3>
                <p className="text-sm text-gray-600">All permissions, license management</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
