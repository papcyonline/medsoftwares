'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter(article => article.category === activeCategory);

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
      {/* Featured Articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-heading font-extrabold text-gray-900 mb-8">Featured Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.slice(0, 4).map((article) => (
              <article
                key={article.slug}
                className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/news/${article.slug}`} className="block aspect-video relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                      {getCategoryLabel(article.category)}
                    </span>
                    <span className="text-gray-500 text-sm">{formatDate(article.date)}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#166534] transition-colors">
                    <Link href={`/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <Link
                      href={`/news/${article.slug}`}
                      className="text-[#166534] font-semibold text-sm hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter & Articles */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-[#166534] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/news/${article.slug}`} className="block aspect-video relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                      {getCategoryLabel(article.category)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#166534] transition-colors line-clamp-2">
                    <Link href={`/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{formatDate(article.date)}</span>
                    <span className="text-gray-500">{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
