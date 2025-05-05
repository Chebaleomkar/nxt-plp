export default async function sitemap() {
  const baseUrl = 'https://nxtwave-product-listing.com';

  // Add all static pages
  const routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 1,
  }));

  return routes;
} 