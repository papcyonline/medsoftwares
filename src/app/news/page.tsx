import Link from 'next/link';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import NewsClient from './NewsClient';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'News & Updates | MedSoftwares - Healthcare Software Insights',
  description: 'Stay informed about pharmacy and hospital software updates, industry insights, and healthcare technology trends across Africa.',
  openGraph: {
    title: 'News & Updates | MedSoftwares',
    description: 'Latest news on pharmacy and hospital management software for Africa.',
    type: 'website',
  },
};

const pressReleases = [
  {
    date: '2024-12-01',
    title: 'MedSoftwares Announces PharmaPOS 3.0 with AI Features',
  },
  {
    date: '2024-11-15',
    title: 'MedSoftwares Expands to East African Markets',
  },
  {
    date: '2024-10-20',
    title: 'MedSoftwares and NHIS Ghana Announce Partnership',
  },
  {
    date: '2024-08-01',
    title: 'MedSoftwares Reaches 2,500 Customer Milestone',
  },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function NewsPage() {
  const allArticles = getAllArticles();

  // Get featured articles (most recent ones from key categories)
  const featuredArticles = allArticles
    .filter(article => {
      // Feature articles that are recent or in key categories
      const isRecent = new Date(article.date) > new Date('2025-12-01');
      const isKeyCategory = ['product', 'company'].includes(article.category);
      return isRecent || isKeyCategory;
    })
    .slice(0, 8);

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#166534]/10 text-[#166534] text-sm font-semibold rounded-full mb-6">
            News & Media
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6">
            Latest Updates from MedSoftwares
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about product updates, company news, industry insights, and how we&apos;re transforming healthcare technology across Africa.
          </p>
        </div>
      </section>

      {/* Client-side interactive sections */}
      <NewsClient articles={allArticles} featuredArticles={featuredArticles} />

      {/* Press Releases Sidebar */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Newsletter Signup */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#166534] to-green-700 rounded-3xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-green-100 mb-6">
                  Get the latest news, product updates, and industry insights delivered to your inbox monthly.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-white text-[#166534] font-bold rounded-xl hover:bg-green-50 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-green-200 text-sm mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Press Releases */}
            <div>
              <h2 className="text-xl font-heading font-extrabold text-gray-900 mb-6">Press Releases</h2>
              <div className="space-y-4">
                {pressReleases.map((release, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <p className="text-sm text-gray-500 mb-1">{formatDate(release.date)}</p>
                    <p className="text-gray-900 font-medium text-sm">{release.title}</p>
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="inline-block mt-6 text-[#166534] font-semibold text-sm hover:underline"
              >
                View All Press Releases →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-gray-900 mb-4">
            Media Resources
          </h2>
          <p className="text-gray-600 mb-8">
            Download our media kit for logos, brand guidelines, executive photos, and company information.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#166534] text-white font-semibold rounded-xl hover:bg-[#14532d] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Media Kit
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Contact PR Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
