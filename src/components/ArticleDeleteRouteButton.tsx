'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { URL_NOT_FOUND } from '@/constants/constants';

interface ArticleDeleteRouteButtonProps {
  id: string;
}

const ArticleDeleteRouteButton = ({ id }: ArticleDeleteRouteButtonProps) => {
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

    startTransition(async () => {
      try {
        const res = await fetch(`${apiURL}/api/posts/${id}`, {
          method: 'DELETE',
        });

        if (!res.ok) {
          const errorData = await res.json();
          setError(errorData.error || '削除に失敗しました');
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
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2">
      <div>
        <button
          type="submit"
          disabled={isPending}
          className={`py-1 px-3 text-white rounded-md bg-red-500 font-medium transition-all duration-300 ${isPending ? 'disabled:cursor-not-allowed bg-red-100' : 'hover:opacity-75'}`}
        >
          Delete
        </button>
      </div>
      <div>{error && <p className="text-sm font-medium text-red-500">{error}</p>}</div>
    </form>
  );
};

export default ArticleDeleteRouteButton;
