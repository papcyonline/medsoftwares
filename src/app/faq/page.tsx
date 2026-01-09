'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: 'General Questions',
    faqs: [
      {
        question: 'What is MedSoftwares?',
        answer: 'MedSoftwares is a UK-based healthcare technology company that provides comprehensive software solutions for pharmacies (PharmaPOS) and hospitals (HospitalOS). Founded in 2020, we serve healthcare facilities across Africa, Middle East, Europe, and Asia with affordable, reliable, and feature-rich management systems.',
      },
      {
        question: 'Where is MedSoftwares located?',
        answer: 'MedSoftwares is headquartered in Frinton-On-Sea, Essex, United Kingdom. We serve customers globally, with a strong presence in Ghana, Nigeria, Kenya, South Africa, Tanzania, Uganda, Rwanda, Cameroon, Senegal, Ethiopia, and the UAE.',
      },
      {
        question: 'What products does MedSoftwares offer?',
        answer: 'MedSoftwares offers two main products: PharmaPOS - a comprehensive pharmacy management software with POS, inventory, and prescription management; and HospitalOS - a complete hospital management system with 25+ integrated modules including EMR, OPD, IPD, laboratory, radiology, and billing.',
      },
      {
        question: 'Is MedSoftwares software available in my country?',
        answer: 'Yes, MedSoftwares serves customers worldwide. We have a strong presence in Africa (Ghana, Nigeria, Kenya, South Africa, Tanzania, Uganda, Rwanda, Cameroon, Senegal, Ethiopia), Middle East (UAE), and are expanding to Europe and Asia. Contact us to confirm availability and local support in your region.',
      },
      {
        question: 'How do I contact MedSoftwares support?',
        answer: 'You can reach MedSoftwares support via email at support@medsoftwares.com, by phone at +44 7404 311833, or through our contact form at medsoftwares.com/contact. We offer 24/7 support for premium customers.',
      },
    ],
  },
  {
    title: 'PharmaPOS Questions',
    faqs: [
      {
        question: 'What is PharmaPOS?',
        answer: 'PharmaPOS is a comprehensive pharmacy management software that includes point-of-sale (POS) functionality, inventory management with expiry tracking, prescription management, mobile money integration, NHIS claims processing, and multi-branch support. It is designed specifically for pharmacies in Africa and emerging markets.',
      },
      {
        question: 'How much does PharmaPOS cost?',
        answer: 'PharmaPOS offers three pricing tiers: Basic at $299 (one-time payment) for single location with core features, Standard at $499 for multi-branch support and advanced reporting, and Premium at $899 for enterprise features with priority support. All prices are one-time payments, not subscriptions.',
      },
      {
        question: 'Does PharmaPOS work offline?',
        answer: 'Yes, PharmaPOS has full offline capability. You can continue all operations including sales, inventory management, and prescription processing without an internet connection. Data automatically syncs when connectivity is restored. This is essential for pharmacies in areas with unreliable internet.',
      },
      {
        question: 'Does PharmaPOS support mobile money payments?',
        answer: 'Yes, PharmaPOS integrates with major mobile money providers including MTN Mobile Money, Vodafone Cash, and AirtelTigo Money. This is particularly useful for pharmacies in Ghana and other African countries where mobile money is widely used.',
      },
      {
        question: 'Can PharmaPOS handle NHIS claims in Ghana?',
        answer: 'Yes, PharmaPOS fully supports Ghana\'s National Health Insurance Scheme (NHIS). It automates claims processing, tracks reimbursements, and generates reports for NHIS submissions, significantly reducing administrative burden for pharmacies.',
      },
      {
        question: 'Does PharmaPOS track drug expiry dates?',
        answer: 'Yes, PharmaPOS includes comprehensive expiry date tracking. It alerts you to approaching expiry dates, helps with FEFO (First Expired, First Out) inventory management, and generates expiry reports to prevent losses from expired medications.',
      },
      {
        question: 'Can I manage multiple pharmacy branches with PharmaPOS?',
        answer: 'Yes, the Standard and Premium plans support multi-branch management. You can manage inventory across locations, transfer stock between branches, view consolidated reports, and maintain centralized control over all your pharmacy locations.',
      },
      {
        question: 'Does PharmaPOS support barcode scanning?',
        answer: 'Yes, PharmaPOS supports barcode scanning for fast checkout and inventory management. You can scan products during sales, receiving, and stock counts. The system works with standard USB and Bluetooth barcode scanners.',
      },
      {
        question: 'Can PharmaPOS handle controlled substances?',
        answer: 'Yes, PharmaPOS includes features for tracking controlled substances with proper documentation, audit trails, and regulatory reporting. This helps pharmacies maintain compliance with pharmaceutical regulations.',
      },
      {
        question: 'What reports does PharmaPOS generate?',
        answer: 'PharmaPOS generates comprehensive reports including sales reports, inventory reports, expiry reports, profit margins, supplier purchases, customer purchase history, NHIS claims reports, and financial summaries. Reports can be exported to Excel or PDF.',
      },
    ],
  },
  {
    title: 'HospitalOS Questions',
    faqs: [
      {
        question: 'What is HospitalOS?',
        answer: 'HospitalOS is a complete hospital management system with 25+ integrated modules. It includes Electronic Medical Records (EMR), OPD, IPD, Emergency Care, Laboratory, Radiology, Pharmacy, Billing, HR, and more. It\'s designed for hospitals and clinics of all sizes.',
      },
      {
        question: 'How much does HospitalOS cost?',
        answer: 'HospitalOS offers three plans: Basic at $999 (one-time) for core modules and single facility, Professional at $1,999 for full modules and multi-department support, and Enterprise at $2,999 for unlimited users, multi-facility support, and custom development. All are one-time payments.',
      },
      {
        question: 'What modules are included in HospitalOS?',
        answer: 'HospitalOS includes: OPD (Outpatient), IPD (Inpatient), Emergency Care, EMR/EHR, Laboratory Management, Radiology/Imaging, Pharmacy, Billing & Finance, Human Resources, Inventory, Blood Bank, Operating Theater, Nursing Station, Diet & Nutrition, Mortuary, Ambulance Services, Telemedicine, Patient Portal, and Quality Assurance.',
      },
      {
        question: 'Can HospitalOS integrate with existing systems?',
        answer: 'Yes, HospitalOS provides REST APIs and supports HL7 FHIR standards for integration with laboratory systems, imaging systems, payment gateways, and other healthcare IT infrastructure. Our team can assist with custom integrations.',
      },
      {
        question: 'Is HospitalOS suitable for small clinics?',
        answer: 'Yes, HospitalOS is scalable and works for facilities of all sizes. The Basic plan is perfect for small clinics with essential modules, while larger hospitals can use Professional or Enterprise plans for comprehensive functionality.',
      },
      {
        question: 'Does HospitalOS support telemedicine?',
        answer: 'Yes, HospitalOS includes a telemedicine module for video consultations, remote patient monitoring, and virtual appointments. This allows hospitals to offer remote care services and reach patients who cannot visit in person.',
      },
      {
        question: 'How does HospitalOS handle patient records?',
        answer: 'HospitalOS uses a comprehensive Electronic Medical Records (EMR) system that stores complete patient history, clinical notes, diagnoses, lab results, prescriptions, and imaging reports. Records are secure, searchable, and accessible across departments.',
      },
      {
        question: 'Does HospitalOS include billing and insurance claims?',
        answer: 'Yes, HospitalOS has a complete billing module that handles patient billing, insurance claims processing, payment tracking, and financial reporting. It supports integration with national insurance schemes like Ghana\'s NHIS and Kenya\'s NHIF.',
      },
    ],
  },
  {
    title: 'Pricing & Payment',
    faqs: [
      {
        question: 'Is there a monthly subscription fee?',
        answer: 'No, MedSoftwares uses a one-time payment model. You pay once and own the license permanently. This includes one year of free updates and support. After the first year, optional support renewals are available at reduced rates.',
      },
      {
        question: 'Do you offer free trials or demos?',
        answer: 'Yes, we offer free demonstrations of both PharmaPOS and HospitalOS. Contact us at info@medsoftwares.com or through our website to schedule a personalized demo. We\'ll walk you through the features relevant to your facility.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept credit/debit cards (Visa, Mastercard), bank transfers, and mobile money payments. For enterprise customers, we also offer invoicing with net-30 payment terms.',
      },
      {
        question: 'Is there a refund policy?',
        answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with the software within the first 30 days, contact our support team for a full refund. This gives you time to evaluate the software risk-free.',
      },
      {
        question: 'Are updates included in the price?',
        answer: 'Yes, all software updates are free for the first year after purchase. This includes new features, security patches, and bug fixes. After the first year, you can continue receiving updates through an optional support renewal.',
      },
    ],
  },
  {
    title: 'Technical & Support',
    faqs: [
      {
        question: 'What are the system requirements?',
        answer: 'Both PharmaPOS and HospitalOS run on Windows 10/11, Linux, or macOS. Minimum requirements: 4GB RAM (8GB recommended), 10GB storage, and any modern processor. For server installations, we recommend dedicated hardware based on facility size.',
      },
      {
        question: 'Is the software cloud-based or on-premise?',
        answer: 'Both options are available. You can choose cloud hosting (we manage everything) or on-premise installation (you host on your own servers). The on-premise option is popular for facilities that prefer local data control or have limited internet connectivity.',
      },
      {
        question: 'How secure is my data?',
        answer: 'MedSoftwares uses industry-standard security including data encryption at rest and in transit, role-based access control, comprehensive audit logging, and regular security updates. We are GDPR compliant and follow healthcare data protection best practices.',
      },
      {
        question: 'Do you provide training?',
        answer: 'Yes, we provide comprehensive training with all purchases. This includes initial setup training, user training for different roles (admin, cashier, pharmacist, etc.), and documentation. Premium plans include on-site training options.',
      },
      {
        question: 'How long does installation take?',
        answer: 'Basic installation takes 1-2 hours for PharmaPOS and 2-4 hours for HospitalOS. This includes software setup, initial configuration, and basic training. Data migration from existing systems may require additional time depending on data volume.',
      },
      {
        question: 'Can you help migrate data from our existing system?',
        answer: 'Yes, we offer data migration services. Our team can help transfer patient records, inventory data, and historical transactions from your existing system to MedSoftwares. Contact us to discuss your specific migration needs.',
      },
      {
        question: 'What languages does the software support?',
        answer: 'MedSoftwares supports English, French, and Arabic. The interface can be switched between languages, making it suitable for multilingual healthcare facilities. Additional language support can be added upon request.',
      },
      {
        question: 'What happens if I need help after hours?',
        answer: 'Premium customers have access to 24/7 support. Standard support hours are Monday-Friday, 9am-6pm GMT. For urgent issues outside support hours, we have an emergency contact system for critical problems affecting patient care.',
      },
    ],
  },
  {
    title: 'Comparisons',
    faqs: [
      {
        question: 'How does PharmaPOS compare to other pharmacy software?',
        answer: 'PharmaPOS stands out with its offline capability, mobile money integration, NHIS support, and affordable one-time pricing. Unlike subscription-based alternatives, you own the license permanently. It\'s specifically designed for African and emerging market pharmacies.',
      },
      {
        question: 'Is HospitalOS better than free hospital management software?',
        answer: 'While free HMS options exist, HospitalOS offers comprehensive modules, dedicated support, regular updates, and customization options. Free software often lacks support, has limited features, and may not meet healthcare compliance requirements. HospitalOS provides enterprise reliability at an affordable price.',
      },
      {
        question: 'Why choose MedSoftwares over international competitors?',
        answer: 'MedSoftwares is built specifically for emerging markets with features like mobile money integration, offline capability, multi-currency support, and local insurance scheme integration. We offer affordable one-time pricing instead of expensive subscriptions, and provide local support in multiple African countries.',
      },
    ],
  },
];

// Generate structured data for SEO
const generateFAQSchema = () => {
  const allFAQs = faqData.flatMap(category => category.faqs);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFAQs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

function FAQItem({ faq, isOpen, onClick }: { faq: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors px-2 -mx-2 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</span>
        <ExpandMoreIcon
          className={`w-6 h-6 text-[#166534] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-6">
            Help Center
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about PharmaPOS, HospitalOS, pricing, and support. Can&apos;t find what you&apos;re looking for? <Link href="/contact" className="text-[#166534] font-semibold hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {faqData.map((category) => (
              <a
                key={category.title}
                href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-gray-100 hover:bg-[#166534]/10 text-gray-700 hover:text-[#166534] rounded-full text-sm font-medium transition-colors"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {faqData.map((category) => (
            <div
              key={category.title}
              id={category.title.toLowerCase().replace(/\s+/g, '-')}
              className="mb-16 last:mb-0 scroll-mt-32"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-gray-900 mb-8 pb-4 border-b-2 border-[#166534]">
                {category.title}
              </h2>
              <div>
                {category.faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    isOpen={openItems[`${category.title}-${index}`] || false}
                    onClick={() => toggleItem(`${category.title}-${index}`)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Our team is ready to help. Reach out for personalized assistance with your healthcare software needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#166534] text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Support
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-8 py-4 text-[#166534] text-lg font-semibold rounded-full border-2 border-[#166534] hover:bg-[#166534]/5 transition-all duration-200"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
