'use cache';

import { API_ERROR, URL_NOT_FOUND } from '@/constants/constants';
import type { UnsplashPhoto } from '@/types/unsplashPhoto';

export const getUnsplashPhoto = async (): Promise<UnsplashPhoto> => {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!apiKey) {
    throw new Error(URL_NOT_FOUND);
  }

  const res = await fetch(
    `https://api.unsplash.com/photos/orange-tabby-cat-on-brown-parquet-floor-LEpfefQf4rU?client_id=${apiKey}`,
  );
  if (!res.ok) {
    throw new Error(API_ERROR);
  }
  return res.json();
};
