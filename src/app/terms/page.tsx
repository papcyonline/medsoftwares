import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'MedSoftwares terms of service - Read our terms and conditions for using our software and services.',
};

export default function TermsPage() {
  return (
    <>
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 2026
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using MedSoftwares&apos;s products and services, including PharmaPOS and HospitalOS, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                MedSoftwares provides healthcare management software solutions including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>PharmaPOS:</strong> Pharmacy point-of-sale and management system</li>
                <li><strong>HospitalOS:</strong> Hospital management and patient care system</li>
                <li>Related support, training, and consultation services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the software in compliance with applicable healthcare regulations</li>
                <li>Not attempt to reverse engineer or modify the software</li>
                <li>Not use the software for any unlawful purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. License and Restrictions</h2>
              <p className="text-gray-600 mb-4">
                Upon purchase or subscription, MedSoftwares grants you a limited, non-exclusive, non-transferable license to use our software according to your selected plan. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Copy, modify, or distribute the software</li>
                <li>Sublicense or resell access to the software</li>
                <li>Use the software beyond the scope of your license</li>
                <li>Remove any proprietary notices or labels</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data and Privacy</h2>
              <p className="text-gray-600 mb-4">
                Your use of our services is also governed by our Privacy Policy. You are responsible for ensuring that your use of our software complies with applicable data protection laws, including patient data regulations such as HIPAA or local equivalents.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                For paid services, you agree to pay all fees according to your selected pricing plan. Fees are non-refundable unless otherwise stated. We reserve the right to modify pricing with reasonable notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Support and Updates</h2>
              <p className="text-gray-600 mb-4">
                Support and software updates are provided according to your service agreement. We strive to maintain system availability but do not guarantee uninterrupted service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, MedSoftwares shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to our services at any time for violation of these terms. Upon termination, your right to use the software ceases immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-600">
                Email: <a href="mailto:info@medsoftwares.com" className="text-[#166534] hover:underline">info@medsoftwares.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
