// scripts/generate_rss.cjs - RSS 2.0 & Atom Feed Generator for Kone Academy
const fs = require('fs');
const path = require('path');

const domain = "https://www.koneacademy.io";

const blogs = [
  {
    title: "Computational Thinking: The Art of Structured Logic",
    slug: "computational-thinking-structured-logic",
    category: "Code",
    excerpt: "Mastering loop patterns, conditional branches, and modular algorithms before writing syntax. Learn how to think like a compiler.",
    imageUrl: "/assets/blog/ka_blog_logic.webp",
    author: "Philip Hotor",
    publishedAt: "2026-08-08T00:00:00Z"
  },
  {
    title: "Physical AI: Connecting Code to Microcontrollers",
    slug: "physical-ai-microcontrollers-robotics",
    category: "Lab",
    excerpt: "Moving from the browser sandbox to real-world electrical grids. A deep dive into wiring protocols, sensors, and actuators.",
    imageUrl: "/assets/blog/ka_blog_robotics.webp",
    author: "Philip Hotor",
    publishedAt: "2026-08-08T00:00:00Z"
  },
  {
    title: "Digital AI: Decoupling Large Language Models and Compute",
    slug: "digital-ai-llms-compute",
    category: "Lab",
    excerpt: "How neural networks digest data, mathematical weights, and massive compute to generate predictions. Demystifying the LLM pipeline.",
    imageUrl: "/assets/blog/ka_blog_digital.webp",
    author: "Philip Hotor",
    publishedAt: "2026-08-08T00:00:00Z"
  }
];

function buildRssXml() {
  const itemsXml = blogs.map(blog => {
    const postUrl = `${domain}/blog/${blog.slug}`;
    const imageUrl = `${domain}${blog.imageUrl}`;
    const pubDate = new Date(blog.publishedAt).toUTCString();

    return `    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <dc:creator><![CDATA[${blog.author}]]></dc:creator>
      <category><![CDATA[${blog.category}]]></category>
      <description><![CDATA[${blog.excerpt}]]></description>
      <media:content url="${imageUrl}" medium="image" />
      <enclosure url="${imageUrl}" type="image/webp" length="102400" />
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:dc="http://purl.org/dc/elements/1.1/" 
  xmlns:content="http://purl.org/rss/1.0/modules/content/" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Kone Academy | Insights &amp; Research</title>
    <link>${domain}/blog</link>
    <atom:link href="${domain}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Pioneering research notes, system engineering breakthroughs, and curriculum announcements from the Kone Code, Lab, and School team.</description>
    <language>en-us</language>
    <managingEditor>philipkone45@gmail.com (Philip Hotor)</managingEditor>
    <webMaster>philipkone45@gmail.com (Philip Hotor)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${domain}/assets/blog/author_philip.webp</url>
      <title>Kone Academy</title>
      <link>${domain}/blog</link>
    </image>
${itemsXml}
  </channel>
</rss>`;
}

function buildAtomXml() {
  const entriesXml = blogs.map(blog => {
    const postUrl = `${domain}/blog/${blog.slug}`;
    const imageUrl = `${domain}${blog.imageUrl}`;

    return `  <entry>
    <title><![CDATA[${blog.title}]]></title>
    <link href="${postUrl}" />
    <id>${postUrl}</id>
    <updated>${blog.publishedAt}</updated>
    <summary><![CDATA[${blog.excerpt}]]></summary>
    <author>
      <name>${blog.author}</name>
      <uri>${domain}/author/philip-hotor</uri>
    </author>
    <category term="${blog.category}" />
    <link rel="enclosure" type="image/webp" href="${imageUrl}" />
  </entry>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Kone Academy Research &amp; Insights</title>
  <subtitle>Pioneering research notes, system engineering breakthroughs, and curriculum announcements.</subtitle>
  <link href="${domain}/atom.xml" rel="self" />
  <link href="${domain}/blog" />
  <updated>${new Date().toISOString()}</updated>
  <id>${domain}/blog</id>
  <author>
    <name>Philip Hotor</name>
    <email>philipkone45@gmail.com</email>
    <uri>${domain}/author/philip-hotor</uri>
  </author>
${entriesXml}
</feed>`;
}

function generateFeeds() {
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const rssXml = buildRssXml();
  const atomXml = buildAtomXml();

  fs.writeFileSync(path.join(publicDir, 'feed.xml'), rssXml);
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssXml);
  fs.writeFileSync(path.join(publicDir, 'atom.xml'), atomXml);

  console.log('✅ Generated public/feed.xml');
  console.log('✅ Generated public/rss.xml');
  console.log('✅ Generated public/atom.xml');
}

generateFeeds();
