const https = require('https');

const payload = JSON.stringify({
  host: "www.koneacademy.io",
  key: "4a8f9c0e1b2d3e4f5a6b7c8d9e0f1a2b",
  keyLocation: "https://www.koneacademy.io/4a8f9c0e1b2d3e4f5a6b7c8d9e0f1a2b.txt",
  urlList: [
    "https://www.koneacademy.io/sitemap.xml",
    "https://www.koneacademy.io/sitemap",
    "https://www.koneacademy.io/training",
    "https://www.koneacademy.io/training/course-pay/",
    "https://www.koneacademy.io/training/course-farms/",
    "https://www.koneacademy.io/training/course-warp/",
    "https://www.koneacademy.io/training/course-studio/",
    "https://www.koneacademy.io/training/course-ai/",
    "https://www.koneacademy.io/training/course-consult/",
    "https://www.koneacademy.io/training/course-code/",
    "https://www.koneacademy.io/training/course-kids/",
    "https://www.koneacademy.io/training/course-lab/",
    "https://www.koneacademy.io/training/course-shop/",
    "https://www.koneacademy.io/training/course-digital/",
    "https://www.koneacademy.io/training/course-tech/"
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
