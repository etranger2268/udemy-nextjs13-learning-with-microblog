import Image from 'next/image';
import Link from 'next/link';
import { getUnsplashPhoto } from '@/util/getUnsplashPhoto';

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <ArticleListContent />
        </Link>
        <div className="bg-white">
          <div className="gap-3 flex flex-col justify-start p-6">
            <Link href="#" className="text-gray-900 font-bold">
              Technology
            </Link>
            <Link href="#" className="text-gray-900 text-3xl font-bold hover:text-gray-700">
              Next.jsの勉強中
            </Link>
            <p className="text-sm">Published on 2026/02/19</p>
            <Link href="#" className="text-gray-900 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci erat, fermentum
              et ante ac, tempus finibus elit. Fusce volutpat iaculis mauris, nec varius felis
              elementum ac. In quis felis.
            </Link>
            <Link href="#" className="text-gray-900 hover:text-sky-500">
              続きを読む
            </Link>
          </div>
        </div>
      </article>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <ArticleListContent />
        </Link>
        <div className="bg-white">
          <div className="gap-3 flex flex-col justify-start p-6">
            <Link href="#" className="text-gray-900 font-bold">
              Technology
            </Link>
            <Link href="#" className="text-gray-900 text-3xl font-bold hover:text-gray-700">
              Next.jsの勉強中
            </Link>
            <p className="text-sm">Published on 2026/02/19</p>
            <Link href="#" className="text-gray-900 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci erat, fermentum
              et ante ac, tempus finibus elit. Fusce volutpat iaculis mauris, nec varius felis
              elementum ac. In quis felis.
            </Link>
            <Link href="#" className="text-gray-900 hover:text-sky-500">
              続きを読む
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

async function ArticleListContent() {
  const photo = await getUnsplashPhoto();

  return (
    <Image
      src={photo.urls.regular}
      alt={photo.description}
      className="w-full"
      width={540}
      height={960}
    />
  );
}

export default ArticleList;
