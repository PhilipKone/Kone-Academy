const fs = require('fs');
const path = require('path');

// Safely transpile src/data/courses.ts to extract full structured data
const coursesFilePath = path.join(__dirname, '..', 'src', 'data', 'courses.ts');
const coursesFileContent = fs.readFileSync(coursesFilePath, 'utf8');

const jsContent = coursesFileContent
  .replace(/export interface[\s\S]*?}\n\n/g, '')
  .replace(/export const courses: Course\[\] =/g, 'const courses =') + '\nmodule.exports = { courses };';

const tempPath = path.join(__dirname, '_temp_courses.cjs');
fs.writeFileSync(tempPath, jsContent, 'utf8');

let courses = [];
try {
  courses = require(tempPath).courses;
} finally {
  if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
}

console.log(`Parsed ${courses.length} courses with full syllabus for static SEO landing generation.`);

const publicDir = path.join(__dirname, '..', 'public');
const distDir = path.join(__dirname, '..', 'dist');

courses.forEach(course => {
  const publicCourseDir = path.join(publicDir, 'training', course.id);
  if (!fs.existsSync(publicCourseDir)) {
    fs.mkdirSync(publicCourseDir, { recursive: true });
  }

  const divisionName = course.division === 'Studio' ? 'Anim Studio' : `Kone ${course.division}`;
  const trackHeading = course.title.toLowerCase().endsWith('track') ? course.title : `${course.title} Track`;
  const fullTitle = `${trackHeading} | ${divisionName} | Kone Academy`;
  const ogImageUrl = `https://www.koneacademy.io/og/${course.id}.png`;
  const canonicalUrl = `https://www.koneacademy.io/training/${course.id}/`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${canonicalUrl}#course`,
        "name": course.title,
        "description": course.description,
        "url": canonicalUrl,
        "image": ogImageUrl,
        "courseCode": course.id,
        "educationalLevel": course.level,
        "teaches": course.skills,
        "educationalCredentialAwarded": `Certificate of Engineering Proficiency in ${course.title}`,
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Kone Academy",
          "url": "https://www.koneacademy.io",
          "sameAs": "https://www.koneacademy.io"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["Online", "Blended", "Hands-on Project Lab"],
          "duration": course.duration,
          "inLanguage": "en"
        },
        "offers": {
          "@type": "Offer",
          "category": "Fellowship & Open Source Access",
          "price": "0.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
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
            "name": "Training Hub",
            "item": "https://www.koneacademy.io/training"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": course.title,
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  const microProjectsHtml = course.microProjects.map((mp, i) => `
    <div class="project-card">
      <div class="project-num">0${i + 1}</div>
      <div class="project-info">
        <h4 class="project-title">${mp.title}</h4>
        <p class="project-desc">${mp.description}</p>
      </div>
    </div>
  `).join('');

  const miniProjectsHtml = course.miniProjects.map((mini, i) => `
    <div class="project-card mini-card">
      <div class="project-num">M${i + 1}</div>
      <div class="project-info">
        <h4 class="project-title">${mini.title}</h4>
        <p class="project-desc">${mini.description}</p>
      </div>
    </div>
  `).join('');

  const skillsHtml = course.skills.map(skill => `<span class="skill-pill">${skill}</span>`).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${fullTitle}</title>
  <meta name="description" content="${course.description}" />
  <meta name="keywords" content="${course.skills.join(', ')}, Kone Academy, ${divisionName}, tech training Ghana Africa" />
  <link rel="canonical" href="${canonicalUrl}" />

  <!-- Open Graph / WhatsApp / Facebook / LinkedIn -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:title" content="${fullTitle}" />
  <meta property="og:description" content="${course.description}" />
  <meta property="og:image" content="${ogImageUrl}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${course.title} Emblem" />

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${canonicalUrl}" />
  <meta name="twitter:title" content="${fullTitle}" />
  <meta name="twitter:description" content="${course.description}" />
  <meta name="twitter:image" content="${ogImageUrl}" />

  <!-- Schema.org Course & Breadcrumbs Structured Data -->
  <script type="application/ld+json">
${JSON.stringify(structuredData, null, 2)}
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #080c14;
      color: #e2e8f0;
      font-family: 'Nunito', system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      padding: 32px 20px 80px;
    }
    h1, h2, h3, h4, .section-title, .project-title, .final-title, .track-badge, .stat-val, .btn-primary, .btn-secondary {
      font-family: 'Baloo 2', 'Nunito', -apple-system, sans-serif;
    }
    .container {
      max-width: 880px;
      margin: 0 auto;
    }
    .breadcrumbs {
      font-size: 0.85rem;
      color: #64748b;
      margin-bottom: 24px;
    }
    .breadcrumbs a {
      color: #38bdf8;
      text-decoration: none;
    }
    .breadcrumbs a:hover {
      text-decoration: underline;
    }
    .track-badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.25);
      padding: 4px 12px;
      border-radius: 999px;
      margin-bottom: 16px;
    }
    h1 {
      font-size: 2.25rem;
      font-weight: 800;
      color: #f8fafc;
      line-height: 1.25;
      margin-bottom: 16px;
    }
    .lead-desc {
      font-size: 1.15rem;
      color: #94a3b8;
      margin-bottom: 28px;
    }
    .stats-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }
    .stat-box {
      background: #0f172a;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 16px;
      text-align: center;
    }
    .stat-label {
      display: block;
      font-size: 0.72rem;
      color: #64748b;
      font-weight: 600;
      letter-spacing: 0.05em;
      margin-bottom: 6px;
    }
    .stat-val {
      font-size: 1.05rem;
      font-weight: 700;
      color: #38bdf8;
    }
    .skills-section {
      margin-bottom: 36px;
    }
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
    }
    .skill-pill {
      background: rgba(148, 163, 184, 0.1);
      border: 1px solid rgba(148, 163, 184, 0.2);
      color: #cbd5e1;
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 500;
    }
    .section-title {
      font-size: 1.35rem;
      font-weight: 700;
      color: #f1f5f9;
      margin-bottom: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 8px;
    }
    .project-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 32px;
    }
    .project-card {
      background: #0f172a;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 12px;
      padding: 18px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }
    .project-num {
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
      font-weight: 800;
      font-size: 0.85rem;
      padding: 4px 10px;
      border-radius: 8px;
      flex-shrink: 0;
    }
    .mini-card .project-num {
      background: rgba(245, 158, 11, 0.15);
      color: #f59e0b;
    }
    .project-title {
      font-size: 1rem;
      font-weight: 600;
      color: #f8fafc;
      margin-bottom: 4px;
    }
    .project-desc {
      font-size: 0.9rem;
      color: #94a3b8;
    }
    .final-product-box {
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(168, 85, 247, 0.1));
      border: 1px solid rgba(168, 85, 247, 0.3);
      border-radius: 14px;
      padding: 24px;
      margin-bottom: 36px;
    }
    .final-badge {
      font-size: 0.72rem;
      font-weight: 800;
      color: #c084fc;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }
    .final-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 8px;
    }
    .final-stack {
      font-size: 0.85rem;
      color: #38bdf8;
      margin-top: 10px;
      font-weight: 600;
    }
    .cta-container {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      align-items: center;
      margin-top: 36px;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
    .btn-primary {
      background: #2563eb;
      color: #ffffff;
      font-weight: 600;
      font-size: 0.95rem;
      padding: 12px 24px;
      border-radius: 10px;
      text-decoration: none;
      transition: background 0.2s;
    }
    .btn-primary:hover {
      background: #1d4ed8;
    }
    .btn-secondary {
      background: transparent;
      color: #cbd5e1;
      border: 1px solid rgba(255, 255, 255, 0.15);
      font-weight: 600;
      font-size: 0.95rem;
      padding: 12px 24px;
      border-radius: 10px;
      text-decoration: none;
    }
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #ffffff;
    }
  </style>
</head>
<body>
  <div class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a> / <a href="/training">Training Hub</a> / <span>${course.title}</span>
    </nav>

    <header>
      <span class="track-badge">${divisionName} Track</span>
      <h1>${course.title}</h1>
      <p class="lead-desc">${course.description}</p>
    </header>

    <div class="stats-row">
      <div class="stat-box">
        <span class="stat-label">DIFFICULTY</span>
        <span class="stat-val">${course.level}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">DURATION</span>
        <span class="stat-val">${course.duration}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">PRACTICAL BUILDS</span>
        <span class="stat-val">4 Micro + 2 Mini + 1 Capstone</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">CREDENTIAL</span>
        <span class="stat-val">Proficiency Certificate</span>
      </div>
    </div>

    <section class="skills-section">
      <h3 class="section-title">Core Technologies & Stack</h3>
      <div class="skills-list">
        ${skillsHtml}
      </div>
    </section>

    <section>
      <h3 class="section-title">4 Module Micro-Projects</h3>
      <div class="project-grid">
        ${microProjectsHtml}
      </div>
    </section>

    <section>
      <h3 class="section-title">2 Full Integration Mini-Projects</h3>
      <div class="project-grid">
        ${miniProjectsHtml}
      </div>
    </section>

    <section class="final-product-box">
      <div class="final-badge">Production Capstone Product</div>
      <h3 class="final-title">${course.finalProduct.title}</h3>
      <p class="project-desc">${course.finalProduct.description}</p>
      ${course.finalProduct.stack ? `<div class="final-stack">Stack: ${course.finalProduct.stack}</div>` : ''}
    </section>

    <div class="cta-container">
      <a href="/training?track=${course.id}" class="btn-primary">Launch Interactive Blueprint & Onboarding</a>
      <a href="/training" class="btn-secondary">Browse All 12 Engineering Tracks</a>
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(publicCourseDir, 'index.html'), html, 'utf8');

  // Also write to dist if dist exists
  if (fs.existsSync(distDir)) {
    const distCourseDir = path.join(distDir, 'training', course.id);
    if (!fs.existsSync(distCourseDir)) {
      fs.mkdirSync(distCourseDir, { recursive: true });
    }
    fs.writeFileSync(path.join(distCourseDir, 'index.html'), html, 'utf8');
  }

  console.log(`Generated: public/training/${course.id}/index.html`);
});

console.log('All 12 rich static course landing pages generated successfully!');
