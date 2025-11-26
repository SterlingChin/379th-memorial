/**
 * Migration Script: Convert scraped war stories HTML to Markdown
 *
 * This script reads the scraped HTML war story files and converts them
 * to clean Markdown with YAML frontmatter.
 *
 * Usage: node scripts/migrate-war-stories.js <path-to-scraped-folder>
 */

const fs = require('fs');
const path = require('path');

// Simple HTML to text converter (strips tags)
function htmlToText(html) {
  return html
    // Remove script and style tags with content
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    // Convert common tags
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
    // Remove all other tags
    .replace(/<[^>]+>/g, '')
    // Decode common HTML entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    // Clean up whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Extract title from HTML
function extractTitle(html, filename) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) {
    return titleMatch[1].replace('379thbga.org : The 379th Bomb Group of WWII', '').trim();
  }

  // Try to extract from h1 or the WAR STORIES header pattern
  const h1Match = html.match(/WAR STORIES:\s*([^<]+)/i);
  if (h1Match) {
    return h1Match[1].trim();
  }

  // Fallback to filename
  return filename
    .replace('_war_stories_', '')
    .replace('.htm.html', '')
    .replace(/_/g, ' ');
}

// Extract author from content
function extractAuthor(html) {
  const byMatch = html.match(/by\s+([A-Z][a-z]+(?:\s+[A-Z]\.?)?\s+[A-Z][a-z]+)/);
  if (byMatch) {
    return byMatch[1].trim();
  }
  return '';
}

// Extract main content from war story pages
function extractContent(html) {
  // Try to find the main content area
  const contentMatch = html.match(/<td[^>]*width="81%"[^>]*>([\s\S]*?)<\/td>/i);
  if (contentMatch) {
    return htmlToText(contentMatch[1]);
  }

  // Fallback: try to find content after WAR STORIES header
  const storyMatch = html.match(/WAR STORIES:[^<]*<\/font>([\s\S]*?)<\/td>/i);
  if (storyMatch) {
    return htmlToText(storyMatch[1]);
  }

  return '';
}

// Create slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Process a single war story file
function processWarStory(filepath) {
  const filename = path.basename(filepath);
  const html = fs.readFileSync(filepath, 'utf8');

  const title = extractTitle(html, filename);
  const author = extractAuthor(html);
  const content = extractContent(html);

  if (!content || content.length < 100) {
    console.log(`Skipping ${filename} - no substantial content found`);
    return null;
  }

  const slug = createSlug(title || author || filename);

  const markdown = `---
title: "${title}"
author: "${author}"
squadron: ""
featured: false
---

${content}
`;

  return { slug, markdown, title, author };
}

// Main migration function
function migrateWarStories(scrapedFolder, outputFolder) {
  const pagesFolder = path.join(scrapedFolder, 'pages');

  if (!fs.existsSync(pagesFolder)) {
    console.error(`Pages folder not found: ${pagesFolder}`);
    process.exit(1);
  }

  // Ensure output folder exists
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  // Find all war story files
  const warStoryFiles = fs.readdirSync(pagesFolder)
    .filter(f => f.includes('war_stories') && f !== '_war_stories.htm.html');

  console.log(`Found ${warStoryFiles.length} war story files`);

  let migrated = 0;
  warStoryFiles.forEach(filename => {
    const filepath = path.join(pagesFolder, filename);
    const result = processWarStory(filepath);

    if (result) {
      const outputPath = path.join(outputFolder, `${result.slug}.md`);
      fs.writeFileSync(outputPath, result.markdown);
      console.log(`Migrated: ${result.title || result.slug}`);
      migrated++;
    }
  });

  console.log(`\nMigration complete: ${migrated} war stories converted`);
}

// Run if called directly
if (require.main === module) {
  const scrapedFolder = process.argv[2] || '../379thBG/scraped_379th';
  const outputFolder = process.argv[3] || './content/war-stories';

  console.log(`Migrating war stories from: ${scrapedFolder}`);
  console.log(`Output folder: ${outputFolder}\n`);

  migrateWarStories(scrapedFolder, outputFolder);
}

module.exports = { migrateWarStories, processWarStory };
