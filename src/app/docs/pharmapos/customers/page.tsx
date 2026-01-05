'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HistoryIcon from '@mui/icons-material/History';

export default function CustomersPage() {
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
              <li className="text-gray-900 font-medium">Customers & Credit</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customers & Credit</h1>
            <p className="text-lg text-gray-600">
              Build lasting relationships with your customers. Manage customer records,
              process credit sales, and track payment collections.
            </p>
          </div>

          {/* Customer Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <PeopleIcon className="w-6 h-6 text-[#166534]" />
              Customer Management
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                Create and manage customer profiles with complete information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Details</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Full name
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Phone number(s)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Email address
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Physical address
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Account Settings</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Customer type (regular, VIP, wholesale)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Credit eligibility
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Credit limit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Default discount
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Types */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Types</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Regular</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Standard customers with normal pricing.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>- Standard prices</li>
                  <li>- May qualify for credit</li>
                  <li>- Purchase history tracked</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">VIP</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Loyal customers with special benefits.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>- Automatic discounts</li>
                  <li>- Higher credit limits</li>
                  <li>- Priority notifications</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Wholesale</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Bulk buyers and business accounts.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>- Wholesale pricing</li>
                  <li>- Extended credit terms</li>
                  <li>- Volume discounts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Credit Sales */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CreditCardIcon className="w-6 h-6 text-[#166534]" />
              Credit Sales
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Processing a Credit Sale</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                    <div>
                      <strong className="text-gray-900">Select Customer</strong>
                      <p className="text-sm text-gray-600">Choose a registered customer with credit enabled</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                    <div>
                      <strong className="text-gray-900">Add Items</strong>
                      <p className="text-sm text-gray-600">Add products to the cart as normal</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                    <div>
                      <strong className="text-gray-900">Choose Credit Payment</strong>
                      <p className="text-sm text-gray-600">Select &quot;Credit&quot; as the payment method</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#166534] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                    <div>
                      <strong className="text-gray-900">Set Due Date</strong>
                      <p className="text-sm text-gray-600">Specify when payment is expected</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <h3 className="font-semibold text-yellow-900 mb-2">Credit Limits</h3>
                <p className="text-sm text-yellow-800">
                  PharmaPOS prevents credit sales that would exceed a customer&apos;s credit limit.
                  The system shows available credit before completing the sale.
                  Admins can override limits if needed.
                </p>
              </div>
            </div>
          </section>

          {/* Payment Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HistoryIcon className="w-6 h-6 text-[#166534]" />
              Payment Collection
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                Track and collect payments from credit customers:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Record Payments</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Accept full or partial payments
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Multiple payment methods
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Issue payment receipts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Auto-update customer balance
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">View Balances</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Outstanding balance per customer
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      List of unpaid invoices
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Aging analysis (30/60/90 days)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Payment history
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Reminders */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <NotificationsIcon className="w-6 h-6 text-[#166534]" />
              Payment Reminders
            </h2>
            <div className="bg-gradient-to-r from-[#166534] to-[#14532d] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-3">Automated Notifications</h3>
              <p className="text-white/90 text-sm mb-4">
                PharmaPOS can send payment reminders to customers:
              </p>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  SMS reminders before due date
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  Overdue payment notifications
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  Balance statements via email
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  Customizable message templates
                </li>
              </ul>
              <p className="text-white/70 text-sm mt-4">
                Configure reminder schedules and templates in Settings &gt; Notifications.
              </p>
            </div>
          </section>

          {/* Customer Reports */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reports</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Customer List</h3>
                <p className="text-sm text-gray-600">
                  All customers with contact info and current balances.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Credit Report</h3>
                <p className="text-sm text-gray-600">
                  All outstanding credit balances and aging analysis.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Top Customers</h3>
                <p className="text-sm text-gray-600">
                  Highest spending customers by period.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Customer Statement</h3>
                <p className="text-sm text-gray-600">
                  Detailed transaction history for individual customers.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <Link
              href="/docs/pharmapos/purchases"
              className="flex items-center gap-2 text-gray-600 hover:text-[#166534] transition-colors"
            >
              <ArrowBackIcon className="w-5 h-5" />
              <span>Purchases & Suppliers</span>
            </Link>
            <Link
              href="/docs/pharmapos/settings"
              className="flex items-center gap-2 text-[#166534] font-medium hover:underline"
            >
              <span>Settings & Configuration</span>
              <ArrowForwardIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
