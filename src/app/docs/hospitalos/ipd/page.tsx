import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Inpatient Department (IPD) - HospitalOS',
  description: 'Learn how to manage patient admissions, ward management, nursing care, and discharge in HospitalOS.',
};

export default function IPDDocPage() {
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
              <li className="text-gray-900 font-medium">Inpatient (IPD)</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inpatient Department (IPD)</h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage patient admissions, ward assignments, nursing care, and discharge processes.
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Patient Admission</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Admission Process</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Doctor initiates admission from OPD or Emergency</li>
                <li>Select admission type (planned, emergency, transfer)</li>
                <li>Choose ward and bed</li>
                <li>Enter admitting diagnosis</li>
                <li>Assign primary doctor</li>
                <li>Collect deposit (if required)</li>
                <li>Generate admission record</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Admission Types</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Planned:</strong> Scheduled admissions for procedures</li>
                <li><strong>Emergency:</strong> Urgent admissions from ED</li>
                <li><strong>Transfer:</strong> Patients transferred from other facilities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ward Management</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Ward Types</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• General Ward</li>
                    <li>• Private Room</li>
                    <li>• Semi-Private</li>
                    <li>• ICU</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• NICU</li>
                    <li>• Maternity</li>
                    <li>• Pediatric</li>
                    <li>• Labor & Delivery</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Bed Status</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Available</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Occupied</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Reserved</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Maintenance</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Cleaning</span>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medication Management</h2>
              <p className="text-gray-600 mb-4">
                HospitalOS supports flexible medication workflows for inpatient care.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Medication Workflow</h3>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Prescribed</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">Payment</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Released</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Administered</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Medication Administration Record (MAR)</h3>
              <p className="text-gray-600 mb-4">Nurses document medication administration:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Given:</strong> Medication administered as prescribed</li>
                <li><strong>Held:</strong> Medication held for clinical reason</li>
                <li><strong>Refused:</strong> Patient refused medication</li>
                <li><strong>Missed:</strong> Dose missed for other reason</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nursing Care</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Daily Nursing Tasks</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Record vital signs (scheduled intervals)</li>
                <li>Administer medications</li>
                <li>Document progress notes</li>
                <li>Update care plans</li>
                <li>Request ward stock/supplies</li>
                <li>Coordinate with doctors</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Progress Notes</h3>
              <p className="text-gray-600 mb-4">
                Nurses and doctors can document using SOAP format:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>S - Subjective:</strong> Patient&apos;s complaints and symptoms</li>
                <li><strong>O - Objective:</strong> Observations and measurements</li>
                <li><strong>A - Assessment:</strong> Clinical assessment</li>
                <li><strong>P - Plan:</strong> Treatment plan and next steps</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">IPD Billing</h2>
              <p className="text-gray-600 mb-4">
                Charges accumulate throughout the admission and are settled at discharge.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Charge Types</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Bed Charges:</strong> Daily rate based on ward type</li>
                <li><strong>Nursing Fees:</strong> Daily nursing care charges</li>
                <li><strong>Medications:</strong> Drugs administered</li>
                <li><strong>Procedures:</strong> Medical procedures performed</li>
                <li><strong>Lab/Radiology:</strong> Diagnostic tests</li>
                <li><strong>Supplies:</strong> Medical supplies used</li>
                <li><strong>Doctor Fees:</strong> Consultation and procedure fees</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Discharge</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Discharge Process</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Doctor initiates discharge</li>
                <li>Final billing generated</li>
                <li>Patient settles balance</li>
                <li>Discharge summary prepared</li>
                <li>Medications dispensed (if any)</li>
                <li>Follow-up scheduled</li>
                <li>Bed released for cleaning</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Discharge Types</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Regular:</strong> Normal discharge after recovery</li>
                <li><strong>Transfer:</strong> Transfer to another facility</li>
                <li><strong>AMA:</strong> Against medical advice</li>
                <li><strong>Deceased:</strong> Patient expired</li>
              </ul>
            </section>

            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link href="/docs/hospitalos/emergency" className="text-[#166534] hover:underline">
                ← Emergency Department
              </Link>
              <Link href="/docs/hospitalos/laboratory" className="text-[#166534] hover:underline">
                Laboratory →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
