import type { Article } from '@/type/article';

export const getAllArticles = async (): Promise<Article[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const apiURL = process.env.API_URL;
  if (!apiURL) {
    throw new Error('API URL is missing');
  }
  const res = await fetch(`${apiURL}/articles`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
