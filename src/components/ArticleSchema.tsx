interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  authorRole: string;
  slug: string;
  category?: string;
  readTime?: string;
}

export default function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  authorRole,
  slug,
  category,
  readTime,
}: ArticleSchemaProps) {
  // Estimate word count from read time (average 200 words per minute)
  const estimatedWordCount = readTime
    ? parseInt(readTime) * 200
    : 1000;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://medsoftwares.com/news/${slug}#article`,
    headline: title,
    description: description,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
      jobTitle: authorRole,
      url: 'https://medsoftwares.com/about',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://medsoftwares.com/#organization',
      name: 'MedSoftwares',
      logo: {
        '@type': 'ImageObject',
        url: 'https://medsoftwares.com/logo.png',
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://medsoftwares.com/news/${slug}`,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://medsoftwares.com/#website',
    },
    inLanguage: 'en-US',
    copyrightHolder: {
      '@type': 'Organization',
      name: 'MedSoftwares',
    },
    copyrightYear: new Date(datePublished).getFullYear(),
    // Additional properties for AEO
    wordCount: estimatedWordCount,
    articleSection: category || 'Healthcare Technology',
    keywords: ['pharmacy software', 'hospital management', 'healthcare technology', 'medical software'],
    // Speakable for voice search optimization
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.article-summary', 'p:first-of-type'],
    },
    // Accessibility
    accessMode: ['textual', 'visual'],
    accessModeSufficient: [{ '@type': 'ItemList', itemListElement: ['textual'] }],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}
