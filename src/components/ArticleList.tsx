import { Suspense } from 'react';
import ArticleCard from '@/components/ArticleCard';
import Loading from '@/components/Loading';
import { URL_NOT_FOUND } from '@/constants/constants';
import type { Post } from '@/types/post';

// import { getAllArticles } from '@/util/getAllArticles';

const ArticleList = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ArticleListContent />
    </Suspense>
  );
};

async function ArticleListContent() {
  // json-server
  // const articles = await getAllArticles();

  // supabase
  const apiURL = process.env.SUPABASE_API_URL;
  if (!apiURL) {
    throw new Error(URL_NOT_FOUND);
  }
  const res = await fetch(`${apiURL}/api/posts`);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || '予期せぬエラーが発生しました');
  }

  const articles = (await res.json()) as Post[];
  if (!articles) {
    return <p>Articles not found</p>;
  }

  return (
    <div>
      <article className="my-4 flex flex-col">
        <div className="space-y-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </article>
    </div>
  );
}

export default ArticleList;
