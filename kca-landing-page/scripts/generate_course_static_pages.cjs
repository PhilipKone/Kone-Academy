const fs = require('fs');
const path = require('path');

// Read courses from compiled dist/assets/courses-*.js or parse src/data/courses.ts
const coursesFilePath = path.join(__dirname, '..', 'src', 'data', 'courses.ts');
const coursesFileContent = fs.readFileSync(coursesFilePath, 'utf8');

// Simple regex parser to extract course data cleanly
const courses = [];
const courseRegex = /{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*division:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*icon:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)",[\s\S]*?skills:\s*\[(.*?)\]/g;
let match;
while ((match = courseRegex.exec(coursesFileContent)) !== null) {
  const skills = match[7].split(',').map(s => s.trim().replace(/['"]/g, ''));
  courses.push({
    id: match[1],
    title: match[2],
    division: match[3],
    category: match[4],
    icon: match[5],
    description: match[6],
    skills: skills
  });
}

console.log(`Parsed ${courses.length} courses for static social landing generation.`);

const publicDir = path.join(__dirname, '..', 'public');

courses.forEach(course => {
  const courseDir = path.join(publicDir, 'training', course.id);
  if (!fs.existsSync(courseDir)) {
    fs.mkdirSync(courseDir, { recursive: true });
  }

  const divisionName = course.division === 'Studio' ? 'Anim Studio' : `Kone ${course.division}`;
  const fullTitle = `${course.title} | ${divisionName} Track | Kone Academy`;
  const ogImageUrl = `https://www.koneacademy.io/og/${course.id}.png`;
  const canonicalUrl = `https://www.koneacademy.io/training/${course.id}/`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${fullTitle}</title>
  <meta name="description" content="${course.description}" />
  <meta name="keywords" content="${course.skills.join(', ')}, Kone Academy, ${divisionName}" />
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

  <!-- Instant Browser Redirect to the Interactive Modal -->
  <meta http-equiv="refresh" content="0; url=/training?track=${course.id}" />
  <script>
    window.location.replace('/training?track=${course.id}');
  </script>
  <style>
    body {
      background: #080c14;
      color: #94a3b8;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      text-align: center;
    }
    a {
      color: #38bdf8;
      text-decoration: none;
      font-weight: 600;
      margin-top: 12px;
    }
  </style>
</head>
<body>
  <p>Opening ${course.title}...</p>
  <a href="/training?track=${course.id}">Click here if not redirected automatically</a>
</body>
</html>`;

  fs.writeFileSync(path.join(courseDir, 'index.html'), html, 'utf8');
  console.log(`Generated: public/training/${course.id}/index.html`);
});

console.log('All 12 static social share landing pages generated successfully!');
