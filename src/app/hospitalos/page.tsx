'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Footer from '@/components/Footer';
import { hospitalOSJsonLd } from './metadata';

const screenshots = [
  {
    src: '/screenshots/hospitalos/admin-dashboard.png',
    title: 'Admin Dashboard',
    description: 'Real-time hospital metrics, department workload, revenue analytics, and bed occupancy at a glance.',
    badge: 'Administrator View',
    badgeColor: 'text-[#166534]',
  },
  {
    src: '/screenshots/hospitalos/analytics.png',
    title: 'Analytics & Reports',
    description: 'Revenue tracking, patient flow charts, appointment status, and recent activity logs.',
    badge: 'Analytics',
    badgeColor: 'text-[#166534]',
  },
  {
    src: '/screenshots/hospitalos/patients.png',
    title: 'Patient Records',
    description: 'Complete patient management with search, registration, and insurance tracking.',
    badge: 'Reception View',
    badgeColor: 'text-teal-600',
  },
  {
    src: '/screenshots/hospitalos/user-management.png',
    title: 'User Management',
    description: 'Role-based access control with Admin, Doctor, Pharmacist, Cashier, and more roles.',
    badge: 'System Admin',
    badgeColor: 'text-violet-600',
  },
  {
    src: '/screenshots/hospitalos/laboratory.png',
    title: 'Laboratory Dashboard',
    description: 'Pending tests, completed results, test history, and automated report generation.',
    badge: 'Lab Technician',
    badgeColor: 'text-rose-600',
  },
];

const coreFeatures = [
  {
    title: 'Patient Management',
    description: 'Complete patient records, medical history, appointments, and real-time treatment tracking.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Queue Management',
    description: 'Real-time patient queue tracking with priority handling, automated calling, and wait time monitoring.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm14 8v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Appointment Scheduling',
    description: 'Smart scheduling system with automated reminders, calendar sync, and conflict detection.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Electronic Medical Records',
    description: 'Comprehensive EMR system with digital prescriptions, clinical notes, and complete patient history.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
    title: 'Radiology & Imaging',
    description: 'Imaging orders, PACS integration, radiology reports, and diagnostic image management.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
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
    title: 'Billing & Insurance',
    description: 'Streamlined billing with insurance claims processing, NHIS/TPA integration, and payment tracking.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const clinicalModules = [
  { name: 'OPD Management', description: 'Queue, consultations, prescriptions, vitals' },
  { name: 'IPD Management', description: 'Admissions, ward management, bed allocation, discharge' },
  { name: 'Emergency Care', description: 'Triage, emergency cases, trauma management, quick registration' },
  { name: 'Operation Theatre', description: 'OT scheduling, surgical booking, pre-op/post-op records' },
  { name: 'ICU/CCU', description: 'ICU monitoring, ventilator tracking, critical care management' },
  { name: 'Doctor Dashboard', description: 'Personal queue, appointments, patient records, clinical notes' },
  { name: 'Nurse Station', description: 'Vitals recording, medication administration, nursing notes, shift handover' },
  { name: 'Ward Management', description: 'Bed allocation, patient transfers, real-time occupancy tracking' },
];

const specialtyDepartments = [
  { name: 'Maternity Care', description: 'Deliveries, antenatal care, newborn records, maternity ward' },
  { name: 'Pediatrics', description: 'Child patients, immunization schedules, growth tracking' },
  { name: 'Dental Services', description: 'Dental procedures, treatment charts, dental imaging' },
  { name: 'Physiotherapy', description: 'PT sessions, rehabilitation programs, therapy tracking' },
  { name: 'Dialysis Center', description: 'Dialysis scheduling, session management, patient monitoring' },
  { name: 'Blood Bank', description: 'Blood inventory, donor management, cross-matching, requisitions' },
];

const supportModules = [
  { name: 'HR & Payroll', description: 'Staff management, attendance tracking, salary processing, leave management' },
  { name: 'Procurement', description: 'Purchase orders, vendor management, inventory procurement' },
  { name: 'Kitchen Management', description: 'Patient meals, diet plans, food inventory' },
  { name: 'Ambulance Fleet', description: 'Ambulance dispatch, emergency transport tracking' },
  { name: 'Mortuary', description: 'Deceased records, death certificates, mortuary management' },
  { name: 'Maintenance', description: 'Equipment maintenance, AMC tracking, work orders' },
];

const allModules = [
  ...clinicalModules,
  ...specialtyDepartments,
  ...supportModules,
];

const userRoles = [
  'Admin', 'Receptionist', 'Doctor', 'Nurse', 'Pharmacist',
  'Lab Technician', 'Radiologist', 'Cashier', 'HR Manager',
  'Store Keeper', 'Records Officer'
];

export default function HospitalOSPage() {
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
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalOSJsonLd) }}
      />

      <main itemScope itemType="https://schema.org/SoftwareApplication">
        <meta itemProp="name" content="HospitalOS" />
        <meta itemProp="applicationCategory" content="Hospital Management Software" />
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
                  Complete Hospital Management System
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6">
                  HospitalOS
                </h1>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  The complete operating system for modern hospitals. Manage every department, streamline operations, and deliver exceptional patient care with 25+ integrated modules.
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
              <div className="relative">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    {clinicalModules.slice(0, 4).map((module, index) => (
                      <div key={index} className="bg-white/10 rounded-xl p-4">
                        <h4 className="text-white font-semibold text-sm mb-1">{module.name}</h4>
                        <p className="text-green-200 text-xs">{module.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-green-200 text-sm">+ 20 more modules</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-heading font-extrabold text-[#166534] mb-2">25+</div>
                <div className="text-gray-600 font-medium">Integrated Modules</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-extrabold text-[#166534] mb-2">11+</div>
                <div className="text-gray-600 font-medium">User Roles</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-extrabold text-[#166534] mb-2">100%</div>
                <div className="text-gray-600 font-medium">Offline Capable</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-extrabold text-[#166534] mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                Core Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to run a modern healthcare facility efficiently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreFeatures.map((feature, index) => (
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

        {/* Workflow Section */}
        <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50/50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-[#166534]/10 text-[#166534] text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4">
                Seamless Integration
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-gray-900 mb-4 md:mb-6">
                Patient Journey Flow
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                Watch how patients flow seamlessly through departments with real-time data sync across your hospital.
              </p>
            </div>

            {/* Desktop Workflow */}
            <div className="hidden lg:block">
              <div className="relative max-w-6xl mx-auto" style={{minHeight: '700px'}}>
                {/* Central Connection Hub with Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#166534]/5 rounded-full flex items-center justify-center" style={{zIndex: 5}}>
                  <div className="w-24 h-24 bg-[#166534]/10 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg shadow-[#166534]/20 flex items-center justify-center p-2">
                      <Image
                        src="/logo.png"
                        alt="HospitalOS"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Connection Lines SVG with Animated Lights */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}} viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    {/* Glow filters */}
                    <filter id="glow-teal" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="glow-indigo" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="glow-rose" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="glow-emerald" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="glow-amber" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="glow-sky" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="glow-violet" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="glow-orange" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Path definitions - 8 departments around center */}
                  {/* Top row: Reception, Nurse Station, Doctor */}
                  <path id="path-reception" d="M 500 350 L 400 250 L 160 120" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                  <path id="path-nurse" d="M 500 350 L 500 200 L 500 120" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                  <path id="path-doctor" d="M 500 350 L 600 250 L 840 120" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />

                  {/* Middle row: Radiology (left), Admission (right) */}
                  <path id="path-radiology" d="M 500 350 L 300 350 L 100 350" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                  <path id="path-admission" d="M 500 350 L 700 350 L 900 350" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />

                  {/* Bottom row: Lab, Pharmacy, Billing */}
                  <path id="path-lab" d="M 500 350 L 400 450 L 160 580" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                  <path id="path-pharmacy" d="M 500 350 L 500 500 L 500 580" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                  <path id="path-billing" d="M 500 350 L 600 450 L 840 580" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />

                  {/* Animated dots - Reception (Teal) */}
                  <circle r="5" fill="#14b8a6" filter="url(#glow-teal)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1">
                      <mpath href="#path-reception" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#2dd4bf" opacity="0.6">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="0.1s">
                      <mpath href="#path-reception" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="0.1s" />
                  </circle>

                  {/* Animated dots - Nurse Station (Sky) */}
                  <circle r="5" fill="#0ea5e9" filter="url(#glow-sky)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="0.3s">
                      <mpath href="#path-nurse" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="0.3s" />
                  </circle>
                  <circle r="3" fill="#38bdf8" opacity="0.6">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="0.4s">
                      <mpath href="#path-nurse" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="0.4s" />
                  </circle>

                  {/* Animated dots - Doctor (Indigo) */}
                  <circle r="5" fill="#6366f1" filter="url(#glow-indigo)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="0.6s">
                      <mpath href="#path-doctor" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
                  </circle>
                  <circle r="3" fill="#818cf8" opacity="0.6">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="0.7s">
                      <mpath href="#path-doctor" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="0.7s" />
                  </circle>

                  {/* Animated dots - Radiology (Amber) */}
                  <circle r="5" fill="#f59e0b" filter="url(#glow-amber)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="0.9s">
                      <mpath href="#path-radiology" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="0.9s" />
                  </circle>
                  <circle r="3" fill="#fbbf24" opacity="0.6">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="1.0s">
                      <mpath href="#path-radiology" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="1.0s" />
                  </circle>

                  {/* Animated dots - Admission (Violet) */}
                  <circle r="5" fill="#8b5cf6" filter="url(#glow-violet)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="1.2s">
                      <mpath href="#path-admission" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
                  </circle>
                  <circle r="3" fill="#a78bfa" opacity="0.6">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="1.3s">
                      <mpath href="#path-admission" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="1.3s" />
                  </circle>

                  {/* Animated dots - Lab (Rose) */}
                  <circle r="5" fill="#f43f5e" filter="url(#glow-rose)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="1.5s">
                      <mpath href="#path-lab" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="1.5s" />
                  </circle>
                  <circle r="3" fill="#fb7185" opacity="0.6">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="1.6s">
                      <mpath href="#path-lab" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="1.6s" />
                  </circle>

                  {/* Animated dots - Pharmacy (Emerald) */}
                  <circle r="5" fill="#10b981" filter="url(#glow-emerald)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="1.8s">
                      <mpath href="#path-pharmacy" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="1.8s" />
                  </circle>
                  <circle r="3" fill="#34d399" opacity="0.6">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="1.9s">
                      <mpath href="#path-pharmacy" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="1.9s" />
                  </circle>

                  {/* Animated dots - Billing (Orange) */}
                  <circle r="5" fill="#f97316" filter="url(#glow-orange)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="2.1s">
                      <mpath href="#path-billing" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="2.1s" />
                  </circle>
                  <circle r="3" fill="#fb923c" opacity="0.6">
                    <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="2.2s">
                      <mpath href="#path-billing" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.6;0.6;0" dur="2.5s" repeatCount="indefinite" begin="2.2s" />
                  </circle>

                  {/* Return path animations */}
                  <circle r="4" fill="#166534">
                    <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="2.5s" keyPoints="1;0" keyTimes="0;1">
                      <mpath href="#path-reception" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="2.5s" />
                  </circle>
                  <circle r="4" fill="#166534">
                    <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="2.8s" keyPoints="1;0" keyTimes="0;1">
                      <mpath href="#path-nurse" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="2.8s" />
                  </circle>
                  <circle r="4" fill="#166534">
                    <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="3.1s" keyPoints="1;0" keyTimes="0;1">
                      <mpath href="#path-doctor" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="3.1s" />
                  </circle>
                  <circle r="4" fill="#166534">
                    <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="3.4s" keyPoints="1;0" keyTimes="0;1">
                      <mpath href="#path-radiology" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="3.4s" />
                  </circle>
                  <circle r="4" fill="#166534">
                    <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="3.7s" keyPoints="1;0" keyTimes="0;1">
                      <mpath href="#path-admission" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="3.7s" />
                  </circle>
                  <circle r="4" fill="#166534">
                    <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="4.0s" keyPoints="1;0" keyTimes="0;1">
                      <mpath href="#path-lab" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="4.0s" />
                  </circle>
                  <circle r="4" fill="#166534">
                    <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="4.3s" keyPoints="1;0" keyTimes="0;1">
                      <mpath href="#path-pharmacy" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="4.3s" />
                  </circle>
                  <circle r="4" fill="#166534">
                    <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" begin="4.6s" keyPoints="1;0" keyTimes="0;1">
                      <mpath href="#path-billing" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin="4.6s" />
                  </circle>
                </svg>

                {/* Workflow Cards - 8 departments around the center */}
                {/* Top Row - 3 cards */}
                <div className="absolute top-0 left-0 right-0 flex justify-between px-4" style={{zIndex: 1}}>
                  {/* Reception - Top Left */}
                  <div className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 w-56">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">Reception</h3>
                        <span className="text-xs text-teal-600 font-medium">Registration</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">Registers patients, books appointments, manages queue</p>
                    <div className="mt-2 flex items-center gap-2 text-teal-600">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Entry Point</span>
                    </div>
                  </div>

                  {/* Nurse Station - Top Center */}
                  <div className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-sky-200 w-56">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">Nurse Station</h3>
                        <span className="text-xs text-sky-600 font-medium">Vitals & Prep</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">Records vitals, preps patients, medication administration</p>
                    <div className="mt-2 flex items-center gap-2 text-sky-600">
                      <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Patient Prep</span>
                    </div>
                  </div>

                  {/* Doctor - Top Right */}
                  <div className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 w-56">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100 8 4 4 0 000-8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">Doctor</h3>
                        <span className="text-xs text-indigo-600 font-medium">Consultation</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">Examines patients, diagnoses, orders tests & prescribes</p>
                    <div className="mt-2 flex items-center gap-2 text-indigo-600">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Orders Tests</span>
                    </div>
                  </div>
                </div>

                {/* Middle Row - 2 cards on sides */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4" style={{zIndex: 1}}>
                  {/* Radiology - Left */}
                  <div className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 w-56">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">Radiology</h3>
                        <span className="text-xs text-amber-600 font-medium">Imaging</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">X-rays, CT scans, MRI, ultrasound imaging</p>
                    <div className="mt-2 flex items-center gap-2 text-amber-600">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Sends Reports</span>
                    </div>
                  </div>

                  {/* Admission/IPD - Right */}
                  <div className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-violet-200 w-56">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-violet-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">Admission</h3>
                        <span className="text-xs text-violet-600 font-medium">IPD/Wards</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">Bed allocation, ward management, inpatient care</p>
                    <div className="mt-2 flex items-center gap-2 text-violet-600">
                      <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Inpatient Flow</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row - 3 cards */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4" style={{zIndex: 1}}>
                  {/* Lab - Bottom Left */}
                  <div className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-rose-200 w-56">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">Laboratory</h3>
                        <span className="text-xs text-rose-600 font-medium">Testing</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">Blood tests, urinalysis, pathology, sample processing</p>
                    <div className="mt-2 flex items-center gap-2 text-rose-600">
                      <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Returns Results</span>
                    </div>
                  </div>

                  {/* Pharmacy - Bottom Center */}
                  <div className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 w-56">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">Pharmacy</h3>
                        <span className="text-xs text-emerald-600 font-medium">Dispensing</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">Dispenses medications, updates inventory automatically</p>
                    <div className="mt-2 flex items-center gap-2 text-emerald-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Medications Ready</span>
                    </div>
                  </div>

                  {/* Billing - Bottom Right */}
                  <div className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 w-56">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">Billing</h3>
                        <span className="text-xs text-orange-600 font-medium">Payments</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">Invoice generation, insurance claims, payment processing</p>
                    <div className="mt-2 flex items-center gap-2 text-orange-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Exit Point</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Workflow */}
            <div className="lg:hidden">
              <div className="relative">
                <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-sky-400 via-indigo-400 via-amber-400 via-violet-400 via-rose-400 via-emerald-400 to-orange-400"></div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Reception */}
                  <div className="relative flex gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30 flex-shrink-0 z-10">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">Reception</h3>
                      <p className="text-gray-600 text-xs mt-1">Patient registration & appointments</p>
                    </div>
                  </div>

                  {/* Nurse Station */}
                  <div className="relative flex gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/30 flex-shrink-0 z-10">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">Nurse Station</h3>
                      <p className="text-gray-600 text-xs mt-1">Vitals recording & patient prep</p>
                    </div>
                  </div>

                  {/* Doctor */}
                  <div className="relative flex gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 flex-shrink-0 z-10">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100 8 4 4 0 000-8z" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">Doctor</h3>
                      <p className="text-gray-600 text-xs mt-1">Consultation & diagnosis</p>
                    </div>
                  </div>

                  {/* Radiology */}
                  <div className="relative flex gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 flex-shrink-0 z-10">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                      </svg>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">Radiology</h3>
                      <p className="text-gray-600 text-xs mt-1">X-rays, CT, MRI imaging</p>
                    </div>
                  </div>

                  {/* Lab */}
                  <div className="relative flex gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-500/30 flex-shrink-0 z-10">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">Laboratory</h3>
                      <p className="text-gray-600 text-xs mt-1">Tests & sample processing</p>
                    </div>
                  </div>

                  {/* Admission */}
                  <div className="relative flex gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30 flex-shrink-0 z-10">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">Admission</h3>
                      <p className="text-gray-600 text-xs mt-1">IPD & ward management</p>
                    </div>
                  </div>

                  {/* Pharmacy */}
                  <div className="relative flex gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 flex-shrink-0 z-10">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">Pharmacy</h3>
                      <p className="text-gray-600 text-xs mt-1">Medication dispensing</p>
                    </div>
                  </div>

                  {/* Billing */}
                  <div className="relative flex gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 flex-shrink-0 z-10">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">Billing</h3>
                      <p className="text-gray-600 text-xs mt-1">Payment & insurance processing</p>
                    </div>
                  </div>
                </div>
              </div>
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
                Explore the intuitive interface designed for healthcare professionals.
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
                          <div className="bg-[#1e3a5f] px-2 py-2 md:px-4 md:py-3 flex items-center gap-2 md:gap-3 border-b border-[#2d4a6f]">
                            <div className="flex gap-1 md:gap-2">
                              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 flex justify-center">
                              <div className="bg-[#2d4a6f] rounded px-2 py-0.5 md:rounded-lg md:px-4 md:py-1 text-xs md:text-sm text-gray-300 font-medium">
                                HospitalOS - {slide.title}
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
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-sm text-green-100">Module Screens</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10">
                <div className="text-2xl font-bold text-white">11+</div>
                <div className="text-sm text-green-100">User Dashboards</div>
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

        {/* Clinical Modules */}
        <section id="modules" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                Clinical Departments
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All clinical departments connected in one unified system for seamless patient care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clinicalModules.map((module, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#166534] rounded-xl flex items-center justify-center text-white mb-4 font-bold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{module.name}</h3>
                  <p className="text-gray-600 text-sm">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty Departments */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                Specialty Departments
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive modules for specialized medical services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialtyDepartments.map((module, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4 font-bold text-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{module.name}</h3>
                  <p className="text-gray-600 text-sm">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Modules */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                Support Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete back-office and support service management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportModules.map((module, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4 font-bold text-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{module.name}</h3>
                  <p className="text-gray-600 text-sm">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Roles Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
                Role-Based Access Control
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                11+ specialized user roles with custom dashboards and granular permissions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {userRoles.map((role, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">{role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Software Highlight */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-100/50">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-[#166534] text-white text-sm font-semibold rounded-full mb-6">
              Desktop Application
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">
              True Desktop Software
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Unlike web-based systems, HospitalOS is a native desktop application built for speed, reliability, and offline operation. Works perfectly even without internet connection.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600 text-sm">Native performance, no browser lag, instant response times</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Offline Ready</h3>
                <p className="text-gray-600 text-sm">Full functionality without internet, auto-sync when online</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#166534]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Secure & Private</h3>
                <p className="text-gray-600 text-sm">Local data storage, no cloud dependency, complete control</p>
              </div>
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
                    Connect your hospital pharmacy with HospitalOS for automated prescription fulfillment, real-time inventory sync, and unified billing.
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
                      <span className="text-2xl font-bold text-[#166534]">H</span>
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
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#166534]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
              Ready to Transform Your Hospital?
            </h2>
            <p className="text-xl text-green-100 mb-10">
              Book a demo and see how HospitalOS can revolutionize your healthcare facility operations.
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
