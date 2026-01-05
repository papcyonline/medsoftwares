'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PersonIcon from '@mui/icons-material/Person';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import MedicationIcon from '@mui/icons-material/Medication';
import HistoryIcon from '@mui/icons-material/History';

export default function PrescriptionsPage() {
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
              <li className="text-gray-900 font-medium">Prescriptions</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prescriptions</h1>
            <p className="text-lg text-gray-600">
              Manage prescriptions, track patient medication history, and check for drug interactions
              to ensure safe dispensing.
            </p>
          </div>

          {/* Creating Prescriptions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ReceiptLongIcon className="w-6 h-6 text-[#166534]" />
              Creating a Prescription
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                When a customer presents a prescription, follow these steps:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Select or Create Patient</h3>
                    <p className="text-sm text-gray-600">
                      Search for existing patient or create a new patient record with contact details.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Enter Prescription Details</h3>
                    <p className="text-sm text-gray-600">
                      Record prescriber name, hospital/clinic, prescription date, and any notes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Add Medications</h3>
                    <p className="text-sm text-gray-600">
                      Add each medication with dosage, frequency, duration, and quantity to dispense.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#166534] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Review & Dispense</h3>
                    <p className="text-sm text-gray-600">
                      Review for interactions, verify with patient, and proceed to payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Patient Records */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <PersonIcon className="w-6 h-6 text-[#166534]" />
              Patient Records
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Patient Information</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Full name and date of birth
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Contact phone and address
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Insurance/NHIS information
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Known allergies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Chronic conditions
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Medical History</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Complete prescription history
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Current medications list
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Purchase history
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Refill reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Notes and comments
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Drug Interactions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <WarningAmberIcon className="w-6 h-6 text-[#166534]" />
              Drug Interaction Checking
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4">
              <h3 className="font-semibold text-red-900 mb-2">Automatic Interaction Alerts</h3>
              <p className="text-sm text-red-800 mb-3">
                PharmaPOS automatically checks for potential drug interactions when you add medications
                to a prescription. Alerts are categorized by severity:
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 border border-red-300">
                  <span className="text-red-600 font-semibold text-sm">Severe</span>
                  <p className="text-xs text-gray-600 mt-1">Life-threatening, avoid combination</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-orange-300">
                  <span className="text-orange-600 font-semibold text-sm">Moderate</span>
                  <p className="text-xs text-gray-600 mt-1">May require dose adjustment</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-yellow-300">
                  <span className="text-yellow-600 font-semibold text-sm">Minor</span>
                  <p className="text-xs text-gray-600 mt-1">Monitor patient, low risk</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Interaction Checks Include:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Drug-drug interactions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Drug-allergy conflicts (based on patient allergies)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Duplicate therapy warnings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                  Age and weight considerations (pediatric/geriatric)
                </li>
              </ul>
            </div>
          </section>

          {/* Controlled Substances */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MedicationIcon className="w-6 h-6 text-[#166534]" />
              Controlled Substances
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">
                PharmaPOS includes special handling for controlled substances:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Prescription Verification:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      Requires valid prescriber information and prescription date
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Patient ID Required:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      System prompts for patient identification before dispensing
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Quantity Limits:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      Enforces maximum dispensing quantities per prescription
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Audit Trail:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      Complete record of all controlled substance transactions
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-[#166534] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Reporting:</strong>
                    <span className="text-gray-600 text-sm ml-1">
                      Generate reports for regulatory compliance
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Refills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HistoryIcon className="w-6 h-6 text-[#166534]" />
              Prescription Refills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Refill</h3>
                <p className="text-sm text-gray-600 mb-3">
                  When a patient returns for a refill:
                </p>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li>1. Search for patient</li>
                  <li>2. View prescription history</li>
                  <li>3. Select prescription to refill</li>
                  <li>4. Verify refills remaining</li>
                  <li>5. Process the refill</li>
                </ol>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Refill Reminders</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Set up automatic refill reminders:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    SMS reminders when refill is due
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Dashboard alerts for pending refills
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#166534]" />
                    Patient-specific reminder schedules
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <Link
              href="/docs/pharmapos/inventory"
              className="flex items-center gap-2 text-gray-600 hover:text-[#166534] transition-colors"
            >
              <ArrowBackIcon className="w-5 h-5" />
              <span>Inventory Management</span>
            </Link>
            <Link
              href="/docs/pharmapos/reports"
              className="flex items-center gap-2 text-[#166534] font-medium hover:underline"
            >
              <span>Reports & Analytics</span>
              <ArrowForwardIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
