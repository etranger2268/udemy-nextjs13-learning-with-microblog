import Image from 'next/image';
import Link from 'next/link';
import { getUnsplashPhoto } from '@/util/getUnsplashPhoto';

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <ArticleListContent />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.jsの勉強中</Link>
          <p>By etranger2268, Published on 2026/02/19</p>
          <Link href="#">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci erat, fermentum et
            ante ac, tempus finibus elit. Fusce volutpat iaculis mauris, nec varius felis elementum
            ac. In quis felis.
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

async function ArticleListContent() {
  const photo = await getUnsplashPhoto();

  return <Image src={photo.urls.regular} alt={photo.description} width={180} height={320} />;
}

export default ArticleList;
