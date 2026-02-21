'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { v4 as uuid } from 'uuid';
import { URL_NOT_FOUND } from '@/constants/constants';

const ArticleFormRoute = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const apiURL = process.env.NEXT_PUBLIC_SUPABASE_API_URL;
  if (!apiURL) {
    throw new Error(URL_NOT_FOUND);
  }

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const id = uuid();

    const data = {
      id,
      title: formData.get('title'),
      content: formData.get('content'),
    };

    startTransition(async () => {
      try {
        const res = await fetch(`${apiURL}/api/posts/${id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          const errorData = await res.json();
          setError(errorData.error || '投稿に失敗しました');
          return;
        }

        router.push('/');
        router.refresh();
      } catch (err) {
        if (err instanceof Error) {
          setError('通信エラーが発生しました。ネットワーク状況を確認してください。');
        } else {
          setError('予期せぬエラーが発生しました。');
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded shadow-lg">
      <div className="h-4">
        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
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

export default ArticleFormRoute;
