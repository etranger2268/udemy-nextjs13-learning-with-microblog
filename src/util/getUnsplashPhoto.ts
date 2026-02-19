'use cache';

import type { UnsplashPhoto } from '@/type/unsplashPhoto';

export const getUnsplashPhoto = async (): Promise<UnsplashPhoto> => {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!apiKey) {
    throw new Error('API Key is missing');
  }

  const res = await fetch(
    `https://api.unsplash.com/photos/orange-tabby-cat-on-brown-parquet-floor-LEpfefQf4rU?client_id=${apiKey}`,
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
