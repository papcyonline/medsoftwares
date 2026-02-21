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
  keywords?: string[];
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
  keywords,
}: ArticleSchemaProps) {
  // Estimate word count from read time (average 200 words per minute)
  const estimatedWordCount = readTime
    ? parseInt(readTime) * 200
    : 1000;

  const articleKeywords = keywords && keywords.length > 0
    ? keywords
    : ['pharmacy software', 'hospital management', 'healthcare technology', 'medical software'];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://medsoftwares.com/news/${slug}#article`,
    headline: title,
    description: description,
    image: {
      '@type': 'ImageObject',
      url: `https://medsoftwares.com${image}`,
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
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://medsoftwares.com/#organization',
        name: 'MedSoftwares',
      },
      knowsAbout: [
        'Healthcare Technology',
        'Pharmacy Management Software',
        'Hospital Management Systems',
        'Electronic Health Records',
        'Medical Software Implementation',
      ],
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
    wordCount: estimatedWordCount,
    articleSection: category || 'Healthcare Technology',
    keywords: articleKeywords,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.article-summary', 'p:first-of-type'],
    },
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
