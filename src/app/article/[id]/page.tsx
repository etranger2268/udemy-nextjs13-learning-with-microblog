import Image from 'next/image';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import { getArticle } from '@/util/getArticle';
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
  const article = await getArticle(id);
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
    </div>
  );
}
