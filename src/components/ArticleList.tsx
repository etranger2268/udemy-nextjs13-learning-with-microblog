import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { Fragment } from 'react/jsx-runtime';
import Loading from '@/components/Loading';
import { getAllArticles } from '@/util/getAllArticles';
import { getUnsplashPhoto } from '@/util/getUnsplashPhoto';

const ArticleList = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ArticleListContent />
    </Suspense>
  );
};

async function ArticleListContent() {
  const [photo, articles] = await Promise.all([getUnsplashPhoto(), getAllArticles()]);

  if (!articles) {
    return <p>Articles not found</p>;
  }

  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        {articles.map((article) => (
          <Fragment key={article.id}>
            <Link href={`/article/${article.id}`} className="hover:opacity-75">
              <Image
                src={photo.urls.regular}
                alt={photo.description}
                className="w-full"
                width={540}
                height={960}
              />
            </Link>
            <div className="bg-white">
              <div className="gap-3 flex flex-col justify-start p-6">
                <span className="text-gray-900 font-bold">Technology</span>
                <h3 className="text-gray-900 text-3xl font-bold hover:text-gray-700">
                  {article.title}
                </h3>
                <small className="text-sm">Published on {article.createdAt}</small>
                <p className="text-gray-900 text-sm">{article.content}</p>
                <Link href="#" className="text-gray-900 hover:text-sky-500">
                  続きを読む
                </Link>
              </div>
            </div>
          </Fragment>
        ))}
      </article>
    </div>
  );
}

export default ArticleList;
