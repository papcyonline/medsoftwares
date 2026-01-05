'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DownloadIcon from '@mui/icons-material/Download';

export default function ReportsPage() {
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
              <li className="text-gray-900 font-medium">Reports & Analytics</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reports & Analytics</h1>
            <p className="text-lg text-gray-600">
              Gain insights into your pharmacy&apos;s performance with comprehensive reports on sales,
              inventory, finances, and more.
            </p>
          </div>

          {/* Sales Reports */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUpIcon className="w-6 h-6 text-[#166534]" />
              Sales Reports
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Daily Sales Summary</h3>
                  <p className="text-sm text-gray-600">
                    Total sales, transaction count, average ticket size, and payment method breakdown.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Sales by Period</h3>
                  <p className="text-sm text-gray-600">
                    Weekly, monthly, quarterly, and yearly sales comparisons with growth trends.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Product Sales</h3>
                  <p className="text-sm text-gray-600">
                    Best-selling products, slow movers, and sales by category.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Staff Performance</h3>
                  <p className="text-sm text-gray-600">
                    Sales per cashier, transaction counts, and average sale values.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Inventory Reports */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <InventoryIcon className="w-6 h-6 text-[#166534]" />
              Inventory Reports
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Stock Valuation</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Current stock value at cost price and retail price. Track inventory investment.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Total stock at cost
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Total stock at retail
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Potential profit margin
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Value by category
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Expiry Report</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Track products approaching expiry to prevent losses.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Expired products list
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Expiring in 30/60/90 days
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Value at risk
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Stock Movement</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Track how stock moves in and out of your pharmacy.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Purchases received
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Sales dispatched
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Adjustments made
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Transfers between locations
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Low Stock & Reorder</h3>
                <p className="text-gray-600 text-sm">
                  Products below minimum stock level and items due for reorder.
                  Generate purchase orders directly from this report.
                </p>
              </div>
            </div>
          </section>

          {/* Financial Reports */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AccountBalanceIcon className="w-6 h-6 text-[#166534]" />
              Financial Reports
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Profit & Loss</h3>
                  <p className="text-sm text-gray-600">
                    Revenue, cost of goods sold, gross profit, and margins by period.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Cash Flow</h3>
                  <p className="text-sm text-gray-600">
                    Daily cash receipts, payments, and closing balances.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Accounts Receivable</h3>
                  <p className="text-sm text-gray-600">
                    Outstanding credit sales, aging analysis, and customer balances.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Accounts Payable</h3>
                  <p className="text-sm text-gray-600">
                    Supplier balances, pending payments, and payment history.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dashboard */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AssessmentIcon className="w-6 h-6 text-[#166534]" />
              Dashboard Analytics
            </h2>
            <div className="bg-gradient-to-r from-[#166534] to-[#14532d] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-3">Real-Time Dashboard</h3>
              <p className="text-white/90 text-sm mb-4">
                The dashboard provides at-a-glance insights into your pharmacy&apos;s performance:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Today&apos;s sales total
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Transaction count
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Low stock alerts count
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Expiring items count
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Sales trend chart
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Top selling products
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Recent transactions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Pending credit payments
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Export Options */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <DownloadIcon className="w-6 h-6 text-[#166534]" />
              Export Options
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                Export reports in multiple formats for further analysis or record keeping:
              </p>
              <div className="grid sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <h3 className="font-semibold text-gray-900">Excel</h3>
                  <p className="text-xs text-gray-500">.xlsx format</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <div className="text-2xl mb-2">📄</div>
                  <h3 className="font-semibold text-gray-900">PDF</h3>
                  <p className="text-xs text-gray-500">Print-ready</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <div className="text-2xl mb-2">📋</div>
                  <h3 className="font-semibold text-gray-900">CSV</h3>
                  <p className="text-xs text-gray-500">Data export</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <div className="text-2xl mb-2">🖨️</div>
                  <h3 className="font-semibold text-gray-900">Print</h3>
                  <p className="text-xs text-gray-500">Direct print</p>
                </div>
              </div>
            </div>
          </section>

          {/* Scheduled Reports */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scheduled Reports</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-gray-600 text-sm mb-4">
                Set up automatic report generation and delivery:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Daily sales summary sent to email
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Weekly inventory reports
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Monthly profit & loss statements
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Custom report schedules
                </li>
              </ul>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <Link
              href="/docs/pharmapos/prescriptions"
              className="flex items-center gap-2 text-gray-600 hover:text-[#166534] transition-colors"
            >
              <ArrowBackIcon className="w-5 h-5" />
              <span>Prescriptions</span>
            </Link>
            <Link
              href="/docs/pharmapos/purchases"
              className="flex items-center gap-2 text-[#166534] font-medium hover:underline"
            >
              <span>Purchases & Suppliers</span>
              <ArrowForwardIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
