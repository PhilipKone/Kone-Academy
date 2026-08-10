// src/utils/seo.ts - Dynamic Meta Tag Ingestion for Pre-rendering and Social Sharing (WhatsApp, X, LinkedIn, FB)

interface UpdateMetaOptions {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
}

export function updatePageMeta({
  title,
  description,
  image,
  url,
  type = 'article',
  author,
  publishedTime,
}: UpdateMetaOptions) {
  if (typeof document === 'undefined') return;

  // Ensure absolute image URL for WhatsApp / Facebook crawlers
  const fullImageUrl = image.startsWith('http') 
    ? image 
    : `https://www.koneacademy.io${image.startsWith('/') ? '' : '/'}${image}`;

  // Ensure absolute page URL
  const fullPageUrl = url.startsWith('http')
    ? url
    : `https://www.koneacademy.io${url.startsWith('/') ? '' : '/'}${url}`;

  // Update document title
  document.title = `${title} | Kone Academy`;

  // Helper to set or create meta element
  const setMeta = (attributeName: 'name' | 'property', attributeValue: string, contentValue: string) => {
    let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attributeName, attributeValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', contentValue);
  };

  // Helper to set link canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', fullPageUrl);

  // Standard Meta Tags
  setMeta('name', 'description', description);

  // Determine correct mime-type for WhatsApp & Facebook parsers
  const mimeType = fullImageUrl.endsWith('.png') 
    ? 'image/png' 
    : fullImageUrl.endsWith('.webp') 
    ? 'image/webp' 
    : 'image/jpeg';

  // Open Graph / WhatsApp / Facebook
  setMeta('property', 'og:type', type);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', fullPageUrl);
  setMeta('property', 'og:image', fullImageUrl);
  setMeta('property', 'og:image:url', fullImageUrl);
  setMeta('property', 'og:image:secure_url', fullImageUrl);
  setMeta('property', 'og:image:type', mimeType);
  setMeta('property', 'og:image:width', '1200');
  setMeta('property', 'og:image:height', '630');
  setMeta('property', 'og:site_name', 'Kone Academy');

  // Twitter / X
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', fullImageUrl);
  setMeta('name', 'twitter:url', fullPageUrl);

  // Article Specific Meta
  if (type === 'article') {
    if (author) setMeta('property', 'article:author', author);
    if (publishedTime) setMeta('property', 'article:published_time', publishedTime);
  }
}
