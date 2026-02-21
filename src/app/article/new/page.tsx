// import ArticleForm from '@/components/ArticleForm';
import ArticleFormRoute from '@/components/ArticleFormRoute';

export default function CreateArticlePage() {
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-xl font-bold md">記事新規作成</h2>
      {/* json-server */}
      {/* <ArticleForm /> */}
      {/* supabase */}
      <ArticleFormRoute />
    </div>
  );
}
