'use client';

import { useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message || 'Demo request from homepage form',
          formType: 'demo',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send request');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2">Demo Request Sent!</h3>
          <p className="text-gray-600">
            Thank you for your interest. Our team will contact you within 24 hours to schedule your demo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl">
      <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2">Book a Free Demo</h3>
      <p className="text-gray-600 text-sm md:text-base mb-6">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
            <input
              type="text"
              id="firstName"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="John"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all text-sm md:text-base"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
            <input
              type="text"
              id="lastName"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all text-sm md:text-base"
            />
          </div>
        </div>

        <div>
          <label htmlFor="demoEmail" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
          <input
            type="email"
            id="demoEmail"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@pharmacy.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all text-sm md:text-base"
          />
        </div>

        <div>
          <label htmlFor="demoPhone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
          <input
            type="tel"
            id="demoPhone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+233 20 000 0000"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all text-sm md:text-base"
          />
        </div>

        <div>
          <label htmlFor="pharmacyName" className="block text-sm font-medium text-gray-700 mb-1.5">Pharmacy/Hospital Name</label>
          <input
            type="text"
            id="pharmacyName"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Your Pharmacy Ltd."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all text-sm md:text-base"
          />
        </div>

        <div>
          <label htmlFor="demoMessage" className="block text-sm font-medium text-gray-700 mb-1.5">Message (Optional)</label>
          <textarea
            id="demoMessage"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your pharmacy and what you're looking for..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 outline-none transition-all resize-none text-sm md:text-base"
          />
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#166534] text-white font-bold rounded-xl shadow-lg shadow-green-900/20 hover:bg-[#14532d] hover:shadow-xl transition-all duration-200 group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Book My Free Demo
              <ArrowOutwardIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-500">
          By submitting, you agree to our{' '}
          <a href="#" className="text-[#166534] hover:underline">Privacy Policy</a>
          {' '}and{' '}
          <a href="#" className="text-[#166534] hover:underline">Terms of Service</a>.
        </p>
      </form>
    </div>
  );
}
