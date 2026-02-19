'use server';

import { CREATE_ARTICLE_ERROR, URL_NOT_FOUND } from '@/constants/constants';
import { type Article, articleFormSchema } from '@/schemas/article';

export const createArticle = async (formData: FormData): Promise<Article> => {
  const apiURL = process.env.API_URL;
  if (!apiURL) {
    throw new Error(URL_NOT_FOUND);
  }

  const result = articleFormSchema.safeParse(formData);
  if (!result.success) {
    console.error(result.error);
  }

  const data = result.data;

  const id = data?.id;
  const title = data?.title;
  const content = data?.content;

  const currentDataTime = new Date().toISOString();

  const res = await fetch(`${apiURL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      title,
      content,
      createdAt: currentDataTime,
    }),
  });

  if (!res.ok) {
    throw new Error(CREATE_ARTICLE_ERROR);
  }

  return res.json();
};
