import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Emergency Department - HospitalOS',
  description: 'Learn how to manage emergency triage, critical patient care, and emergency workflows in HospitalOS.',
};

export default function EmergencyDocPage() {
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
              <li className="text-gray-900 font-medium">Emergency Department</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Emergency Department</h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage emergency triage, critical patient care, and life-saving workflows.
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Triage System</h2>
              <p className="text-gray-600 mb-4">
                The triage system uses color-coded categories to prioritize patients based on severity.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">RED</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Immediate / Critical</h3>
                    <p className="text-gray-600 text-sm">Life-threatening conditions requiring immediate intervention. Examples: cardiac arrest, severe trauma, respiratory distress.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">YLW</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Urgent</h3>
                    <p className="text-gray-600 text-sm">Serious but stable conditions. Can wait 10-60 minutes. Examples: fractures, severe pain, high fever.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">GRN</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Delayed / Minor</h3>
                    <p className="text-gray-600 text-sm">Minor injuries or illnesses. Can wait 1-2 hours. Examples: minor cuts, sprains, mild symptoms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-100 border border-gray-300 rounded-xl">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">BLK</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Deceased / Expectant</h3>
                    <p className="text-gray-600 text-sm">Patients who are deceased or have injuries incompatible with survival given available resources.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Registration</h2>
              <p className="text-gray-600 mb-4">
                Emergency patients can be registered quickly with minimal information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Quick Registration</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Click <strong>Emergency Arrival</strong></li>
                <li>Enter basic patient info (name, age, gender)</li>
                <li>Select arrival mode (ambulance, walk-in, police)</li>
                <li>Perform triage assessment</li>
                <li>Patient bypasses payment queue (configurable)</li>
              </ol>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Emergency patients can bypass payment requirements when configured. Billing is settled after stabilization or at discharge.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Triage Assessment</h2>
              <p className="text-gray-600 mb-4">
                The triage nurse performs a rapid assessment to determine priority.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">AVPU Scale</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-2 text-gray-600">
                  <li><strong>A - Alert:</strong> Patient is fully conscious and responsive</li>
                  <li><strong>V - Voice:</strong> Patient responds to verbal stimuli</li>
                  <li><strong>P - Pain:</strong> Patient responds only to painful stimuli</li>
                  <li><strong>U - Unresponsive:</strong> Patient does not respond to any stimuli</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Assessment Checklist</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Consciousness level (AVPU)</li>
                <li>Airway status (clear, compromised, obstructed)</li>
                <li>Breathing status (normal, labored, absent)</li>
                <li>Circulation (pulse present, quality, capillary refill)</li>
                <li>Initial vital signs</li>
                <li>Chief complaint</li>
                <li>Mechanism of injury (if trauma)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Workflow</h2>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Patient Flow</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full">Arrival</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">Triage</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Stabilization</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Doctor</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Disposition</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Dispositions</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Discharged:</strong> Patient stable, sent home with instructions</li>
                <li><strong>Admitted:</strong> Transferred to IPD ward for continued care</li>
                <li><strong>ICU:</strong> Critical patients requiring intensive care</li>
                <li><strong>Transferred:</strong> Referred to another facility</li>
                <li><strong>AMA:</strong> Left against medical advice</li>
                <li><strong>Deceased:</strong> Patient expired</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Dashboard</h2>
              <p className="text-gray-600 mb-4">
                The emergency dashboard provides real-time visibility of all emergency patients.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Dashboard Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Color-coded patient cards by triage category</li>
                <li>Wait time tracking for each patient</li>
                <li>Quick access to patient vitals and history</li>
                <li>Doctor assignment and status</li>
                <li>One-click disposition actions</li>
                <li>Emergency statistics and metrics</li>
              </ul>
            </section>

            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link href="/docs/hospitalos/opd" className="text-[#166534] hover:underline">
                ← Reception & OPD
              </Link>
              <Link href="/docs/hospitalos/ipd" className="text-[#166534] hover:underline">
                Inpatient (IPD) →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
