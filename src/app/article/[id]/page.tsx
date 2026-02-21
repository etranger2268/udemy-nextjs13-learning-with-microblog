import Image from 'next/image';
import { Suspense } from 'react';
import ArticleDeleteButton from '@/components/ArticleDeleteButton';
import Loading from '@/components/Loading';
import { URL_NOT_FOUND } from '@/constants/constants';
import type { Post } from '@/types/post';
// import { getArticle } from '@/util/getArticle';
import { getUnsplashPhoto } from '@/util/getUnsplashPhoto';

interface ArticleDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  return (
    <Suspense fallback={<Loading />}>
      <ArticleDetailPageContent params={params} />
    </Suspense>
  );
}

async function ArticleDetailPageContent({ params }: ArticleDetailPageProps) {
  const { id } = await params;

  // json-server
  // const article = await getArticle(id);

  // supabase
  const apiURL = process.env.SUPABASE_API_URL;
  if (!apiURL) {
    throw new Error(URL_NOT_FOUND);
  }

  const res = await fetch(`${apiURL}/api/posts/${id}`);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || '予期せぬエラーが発生しました');
  }

  const article = (await res.json()) as Post;

  const photo = await getUnsplashPhoto();
  return (
    <div className="flex flex-col justify-center items-center max-w-3xl mx-auto space-y-4 my-8">
      <Image
        src={photo.urls.regular}
        alt={photo.description}
        width={540}
        height={960}
        className="w-full h-auto"
      />
      <h2 className="text-xl text-gray-900 font-bold">{article.title}</h2>
      <div className="w-full">
        <p>{article.content}</p>
      </div>
      <div className="border-t border-gray-300 w-full pt-4">
        <ArticleDeleteButton id={id} />
      </div>
    </div>
  );
}
