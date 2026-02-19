export default function CreateArticlePage() {
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-xl font-bold md">記事新規作成</h2>
      <form action="" className="space-y-4 p-6 rounded shadow-lg">
        <div>
          <label htmlFor="url" className="block text-sm text-gray-700">
            URL
          </label>
          <input
            type="text"
            id="url"
            className="py-1 px-3 border w-full rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm text-gray-700">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            className="py-1 px-3 border w-full rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm text-gray-700">
            本文
          </label>
          <textarea
            id="content"
            className="py-1 px-3 border w-full rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white text-sm py-2 px-4 font-medium rounded-md shadow hover:opacity-75"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
