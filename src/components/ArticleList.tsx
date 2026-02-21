import { Suspense } from 'react';
import ArticleCard from '@/components/ArticleCard';
import Loading from '@/components/Loading';
import { getAllArticles } from '@/util/getAllArticles';

const ArticleList = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ArticleListContent />
    </Suspense>
  );
};

async function ArticleListContent() {
  const articles = await getAllArticles();

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
