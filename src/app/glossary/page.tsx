'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

interface GlossaryTerm {
  term: string;
  definition: string;
  relatedLink?: string;
  relatedLabel?: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Barcode Scanning',
    definition: 'A technology that uses optical scanners to read barcodes on medication packages for quick identification during sales, inventory counts, and dispensing. Barcode scanning reduces manual entry errors and speeds up pharmacy checkout by up to 60%.',
    relatedLink: '/news/pharmacy-software-barcode-scanning',
    relatedLabel: 'Barcode Scanning in PharmaPOS',
  },
  {
    term: 'Bed Management System',
    definition: 'A hospital software module that tracks bed availability, patient admissions, discharges, and transfers across wards. It provides real-time occupancy dashboards and helps optimize bed utilization rates.',
    relatedLink: '/news/hospital-bed-management-software',
    relatedLabel: 'Hospital Bed Management Guide',
  },
  {
    term: 'Clinical Decision Support (CDS)',
    definition: 'A feature in healthcare software that provides clinicians with knowledge and patient-specific information to enhance decision-making. In pharmacy software, CDS includes drug interaction alerts, dosage checking, and allergy warnings.',
  },
  {
    term: 'Controlled Substance Tracking',
    definition: 'A pharmacy software feature that monitors the ordering, receiving, dispensing, and disposal of controlled medications (e.g., opioids, benzodiazepines). It maintains chain-of-custody records and generates compliance reports required by regulatory authorities.',
    relatedLink: '/news/controlled-substance-tracking-pharmacy-software',
    relatedLabel: 'Controlled Substance Tracking Guide',
  },
  {
    term: 'Drug Interaction Checker',
    definition: 'A clinical tool integrated into pharmacy management software that automatically screens prescriptions against a patient\'s medication list to identify potentially harmful drug-drug, drug-food, or drug-allergy interactions before dispensing.',
    relatedLink: '/news/drug-interaction-checker-software',
    relatedLabel: 'Drug Interaction Checker Software',
  },
  {
    term: 'Electronic Health Record (EHR)',
    definition: 'A digital version of a patient\'s complete medical history maintained across multiple healthcare providers. Unlike EMRs, EHRs are designed to be shared across organizations and follow patients throughout their care journey. EHR systems typically include demographics, diagnoses, medications, lab results, and imaging.',
    relatedLink: '/news/emr-ehr-software-africa-2026',
    relatedLabel: 'EMR/EHR Software Guide',
  },
  {
    term: 'Electronic Medical Record (EMR)',
    definition: 'A digital version of a patient\'s medical chart used within a single healthcare facility. EMRs contain patient demographics, diagnoses, treatment plans, medications, and test results. They differ from EHRs in that they are typically confined to one organization.',
  },
  {
    term: 'E-Prescribing (eRx)',
    definition: 'The electronic generation, transmission, and filling of prescriptions, replacing traditional paper-based prescribing. E-prescribing reduces errors from illegible handwriting, enables drug interaction checking, and streamlines the prescription workflow between providers and pharmacies.',
  },
  {
    term: 'Expiry Tracking',
    definition: 'An inventory management feature that monitors medication expiration dates, sends alerts before products expire, and enforces First Expired First Out (FEFO) dispensing. This reduces financial losses from expired stock and ensures patient safety.',
    relatedLink: '/news/drug-expiry-tracking-software',
    relatedLabel: 'Expiry Tracking Software',
  },
  {
    term: 'FEFO (First Expired, First Out)',
    definition: 'An inventory management method where medications with the earliest expiration dates are dispensed first. FEFO is the pharmaceutical industry standard and is enforced by pharmacy management software to minimize drug waste and ensure patient safety.',
  },
  {
    term: 'Health Management Information System (HMIS)',
    definition: 'A comprehensive system for collecting, processing, storing, and disseminating health-related data. HMIS helps healthcare organizations make evidence-based decisions about resource allocation, disease surveillance, and service delivery.',
  },
  {
    term: 'HL7 (Health Level Seven)',
    definition: 'An international set of standards for the exchange, integration, sharing, and retrieval of electronic health information. HL7 enables different healthcare software systems to communicate with each other, facilitating interoperability between hospital departments.',
  },
  {
    term: 'HMS (Hospital Management System)',
    definition: 'A comprehensive software solution that manages all aspects of hospital operations including patient registration, appointment scheduling, billing, inventory, human resources, and clinical workflows. An HMS typically includes 15-25+ integrated modules covering OPD, IPD, emergency, laboratory, radiology, pharmacy, and billing.',
    relatedLink: '/hospitalos',
    relatedLabel: 'Explore HospitalOS',
  },
  {
    term: 'ICD (International Classification of Diseases)',
    definition: 'A globally used diagnostic coding system maintained by the World Health Organization (WHO). ICD codes are used in hospital and clinic software for standardizing diagnoses, enabling statistical analysis, and supporting insurance billing. The current version is ICD-11.',
  },
  {
    term: 'Insurance Claims Processing',
    definition: 'The automated submission, tracking, and reconciliation of healthcare insurance claims through software. In African markets, this includes NHIS (Ghana), SHA (Kenya), and NHIF integration. Claims processing software reduces rejection rates and accelerates reimbursement.',
    relatedLink: '/news/nhis-nhif-integration-healthcare-software',
    relatedLabel: 'NHIS/NHIF Integration Guide',
  },
  {
    term: 'Interoperability',
    definition: 'The ability of different healthcare information systems to exchange, interpret, and use data cohesively. Interoperable systems allow hospitals, pharmacies, laboratories, and clinics to share patient data seamlessly, improving care coordination and reducing duplicate testing.',
  },
  {
    term: 'IPD (Inpatient Department)',
    definition: 'The hospital department managing admitted patients who stay overnight or longer. IPD software modules handle bed allocation, treatment tracking, nursing notes, meal management, discharge planning, and inpatient billing.',
    relatedLink: '/hospitalos/ipd',
    relatedLabel: 'HospitalOS IPD Module',
  },
  {
    term: 'Laboratory Information System (LIS/LIMS)',
    definition: 'Software that manages laboratory workflows including test ordering, sample tracking, result entry, quality control, and report generation. A LIS integrates with hospital management systems to automatically receive orders and return results to clinicians.',
    relatedLink: '/news/laboratory-information-management-system-2026',
    relatedLabel: 'LIMS Guide',
  },
  {
    term: 'Mobile Money Integration',
    definition: 'A payment processing feature that connects pharmacy or hospital software with mobile money services (MTN MoMo, M-Pesa, Vodafone Cash, Airtel Money). This enables cashless transactions in markets where mobile money is more prevalent than card payments, particularly across Africa.',
    relatedLink: '/news/pharmacy-software-mobile-money-integration',
    relatedLabel: 'Mobile Money Integration Guide',
  },
  {
    term: 'Multi-Currency Support',
    definition: 'A software feature that allows transactions and reporting in multiple currencies. Essential for healthcare facilities near borders, serving international patients, or operating across countries. The software handles exchange rates and currency conversion automatically.',
  },
  {
    term: 'NHIS (National Health Insurance Scheme)',
    definition: 'Ghana\'s public health insurance program that provides healthcare coverage to residents. Pharmacy and hospital software with NHIS integration can automatically process claims, verify patient eligibility, and track reimbursements from the National Health Insurance Authority (NHIA).',
    relatedLink: '/news/nhis-nhif-integration-healthcare-software',
    relatedLabel: 'NHIS Integration Guide',
  },
  {
    term: 'Offline Mode',
    definition: 'A software capability that allows full system operation without an internet connection. Data is stored locally and automatically synchronized with the central server when connectivity is restored. Offline mode is critical for healthcare facilities in areas with unreliable internet infrastructure.',
    relatedLink: '/news/pharmacy-software-offline-mode-2026',
    relatedLabel: 'Offline Mode Guide',
  },
  {
    term: 'OPD (Outpatient Department)',
    definition: 'The hospital department that handles patients who visit for consultations, diagnostics, or treatments without being admitted. OPD software modules manage patient registration, queue management, consultation notes, prescriptions, and outpatient billing.',
    relatedLink: '/hospitalos/opd',
    relatedLabel: 'HospitalOS OPD Module',
  },
  {
    term: 'PACS (Picture Archiving and Communication System)',
    definition: 'A medical imaging system that stores, retrieves, and distributes diagnostic images (X-rays, CT scans, MRIs, ultrasounds) digitally. PACS eliminates the need for physical film storage and allows clinicians to view images from any workstation in the hospital.',
  },
  {
    term: 'Patient Portal',
    definition: 'A secure online platform that gives patients access to their health information, appointment scheduling, lab results, prescription history, and billing. Patient portals improve engagement and reduce administrative phone calls.',
  },
  {
    term: 'Pharmacy Management Software (PMS)',
    definition: 'A comprehensive digital solution that automates pharmacy operations including prescription processing, inventory management, sales/POS, billing, drug interaction checking, expiry tracking, and reporting. Modern PMS systems also support mobile money payments, barcode scanning, and multi-branch management.',
    relatedLink: '/pharmapos',
    relatedLabel: 'Explore PharmaPOS',
  },
  {
    term: 'Point of Sale (POS)',
    definition: 'The system where retail pharmacy transactions are completed. A pharmacy POS system processes sales, accepts multiple payment methods (cash, card, mobile money), applies discounts, manages customer accounts, and generates receipts. Modern pharmacy POS integrates directly with inventory and prescription management.',
    relatedLink: '/pharmapos/pos',
    relatedLabel: 'PharmaPOS Point of Sale',
  },
  {
    term: 'Purchase Order (PO)',
    definition: 'A formal document sent to pharmaceutical suppliers to order medications and supplies. Pharmacy software automates PO generation based on reorder points, tracks order status, handles receiving/verification, and reconciles supplier invoices.',
  },
  {
    term: 'Queue Management System',
    definition: 'A hospital software module that organizes patient flow by assigning queue numbers, displaying wait times, and directing patients to the correct service points. Queue management reduces wait times and improves patient satisfaction.',
    relatedLink: '/news/hospital-queue-management-system',
    relatedLabel: 'Queue Management Guide',
  },
  {
    term: 'Radiology Information System (RIS)',
    definition: 'Software that manages radiology department workflows including exam scheduling, image tracking, report generation, and billing. RIS integrates with PACS for image management and with HMS for order entry and result distribution.',
    relatedLink: '/hospitalos/radiology',
    relatedLabel: 'HospitalOS Radiology Module',
  },
  {
    term: 'Revenue Cycle Management (RCM)',
    definition: 'The financial process that healthcare facilities use to track patient care from registration and appointment scheduling through to the final payment. RCM software automates billing, coding, claims submission, payment posting, and collections.',
  },
  {
    term: 'Role-Based Access Control (RBAC)',
    definition: 'A security feature that restricts software access based on user roles (e.g., pharmacist, cashier, administrator, doctor, nurse). RBAC ensures staff can only access features and data relevant to their job function, maintaining data security and regulatory compliance.',
  },
  {
    term: 'SaaS (Software as a Service)',
    definition: 'A software distribution model where applications are hosted in the cloud and accessed via the internet on a subscription basis. SaaS healthcare software requires ongoing monthly or annual payments but eliminates the need for local server management.',
  },
  {
    term: 'Stock Transfer',
    definition: 'The movement of inventory between branches or locations within a multi-site pharmacy or hospital network. Stock transfer software tracks items in transit, updates inventory levels at both locations, and maintains audit trails for regulatory compliance.',
  },
  {
    term: 'Telepharmacy',
    definition: 'The delivery of pharmaceutical care and services through telecommunications technology. Telepharmacy enables remote prescription verification, patient counseling, and medication therapy management, extending pharmacy services to underserved areas without a physical pharmacist present.',
  },
  {
    term: 'Telemedicine',
    definition: 'The use of technology to provide clinical healthcare services remotely via video calls, messaging, or remote monitoring. Hospital software with telemedicine integration allows doctors to conduct virtual consultations, prescribe medications, and review patient records from any location.',
    relatedLink: '/news/telemedicine-software-african-hospitals',
    relatedLabel: 'Telemedicine Integration Guide',
  },
  {
    term: 'Triage',
    definition: 'The process of prioritizing patients based on the severity of their condition, particularly in emergency departments. Hospital software automates triage scoring, assigns priority levels, and routes patients to appropriate care areas.',
  },
];

// Generate structured data
const generateGlossarySchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Healthcare & Pharmacy Software Glossary',
    description: 'Comprehensive glossary of terms related to pharmacy management software, hospital management systems, and healthcare IT.',
    url: 'https://medsoftwares.com/glossary',
    hasDefinedTerm: glossaryTerms.map(item => ({
      '@type': 'DefinedTerm',
      name: item.term,
      description: item.definition,
    })),
  };
};

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group by first letter
  const grouped = filteredTerms.reduce<Record<string, GlossaryTerm[]>>((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {});

  const letters = Object.keys(grouped).sort();
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateGlossarySchema()) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-6">
            Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
            Healthcare Software Glossary
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive guide to pharmacy management, hospital management, and healthcare IT terminology. Learn the key terms used in healthcare software.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b sticky top-[57px] z-30">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <SearchRoundedIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search terms (e.g., EMR, pharmacy, billing...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent"
            />
          </div>
          {/* Letter Navigation */}
          <div className="flex flex-wrap gap-1 mt-4 justify-center">
            {allLetters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className={`w-8 h-8 flex items-center justify-center rounded text-sm font-semibold transition-colors ${
                  letters.includes(letter)
                    ? 'text-[#166534] hover:bg-[#166534]/10'
                    : 'text-gray-300 pointer-events-none'
                }`}
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No terms found matching &ldquo;{searchQuery}&rdquo;</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-[#166534] font-semibold hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-40">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 bg-[#166534] text-white text-xl font-bold rounded-xl flex items-center justify-center">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="space-y-6">
                  {grouped[letter].map((item) => (
                    <div key={item.term} className="pl-4 border-l-2 border-gray-100 hover:border-[#166534] transition-colors">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.term}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                      {item.relatedLink && (
                        <Link
                          href={item.relatedLink}
                          className="inline-flex items-center gap-1 mt-2 text-sm text-[#166534] font-medium hover:underline"
                        >
                          {item.relatedLabel || 'Learn more'}
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6">
            Ready to See These Features in Action?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Explore how PharmaPOS and HospitalOS put these concepts to work for healthcare facilities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#166534] text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              Request Demo
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 text-[#166534] text-lg font-semibold rounded-full border-2 border-[#166534] hover:bg-[#166534]/5 transition-all duration-200"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
