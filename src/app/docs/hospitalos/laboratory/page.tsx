import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Laboratory - HospitalOS',
  description: 'Learn how to manage lab requests, sample collection, test results, and laboratory reporting in HospitalOS.',
};

export default function LabDocPage() {
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
              <li className="text-gray-900 font-medium">Laboratory</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Laboratory</h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage lab requests, sample collection, test processing, and result reporting.
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lab Request Workflow</h2>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Request Created</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">Sample Collected</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Processing</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Completed</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Creating Lab Requests</h3>
              <p className="text-gray-600 mb-4">Doctors create lab requests from consultation:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Click <strong>Order Lab Tests</strong> in consultation</li>
                <li>Select test category (Hematology, Chemistry, etc.)</li>
                <li>Choose specific tests</li>
                <li>Add clinical information and notes</li>
                <li>Set priority (Normal, Urgent, Emergency)</li>
                <li>Submit request</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Test Categories</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Common Tests</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Complete Blood Count (CBC)</li>
                    <li>• Blood Chemistry Panel</li>
                    <li>• Liver Function Tests</li>
                    <li>• Kidney Function Tests</li>
                    <li>• Lipid Profile</li>
                    <li>• Thyroid Function</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Specialty Tests</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Urinalysis</li>
                    <li>• Blood Glucose</li>
                    <li>• Coagulation Studies</li>
                    <li>• Microbiology/Culture</li>
                    <li>• Serology</li>
                    <li>• Hormones</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sample Collection</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Collection Process</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>View pending sample collections in Lab Dashboard</li>
                <li>Call patient or go to bedside (IPD)</li>
                <li>Verify patient identity</li>
                <li>Collect appropriate sample type</li>
                <li>Label sample with barcode/ID</li>
                <li>Mark sample as collected in system</li>
                <li>Transport to laboratory</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Sample Types</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Blood (venous, arterial, capillary)</li>
                <li>Urine (random, midstream, 24-hour)</li>
                <li>Stool</li>
                <li>Sputum</li>
                <li>Swabs (throat, wound, etc.)</li>
                <li>Body fluids (CSF, pleural, etc.)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Result Entry</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Entering Results</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Select the lab request from processing queue</li>
                <li>Enter result values for each test parameter</li>
                <li>System automatically flags abnormal values</li>
                <li>Add technician notes if needed</li>
                <li>Submit for verification (if required)</li>
                <li>Mark request as completed</li>
              </ol>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
                <p className="text-yellow-800 text-sm">
                  <strong>Abnormal Values:</strong> Results outside normal reference ranges are automatically highlighted in red for easy identification by doctors.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lab Dashboard</h2>
              <p className="text-gray-600 mb-4">
                The lab dashboard provides an overview of all laboratory activities.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Dashboard Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Pending sample collections queue</li>
                <li>Tests in processing</li>
                <li>Completed tests awaiting verification</li>
                <li>Turnaround time statistics</li>
                <li>Priority indicators (urgent/emergency)</li>
                <li>Quick search by patient or request ID</li>
              </ul>
            </section>

            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link href="/docs/hospitalos/ipd" className="text-[#166534] hover:underline">
                ← Inpatient (IPD)
              </Link>
              <Link href="/docs/hospitalos/pharmacy" className="text-[#166534] hover:underline">
                Pharmacy →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
