'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function GettingStartedPage() {
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
              <li className="text-gray-900 font-medium">Getting Started</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Getting Started with PharmaPOS</h1>
            <p className="text-lg text-gray-600">
              Get PharmaPOS up and running in your pharmacy. This guide covers installation, initial setup,
              and your first steps with the system.
            </p>
          </div>

          {/* System Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ComputerIcon className="w-6 h-6 text-[#166534]" />
              System Requirements
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Minimum Requirements</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Windows 10/11 (64-bit)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      4 GB RAM (8 GB recommended)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      500 MB free disk space
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      1280x720 screen resolution
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Optional Hardware</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Barcode scanner (USB or Bluetooth)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Thermal receipt printer (58mm/80mm)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Cash drawer
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Network router (for multi-user)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <DownloadIcon className="w-6 h-6 text-[#166534]" />
              Installation
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Download the Installer</h3>
                    <p className="text-gray-600 text-sm">
                      Download the PharmaPOS installer from the link provided by your sales representative
                      or from your customer portal.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Run the Installer</h3>
                    <p className="text-gray-600 text-sm">
                      Double-click the installer file (PharmaPOS_Setup.exe) and follow the on-screen instructions.
                      Accept the license agreement and choose your installation directory.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Activate Your License</h3>
                    <p className="text-gray-600 text-sm">
                      Launch PharmaPOS and enter your license key when prompted. The license key is provided
                      with your purchase and determines which features are available.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Complete Initial Setup</h3>
                    <p className="text-gray-600 text-sm">
                      The setup wizard will guide you through configuring your pharmacy details,
                      creating user accounts, and setting up basic preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Initial Configuration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <SettingsIcon className="w-6 h-6 text-[#166534]" />
              Initial Configuration
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Pharmacy Details</h3>
              <p className="text-gray-600 text-sm mb-4">
                Set up your pharmacy information that will appear on receipts and reports:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Pharmacy name and address
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Phone number and email
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Registration/license numbers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Tax identification number
                </li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-4">Currency & Tax Settings</h3>
              <p className="text-gray-600 text-sm mb-4">
                Configure your currency format and tax rates:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Select your currency (GHS, NGN, USD, etc.)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Set default tax rate (VAT/GST)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Configure tax exemption rules
                </li>
              </ul>
            </div>
          </section>

          {/* User Setup */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <PersonAddIcon className="w-6 h-6 text-[#166534]" />
              Creating User Accounts
            </h2>
            <p className="text-gray-600 mb-4">
              PharmaPOS supports multiple user roles with different permissions:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Admin</h3>
                <p className="text-sm text-gray-600">Full access to all features, settings, and reports</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Pharmacist</h3>
                <p className="text-sm text-gray-600">Sales, prescriptions, patients, inventory viewing</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Cashier</h3>
                <p className="text-sm text-gray-600">Process sales, handle payments, manage customers</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Storekeeper</h3>
                <p className="text-sm text-gray-600">Inventory management, purchases, stock control</p>
              </div>
            </div>
          </section>

          {/* First Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <InventoryIcon className="w-6 h-6 text-[#166534]" />
              Your First Steps
            </h2>
            <div className="bg-gradient-to-r from-[#166534] to-[#14532d] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-4">Recommended Setup Order</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                  <span>Add your product categories (e.g., Antibiotics, Pain Relief, Vitamins)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                  <span>Import or add your inventory items with prices and stock levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                  <span>Add your suppliers for future purchase orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                  <span>Configure your receipt printer and test printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">5</span>
                  <span>Make your first test sale to ensure everything works</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <Link
              href="/docs/pharmapos"
              className="flex items-center gap-2 text-gray-600 hover:text-[#166534] transition-colors"
            >
              <ArrowBackIcon className="w-5 h-5" />
              <span>Back to PharmaPOS</span>
            </Link>
            <Link
              href="/docs/pharmapos/pos"
              className="flex items-center gap-2 text-[#166534] font-medium hover:underline"
            >
              <span>Point of Sale</span>
              <ArrowForwardIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
