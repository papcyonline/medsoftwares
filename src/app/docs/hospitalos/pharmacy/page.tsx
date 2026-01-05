import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pharmacy & Dispensary - HospitalOS',
  description: 'Learn how to manage pharmacy inventory, prescriptions, dispensing, and ward dispensary operations in HospitalOS.',
};

export default function PharmacyDocPage() {
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
              <li className="text-gray-900 font-medium">Pharmacy & Dispensary</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pharmacy & Dispensary</h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage drug inventory, prescriptions, dispensing, and ward stock operations.
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Drug Inventory</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Adding Medicines</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Go to <strong>Pharmacy → Medicine List</strong></li>
                <li>Click <strong>Add Medicine</strong></li>
                <li>Enter drug details:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Generic name and brand name</li>
                    <li>Dosage form (tablet, syrup, injection, etc.)</li>
                    <li>Strength/concentration</li>
                    <li>Unit of measure</li>
                    <li>Category</li>
                  </ul>
                </li>
                <li>Set pricing for different units (per tablet, per card, per box)</li>
                <li>Set reorder level for low stock alerts</li>
                <li>Save medicine</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Batch Management</h3>
              <p className="text-gray-600 mb-4">
                Track inventory by batch for expiry management:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Each purchase creates a new batch</li>
                <li>Batch number and expiry date tracked</li>
                <li>FEFO (First Expiry, First Out) dispensing</li>
                <li>Expiry alerts for items nearing expiration</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prescription Dispensing</h2>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Prescription Workflow</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Doctor Prescribes</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">Patient Pays</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Pharmacist Dispenses</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Completed</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Dispensing Process</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>View pending prescriptions in Pharmacy Dashboard</li>
                <li>Verify payment status (if prepay mode)</li>
                <li>Review prescription items</li>
                <li>Select batch for each item (FEFO suggested)</li>
                <li>Confirm quantities</li>
                <li>Mark items as dispensed</li>
                <li>Print label/receipt if needed</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Point of Sale (POS)</h2>
              <p className="text-gray-600 mb-4">
                Retail counter sales for walk-in customers.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Creating a Sale</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Click <strong>New Sale</strong> in Pharmacy POS</li>
                <li>Search and add items to cart</li>
                <li>Adjust quantities as needed</li>
                <li>System calculates total</li>
                <li>Select payment method (cash, card, mobile money)</li>
                <li>Enter amount received</li>
                <li>Complete sale and print receipt</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Payment Methods</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Cash</li>
                <li>Mobile Money</li>
                <li>Card (Debit/Credit)</li>
                <li>Insurance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ward Dispensary</h2>
              <p className="text-gray-600 mb-4">
                Manage medication stock at ward level for IPD patients.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Stock Transfer Process</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Dispensary manager creates stock request</li>
                <li>Pharmacist reviews and approves</li>
                <li>Items marked as in-transit</li>
                <li>Dispensary receives and verifies</li>
                <li>Stock updated in dispensary</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Issuing to Patients</h3>
              <p className="text-gray-600 mb-4">
                Nurses can issue medications from ward dispensary to IPD patients:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Select patient and admission</li>
                <li>Choose medication from ward stock</li>
                <li>Enter quantity issued</li>
                <li>System deducts from ward stock</li>
                <li>Charge added to patient bill</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Purchases & Suppliers</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Creating a Purchase Order</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Go to <strong>Pharmacy → Purchases</strong></li>
                <li>Click <strong>New Purchase</strong></li>
                <li>Select supplier</li>
                <li>Add items with quantities and prices</li>
                <li>Enter batch numbers and expiry dates</li>
                <li>Save purchase</li>
                <li>Stock automatically added to inventory</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Supplier Management</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Add supplier with contact details</li>
                <li>Set payment terms</li>
                <li>Track purchase history per supplier</li>
                <li>Manage outstanding payments</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Expiry Management</h2>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                  <span className="text-sm text-gray-700"><strong>Critical:</strong> Expiring within 7 days</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="text-sm text-gray-700"><strong>Warning:</strong> Expiring within 30 days</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-100 border border-gray-300 rounded-lg">
                  <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
                  <span className="text-sm text-gray-700"><strong>Expired:</strong> Past expiry date</span>
                </div>
              </div>
            </section>

            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link href="/docs/hospitalos/laboratory" className="text-[#166534] hover:underline">
                ← Laboratory
              </Link>
              <Link href="/docs/hospitalos/billing" className="text-[#166534] hover:underline">
                Billing & Cashier →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
