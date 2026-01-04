'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Footer from '@/components/Footer';

const pharmaPOSPackages = [
  {
    name: 'Basic',
    description: 'Perfect for single-location pharmacies.',
    price: 299,
    features: [
      '1 Workstation License',
      'Point of Sale Module',
      'Inventory Management',
      'Sales Reports',
      'Receipt Printing',
      '3 Months Free Support',
      'Free Installation',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    description: 'For growing pharmacies with more needs.',
    price: 499,
    features: [
      'Up to 3 Workstation Licenses',
      'Everything in Basic',
      'Mobile Money Integration',
      'Prescription Management',
      'Credit Sales Tracking',
      'Customer Database',
      'Expiry Alerts',
      '3 Months Free Support',
      'Free Installation & Training',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    description: 'Complete solution for pharmacy chains.',
    price: 899,
    features: [
      'Up to 10 Workstation Licenses',
      'Everything in Standard',
      'Multi-branch Support',
      'Stock Transfers',
      'Advanced Analytics',
      'Barcode Generator',
      'Staff Performance Reports',
      '3 Months Free Support',
      'On-site Installation & Training',
    ],
    popular: false,
  },
];

const hospitalOSPackages = [
  {
    name: 'Clinic',
    description: 'For small clinics and health centers.',
    price: 799,
    features: [
      'Up to 3 Workstations',
      'Patient Management',
      'Appointment Scheduling',
      'Basic EMR',
      'Billing & Invoicing',
      'Receipt Printing',
      '3 Months Free Support',
      'Free Installation',
    ],
    popular: false,
  },
  {
    name: 'Hospital',
    description: 'Complete solution for hospitals.',
    price: 1499,
    features: [
      'Up to 10 Workstations',
      'Everything in Clinic',
      'Laboratory Module',
      'Pharmacy Module',
      'Ward Management',
      'Insurance Claims',
      'Advanced EMR',
      '3 Months Free Support',
      'On-site Installation & Training',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large hospitals and medical centers.',
    price: 2999,
    features: [
      'Unlimited Workstations',
      'Everything in Hospital',
      'Multi-department Support',
      'Blood Bank Module',
      'Radiology Module',
      'Business Intelligence',
      'Custom Reports',
      '3 Months Free Support',
      'Full Implementation Package',
    ],
    popular: false,
  },
];

const additionalServices = [
  {
    title: 'Extended Support',
    description: 'Get continued technical support after your free 3-month period.',
    price: 'From $29/month',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Custom Development',
    description: 'Need specific features? We can customize the software for your needs.',
    price: 'Custom Quote',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Additional Training',
    description: 'Extra training sessions for new staff or advanced features.',
    price: 'From $99/session',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Additional Licenses',
    description: 'Need more workstations? Purchase additional licenses anytime.',
    price: 'From $49/license',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'Is this a one-time payment?',
    answer: 'Yes! You pay once and own the software forever. There are no monthly or yearly subscription fees.',
  },
  {
    question: 'What happens after 3 months of free support?',
    answer: 'After your 3-month free support period, you can continue using the software without any issues. If you need technical support, bug fixes, or assistance, you can purchase a support plan starting from $29/month.',
  },
  {
    question: 'Can I add more workstations later?',
    answer: 'You can purchase additional workstation licenses at any time for $49-99 per license depending on the product.',
  },
  {
    question: 'Do I get software updates?',
    answer: 'Minor updates and bug fixes are free forever. Major version upgrades may require a small upgrade fee, but you can continue using your current version indefinitely.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept mobile money (MTN, Vodafone, Airtel, M-Pesa), bank transfers, and cash payments. We can also arrange installment payments for larger packages.',
  },
  {
    question: 'Can I customize the software?',
    answer: 'Yes! We offer custom development services. Contact us with your requirements and we\'ll provide a quote for the customization work.',
  },
  {
    question: 'Is training included?',
    answer: 'Yes, all packages include initial training. Basic package includes remote training, while Standard and Premium packages include on-site training.',
  },
  {
    question: 'What if I need features not included in my package?',
    answer: 'You can either upgrade to a higher package or request custom development for specific features you need.',
  },
];

export default function PricingPage() {
  const [activeProduct, setActiveProduct] = useState<'pharmapos' | 'hospitalos'>('pharmapos');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const packages = activeProduct === 'pharmapos' ? pharmaPOSPackages : hospitalOSPackages;

  return (
    <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-6">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
              Buy Once, Use Forever
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No subscriptions, no monthly fees. Purchase your license and own the software forever with 3 months of free support included.
            </p>
          </div>
        </section>

        {/* Product Toggle */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center">
              <div className="inline-flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setActiveProduct('pharmapos')}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeProduct === 'pharmapos'
                      ? 'bg-[#166534] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  PharmaPOS
                </button>
                <button
                  onClick={() => setActiveProduct('hospitalos')}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeProduct === 'hospitalos'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  HospitalOS
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl border-2 p-8 transition-all duration-300 ${
                    pkg.popular
                      ? activeProduct === 'pharmapos'
                        ? 'border-[#166534] shadow-xl shadow-green-900/10 scale-105'
                        : 'border-blue-600 shadow-xl shadow-blue-900/10 scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  {pkg.popular && (
                    <span
                      className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold text-white rounded-full ${
                        activeProduct === 'pharmapos' ? 'bg-[#166534]' : 'bg-blue-600'
                      }`}
                    >
                      Best Value
                    </span>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-heading font-extrabold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-lg text-gray-500">$</span>
                      <span className="text-5xl font-heading font-extrabold text-gray-900">
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">One-time payment</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 ${
                            activeProduct === 'pharmapos' ? 'text-[#166534]' : 'text-blue-600'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                      pkg.popular
                        ? activeProduct === 'pharmapos'
                          ? 'bg-[#166534] text-white hover:bg-[#14532d] shadow-lg shadow-green-900/20'
                          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-900/20'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Need more? We offer flexible add-on services to support your growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-[#166534]/10 rounded-xl flex items-center justify-center text-[#166534] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <p className="text-[#166534] font-semibold">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6">
                What&apos;s Included With Every Purchase
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                No hidden fees. No surprise charges. Here&apos;s what you get.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Lifetime License', description: 'Own the software forever with no recurring fees.' },
                { title: 'Free Installation', description: 'We set up everything on your computers for you.' },
                { title: 'Initial Training', description: 'Comprehensive training for you and your staff.' },
                { title: '3 Months Free Support', description: 'Technical support included for the first 3 months.' },
                { title: 'Free Updates', description: 'Bug fixes and minor updates at no extra cost.' },
                { title: 'Data Backup Tools', description: 'Built-in tools to backup and protect your data.' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-[#166534] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solution CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                For government hospitals, large health systems, or unique requirements, we offer custom development and enterprise solutions tailored to your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-full hover:bg-gray-100 transition-all duration-200 group"
              >
                Contact Us
                <ArrowOutwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Got questions? We&apos;ve got answers.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openFaq === index ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pb-5 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#166534]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-10">
              Contact us today for a free demo and see how our software can transform your facility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#166534] text-lg font-bold rounded-full shadow-lg hover:bg-green-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a Free Demo
                <ArrowOutwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="tel:+233201234567"
                className="inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        <Footer />
    </main>
  );
}
