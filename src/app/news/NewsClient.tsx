'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import type { ArticleMeta } from '@/lib/articles';

const categories = [
  { id: 'all', label: 'All News' },
  { id: 'product', label: 'Product Updates' },
  { id: 'company', label: 'Company News' },
  { id: 'industry', label: 'Industry Insights' },
  { id: 'press', label: 'Press Releases' },
];

interface NewsClientProps {
  articles: ArticleMeta[];
  featuredArticles: ArticleMeta[];
}

export default function NewsClient({ articles, featuredArticles }: NewsClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryLabel = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.label : categoryId;
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

  return (
    <>
      {/* Featured Articles - 3 Column List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-2">Latest News</h2>
            <p className="text-gray-600">Stay updated with our most recent articles and insights</p>
          </div>

          {featuredArticles.length > 0 && (
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Column 1 */}
              <div className="space-y-6">
                {featuredArticles.slice(0, 5).map((article, index) => (
                  <article key={article.slug} className="group">
                    <Link href={`/news/${article.slug}`} className="block">
                      <div className="flex items-start gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${getCategoryColor(article.category)}`}>
                              {getCategoryLabel(article.category)}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-gray-900 group-hover:text-[#166534] transition-colors line-clamp-2 leading-snug mb-2">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{formatDate(article.date)}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      {index < 4 && <div className="mt-6 border-b border-gray-100"></div>}
                    </Link>
                  </article>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-6 md:border-l md:border-r md:border-gray-100 md:px-8 lg:px-12">
                {featuredArticles.slice(5, 10).map((article, index) => (
                  <article key={article.slug} className="group">
                    <Link href={`/news/${article.slug}`} className="block">
                      <div className="flex items-start gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${getCategoryColor(article.category)}`}>
                              {getCategoryLabel(article.category)}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-gray-900 group-hover:text-[#166534] transition-colors line-clamp-2 leading-snug mb-2">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{formatDate(article.date)}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      {index < 4 && <div className="mt-6 border-b border-gray-100"></div>}
                    </Link>
                  </article>
                ))}
              </div>

              {/* Column 3 */}
              <div className="space-y-6">
                {featuredArticles.slice(10, 15).map((article, index) => (
                  <article key={article.slug} className="group">
                    <Link href={`/news/${article.slug}`} className="block">
                      <div className="flex items-start gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${getCategoryColor(article.category)}`}>
                              {getCategoryLabel(article.category)}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-gray-900 group-hover:text-[#166534] transition-colors line-clamp-2 leading-snug mb-2">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{formatDate(article.date)}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      {index < 4 && <div className="mt-6 border-b border-gray-100"></div>}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Category Filter & Articles */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-4">
              All Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of healthcare software insights, industry news, and expert guides
            </p>
          </div>

          {/* Search Bar and Filters */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <svg
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles by title or topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-14 py-4 bg-white rounded-2xl border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-[#166534] focus:ring-4 focus:ring-[#166534]/10 outline-none transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-[#166534] text-white shadow-lg shadow-[#166534]/30 scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          {(searchQuery || activeCategory !== 'all') && (
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                <span className="text-[#166534] font-bold">{filteredArticles.length}</span> {filteredArticles.length === 1 ? 'article' : 'articles'} found
                {searchQuery && <span className="text-gray-500"> for &ldquo;{searchQuery}&rdquo;</span>}
                {activeCategory !== 'all' && <span className="text-gray-500"> in {categories.find(c => c.id === activeCategory)?.label}</span>}
              </div>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="text-sm text-gray-500 hover:text-[#166534] font-medium underline"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
              <svg className="w-20 h-20 mx-auto text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#166534] text-white font-semibold rounded-xl hover:bg-[#14532d] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Clear all filters
              </button>
            </div>
          ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredArticles.map((article, index) => (
              <article
                key={article.slug}
                className={`group bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#166534]/10 transition-all duration-300 border border-gray-100 hover:border-[#166534]/20 ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <Link href={`/news/${article.slug}`} className="block">
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm ${getCategoryColor(article.category)} bg-opacity-95`}>
                        {getCategoryLabel(article.category)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#166534] transition-colors line-clamp-2 leading-snug min-h-[3.5rem]">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <ArrowOutwardIcon className="w-5 h-5 text-[#166534] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          )}
        </div>
      </section>
    </>
  );
}
