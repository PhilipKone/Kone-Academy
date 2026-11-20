const https = require('https');

const payload = JSON.stringify({
  host: "academy.codkon.com",
  key: "4a8f9c0e1b2d3e4f5a6b7c8d9e0f1a2b",
  keyLocation: "https://academy.codkon.com/4a8f9c0e1b2d3e4f5a6b7c8d9e0f1a2b.txt",
  urlList: [
    "https://academy.codkon.com/sitemap.xml",
    "https://academy.codkon.com/sitemap",
    "https://academy.codkon.com/training",
    "https://academy.codkon.com/training/course-pay/",
    "https://academy.codkon.com/training/course-farms/",
    "https://academy.codkon.com/training/course-warp/",
    "https://academy.codkon.com/training/course-studio/",
    "https://academy.codkon.com/training/course-ai/",
    "https://academy.codkon.com/training/course-consult/",
    "https://academy.codkon.com/training/course-code/",
    "https://academy.codkon.com/training/course-kids/",
    "https://academy.codkon.com/training/course-lab/",
    "https://academy.codkon.com/training/course-shop/",
    "https://academy.codkon.com/training/course-digital/",
    "https://academy.codkon.com/training/course-tech/"
  ]
});

const endpoints = [
  'api.indexnow.org',
  'www.bing.com'
];

endpoints.forEach(host => {
  const req = https.request({
    hostname: host,
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  }, (res) => {
    console.log(`IndexNow Ping to ${host}: Status ${res.statusCode} ${res.statusMessage}`);
  });

  req.on('error', (err) => {
    console.error(`IndexNow Ping to ${host} failed:`, err.message);
  });

  req.write(payload);
  req.end();
});
