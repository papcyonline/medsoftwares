'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import WarningIcon from '@mui/icons-material/Warning';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CategoryIcon from '@mui/icons-material/Category';
import QrCodeIcon from '@mui/icons-material/QrCode';

export default function InventoryPage() {
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
              <li className="text-gray-900 font-medium">Inventory Management</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inventory Management</h1>
            <p className="text-lg text-gray-600">
              Keep track of your pharmacy stock with batch management, expiry tracking,
              low stock alerts, and multi-location support.
            </p>
          </div>

          {/* Adding Products */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <InventoryIcon className="w-6 h-6 text-[#166534]" />
              Adding Products
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                Each product in PharmaPOS includes the following information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Basic Information</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Product name and generic name
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Category and subcategory
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Barcode (auto-generated or custom)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Manufacturer/supplier
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pricing & Units</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Cost price and selling price
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Unit of measure (piece, card, box)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Unit conversions (e.g., 10 cards = 1 box)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Tax settings
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CategoryIcon className="w-6 h-6 text-[#166534]" />
              Product Categories
            </h2>
            <p className="text-gray-600 mb-4">
              Organize your products into categories for easier management and reporting:
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {['Antibiotics', 'Pain Relief', 'Vitamins', 'First Aid', 'Skin Care', 'Baby Care',
                'Cardiovascular', 'Respiratory', 'Diabetes', 'Eye Care', 'OTC Drugs', 'Controlled'].map((cat) => (
                <div key={cat} className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700">
                  {cat}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              You can create custom categories and subcategories to match your pharmacy&apos;s organization.
            </p>
          </section>

          {/* Batch & Expiry */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <WarningIcon className="w-6 h-6 text-[#166534]" />
              Batch & Expiry Management
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                Track multiple batches of the same product, each with its own expiry date:
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Batch Tracking</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>- Each stock receipt creates a new batch</li>
                    <li>- Track batch number, quantity, cost, and expiry</li>
                    <li>- FEFO (First Expiry, First Out) automatic selection at POS</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Expiry Alerts</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>- Configure alert thresholds (e.g., 30, 60, 90 days)</li>
                    <li>- Dashboard notifications for expiring items</li>
                    <li>- Expiry reports for action planning</li>
                    <li>- Option to block sale of expired items</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Stock Levels */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stock Levels & Alerts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Minimum Stock Level</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Set a minimum stock level for each product. When stock falls below this level,
                  you&apos;ll receive low stock alerts.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-yellow-800">
                    <strong>Example:</strong> Paracetamol minimum = 100 units.
                    Alert triggers when stock drops to 99.
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Reorder Level</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Set reorder levels to trigger automatic purchase order suggestions
                  before stock runs out.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Example:</strong> Reorder at 50 units, order quantity of 200 units.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Barcode */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <QrCodeIcon className="w-6 h-6 text-[#166534]" />
              Barcode Management
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Auto-Generate:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      System generates unique barcodes for products without manufacturer barcodes
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Print Labels:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      Print barcode labels for shelving and price tags
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Multiple Barcodes:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      Assign multiple barcodes to a single product (different pack sizes)
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Excel Import */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <UploadFileIcon className="w-6 h-6 text-[#166534]" />
              Excel Import
            </h2>
            <div className="bg-gradient-to-r from-[#166534] to-[#14532d] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-3">Bulk Import Products</h3>
              <p className="text-white/90 text-sm mb-4">
                Import hundreds of products at once using Excel spreadsheets:
              </p>
              <ol className="space-y-2 text-sm text-white/90">
                <li>1. Download the Excel template from PharmaPOS</li>
                <li>2. Fill in your product data following the template format</li>
                <li>3. Upload the completed spreadsheet</li>
                <li>4. Review and confirm the import</li>
              </ol>
              <p className="text-white/70 text-sm mt-4">
                The import supports product details, pricing, categories, and opening stock.
              </p>
            </div>
          </section>

          {/* Stock Operations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stock Operations</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Stock Adjustment</h3>
                <p className="text-sm text-gray-600">
                  Adjust stock levels for damaged goods, theft, or counting corrections.
                  All adjustments are logged for audit.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Stock Transfer</h3>
                <p className="text-sm text-gray-600">
                  Transfer stock between locations or from store to pharmacy counter.
                  Requires approval workflow.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Stock Take</h3>
                <p className="text-sm text-gray-600">
                  Conduct physical inventory counts. Compare with system records
                  and reconcile differences.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Write-Off</h3>
                <p className="text-sm text-gray-600">
                  Write off expired, damaged, or unsaleable stock.
                  Maintains audit trail for accounting.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <Link
              href="/docs/pharmapos/pos"
              className="flex items-center gap-2 text-gray-600 hover:text-[#166534] transition-colors"
            >
              <ArrowBackIcon className="w-5 h-5" />
              <span>Point of Sale</span>
            </Link>
            <Link
              href="/docs/pharmapos/prescriptions"
              className="flex items-center gap-2 text-[#166534] font-medium hover:underline"
            >
              <span>Prescriptions</span>
              <ArrowForwardIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
