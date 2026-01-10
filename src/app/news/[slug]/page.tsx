import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Footer from '@/components/Footer';
import { getArticleBySlug, getAllArticleSlugs, getRelatedArticles } from '@/lib/articles';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | MedSoftwares News',
    };
  }

  return {
    title: `${article.title} | MedSoftwares News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [article.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

const getCategoryLabel = (categoryId: string) => {
  const categories: Record<string, string> = {
    product: 'Product Updates',
    company: 'Company News',
    industry: 'Industry Insights',
    press: 'Press Releases',
  };
  return categories[categoryId] || categoryId;
};

const getCategoryColor = (categoryId: string) => {
  switch (categoryId) {
    case 'product':
      return 'bg-green-100 text-green-700';
    case 'company':
      return 'bg-blue-100 text-blue-700';
    case 'industry':
      return 'bg-purple-100 text-purple-700';
    case 'press':
      return 'bg-orange-100 text-orange-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#166534] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
              {getCategoryLabel(article.category)}
            </span>
            <span className="text-gray-500 text-sm">{formatDate(article.date)}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 text-sm">{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#166534] rounded-full flex items-center justify-center text-white font-bold text-lg">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{article.author}</p>
              <p className="text-sm text-gray-500">{article.authorRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video relative rounded-2xl overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg prose-gray max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-[#166534] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900">
            <MDXRemote source={article.content} />
          </article>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-4">Share this article</p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://medsoftwares.com/news/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://medsoftwares.com/news/${slug}`)}&title=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://medsoftwares.com/news/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-heading font-extrabold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <article
                  key={relatedArticle.slug}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <Link href={`/news/${relatedArticle.slug}`} className="block aspect-video relative overflow-hidden">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${getCategoryColor(relatedArticle.category)}`}>
                      {getCategoryLabel(relatedArticle.category)}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#166534] transition-colors line-clamp-2">
                      <Link href={`/news/${relatedArticle.slug}`}>
                        {relatedArticle.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedArticle.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-gray-900 mb-4">
            Ready to Transform Your Healthcare Facility?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of pharmacies and hospitals across Africa using MedSoftwares to streamline operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#166534] text-white font-bold rounded-xl hover:bg-[#14532d] transition-colors"
            >
              Get a Free Demo
            </Link>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Browse More Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
