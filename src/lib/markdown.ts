import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ContentMeta {
  title?: string;
  date?: string;
  author?: string;
  squadron?: string;
  featured?: boolean;
  [key: string]: unknown;
}

export interface ContentItem {
  slug: string;
  content: string;
  meta: ContentMeta;
}

/**
 * Get all content slugs from a directory
 */
export function getContentSlugs(directory: string): string[] {
  const fullPath = path.join(contentDirectory, directory);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  return fs.readdirSync(fullPath)
    .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
    .map((file) => file.replace(/\.md$/, ''));
}

/**
 * Get content by slug from a specific directory
 */
export async function getContentBySlug(
  directory: string,
  slug: string
): Promise<ContentItem | null> {
  const fullPath = path.join(contentDirectory, directory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    slug,
    content: processedContent.toString(),
    meta: data as ContentMeta,
  };
}

/**
 * Get all content items from a directory
 */
export async function getAllContent(directory: string): Promise<ContentItem[]> {
  const slugs = getContentSlugs(directory);
  const content = await Promise.all(
    slugs.map((slug) => getContentBySlug(directory, slug))
  );

  return content.filter((item): item is ContentItem => item !== null);
}

/**
 * Get featured content from a directory
 */
export async function getFeaturedContent(
  directory: string,
  limit?: number
): Promise<ContentItem[]> {
  const allContent = await getAllContent(directory);
  const featured = allContent.filter((item) => item.meta.featured);

  if (limit) {
    return featured.slice(0, limit);
  }

  return featured;
}
