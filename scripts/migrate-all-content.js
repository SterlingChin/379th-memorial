/**
 * Comprehensive Migration Script for 379th Bomb Group Website
 *
 * Migrates:
 * - War Stories (with proper title extraction)
 * - Taps (memorial roster)
 * - Looking4 (crew database entries)
 * - Memorials content
 */

const fs = require('fs');
const path = require('path');

const SCRAPED_DIR = process.argv[2] || '/Users/sterling.chin@postman.com/personal/379thBG/scraped_379th';
const OUTPUT_DIR = process.argv[3] || '.';

// ============================================
// UTILITY FUNCTIONS
// ============================================

function htmlToText(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/\t+/g, ' ')
    .replace(/ +/g, ' ')
    .replace(/\n +/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// ============================================
// WAR STORIES MIGRATION
// ============================================

function migrateWarStories() {
  console.log('\n=== MIGRATING WAR STORIES ===\n');

  const pagesDir = path.join(SCRAPED_DIR, 'pages');
  const outputDir = path.join(OUTPUT_DIR, 'content/war-stories');
  ensureDir(outputDir);

  const warStoryFiles = fs.readdirSync(pagesDir)
    .filter(f => f.includes('war_stories') && f !== '_war_stories.htm.html');

  const stories = [];

  warStoryFiles.forEach(filename => {
    const filepath = path.join(pagesDir, filename);
    const html = fs.readFileSync(filepath, 'utf8');

    // Extract title from "WAR STORIES: TITLE" pattern
    const titleMatch = html.match(/WAR STORIES:[\s\S]*?<\/font>\s*(?:<font[^>]*>)?\s*([^<]+)/i);
    let title = titleMatch ? titleMatch[1].trim() : '';

    // Clean up title
    title = title.replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

    // Try to extract author from "by Author Name" pattern
    const authorMatch = html.match(/by\s+([A-Z][a-z]+(?:\s+[A-Z]\.?)?\s+[A-Z][a-z]+)/);
    const author = authorMatch ? authorMatch[1].trim() : '';

    // Extract main content
    const contentMatch = html.match(/<td[^>]*width="81%"[^>]*>([\s\S]*?)<\/td>/i);
    if (!contentMatch) return;

    let content = htmlToText(contentMatch[1]);

    // Remove the "WAR STORIES:" prefix from content
    content = content.replace(/^WAR STORIES:\s*/i, '');

    // Skip if no substantial content
    if (content.length < 200) return;

    const slug = createSlug(title || author || filename);

    const markdown = `---
title: "${title.replace(/"/g, '\\"')}"
author: "${author}"
squadron: ""
featured: false
---

${content}
`;

    const outputPath = path.join(outputDir, `${slug}.md`);
    fs.writeFileSync(outputPath, markdown);

    stories.push({ slug, title, author });
    console.log(`  ✓ ${title || slug}`);
  });

  console.log(`\nMigrated ${stories.length} war stories`);
  return stories;
}

// ============================================
// TAPS MIGRATION (Memorial Roster)
// ============================================

function migrateTaps() {
  console.log('\n=== MIGRATING TAPS (Memorial Roster) ===\n');

  const tapsFile = path.join(SCRAPED_DIR, 'pages/_taps.htm.html');
  const outputDir = path.join(OUTPUT_DIR, 'data');
  ensureDir(outputDir);

  const html = fs.readFileSync(tapsFile, 'utf8');

  // Extract names from table cells
  // Pattern: looking for name entries in the roster
  const names = [];

  // Find all table cells with names (they follow a pattern)
  const cellPattern = /<td[^>]*class="auto-style[^"]*"[^>]*>([^<]+)<\/td>/gi;
  let match;

  while ((match = cellPattern.exec(html)) !== null) {
    let name = match[1].trim();
    // Filter out empty cells and non-name content
    if (name && name.length > 3 && !name.match(/^\d+$/) && !name.match(/^[&\s]+$/)) {
      // Clean up the name
      name = name.replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
      if (name && !names.includes(name)) {
        names.push(name);
      }
    }
  }

  // Also try to get names from simpler patterns
  const namePattern = />([A-Z][a-z]+,?\s+[A-Z][a-z]*\.?\s*[A-Z]?[a-z]*\.?)<\/td>/g;
  while ((match = namePattern.exec(html)) !== null) {
    let name = match[1].trim();
    if (name && !names.includes(name)) {
      names.push(name);
    }
  }

  // Create JSON file
  const tapsData = {
    description: "Final Mission Roster - Deceased veterans of the 379th Bombardment Group WWII (H) who were not KIA or MIA during WWII",
    source: "Original 379thbga.org website",
    count: names.length,
    names: names.sort()
  };

  fs.writeFileSync(
    path.join(outputDir, 'taps.json'),
    JSON.stringify(tapsData, null, 2)
  );

  console.log(`  Extracted ${names.length} names from Taps roster`);

  // Also create markdown content for the Taps page
  const contentDir = path.join(OUTPUT_DIR, 'content/memorials');
  ensureDir(contentDir);

  // Extract High Flight poem
  const poemMatch = html.match(/High Flight[\s\S]*?touched the face of God\./i);
  const poem = poemMatch ? htmlToText(poemMatch[0]) : '';

  const tapsMarkdown = `---
title: "Taps - In Memoriam"
description: "Honoring deceased veterans of the 379th Bomb Group"
---

# Taps

## High Flight
*by John Gillespie Magee, Jr.*

Oh, I have slipped the surly bonds of earth
And danced the skies on laughter-silvered wings;
Sunward I've climbed, and joined the tumbling mirth
Of sun-split clouds... and done a hundred things
You have not dreamed of... wheeled and soared and swung
High in the sunlit silence. Hov'ring there,
I've chased the shouting wind along, and flung
My eager craft through footless halls of air.
Up, up the long, delirious, burning blue
I've topped the windswept heights with easy grace
Where never lark, or even eagle flew.
And, while with silent, lifting mind I've trod
The high untrespassed sanctity of space,
Put out my hand, and touched the face of God.

---

The Final Mission Roster honors deceased veterans of the 379th Bombardment Group WWII (H) who were not Killed in Action (KIA) or Missing in Action (MIA) during WWII, as they are shown in the 379th BG Anthology, the National Archives and the National WWII Memorial.

*${names.length} names in the memorial roster*
`;

  fs.writeFileSync(path.join(contentDir, 'taps.md'), tapsMarkdown);

  return tapsData;
}

// ============================================
// LOOKING4 MIGRATION (Crew Database)
// ============================================

function migrateLooking4() {
  console.log('\n=== MIGRATING LOOKING4 (Crew Database) ===\n');

  const pagesDir = path.join(SCRAPED_DIR, 'pages');
  const outputDir = path.join(OUTPUT_DIR, 'data');
  ensureDir(outputDir);

  const looking4Files = fs.readdirSync(pagesDir)
    .filter(f => f.toLowerCase().includes('looking4') && f.endsWith('.html'));

  console.log(`  Found ${looking4Files.length} Looking4 pages to process`);

  const entries = [];

  looking4Files.forEach(filename => {
    const filepath = path.join(pagesDir, filename);
    const html = fs.readFileSync(filepath, 'utf8');

    // Looking4 entries typically have numbered entries with names and details
    // Pattern: number followed by name and details
    const entryPattern = /(\d{4})\s*[-–]\s*([^<\n]+)/g;
    let match;

    while ((match = entryPattern.exec(html)) !== null) {
      const entryNum = match[1];
      let details = match[2].trim();
      details = details.replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

      if (details && details.length > 5) {
        entries.push({
          id: entryNum,
          query: details,
          source: filename
        });
      }
    }
  });

  // Remove duplicates
  const uniqueEntries = [];
  const seen = new Set();
  entries.forEach(e => {
    const key = `${e.id}-${e.query}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueEntries.push(e);
    }
  });

  // Sort by ID
  uniqueEntries.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  const looking4Data = {
    description: "Looking4 - Family search requests for 379th Bomb Group crew members",
    source: "Original 379thbga.org website",
    count: uniqueEntries.length,
    entries: uniqueEntries
  };

  fs.writeFileSync(
    path.join(outputDir, 'looking4.json'),
    JSON.stringify(looking4Data, null, 2)
  );

  console.log(`  Extracted ${uniqueEntries.length} unique Looking4 entries`);

  return looking4Data;
}

// ============================================
// MEMORIALS CONTENT EXTRACTION
// ============================================

function migrateMemorials() {
  console.log('\n=== MIGRATING MEMORIALS ===\n');

  const memorialsFile = path.join(SCRAPED_DIR, 'pages/_memorials.htm.html');
  const outputDir = path.join(OUTPUT_DIR, 'content/memorials');
  ensureDir(outputDir);

  const html = fs.readFileSync(memorialsFile, 'utf8');

  // Extract the main content
  const contentMatch = html.match(/<td[^>]*width="81%"[^>]*>([\s\S]*?)<\/td>/i);
  if (!contentMatch) {
    console.log('  Could not find memorials content');
    return;
  }

  const content = htmlToText(contentMatch[1]);

  const markdown = `---
title: "379th Memorials"
description: "Memorials honoring the 379th Bomb Group across the United States and England"
---

# 379th Memorials

${content}
`;

  fs.writeFileSync(path.join(outputDir, 'index.md'), markdown);
  console.log('  ✓ Memorials content extracted');
}

// ============================================
// MAIN EXECUTION
// ============================================

console.log('379th Bomb Group Content Migration');
console.log('===================================');
console.log(`Source: ${SCRAPED_DIR}`);
console.log(`Output: ${OUTPUT_DIR}`);

migrateWarStories();
migrateTaps();
migrateLooking4();
migrateMemorials();

console.log('\n=== MIGRATION COMPLETE ===\n');
