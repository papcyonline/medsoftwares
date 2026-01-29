import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  keywords: string[];
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''));
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    date: data.date,
    readTime: data.readTime,
    author: data.author,
    authorRole: data.authorRole,
    image: data.image,
    keywords: data.keywords || [],
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const slugs = getAllArticleSlugs();
  const articles = slugs
    .map((slug) => {
      const article = getArticleBySlug(slug);
      if (!article) return null;
      // Return only metadata, not content
      const { content, ...meta } = article;
      return meta;
    })
    .filter((article): article is ArticleMeta => article !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return articles;
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): ArticleMeta[] {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];

  const currentKeywords = currentArticle.keywords.map((k) => k.toLowerCase());
  const currentWords = currentSlug.split('-').filter((w) => w.length > 2);

  return getAllArticles()
    .filter((article) => article.slug !== currentSlug)
    .map((article) => {
      let score = 0;

      // Keyword overlap scoring (strongest signal)
      if (currentKeywords.length > 0 && article.keywords.length > 0) {
        const articleKeywords = article.keywords.map((k) => k.toLowerCase());
        for (const kw of currentKeywords) {
          for (const akw of articleKeywords) {
            if (kw === akw) score += 5;
            else if (kw.includes(akw) || akw.includes(kw)) score += 2;
          }
        }
      }

      // Same category bonus
      if (article.category === currentArticle.category) {
        score += 3;
      }

      // Recency bonus (prefer newer articles)
      const articleDate = new Date(article.date).getTime();
      const daysSincePublish = (Date.now() - articleDate) / (1000 * 60 * 60 * 24);
      if (daysSincePublish < 90) score += 2;
      else if (daysSincePublish < 180) score += 1;

      // Penalize near-duplicate slugs
      const articleWords = article.slug.split('-').filter((w) => w.length > 2);
      const commonWords = currentWords.filter((w) => articleWords.includes(w));
      if (commonWords.length > articleWords.length * 0.7) {
        score -= 3;
      }

      return { article, score };
    })
    .sort((a, b) => b.score - a.score || new Date(b.article.date).getTime() - new Date(a.article.date).getTime())
    .slice(0, limit)
    .map(({ article }) => article);
}
