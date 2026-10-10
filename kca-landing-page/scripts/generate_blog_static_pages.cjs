// scripts/generate_blog_static_pages.cjs - Static Pre-rendered Landing Pages & Open Graph Meta Tags for Blog Posts
const fs = require('fs');
const path = require('path');
const katex = require('katex');

// 1. Safely transpile src/data/blogs.ts to extract staticBlogs
const blogsFilePath = path.join(__dirname, '..', 'src', 'data', 'blogs.ts');
const blogsFileContent = fs.readFileSync(blogsFilePath, 'utf8');

const jsContent = blogsFileContent
  .replace(/export interface[\s\S]*?}\n\n/g, '')
  .replace(/export const staticBlogs: BlogPost\[\] =/g, 'const staticBlogs =') + '\nmodule.exports = { staticBlogs };';

const tempPath = path.join(__dirname, '_temp_blogs.cjs');
fs.writeFileSync(tempPath, jsContent, 'utf8');

let staticBlogs = [];
try {
  staticBlogs = require(tempPath).staticBlogs;
} finally {
  if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
}

console.log(`Parsed ${staticBlogs.length} blog posts for static Open Graph and SEO page generation.`);

const publicDir = path.join(__dirname, '..', 'public');
const distDir = path.join(__dirname, '..', 'dist');

// Helper to render inline LaTeX math
function renderInlineMath(text) {
  return text.replace(/(?<!\\|\$)\$(?!\$)((?:\\\$|[^$\n])+?)(?<!\\|\$)\$/g, (match, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return match;
    }
  });
}

// Helper to render display LaTeX math
function renderDisplayMath(math) {
  try {
    return `<div class="blog-math-display">${katex.renderToString(math.trim(), { displayMode: true, throwOnError: false })}</div>`;
  } catch {
    return `<div class="blog-math-display"><code>${math}</code></div>`;
  }
}

// Inline Markdown parser
function applyInline(text) {
  let res = renderInlineMath(text);
  res = res
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return res;
}

// Markdown to HTML generator
function parseMarkdownToHtml(markdown) {
  if (!markdown) return '';
  const lines = markdown.split('\n');
  let inList = false;
  let listType = 'ul';
  let inCodeBlock = false;
  let codeContent = [];
  let inDisplayMath = false;
  let mathContent = [];
  let inTable = false;
  let tableRows = [];
  let html = '';

  const closeList = () => {
    if (inList) {
      html += listType === 'ol' ? '</ol>' : '</ul>';
      inList = false;
    }
  };

  const closeTable = () => {
    if (inTable && tableRows.length > 0) {
      let tableHtml = '<div class="blog-table-container"><table class="blog-markdown-table">';
      const headerRow = tableRows[0];
      tableHtml += '<thead><tr>';
      headerRow.forEach(cell => {
        tableHtml += `<th>${applyInline(cell.trim())}</th>`;
      });
      tableHtml += '</tr></thead>';

      if (tableRows.length > 1) {
        tableHtml += '<tbody>';
        for (let i = 1; i < tableRows.length; i++) {
          const row = tableRows[i];
          if (row.every(c => /^[-:| ]+$/.test(c.trim()))) continue;
          tableHtml += '<tr>';
          row.forEach(cell => {
            tableHtml += `<td>${applyInline(cell.trim())}</td>`;
          });
          tableHtml += '</tr>';
        }
        tableHtml += '</tbody>';
      }
      tableHtml += '</table></div>';
      html += tableHtml;
      inTable = false;
      tableRows = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Code blocks
    if (trimmed.startsWith('```')) {
      closeList();
      closeTable();
      if (inCodeBlock) {
        inCodeBlock = false;
        html += `<pre><code>${codeContent.join('\n')}</code></pre>`;
        codeContent = [];
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent.push(line.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      continue;
    }

    // Multiline display math
    if (trimmed === '$$') {
      closeList();
      closeTable();
      if (inDisplayMath) {
        inDisplayMath = false;
        html += renderDisplayMath(mathContent.join('\n'));
        mathContent = [];
      } else {
        inDisplayMath = true;
      }
      continue;
    }

    if (inDisplayMath) {
      mathContent.push(line);
      continue;
    }

    // Single line display math
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length > 4) {
      closeList();
      closeTable();
      html += renderDisplayMath(trimmed.slice(2, -2));
      continue;
    }

    // Markdown tables
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      closeList();
      const cells = trimmed.split('|').slice(1, -1);
      if (!inTable) {
        inTable = true;
        tableRows = [cells];
      } else {
        tableRows.push(cells);
      }
      continue;
    } else {
      closeTable();
    }

    // Horizontal rules
    if (trimmed === '---') {
      closeList();
      html += '<hr />';
      continue;
    }

    // Headings
    if (trimmed.startsWith('### ')) {
      closeList();
      html += `<h3>${applyInline(trimmed.substring(4))}</h3>`;
      continue;
    }
    if (trimmed.startsWith('## ')) {
      closeList();
      html += `<h2>${applyInline(trimmed.substring(3))}</h2>`;
      continue;
    }
    if (trimmed.startsWith('# ')) {
      closeList();
      html += `<h2 style="font-size: 2rem; margin-top: 3.5rem; margin-bottom: 1.5rem; font-weight: 800; color: #fff;">${applyInline(trimmed.substring(2))}</h2>`;
      continue;
    }

    // Blockquotes
    if (trimmed.startsWith('> ')) {
      closeList();
      html += `<blockquote><p>${applyInline(trimmed.substring(2))}</p></blockquote>`;
      continue;
    }

    // Lists
    const ulMatch = line.match(/^[*\-]\s+(.*)/);
    if (ulMatch) {
      if (!inList || listType !== 'ul') {
        closeList();
        html += '<ul>';
        inList = true;
        listType = 'ul';
      }
      html += `<li>${applyInline(ulMatch[1])}</li>`;
      continue;
    }

    const olMatch = line.match(/^\d+[.)]\s+(.*)/);
    if (olMatch) {
      if (!inList || listType !== 'ol') {
        closeList();
        html += '<ol>';
        inList = true;
        listType = 'ol';
      }
      html += `<li>${applyInline(olMatch[1])}</li>`;
      continue;
    }

    if (trimmed === '') {
      closeList();
      continue;
    }

    closeList();
    html += `<p>${applyInline(line)}</p>`;
  }

  closeList();
  closeTable();
  if (inCodeBlock) html += `<pre><code>${codeContent.join('\n')}</code></pre>`;
  if (inDisplayMath) html += renderDisplayMath(mathContent.join('\n'));
  return html;
}

// 2. Generate static HTML files for every blog post
staticBlogs.forEach(post => {
  const publicBlogDir = path.join(publicDir, 'blog', post.slug);
  if (!fs.existsSync(publicBlogDir)) {
    fs.mkdirSync(publicBlogDir, { recursive: true });
  }

  const jpgName = post.imageUrl.replace(/^\/assets\/blog\//, '').replace(/\.(webp|png)$/, '.jpg');
  const ogImageUrl = `https://www.koneacademy.io/assets/blog/${jpgName}`;
  const canonicalUrl = `https://www.koneacademy.io/blog/${post.slug}`;
  const fullTitle = `${post.title} | Kone Academy`;
  const renderedContent = parseMarkdownToHtml(post.content);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${canonicalUrl}#article`,
        "headline": post.title,
        "description": post.excerpt,
        "image": ogImageUrl,
        "datePublished": post.publishedAt,
        "dateModified": post.publishedAt,
        "author": {
          "@type": "Person",
          "name": post.author.name,
          "jobTitle": post.author.role,
          "url": "https://www.koneacademy.io/author/philip-hotor"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Kone Academy",
          "url": "https://www.koneacademy.io",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.koneacademy.io/og-image.png?v=4"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.koneacademy.io"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.koneacademy.io/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${fullTitle}</title>
  <meta name="description" content="${post.excerpt}" />
  <meta name="keywords" content="${post.tags ? post.tags.join(', ') : ''}, Kone Academy, Philip Hotor, Research, Engineering, Technology" />
  <meta name="author" content="${post.author.name}" />
  <link rel="canonical" href="${canonicalUrl}" />

  <!-- Open Graph / WhatsApp / Facebook / LinkedIn -->
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Kone Academy" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:title" content="${post.title}" />
  <meta property="og:description" content="${post.excerpt}" />
  <meta property="og:image" content="${ogImageUrl}" />
  <meta property="og:image:secure_url" content="${ogImageUrl}" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${post.title} Cover Artwork" />
  <meta property="article:published_time" content="${post.publishedAt}" />
  <meta property="article:author" content="${post.author.name}" />
  <meta property="article:section" content="${post.category}" />

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@koneacademy" />
  <meta name="twitter:creator" content="@Philkone1" />
  <meta name="twitter:url" content="${canonicalUrl}" />
  <meta name="twitter:title" content="${post.title}" />
  <meta name="twitter:description" content="${post.excerpt}" />
  <meta name="twitter:image" content="${ogImageUrl}" />

  <!-- Favicon & Icons -->
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- Fonts & Math Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" crossorigin="anonymous">

  <!-- Schema.org TechArticle & Breadcrumbs Structured Data -->
  <script type="application/ld+json">
${JSON.stringify(structuredData, null, 2)}
  </script>

  <!-- Seamless SPA Handoff for Human Visitors; Search & Social Bots Crawl Static HTML -->
  <script type="text/javascript">
    (function() {
      var isBot = /bot|googlebot|crawler|spider|robot|crawling|facebookexternalhit|whatsapp|twitterbot|slackbot|linkedinbot|embedly|quora|showyoubot|outbrain|pinterest|bingbot|msnbot|yahoo|duckduckbot/i.test(navigator.userAgent);
      if (!isBot) {
        var l = window.location;
        var safeOrigin = l.origin || (l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : ''));
        var safePath = encodeURI(l.pathname.slice(1)).replace(/&/g, '~and~');
        var redirectTarget = safeOrigin + '/?/' + safePath + (l.search ? '&' + encodeURIComponent(l.search.slice(1)).replace(/&/g, '~and~') : '') + l.hash;
        l.replace(redirectTarget);
      }
    })();
  </script>

  <style>
    :root {
      --bg-dark: #080c14;
      --card-bg: rgba(15, 23, 42, 0.7);
      --accent-purple: #a855f7;
      --text-main: #cbd5e1;
      --text-white: #ffffff;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.8;
      padding: 2rem 1.5rem;
      min-height: 100vh;
    }
    .post-container {
      max-width: 820px;
      margin: 0 auto;
      padding: 3rem 0;
    }
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-white);
      text-decoration: none;
      font-size: 0.88rem;
      font-weight: 600;
      margin-bottom: 2.5rem;
    }
    .post-meta-top {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--accent-purple);
      margin-bottom: 1rem;
    }
    .meta-dot {
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
    }
    .post-title {
      font-family: 'Baloo 2', cursive, sans-serif;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      color: var(--text-white);
      line-height: 1.25;
      margin-bottom: 2rem;
      letter-spacing: -0.01em;
    }
    .post-hero-img {
      width: 100%;
      max-height: 480px;
      object-fit: cover;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
      margin-bottom: 3rem;
    }
    .post-body {
      font-size: 1.125rem;
      color: #cbd5e1;
    }
    .post-body h2 {
      font-size: 1.75rem;
      font-weight: 800;
      color: #ffffff;
      margin-top: 3rem;
      margin-bottom: 1.2rem;
    }
    .post-body h3 {
      font-size: 1.35rem;
      font-weight: 800;
      color: #ffffff;
      margin-top: 2.2rem;
      margin-bottom: 0.8rem;
    }
    .post-body p { margin-bottom: 1.6rem; }
    .post-body pre {
      background: rgba(13, 17, 28, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 12px;
      padding: 1.2rem;
      overflow-x: auto;
      margin: 2rem 0;
    }
    .post-body code {
      font-family: monospace;
      font-size: 0.9rem;
      background: rgba(255, 255, 255, 0.04);
      padding: 3px 6px;
      border-radius: 4px;
      color: #f472b6;
    }
    .post-body pre code { background: transparent; padding: 0; color: #e2e8f0; }
    .post-body blockquote {
      border-left: 4px solid var(--accent-purple);
      background: rgba(168, 85, 247, 0.03);
      padding: 1.2rem 1.6rem;
      margin: 2rem 0;
      font-style: italic;
    }
    .post-body ul, .post-body ol { margin-bottom: 1.6rem; padding-left: 1.5rem; }
    .post-body li { margin-bottom: 0.5rem; }
    .post-body hr {
      border: none;
      height: 1px;
      background: rgba(255, 255, 255, 0.08);
      margin: 3rem 0;
    }
    .blog-math-display {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2.5rem 0;
      padding: 1.6rem 2rem;
      background: rgba(15, 23, 42, 0.75);
      border: 1px solid rgba(168, 85, 247, 0.2);
      border-radius: 16px;
      overflow-x: auto;
    }
    .blog-table-container {
      width: 100%;
      overflow-x: auto;
      margin: 2.5rem 0;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(15, 23, 42, 0.6);
    }
    .blog-markdown-table { width: 100%; border-collapse: collapse; }
    .blog-markdown-table th { padding: 1.1rem 1.4rem; font-weight: 700; color: #fff; background: rgba(30, 41, 59, 0.85); border-bottom: 2px solid rgba(168, 85, 247, 0.35); }
    .blog-markdown-table td { padding: 1rem 1.4rem; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
    .post-cta {
      margin-top: 5rem;
      background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(217, 70, 239, 0.04) 100%), rgba(15, 23, 42, 0.4);
      border: 1px solid rgba(168, 85, 247, 0.2);
      border-radius: 20px;
      padding: 3rem;
      text-align: center;
    }
    .cta-btn {
      display: inline-block;
      margin-top: 1.5rem;
      background: #25d366;
      color: #000;
      font-weight: 700;
      padding: 12px 28px;
      border-radius: 30px;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="post-container">
    <a href="/blog" class="back-btn">← Back to Blog Feed</a>
    <div class="post-meta-top">
      <span>${post.category}</span>
      <div class="meta-dot"></div>
      <span>${post.publishedAt}</span>
      <div class="meta-dot"></div>
      <span>${post.readTime} min read</span>
    </div>
    <h1 class="post-title">${post.title}</h1>
    <img src="${post.imageUrl}" alt="${post.title}" class="post-hero-img" />
    <article class="post-body">
      ${renderedContent}
    </article>
    <div class="post-cta">
      <h2>Register at Kone School</h2>
      <p style="margin-top: 0.8rem; color: #94a3b8;">Cohort positions are open. Build physical robotics firmware, structured web code, and master AI pathways through hands-on project systems.</p>
      <a href="https://wa.me/233551993820?text=Hello%20Kone%20Academy%2C%20I%20am%20interested%20in%20joining%20the%20cohort%20after%20reading%20${encodeURIComponent(post.title)}" class="cta-btn" target="_blank" rel="noopener noreferrer">Join Cohort (WhatsApp)</a>
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(publicBlogDir, 'index.html'), html, 'utf8');

  // Also write to dist/blog/${post.slug}/index.html if dist exists
  if (fs.existsSync(distDir)) {
    const distBlogDir = path.join(distDir, 'blog', post.slug);
    if (!fs.existsSync(distBlogDir)) {
      fs.mkdirSync(distBlogDir, { recursive: true });
    }
    fs.writeFileSync(path.join(distBlogDir, 'index.html'), html, 'utf8');
  }

  console.log(`Generated: public/blog/${post.slug}/index.html (og:image -> ${ogImageUrl})`);
});

console.log(`Successfully generated all ${staticBlogs.length} static blog landing pages with complete OG/Twitter metadata!`);
