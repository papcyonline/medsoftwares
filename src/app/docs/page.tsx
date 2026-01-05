import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'MedSoftware documentation hub - Learn how to use PharmaPOS and HospitalOS with comprehensive guides and tutorials.',
};

const docCategories = [
  {
    title: 'HospitalOS',
    description: 'Complete hospital management system documentation',
    href: '/docs/hospitalos',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    modules: [
      { name: 'Getting Started', href: '/docs/hospitalos/getting-started' },
      { name: 'Reception & OPD', href: '/docs/hospitalos/opd' },
      { name: 'Emergency Department', href: '/docs/hospitalos/emergency' },
      { name: 'Inpatient (IPD)', href: '/docs/hospitalos/ipd' },
      { name: 'Laboratory', href: '/docs/hospitalos/laboratory' },
      { name: 'Pharmacy', href: '/docs/hospitalos/pharmacy' },
      { name: 'Billing & Cashier', href: '/docs/hospitalos/billing' },
    ],
  },
  {
    title: 'PharmaPOS',
    description: 'Pharmacy management and POS system documentation',
    href: '/docs/pharmapos',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    modules: [
      { name: 'Getting Started', href: '/docs/pharmapos/getting-started' },
      { name: 'Point of Sale', href: '/docs/pharmapos/pos' },
      { name: 'Inventory Management', href: '/docs/pharmapos/inventory' },
      { name: 'Prescriptions', href: '/docs/pharmapos/prescriptions' },
      { name: 'Reports', href: '/docs/pharmapos/reports' },
    ],
  },
];

export default function DocsPage() {
  return (
    <>
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to get started with MedSoftware products. Choose a product below to explore guides, tutorials, and reference documentation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/docs/hospitalos/getting-started"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#166534] text-white rounded-lg hover:bg-[#14532d] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick Start Guide
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-[#166534] hover:text-[#166534] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              Contact Support
            </Link>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {docCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#166534]/10 rounded-xl flex items-center justify-center text-[#166534]">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {category.modules.map((module) => (
                    <li key={module.name}>
                      <Link
                        href={module.href}
                        className="flex items-center gap-2 text-gray-700 hover:text-[#166534] transition-colors py-1.5"
                      >
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {module.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={category.href}
                  className="inline-flex items-center gap-1 text-[#166534] font-medium mt-6 hover:underline"
                >
                  View all {category.title} docs
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-6">
              Can&apos;t find what you&apos;re looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/9715677266520"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BD5A] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Support
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-[#166534] hover:text-[#166534] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
