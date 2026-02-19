import { notFound } from 'next/navigation';
import { API_ERROR, URL_NOT_FOUND } from '@/constants/constants';
import type { Article } from '@/type/article';

export const getArticle = async (id: string): Promise<Article> => {
  const apiURL = process.env.API_URL;
  if (!apiURL) {
    throw new Error(URL_NOT_FOUND);
  }
  const res = await fetch(`${apiURL}/articles/${id}`);
  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(API_ERROR);
  }
  return res.json();
};
