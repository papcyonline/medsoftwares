import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[180px] font-bold text-[#166534] leading-none select-none">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#166534] text-white font-semibold rounded-lg hover:bg-[#14532d] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#166534] text-[#166534] font-semibold rounded-lg hover:bg-[#166534] hover:text-white transition-colors"
          >
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Or check out our products:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pharmapos" className="text-[#166534] hover:underline font-medium">
              PharmaPOS
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/hospitalos" className="text-[#166534] hover:underline font-medium">
              HospitalOS
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/about" className="text-[#166534] hover:underline font-medium">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
