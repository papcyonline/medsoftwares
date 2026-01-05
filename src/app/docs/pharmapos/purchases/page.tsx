'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function PurchasesPage() {
  return (
    <>
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/docs" className="hover:text-[#166534]">Docs</Link></li>
              <li>/</li>
              <li><Link href="/docs/pharmapos" className="hover:text-[#166534]">PharmaPOS</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Purchases & Suppliers</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Purchases & Suppliers</h1>
            <p className="text-lg text-gray-600">
              Manage your suppliers, create purchase orders, receive stock deliveries, and track
              supplier payments.
            </p>
          </div>

          {/* Supplier Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <StorefrontIcon className="w-6 h-6 text-[#166534]" />
              Supplier Management
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                Maintain a database of all your suppliers with complete contact and payment information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Supplier Details</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Company name and contact person
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Phone, email, and address
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Tax identification number
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Bank account details
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Payment Terms</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Credit period (e.g., Net 30)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Credit limit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Discount terms
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Preferred payment method
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Purchase Orders */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ReceiptIcon className="w-6 h-6 text-[#166534]" />
              Purchase Orders
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Creating a Purchase Order</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                    <div>
                      <strong className="text-gray-900">Select Supplier</strong>
                      <p className="text-sm text-gray-600">Choose from your registered suppliers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                    <div>
                      <strong className="text-gray-900">Add Products</strong>
                      <p className="text-sm text-gray-600">Search and add products with quantities and agreed prices</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                    <div>
                      <strong className="text-gray-900">Review & Submit</strong>
                      <p className="text-sm text-gray-600">Verify totals and submit for approval (if workflow enabled)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                    <div>
                      <strong className="text-gray-900">Send to Supplier</strong>
                      <p className="text-sm text-gray-600">Print or email the PO to your supplier</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Auto-Generate POs</h3>
                <p className="text-sm text-blue-800">
                  PharmaPOS can automatically suggest purchase orders based on items below reorder level.
                  Review the Low Stock Report and click &quot;Generate PO&quot; to create orders automatically.
                </p>
              </div>
            </div>
          </section>

          {/* Receiving Stock */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <LocalShippingIcon className="w-6 h-6 text-[#166534]" />
              Receiving Stock
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                When a delivery arrives, record the received items against the purchase order:
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Full Receipt</h3>
                  <p className="text-sm text-gray-600">
                    When all ordered items are delivered. Select the PO and confirm receipt.
                    Stock is automatically added to inventory.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Partial Receipt</h3>
                  <p className="text-sm text-gray-600">
                    When only some items are delivered. Enter received quantities for each item.
                    PO remains open for remaining items.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Receipt Details</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Enter batch numbers for each product
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Record expiry dates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Verify quantities received
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Note any discrepancies or damaged items
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Stock Requests */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <InventoryIcon className="w-6 h-6 text-[#166534]" />
              Stock Requests
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                For pharmacies with separate store and counter locations, staff can request stock transfers:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Request Workflow</h3>
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li>1. Pharmacist creates stock request</li>
                    <li>2. Storekeeper reviews request</li>
                    <li>3. Storekeeper approves/rejects</li>
                    <li>4. Stock is transferred</li>
                    <li>5. Pharmacist confirms receipt</li>
                  </ol>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Request Types</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Regular replenishment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Emergency request
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Return to store
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Supplier Payments */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Supplier Payments</h2>
            <div className="bg-gradient-to-r from-[#166534] to-[#14532d] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-3">Track What You Owe</h3>
              <p className="text-white/90 text-sm mb-4">
                Manage your accounts payable with complete visibility:
              </p>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  View outstanding balances by supplier
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  Track payment due dates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  Record full or partial payments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  Generate supplier statements
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  Payment history and receipts
                </li>
              </ul>
            </div>
          </section>

          {/* Purchase Reports */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Purchase Reports</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Purchase History</h3>
                <p className="text-sm text-gray-600">
                  All purchases by date range, supplier, or product.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Supplier Performance</h3>
                <p className="text-sm text-gray-600">
                  Track delivery times, pricing, and reliability.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Price Comparison</h3>
                <p className="text-sm text-gray-600">
                  Compare prices across suppliers for the same products.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Pending POs</h3>
                <p className="text-sm text-gray-600">
                  Track orders awaiting delivery or partial receipts.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <Link
              href="/docs/pharmapos/reports"
              className="flex items-center gap-2 text-gray-600 hover:text-[#166534] transition-colors"
            >
              <ArrowBackIcon className="w-5 h-5" />
              <span>Reports & Analytics</span>
            </Link>
            <Link
              href="/docs/pharmapos/customers"
              className="flex items-center gap-2 text-[#166534] font-medium hover:underline"
            >
              <span>Customers & Credit</span>
              <ArrowForwardIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
