import { API_ERROR, URL_NOT_FOUND } from '@/constants/constants';
import type { Article } from '@/schemas/article';

export const getAllArticles = async (): Promise<Article[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const apiURL = process.env.API_URL;
  if (!apiURL) {
    throw new Error(URL_NOT_FOUND);
  }
  const res = await fetch(`${apiURL}/articles`);
  if (!res.ok) {
    throw new Error(API_ERROR);
  }
  return res.json();
};
