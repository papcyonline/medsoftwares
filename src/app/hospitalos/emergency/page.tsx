'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    title: 'Rapid Triage',
    description: 'Quickly assess and categorize patients using standard triage protocols. Color-coded priority levels ensure the sickest patients are seen first.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Quick Registration',
    description: 'Minimal data entry for emergency arrivals. Capture essential information first, complete details later. Unknown patient handling included.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Tracking Board',
    description: 'Live dashboard showing all patients in ED with their status, location, waiting time, and assigned physician. At-a-glance situational awareness.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: 'Critical Care Documentation',
    description: 'Specialized documentation for resuscitation, trauma, and critical care. Time-stamped interventions and medication administration.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Disposition Management',
    description: 'Smooth patient flow from ED to admission, discharge, or transfer. Bed requests, referrals, and handoff documentation built-in.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Integration with Services',
    description: 'Instant orders for lab, radiology, and pharmacy. Results flow back in real-time for rapid clinical decision making.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

const triageLevels = [
  { level: '1', name: 'Resuscitation', color: 'red', time: 'Immediate', desc: 'Life-threatening conditions' },
  { level: '2', name: 'Emergent', color: 'orange', time: '< 15 min', desc: 'High risk or severe pain' },
  { level: '3', name: 'Urgent', color: 'yellow', time: '< 30 min', desc: 'Moderate risk conditions' },
  { level: '4', name: 'Less Urgent', color: 'green', time: '< 60 min', desc: 'Low risk, some distress' },
  { level: '5', name: 'Non-Urgent', color: 'blue', time: '< 120 min', desc: 'Minor conditions' },
];

export default function EmergencyPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 py-20 lg:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-red-700">HospitalOS Module</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Emergency Department
                  <span className="text-red-600"> & Triage</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Purpose-built for the fast-paced emergency environment. Quick triage, real-time tracking, and seamless coordination to save lives when every second counts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all shadow-lg shadow-red-900/20"
                  >
                    Request Demo
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/hospitalos"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all border border-gray-200"
                  >
                    View All Modules
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?w=800&h=600&fit=crop"
                    alt="Emergency Department"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Avg Door-to-Doctor</p>
                      <p className="text-xs text-gray-500">8 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-red-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { stat: '40%', label: 'Faster door-to-doctor' },
                { stat: '100%', label: 'Triage compliance' },
                { stat: '25%', label: 'Shorter ED stays' },
                { stat: '0', label: 'Lost patients' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{item.stat}</div>
                  <div className="text-red-100">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Built for Emergency Medicine
              </h2>
              <p className="text-xl text-gray-600">
                Features designed specifically for the unique demands of emergency care.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors group"
                >
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-200 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Triage Levels Section */}
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Standardized Triage Protocols
              </h2>
              <p className="text-xl text-gray-600">
                5-level triage system ensures patients are seen in order of clinical urgency
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {triageLevels.map((level, index) => (
                <div key={index} className={`rounded-2xl p-6 text-center ${
                  level.color === 'red' ? 'bg-red-500 text-white' :
                  level.color === 'orange' ? 'bg-orange-500 text-white' :
                  level.color === 'yellow' ? 'bg-yellow-400 text-gray-900' :
                  level.color === 'green' ? 'bg-green-500 text-white' :
                  'bg-blue-500 text-white'
                }`}>
                  <div className="text-3xl font-bold mb-2">Level {level.level}</div>
                  <div className="font-semibold mb-2">{level.name}</div>
                  <div className="text-sm opacity-90 mb-2">{level.time}</div>
                  <div className="text-xs opacity-80">{level.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracking Board Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Real-Time ED Tracking Board
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Complete visibility into your emergency department at all times. Know where every patient is and what needs attention.
                </p>
                <ul className="space-y-4">
                  {[
                    'Patient location and status at a glance',
                    'Waiting time alerts and escalations',
                    'Bed availability across the hospital',
                    'Physician and nurse assignments',
                    'Pending orders and results',
                    'Large-screen display mode for nurses station',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=600&fit=crop"
                  alt="Emergency Tracking Board"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Streamlined Emergency Workflow
              </h2>
              <p className="text-xl text-gray-600">
                From arrival to disposition in the fastest time possible
              </p>
            </div>
            <div className="grid md:grid-cols-6 gap-4">
              {[
                { step: '1', title: 'Arrive', desc: 'Quick registration' },
                { step: '2', title: 'Triage', desc: 'Assess urgency' },
                { step: '3', title: 'Assign', desc: 'Bed & physician' },
                { step: '4', title: 'Treat', desc: 'Care & orders' },
                { step: '5', title: 'Results', desc: 'Labs & imaging' },
                { step: '6', title: 'Dispose', desc: 'Admit or discharge' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white text-lg font-bold rounded-full flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-red-600 to-red-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transform Your Emergency Department
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Faster triage, better tracking, improved outcomes. Give your ED team the tools they need to save lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition-all"
              >
                Book a Demo
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/hospitalos"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                View All Modules
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
