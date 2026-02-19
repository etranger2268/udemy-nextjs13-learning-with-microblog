import type { Article } from '@/type/article';

export const getAllArticles = async (): Promise<Article[]> => {
  const apiURL = process.env.API_URL;
  console.log(apiURL);
  if (!apiURL) {
    throw new Error('API URL is missing');
  }
  const res = await fetch(`${apiURL}/articles`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
