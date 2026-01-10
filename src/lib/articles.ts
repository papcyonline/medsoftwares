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

  return getAllArticles()
    .filter((article) => article.slug !== currentSlug)
    .filter((article) => article.category === currentArticle.category)
    .slice(0, limit);
}
