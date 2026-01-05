import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Getting Started - HospitalOS',
  description: 'Get started with HospitalOS - Learn how to set up your hospital management system, configure settings, and start managing patients.',
};

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
              <li><Link href="/docs/hospitalos" className="hover:text-[#166534]">HospitalOS</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Getting Started</li>
            </ol>
          </nav>

          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Getting Started with HospitalOS</h1>
          <p className="text-lg text-gray-600 mb-8">
            This guide will help you set up HospitalOS and get your hospital running in no time.
          </p>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">System Requirements</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Operating System:</strong> Windows 10/11, macOS, or Linux</li>
                  <li><strong>RAM:</strong> 4GB minimum, 8GB recommended</li>
                  <li><strong>Storage:</strong> 500MB for application, additional space for data</li>
                  <li><strong>Network:</strong> LAN connection for multi-user access</li>
                  <li><strong>Display:</strong> 1280x720 minimum resolution</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Download HospitalOS</h3>
                    <p className="text-gray-600">Contact our sales team to receive the installation package for your operating system.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Run the Installer</h3>
                    <p className="text-gray-600">Double-click the installer and follow the on-screen instructions. Accept the license agreement and choose your installation directory.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Launch HospitalOS</h3>
                    <p className="text-gray-600">After installation, launch HospitalOS from your applications menu or desktop shortcut.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Complete Setup Wizard</h3>
                    <p className="text-gray-600">The setup wizard will guide you through initial configuration including hospital details and admin account creation.</p>
                  </div>
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Initial Configuration</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Hospital Settings</h3>
              <p className="text-gray-600 mb-4">Configure your hospital&apos;s basic information:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Hospital name and address</li>
                <li>Contact information</li>
                <li>Logo and branding</li>
                <li>Working hours</li>
                <li>Registration fee (if applicable)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Workflow Configuration</h3>
              <p className="text-gray-600 mb-4">Customize how patients flow through your hospital:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Receptionist mode:</strong> Enable/disable dedicated receptionist role</li>
                <li><strong>Payment mode:</strong> Prepaid, postpaid, or per-service</li>
                <li><strong>Vitals before doctor:</strong> Require vitals before consultation</li>
                <li><strong>Emergency bypass:</strong> Skip payment for emergency cases</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Creating User Accounts</h3>
              <p className="text-gray-600 mb-4">Set up accounts for your staff:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Go to <strong>Settings → Users</strong></li>
                <li>Click <strong>Add User</strong></li>
                <li>Enter staff details (name, email, phone)</li>
                <li>Assign appropriate role (Receptionist, Nurse, Doctor, etc.)</li>
                <li>Set login credentials</li>
                <li>Save and share credentials with staff</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Multi-User Setup (LAN Mode)</h2>
              <p className="text-gray-600 mb-4">
                HospitalOS supports multiple users on the same network. To enable this:
              </p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>On the main computer, go to <strong>Settings → Network</strong></li>
                <li>Enable <strong>Server Mode</strong></li>
                <li>Note the displayed IP address and port</li>
                <li>On other computers, open a web browser</li>
                <li>Enter the server address (e.g., http://192.168.1.100:8080)</li>
                <li>Staff can now log in from any computer on the network</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/docs/hospitalos/opd"
                  className="block bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-[#166534]/30 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Reception & OPD →</h3>
                  <p className="text-sm text-gray-600">Learn about patient registration and outpatient workflow</p>
                </Link>
                <Link
                  href="/docs/hospitalos/roles"
                  className="block bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-[#166534]/30 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">User Roles →</h3>
                  <p className="text-sm text-gray-600">Understand different roles and permissions</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
