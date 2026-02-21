'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { CREATE_ARTICLE_ERROR, SCHEMAS_ERROR, URL_NOT_FOUND } from '@/constants/constants';
import { articleFormSchema } from '@/schemas/article';

interface State {
  error: string | null;
}

export const createArticle = async (
  id: string,
  _prevState: State,
  formData: FormData,
): Promise<State> => {
  const apiURL = process.env.API_URL;
  if (!apiURL) {
    return { error: URL_NOT_FOUND };
  }

  const validation = articleFormSchema.safeParse({
    id: formData.get('id'),
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!validation.success) {
    return { error: SCHEMAS_ERROR };
  }

  const { title, content } = validation.data;
  const currentDataTime = new Date();
  const createdAt = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(currentDataTime);

  try {
    const res = await fetch(`${apiURL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title,
        content,
        createdAt,
      }),
    });

    if (!res.ok) {
      return { error: CREATE_ARTICLE_ERROR };
    }

    revalidatePath('/');
  } catch (_err) {
    return { error: CREATE_ARTICLE_ERROR };
  }

  redirect('/');
};
