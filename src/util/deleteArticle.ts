'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { DELETE_ARTICLE_ERROR, URL_NOT_FOUND } from '@/constants/constants';

interface State {
  error: string | null;
}

export const deleteArticle = async (id: string, _prevState: State) => {
  const apiURL = process.env.API_URL;
  if (!apiURL) {
    return { error: URL_NOT_FOUND };
  }

  try {
    const res = await fetch(`${apiURL}/articles/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      return { error: DELETE_ARTICLE_ERROR };
    }
    revalidatePath('/');
  } catch (_err) {
    return { error: DELETE_ARTICLE_ERROR };
  }
  redirect('/');
};
