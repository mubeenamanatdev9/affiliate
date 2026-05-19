import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

  // In a real application, you would fetch these from the database
  const stores = ['nike', 'amazon', 'target', 'best-buy'];
  const categories = ['fashion', 'electronics', 'travel'];

  const storeUrls = stores.map((store) => ({
    url: `${baseUrl}/stores/${store}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    ...storeUrls,
    ...categoryUrls,
  ];
}
