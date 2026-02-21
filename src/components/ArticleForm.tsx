'use client';

import { useActionState, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { createArticle } from '@/util/createArticle';

const ArticleForm = () => {
  const initialState: { error: string | null } = { error: '' };
  const [id, setId] = useState<string>('');

  useEffect(() => setId(uuid()), []);

  const createArticleWithId = createArticle.bind(null, id);

  const [state, formAction, isPending] = useActionState(createArticleWithId, initialState);

  return (
    <form action={formAction} className="space-y-4 p-6 rounded shadow-lg">
      <div className="h-4">
        {state.error && <p className="text-red-500 text-sm font-medium">{state.error}</p>}
      </div>
      <div>
        <label htmlFor="title" className="block text-sm text-gray-700">
          タイトル
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="py-1 px-3 border w-full rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm text-gray-700">
          本文
        </label>
        <textarea
          id="content"
          name="content"
          className="py-1 px-3 border w-full rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isPending}
          className={`bg-blue-500 text-white text-sm py-2 px-4 font-medium rounded-md shadow ${isPending ? 'disabled:opacity-50 disabled:cursor-not-allowed' : 'hover:opacity-75'}`}
        >
          {isPending ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ArticleForm;
