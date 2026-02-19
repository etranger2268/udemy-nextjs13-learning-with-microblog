import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/type/article';
import { getUnsplashPhoto } from '@/util/getUnsplashPhoto';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <div className="bg-white">
        <ArticleCardContent article={article} />
        <div className="gap-3 flex flex-col justify-start p-6">
          <span className="text-gray-900 font-bold">Technology</span>
          <h3 className="text-gray-900 text-3xl font-bold hover:text-gray-700">{article.title}</h3>
          <small className="text-sm">Published on {article.createdAt}</small>
          <p className="text-gray-900 text-sm">
            {article.content.length > 70 ? `${article.content.slice(0, 70)}...` : article.content}
          </p>
          <Link href="#" className="text-gray-900 hover:text-sky-500">
            続きを読む
          </Link>
        </div>
      </div>
    </div>
  );
};

async function ArticleCardContent({ article }: ArticleCardProps) {
  const photo = await getUnsplashPhoto();
  return (
    <Link href={`/article/${article.id}`} className="hover:opacity-75">
      <Image
        src={photo.urls.regular}
        alt={photo.description}
        className="w-full"
        width={540}
        height={960}
      />
    </Link>
  );
}

export default ArticleCard;
