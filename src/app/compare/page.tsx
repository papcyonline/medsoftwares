'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

interface ComparisonFeature {
  feature: string;
  pharmapos: boolean | string;
  others: boolean | string;
  description: string;
}

const pharmacyComparison: ComparisonFeature[] = [
  {
    feature: 'One-Time Payment (No Subscription)',
    pharmapos: true,
    others: false,
    description: 'Pay once, own forever. Most competitors charge monthly fees of $50-200/month.',
  },
  {
    feature: 'Offline Capability',
    pharmapos: true,
    others: false,
    description: 'Works without internet. Critical for areas with unreliable connectivity.',
  },
  {
    feature: 'Mobile Money Integration',
    pharmapos: true,
    others: false,
    description: 'MTN, Vodafone Cash, AirtelTigo built-in. Essential for African markets.',
  },
  {
    feature: 'NHIS Claims (Ghana)',
    pharmapos: true,
    others: 'Limited',
    description: 'Full integration with Ghana\'s National Health Insurance Scheme.',
  },
  {
    feature: 'Multi-Currency Support',
    pharmapos: true,
    others: 'Limited',
    description: 'GHS, NGN, KES, ZAR, USD, EUR, GBP and more.',
  },
  {
    feature: 'Drug Expiry Tracking',
    pharmapos: true,
    others: true,
    description: 'FEFO management, expiry alerts, and reporting.',
  },
  {
    feature: 'Barcode Scanning',
    pharmapos: true,
    others: true,
    description: 'Fast checkout with USB/Bluetooth scanner support.',
  },
  {
    feature: 'Multi-Branch Management',
    pharmapos: true,
    others: true,
    description: 'Centralized control of multiple locations.',
  },
  {
    feature: 'Prescription Management',
    pharmapos: true,
    others: true,
    description: 'Digital prescriptions, refill tracking, patient history.',
  },
  {
    feature: 'Local Support in Africa',
    pharmapos: true,
    others: false,
    description: 'Support team available in multiple African countries.',
  },
  {
    feature: 'Starting Price',
    pharmapos: '$299',
    others: '$50-200/month',
    description: 'One-time vs recurring monthly cost.',
  },
];

const hospitalComparison: ComparisonFeature[] = [
  {
    feature: 'One-Time Payment',
    pharmapos: true,
    others: false,
    description: 'Pay once, own forever. Competitors often charge $500-2000/month.',
  },
  {
    feature: '25+ Integrated Modules',
    pharmapos: true,
    others: 'Limited',
    description: 'Complete HMS including OPD, IPD, Lab, Radiology, Pharmacy, HR.',
  },
  {
    feature: 'Offline Capability',
    pharmapos: true,
    others: false,
    description: 'Continue operations during network outages.',
  },
  {
    feature: 'NHIS/NHIF Integration',
    pharmapos: true,
    others: 'Limited',
    description: 'Built-in support for African insurance schemes.',
  },
  {
    feature: 'Telemedicine Module',
    pharmapos: true,
    others: 'Extra Cost',
    description: 'Video consultations and remote patient monitoring included.',
  },
  {
    feature: 'Laboratory Management (LIS)',
    pharmapos: true,
    others: true,
    description: 'Sample tracking, result delivery, integration with equipment.',
  },
  {
    feature: 'Radiology/Imaging (RIS)',
    pharmapos: true,
    others: true,
    description: 'Imaging orders, PACS integration, report management.',
  },
  {
    feature: 'Electronic Medical Records',
    pharmapos: true,
    others: true,
    description: 'Complete patient history, clinical notes, diagnoses.',
  },
  {
    feature: 'Blood Bank Module',
    pharmapos: true,
    others: 'Extra Cost',
    description: 'Donor management, inventory, cross-matching.',
  },
  {
    feature: 'Queue Management',
    pharmapos: true,
    others: 'Extra Cost',
    description: 'Patient flow optimization with digital displays.',
  },
  {
    feature: 'Local African Support',
    pharmapos: true,
    others: false,
    description: 'Dedicated support across African countries.',
  },
  {
    feature: 'Starting Price',
    pharmapos: '$999',
    others: '$500-2000/month',
    description: 'One-time vs recurring monthly cost.',
  },
];

function ComparisonTable({ data, productName }: { data: ComparisonFeature[]; productName: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-4 font-semibold text-gray-900 border-b">Feature</th>
            <th className="text-center p-4 font-semibold text-[#166534] border-b">{productName}</th>
            <th className="text-center p-4 font-semibold text-gray-500 border-b">Typical Competitors</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4">
                <div className="font-medium text-gray-900">{row.feature}</div>
                <div className="text-sm text-gray-500 mt-1">{row.description}</div>
              </td>
              <td className="p-4 text-center">
                {typeof row.pharmapos === 'boolean' ? (
                  row.pharmapos ? (
                    <CheckCircleIcon className="text-green-600 w-6 h-6 mx-auto" />
                  ) : (
                    <CancelIcon className="text-red-500 w-6 h-6 mx-auto" />
                  )
                ) : (
                  <span className="font-semibold text-[#166534]">{row.pharmapos}</span>
                )}
              </td>
              <td className="p-4 text-center">
                {typeof row.others === 'boolean' ? (
                  row.others ? (
                    <CheckCircleIcon className="text-green-600 w-6 h-6 mx-auto" />
                  ) : (
                    <CancelIcon className="text-red-500 w-6 h-6 mx-auto" />
                  )
                ) : (
                  <span className="text-gray-500">{row.others}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ComparePage() {
  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Software Comparison - MedSoftwares vs Competitors',
    description: 'Compare PharmaPOS and HospitalOS with other pharmacy and hospital management software. See features, pricing, and capabilities side by side.',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Healthcare Software Comparison',
      itemListElement: [
        {
          '@type': 'SoftwareApplication',
          name: 'PharmaPOS',
          applicationCategory: 'Pharmacy Management Software',
          offers: {
            '@type': 'Offer',
            price: '299',
            priceCurrency: 'USD',
          },
        },
        {
          '@type': 'SoftwareApplication',
          name: 'HospitalOS',
          applicationCategory: 'Hospital Management System',
          offers: {
            '@type': 'Offer',
            price: '999',
            priceCurrency: 'USD',
          },
        },
      ],
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-6">
            Compare Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
            Why Choose MedSoftwares?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how PharmaPOS and HospitalOS compare to other pharmacy and hospital management software on the market.
          </p>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-extrabold text-gray-900 text-center mb-12">
            Key Differentiators
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl text-center">
              <div className="text-4xl font-extrabold text-[#166534] mb-2">$299</div>
              <div className="text-gray-900 font-semibold mb-2">One-Time Payment</div>
              <p className="text-gray-600 text-sm">No monthly fees. Pay once, own forever. Save thousands compared to subscription software.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl text-center">
              <div className="text-4xl font-extrabold text-[#166534] mb-2">100%</div>
              <div className="text-gray-900 font-semibold mb-2">Offline Capable</div>
              <p className="text-gray-600 text-sm">Works without internet. Perfect for areas with unreliable connectivity.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl text-center">
              <div className="text-4xl font-extrabold text-[#166534] mb-2">12+</div>
              <div className="text-gray-900 font-semibold mb-2">Countries Served</div>
              <p className="text-gray-600 text-sm">Local support across Africa. Mobile money and NHIS integration built-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PharmaPOS Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-4">
              PharmaPOS vs Other Pharmacy Software
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare PharmaPOS with typical pharmacy management software solutions available in the market.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ComparisonTable data={pharmacyComparison} productName="PharmaPOS" />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/pharmapos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#166534] text-white font-bold rounded-full hover:bg-green-700 transition-colors"
            >
              Learn More About PharmaPOS
              <ArrowOutwardIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* HospitalOS Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-4">
              HospitalOS vs Other Hospital Software
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare HospitalOS with typical hospital management systems on the market.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
            <ComparisonTable data={hospitalComparison} productName="HospitalOS" />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/hospitalos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#166534] text-white font-bold rounded-full hover:bg-green-700 transition-colors"
            >
              Learn More About HospitalOS
              <ArrowOutwardIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-4">
              Total Cost of Ownership
            </h2>
            <p className="text-gray-600">
              See how much you save with MedSoftwares over 3 years
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">PharmaPOS (Pharmacy)</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">PharmaPOS (one-time)</span>
                  <span className="font-bold text-[#166534]">$299 - $899</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">3-Year Total</span>
                  <span className="font-bold text-[#166534]">$299 - $899</span>
                </div>
                <hr />
                <div className="flex justify-between">
                  <span className="text-gray-600">Competitor (monthly)</span>
                  <span className="text-gray-500">$100/month avg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Competitor 3-Year Total</span>
                  <span className="text-red-500 font-bold">$3,600</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg">
                  <span className="font-bold text-gray-900">You Save</span>
                  <span className="font-bold text-[#166534]">Up to $3,300</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">HospitalOS (Hospital)</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">HospitalOS (one-time)</span>
                  <span className="font-bold text-[#166534]">$999 - $2,999</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">3-Year Total</span>
                  <span className="font-bold text-[#166534]">$999 - $2,999</span>
                </div>
                <hr />
                <div className="flex justify-between">
                  <span className="text-gray-600">Competitor (monthly)</span>
                  <span className="text-gray-500">$1,000/month avg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Competitor 3-Year Total</span>
                  <span className="text-red-500 font-bold">$36,000</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg">
                  <span className="font-bold text-gray-900">You Save</span>
                  <span className="font-bold text-[#166534]">Up to $35,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-6">
            Ready to Save Thousands?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Join healthcare facilities across 12 countries who chose MedSoftwares for quality and affordability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#166534] text-lg font-bold rounded-full shadow-lg hover:bg-green-50 transition-all"
            >
              Get a Free Demo
              <ArrowOutwardIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
