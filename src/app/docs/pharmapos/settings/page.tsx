'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import PrintIcon from '@mui/icons-material/Print';
import WifiIcon from '@mui/icons-material/Wifi';
import SecurityIcon from '@mui/icons-material/Security';
import BackupIcon from '@mui/icons-material/Backup';
import TuneIcon from '@mui/icons-material/Tune';

export default function SettingsPage() {
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
              <li className="text-gray-900 font-medium">Settings & Configuration</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Settings & Configuration</h1>
            <p className="text-lg text-gray-600">
              Configure PharmaPOS to match your pharmacy&apos;s workflow. Set up printers,
              network mode, user permissions, and system preferences.
            </p>
          </div>

          {/* General Settings */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <SettingsIcon className="w-6 h-6 text-[#166534]" />
              General Settings
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Business Information</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Pharmacy name and logo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Address and contact details
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Registration numbers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Tax identification
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Regional Settings</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Currency format
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Date and time format
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Tax rates (VAT/GST)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                      Language preference
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Printer Setup */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <PrintIcon className="w-6 h-6 text-[#166534]" />
              Printer Setup
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Receipt Printer</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Configure your thermal receipt printer for fast transaction printing:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Supports 58mm and 80mm thermal printers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    USB and network printer support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Test print functionality
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Auto-print after sale option
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Receipt Customization</h3>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Add pharmacy logo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Custom header text
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Footer messages
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Return policy text
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Label Printer</h3>
                <p className="text-sm text-gray-600">
                  Configure a separate label printer for barcode labels, price tags, and shelf labels.
                  Supports various label sizes and formats.
                </p>
              </div>
            </div>
          </section>

          {/* Network Mode */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <WifiIcon className="w-6 h-6 text-[#166534]" />
              Network Mode
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                PharmaPOS supports two operating modes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Standalone Mode</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Single computer setup with local database.
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>- No network required</li>
                    <li>- All data stored locally</li>
                    <li>- Single user at a time</li>
                    <li>- Best for small pharmacies</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Network Mode</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Multiple computers sharing one database.
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>- Server + client setup</li>
                    <li>- Multiple simultaneous users</li>
                    <li>- Real-time data sync</li>
                    <li>- Best for busy pharmacies</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Setting Up Network Mode</h3>
                <ol className="space-y-1 text-sm text-blue-800">
                  <li>1. Install PharmaPOS on the server computer</li>
                  <li>2. Enable &quot;Server Mode&quot; in Settings</li>
                  <li>3. Note the server IP address shown</li>
                  <li>4. Install PharmaPOS on client computers</li>
                  <li>5. Enter the server IP when prompted</li>
                </ol>
              </div>
            </div>
          </section>

          {/* User Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <SecurityIcon className="w-6 h-6 text-[#166534]" />
              User Management
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">User Roles</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 text-sm">Super Admin</h4>
                    <p className="text-xs text-gray-500">All permissions + license management</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 text-sm">Admin</h4>
                    <p className="text-xs text-gray-500">Full access except license</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 text-sm">Pharmacist</h4>
                    <p className="text-xs text-gray-500">Sales, prescriptions, patients</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 text-sm">Cashier</h4>
                    <p className="text-xs text-gray-500">Sales, payments, customers</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 text-sm">Storekeeper</h4>
                    <p className="text-xs text-gray-500">Inventory, purchases, stock</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Permission Control</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Granular permissions per role
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Custom role creation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Restrict discount limits per user
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Activity logging per user
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Backup & Restore */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BackupIcon className="w-6 h-6 text-[#166534]" />
              Backup & Restore
            </h2>
            <div className="bg-gradient-to-r from-[#166534] to-[#14532d] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-3">Protect Your Data</h3>
              <p className="text-white/90 text-sm mb-4">
                Regular backups ensure your pharmacy data is safe:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Manual backup to file
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Scheduled automatic backups
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Backup to external drive
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Cloud backup option
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Easy restore process
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" />
                    Backup notifications
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional Settings */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TuneIcon className="w-6 h-6 text-[#166534]" />
              Additional Settings
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Sales Settings</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>- Default payment method</li>
                  <li>- Auto-print receipts</li>
                  <li>- Allow negative stock sales</li>
                  <li>- Round total amounts</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Inventory Settings</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>- Default expiry alert days</li>
                  <li>- Low stock threshold</li>
                  <li>- Allow stock transfer</li>
                  <li>- Batch tracking required</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Notification Settings</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>- SMS provider setup</li>
                  <li>- Email notifications</li>
                  <li>- Alert preferences</li>
                  <li>- Message templates</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Security Settings</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>- Password requirements</li>
                  <li>- Session timeout</li>
                  <li>- Login attempts limit</li>
                  <li>- Audit log retention</li>
                </ul>
              </div>
            </div>
          </section>

          {/* License Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">License Information</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                View and manage your PharmaPOS license:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  View license status and expiry date
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Check enabled features
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  View allowed user count
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Renew or upgrade license
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Contact MedSoftwares support for license upgrades or renewals.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <Link
              href="/docs/pharmapos/customers"
              className="flex items-center gap-2 text-gray-600 hover:text-[#166534] transition-colors"
            >
              <ArrowBackIcon className="w-5 h-5" />
              <span>Customers & Credit</span>
            </Link>
            <Link
              href="/docs/pharmapos"
              className="flex items-center gap-2 text-[#166534] font-medium hover:underline"
            >
              <span>Back to PharmaPOS Docs</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
