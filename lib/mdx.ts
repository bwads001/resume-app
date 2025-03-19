import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'data/articles');

export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

export async function getAllArticles(): Promise<Article[]> {
  // Get file names under /data/articles
  const fileNames = fs.readdirSync(articlesDirectory);
  
  const allArticlesData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      // Read markdown file as string
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);
      
      // Combine the data with the id
      return {
        ...(data as Omit<Article, 'content'>),
        content,
      } as Article;
    });
    
  // Sort articles by date
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const allArticles = await getAllArticles();
  return allArticles.find(article => article.slug === slug);
} 