'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments';
import ReceiptIcon from '@mui/icons-material/Receipt';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

export default function POSPage() {
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
              <li className="text-gray-900 font-medium">Point of Sale</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Point of Sale</h1>
            <p className="text-lg text-gray-600">
              Process sales quickly and efficiently with the PharmaPOS point of sale module.
              Handle multiple payment methods, print receipts, and manage customer transactions.
            </p>
          </div>

          {/* Sales Interface Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <PointOfSaleIcon className="w-6 h-6 text-[#166534]" />
              Sales Interface
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                The POS screen is designed for speed and ease of use. Key areas include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Product Search</h3>
                  <p className="text-sm text-gray-600">
                    Search by name, barcode, or category. Type to search or scan barcodes directly.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Shopping Cart</h3>
                  <p className="text-sm text-gray-600">
                    View items, adjust quantities, apply discounts, and see running totals.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Selection</h3>
                  <p className="text-sm text-gray-600">
                    Select existing customers or create new ones for credit sales and records.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Payment Panel</h3>
                  <p className="text-sm text-gray-600">
                    Accept cash, mobile money, card payments, or split payments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Adding Items */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ShoppingCartIcon className="w-6 h-6 text-[#166534]" />
              Adding Items to Cart
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <QrCodeScannerIcon className="w-6 h-6 text-[#166534] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Barcode Scanning</h3>
                    <p className="text-gray-600 text-sm">
                      Connect a USB or Bluetooth barcode scanner. Simply scan the product barcode
                      and it will be added to the cart automatically. Scanning the same item increases quantity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Manual Search</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Type the product name in the search box. Results appear as you type.
                  Click on a product to add it to the cart.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                  <strong>Tip:</strong> Use keyboard shortcuts for faster operation. Press Enter to search,
                  arrow keys to navigate results.
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Multi-Unit Selling</h3>
                <p className="text-gray-600 text-sm">
                  PharmaPOS supports selling in different units (piece, card, box, bottle).
                  When adding an item, select the unit type and the price adjusts automatically
                  based on your configured unit conversions.
                </p>
              </div>
            </div>
          </section>

          {/* Cart Operations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cart Operations</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Adjust Quantity:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      Use +/- buttons or type the quantity directly
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Apply Discount:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      Add percentage or fixed amount discounts per item or to the total
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Remove Item:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      Click the remove button or swipe left on the item
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Hold Sale:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      Save the current cart to continue later (useful when customer needs to get more items)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Clear Cart:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      Remove all items and start fresh
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Payment Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <PaymentsIcon className="w-6 h-6 text-[#166534]" />
              Processing Payments
            </h2>
            <p className="text-gray-600 mb-4">
              PharmaPOS supports multiple payment methods that can be used individually or combined:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Cash</h3>
                <p className="text-sm text-gray-600">
                  Enter amount received, system calculates change automatically.
                  Quick buttons for common denominations.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Mobile Money</h3>
                <p className="text-sm text-gray-600">
                  Accept MTN MoMo, Vodafone Cash, AirtelTigo Money, and other mobile payment providers.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Card Payment</h3>
                <p className="text-sm text-gray-600">
                  Record card payments. Integration with POS terminals available for automatic processing.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Credit Sale</h3>
                <p className="text-sm text-gray-600">
                  Sell on credit to registered customers. Track balances and send payment reminders.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Split Payments</h3>
              <p className="text-sm text-blue-800">
                Customers can pay using multiple methods. For example, pay part in cash and part
                with mobile money. The system tracks each payment type separately.
              </p>
            </div>
          </section>

          {/* Receipts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ReceiptIcon className="w-6 h-6 text-[#166534]" />
              Receipts
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Receipt Options</h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Print receipt to thermal printer
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Print to A4 for larger format
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Email receipt to customer
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  No receipt (for quick transactions)
                </li>
              </ul>
              <h3 className="font-semibold text-gray-900 mb-3">Receipt Customization</h3>
              <p className="text-sm text-gray-600">
                Customize your receipt with your pharmacy logo, custom footer messages,
                promotional text, and return policy. Configure in Settings &gt; Receipt Settings.
              </p>
            </div>
          </section>

          {/* Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Faster Sales</h2>
            <div className="bg-gradient-to-r from-[#166534] to-[#14532d] rounded-xl p-6 text-white">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                  <span>Use barcode scanning for fast item entry - most products have barcodes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                  <span>Create quick-access buttons for your most popular items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                  <span>Learn keyboard shortcuts: F2 for search, F5 for payment, F12 for new sale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                  <span>Keep a USB barcode scanner at every POS station</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <Link
              href="/docs/pharmapos/getting-started"
              className="flex items-center gap-2 text-gray-600 hover:text-[#166534] transition-colors"
            >
              <ArrowBackIcon className="w-5 h-5" />
              <span>Getting Started</span>
            </Link>
            <Link
              href="/docs/pharmapos/inventory"
              className="flex items-center gap-2 text-[#166534] font-medium hover:underline"
            >
              <span>Inventory Management</span>
              <ArrowForwardIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
