import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Reception & OPD - HospitalOS',
  description: 'Learn how to manage patient registration, appointments, queue management, and outpatient workflow in HospitalOS.',
};

export default function OPDDocPage() {
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
              <li className="text-gray-900 font-medium">Reception & OPD</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reception & OPD</h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage patient registration, appointments, and the complete outpatient workflow.
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Patient Registration</h2>
              <p className="text-gray-600 mb-4">
                The registration process captures essential patient information for their hospital visit.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Registering a New Patient</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Click <strong>New Patient</strong> from the Reception dashboard</li>
                <li>Enter patient details:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Full name and date of birth</li>
                    <li>Gender and blood group</li>
                    <li>Phone number and address</li>
                    <li>Emergency contact information</li>
                    <li>Insurance details (if applicable)</li>
                  </ul>
                </li>
                <li>Select the department for consultation</li>
                <li>Collect registration fee (if required)</li>
                <li>Click <strong>Register</strong> to add patient to queue</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Returning Patients</h3>
              <p className="text-gray-600 mb-4">
                For returning patients, search by name, phone number, or patient ID. Their previous records will be automatically linked.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Queue Management</h2>
              <p className="text-gray-600 mb-4">
                The queue system ensures patients are seen in the correct order based on arrival time and priority.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Patient Status Flow</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Registered</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">Waiting for Vitals</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Waiting for Doctor</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">With Doctor</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full">Completed</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Queue Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Call Next:</strong> Automatically call the next patient in queue</li>
                <li><strong>Priority Override:</strong> Move urgent patients ahead in queue</li>
                <li><strong>Wait Time Display:</strong> Shows estimated wait time for each patient</li>
                <li><strong>Queue Transfer:</strong> Move patients between departments</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vital Signs Recording</h2>
              <p className="text-gray-600 mb-4">
                Nurses record vital signs before the patient sees the doctor.
              </p>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Recorded Vitals</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <ul className="space-y-2">
                      <li>• Temperature (°C/°F)</li>
                      <li>• Blood Pressure (systolic/diastolic)</li>
                      <li>• Pulse Rate (bpm)</li>
                      <li>• Respiratory Rate</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li>• Oxygen Saturation (SpO2)</li>
                      <li>• Weight (kg/lbs)</li>
                      <li>• Height (cm)</li>
                      <li>• BMI (auto-calculated)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointments</h2>
              <p className="text-gray-600 mb-4">
                Schedule and manage patient appointments in advance.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Creating an Appointment</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Go to <strong>Appointments</strong> from the main menu</li>
                <li>Click <strong>New Appointment</strong></li>
                <li>Select or create patient record</li>
                <li>Choose department and doctor</li>
                <li>Pick date and time slot</li>
                <li>Add appointment notes (optional)</li>
                <li>Confirm appointment</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Appointment Types</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>New Consultation:</strong> First-time visit for a condition</li>
                <li><strong>Follow-up:</strong> Review visit for ongoing treatment</li>
                <li><strong>Procedure:</strong> Scheduled medical procedure</li>
                <li><strong>Lab/Radiology:</strong> Diagnostic appointments</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor Consultation</h2>
              <p className="text-gray-600 mb-4">
                Doctors document consultations and can order additional services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Consultation Workflow</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                <li>Doctor calls next patient from queue</li>
                <li>Reviews patient history and vitals</li>
                <li>Documents chief complaint and examination</li>
                <li>Records diagnosis</li>
                <li>Can order:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Laboratory tests</li>
                    <li>Radiology exams</li>
                    <li>Prescriptions (medication)</li>
                    <li>Referrals to specialists</li>
                    <li>IPD admission</li>
                  </ul>
                </li>
                <li>Schedule follow-up if needed</li>
                <li>Complete consultation</li>
              </ol>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link href="/docs/hospitalos/getting-started" className="text-[#166534] hover:underline">
                ← Getting Started
              </Link>
              <Link href="/docs/hospitalos/emergency" className="text-[#166534] hover:underline">
                Emergency Department →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
