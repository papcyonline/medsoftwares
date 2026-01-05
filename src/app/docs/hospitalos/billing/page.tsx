import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Billing & Cashier - HospitalOS',
  description: 'Learn how to manage patient billing, payments, receipts, and financial operations in HospitalOS.',
};

export default function BillingDocPage() {
  return (
    <>
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/docs" className="hover:text-[#166534]">Docs</Link></li>
              <li>/</li>
              <li><Link href="/docs/hospitalos" className="hover:text-[#166534]">HospitalOS</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Billing & Cashier</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Billing & Cashier</h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage patient billing, payments, receipts, and financial operations.
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Modes</h2>
              <p className="text-gray-600 mb-4">
                HospitalOS supports flexible payment configurations:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Prepaid Mode</h3>
                  <p className="text-sm text-gray-600">Patients pay for services before receiving them. Common for outpatient services.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Postpaid Mode</h3>
                  <p className="text-sm text-gray-600">Patients receive services first and pay at the end. Common for IPD admissions.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Per-Service Mode</h3>
                  <p className="text-sm text-gray-600">Payment collected after each individual service (lab, pharmacy, etc.).</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">OPD Billing</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Charge Types</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Registration Fee:</strong> One-time or per-visit registration charge</li>
                <li><strong>Consultation Fee:</strong> Doctor consultation charges</li>
                <li><strong>Lab Services:</strong> Laboratory test charges</li>
                <li><strong>Radiology:</strong> Imaging and radiology charges</li>
                <li><strong>Pharmacy:</strong> Medication charges</li>
                <li><strong>Procedures:</strong> Minor procedure charges</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Collecting Payment</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Patient arrives at cashier</li>
                <li>Search for patient record</li>
                <li>View pending charges</li>
                <li>Select items to pay</li>
                <li>Choose payment method</li>
                <li>Enter amount received</li>
                <li>Process payment</li>
                <li>Print receipt</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">IPD Billing</h2>
              <p className="text-gray-600 mb-4">
                IPD billing accumulates charges throughout the admission.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Charge Categories</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-900">Category</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Billing Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-2">Bed Charges</td>
                      <td className="py-2">Daily rate</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">Nursing Fees</td>
                      <td className="py-2">Daily rate</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">Medications</td>
                      <td className="py-2">Per item</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">Procedures</td>
                      <td className="py-2">Per procedure</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">Lab/Radiology</td>
                      <td className="py-2">Per test</td>
                    </tr>
                    <tr>
                      <td className="py-2">Doctor Fees</td>
                      <td className="py-2">Per visit/procedure</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Deposits</h3>
              <p className="text-gray-600 mb-4">
                Collect deposits at admission to cover expected costs:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Record deposit amount at admission</li>
                <li>Track running balance vs. charges</li>
                <li>Request additional deposits if needed</li>
                <li>Refund excess at discharge</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Discharge Billing</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Doctor initiates discharge</li>
                <li>System generates final bill</li>
                <li>Review all charges</li>
                <li>Apply deposits</li>
                <li>Calculate balance due</li>
                <li>Collect remaining payment</li>
                <li>Print discharge summary and bill</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Methods</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Cash</h3>
                  <p className="text-sm text-gray-600">Direct cash payment with change calculation</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Mobile Money</h3>
                  <p className="text-sm text-gray-600">MTN, Vodafone, AirtelTigo mobile payments</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Card</h3>
                  <p className="text-sm text-gray-600">Debit and credit card payments</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Insurance</h3>
                  <p className="text-sm text-gray-600">NHIS and private insurance claims</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cashier Dashboard</h2>
              <p className="text-gray-600 mb-4">
                The cashier dashboard provides a complete view of financial operations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Dashboard Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Pending payments queue</li>
                <li>Today&apos;s collections summary</li>
                <li>Payment method breakdown</li>
                <li>Quick patient search</li>
                <li>Receipt reprint</li>
                <li>Daily reports</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Reports</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Daily Collection:</strong> Summary of all payments received</li>
                <li><strong>Payment Method:</strong> Breakdown by payment type</li>
                <li><strong>Outstanding:</strong> Unpaid balances</li>
                <li><strong>Revenue by Service:</strong> Income by department/service</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Catalog</h2>
              <p className="text-gray-600 mb-4">
                Configure pricing for all hospital services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Setting Up Services</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Go to <strong>Settings → Service Catalog</strong></li>
                <li>Select department</li>
                <li>Add service with:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Service name</li>
                    <li>Category</li>
                    <li>Price</li>
                    <li>Tax (if applicable)</li>
                  </ul>
                </li>
                <li>Save service</li>
              </ol>
            </section>

            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link href="/docs/hospitalos/pharmacy" className="text-[#166534] hover:underline">
                ← Pharmacy & Dispensary
              </Link>
              <Link href="/docs/hospitalos" className="text-[#166534] hover:underline">
                Back to HospitalOS Docs →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
