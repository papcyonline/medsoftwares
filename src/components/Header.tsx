'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

type Feature = {
  icon: React.ReactNode;
  items: string[];
  href?: string;
};

const pharmaPOSFeatures: Record<string, Feature> = {
  'Sales & POS': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    href: '/pharmapos/pos',
    items: ['Quick Sales & Checkout', 'Barcode Scanning', 'Pending Sales Queue', 'Returns & Refunds', 'Credit Sales'],
  },
  'Inventory': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    href: '/pharmapos/inventory',
    items: ['Stock Management', 'Purchase Orders', 'Suppliers', 'Stock Transfers', 'Expiry Tracking'],
  },
  'Pharmacy': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    href: '/pharmapos/prescriptions',
    items: ['Prescriptions', 'Drug Interactions', 'Controlled Substances', 'Patient Profiles', 'Label Printing'],
  },
  'Payments': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/pharmapos/payments',
    items: ['Mobile Money', 'Multi-Currency', 'Insurance/NHIS', 'Credit Management', 'Split Payments'],
  },
  'Reports': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    items: ['Sales Analytics', 'Inventory Reports', 'Staff Performance', 'Expense Tracking', 'Audit Logs'],
  },
  'Admin': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: ['Users & Roles', 'Multi-Branch', 'Backup & Restore', 'Notifications', 'Settings'],
  },
};

const hospitalOSFeatures: Record<string, Feature> = {
  'Outpatient': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    href: '/hospitalos/opd',
    items: ['Patient Registration', 'Queue Management', 'Vitals & Triage', 'Appointments'],
  },
  'Inpatient': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    href: '/hospitalos/ipd',
    items: ['Admissions', 'Bed & Ward Management', 'Nursing Care', 'Discharge'],
  },
  'Emergency': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    href: '/hospitalos/emergency',
    items: ['Emergency Triage', 'Priority Coding', 'Quick Intake', 'Critical Care'],
  },
  'Diagnostics': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    href: '/hospitalos/laboratory',
    items: ['Laboratory', 'Radiology & Imaging', 'Sample Tracking', 'Results & Reports'],
  },
  'Pharmacy': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    items: ['Pharmacy POS', 'Ward Dispensing', 'Stock & Expiry', 'Prescriptions'],
  },
  'Specialty': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    items: ['Maternity', 'Dental', 'Surgery/Theatre', 'Mortuary'],
  },
  'Billing': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    href: '/hospitalos/billing',
    items: ['Cashier & Payments', 'Service Billing', 'Insurance/NHIS', 'Financial Reports'],
  },
  'HR & Admin': {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    items: ['Staff & Doctors', 'Attendance', 'Payroll', 'System Settings'],
  },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'pharmapos' | 'hospitalos' | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (menu: 'pharmapos' | 'hospitalos') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  const navItems = [
    { label: 'News', href: '/news' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || activeMegaMenu ? 'px-0 pt-0' : 'px-2 sm:px-3 lg:px-4 pt-4'
        }`}
      >
        <nav
          className={`w-full flex items-center justify-between pl-2 pr-1.5 lg:pl-3 lg:pr-2 py-2 bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg shadow-gray-900/5 transition-all duration-300 ${
            isScrolled || activeMegaMenu
              ? 'bg-white/95 shadow-xl shadow-gray-900/10 rounded-none border-t-0 border-x-0 pl-4 pr-3 lg:pl-6 lg:pr-4'
              : 'rounded-[2rem]'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image src="/logo.png" alt="MedSoftwares" width={40} height={40} className="transition-transform duration-300 group-hover:scale-110" priority />
            <span className="text-xl font-heading font-extrabold text-gray-900 tracking-tight">MedSoftwares</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            <li>
              <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-all">
                Home
              </Link>
            </li>

            {/* PharmaPOS */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('pharmapos')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/pharmapos"
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeMegaMenu === 'pharmapos' ? 'text-[#166534] bg-green-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                PharmaPOS
                <svg className={`w-4 h-4 transition-transform ${activeMegaMenu === 'pharmapos' ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </li>

            {/* HospitalOS */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('hospitalos')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/hospitalos"
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeMegaMenu === 'hospitalos' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                HospitalOS
                <svg className={`w-4 h-4 transition-transform ${activeMegaMenu === 'hospitalos' ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </li>

            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-all">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#166534] text-white text-sm font-semibold rounded-full shadow-md shadow-green-900/20 hover:bg-[#14532d] hover:shadow-lg hover:-translate-y-0.5 transition-all group"
            >
              Book a Demo
              <ArrowOutwardIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-gray-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* PharmaPOS Mega Menu - Full Width */}
      <div
        className={`fixed left-0 right-0 z-40 transition-opacity duration-200 top-[57px] ${
          activeMegaMenu === 'pharmapos' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onMouseEnter={() => handleMouseEnter('pharmapos')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-white border-b border-gray-200 shadow-2xl">
          <div className="w-full px-8 lg:px-16 xl:px-24 py-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 4V20M4 12H20" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">PharmaPOS</h3>
                  <p className="text-sm text-gray-500">Complete Pharmacy Management System</p>
                </div>
              </div>
              <Link href="/pharmapos" className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 text-green-700 font-semibold rounded-full hover:bg-green-100 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                Explore PharmaPOS
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-6 gap-0">
              {Object.entries(pharmaPOSFeatures).map(([category, { icon, items, href }], index, array) => (
                <div key={category} className={`px-6 ${index !== array.length - 1 ? 'border-r border-gray-200' : ''} ${index === 0 ? 'pl-0' : ''} ${index === array.length - 1 ? 'pr-0' : ''}`}>
                  {href ? (
                    <Link href={href} className="flex items-center gap-3 mb-5 group" onClick={() => setActiveMegaMenu(null)}>
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
                        {icon}
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors">{category}</h4>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                        {icon}
                      </div>
                      <h4 className="text-sm font-bold text-gray-900">{category}</h4>
                    </div>
                  )}
                  <ul className="space-y-3">
                    {items.map((feature) => (
                      <li key={feature}>
                        <span className="text-sm text-gray-600 hover:text-green-600 cursor-default block">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
              <p className="text-sm text-gray-500">Trusted by <span className="font-semibold text-gray-700">25+</span> healthcare facilities worldwide</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#166534] text-white text-sm font-semibold rounded-full hover:bg-[#14532d] transition-colors" onClick={() => setActiveMegaMenu(null)}>
                Request Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* HospitalOS Mega Menu - Full Width */}
      <div
        className={`fixed left-0 right-0 z-40 transition-opacity duration-200 top-[57px] ${
          activeMegaMenu === 'hospitalos' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onMouseEnter={() => handleMouseEnter('hospitalos')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-white border-b border-gray-200 shadow-2xl">
          <div className="w-full px-8 lg:px-16 xl:px-24 py-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">HospitalOS</h3>
                  <p className="text-sm text-gray-500">Complete Hospital Management System</p>
                </div>
              </div>
              <Link href="/hospitalos" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 font-semibold rounded-full hover:bg-blue-100 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                Explore HospitalOS
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-4 gap-y-10">
              {Object.entries(hospitalOSFeatures).map(([category, { icon, items, href }], index) => (
                <div key={category} className={`px-6 ${index % 4 !== 3 ? 'border-r border-gray-200' : ''} ${index % 4 === 0 ? 'pl-0' : ''} ${index % 4 === 3 ? 'pr-0' : ''}`}>
                  {href ? (
                    <Link href={href} className="flex items-center gap-3 mb-5 group" onClick={() => setActiveMegaMenu(null)}>
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                        {icon}
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{category}</h4>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                        {icon}
                      </div>
                      <h4 className="text-sm font-bold text-gray-900">{category}</h4>
                    </div>
                  )}
                  <ul className="space-y-3">
                    {items.map((feature) => (
                      <li key={feature}>
                        <span className="text-sm text-gray-600 hover:text-blue-600 cursor-default block">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
              <p className="text-sm text-gray-500">Complete hospital management with <span className="font-semibold text-gray-700">25+ integrated modules</span></p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                Request Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[320px] max-w-[85vw] bg-white z-50 transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <Image src="/logo.png" alt="MedSoftwares" width={32} height={32} />
            <span className="text-lg font-heading font-extrabold text-gray-900">MedSoftwares</span>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="p-4 overflow-y-auto h-[calc(100%-140px)]">
          <ul className="space-y-1">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pharmapos" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50">
                PharmaPOS
              </Link>
            </li>
            <li>
              <Link href="/hospitalos" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50">
                HospitalOS
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white">
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#166534] text-white text-base font-semibold rounded-xl shadow-md hover:bg-[#14532d] transition-all"
          >
            Book a Demo
            <ArrowOutwardIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
