import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-10 border-b border-gray-300">
      <div>
        <h1 className="text-2xl font-bold">
          <Link href="/">Next.js 13 Blog</Link>
        </h1>
      </div>
      <div>
        <nav className="text-sm font-medium">
          <Link href="/article/new" className="hover:underline hover:text-sky-500">
            New Post
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
