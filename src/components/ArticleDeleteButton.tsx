'use client';

import { useActionState } from 'react';
import { deleteArticle } from '@/util/deleteArticle';

interface ArticleDeleteButtonProps {
  id: string;
}

const ArticleDeleteButton = ({ id }: ArticleDeleteButtonProps) => {
  const initialState: { error: string | null } = { error: null };
  const deleteArticleWithId = deleteArticle.bind(null, id);
  const [state, formAction, isPending] = useActionState(deleteArticleWithId, initialState);
  return (
    <form action={formAction} className="flex flex-col justify-center items-center gap-2">
      <div>
        <button
          type="submit"
          disabled={isPending}
          className={`py-1 px-3 text-white rounded-md bg-red-500 font-medium transition-all duration-300 ${isPending ? 'disabled:cursor-not-allowed bg-red-100' : 'hover:opacity-75'}`}
        >
          Delete
        </button>
      </div>
      <div>{state.error && <p className="text-sm font-medium text-red-500">{state.error}</p>}</div>
    </form>
  );
};

export default ArticleDeleteButton;
