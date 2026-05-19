import { Redis } from '@upstash/redis';

// Only instantiate Redis if the URL is provided (prevents build errors if missing in env)
const redisUrl = process.env.REDIS_URL || '';
const redisToken = process.env.REDIS_TOKEN || ''; // Upstash usually requires a token

export const redis = (redisUrl && redisToken) ? new Redis({
  url: redisUrl,
  token: redisToken,
}) : null;

/**
 * Helper function to cache API responses or database queries.
 * @param key The cache key
 * @param fetcher The function to execute if cache miss
 * @param expirationInSeconds Time to live in seconds (default 1 hour)
 */
export async function getCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  expirationInSeconds: number = 3600
): Promise<T> {
  if (!redis) {
    // If Redis is not configured, just return the data directly
    return fetcher();
  }

  try {
    const cached = await redis.get<T>(key);
    if (cached) {
      return cached;
    }

    const data = await fetcher();
    await redis.set(key, data, { ex: expirationInSeconds });
    return data;
  } catch (error) {
    console.error('Redis cache error:', error);
    // Fallback to fetcher on error
    return fetcher();
  }
}
