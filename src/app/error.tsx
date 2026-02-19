'use client';

interface ErrorPageProps {
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  const handleReset = () => reset();

  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <div className="space-y-8 text-center">
        <h2 className="text-2xl text-red-500 font-bold">Somthing went wrong</h2>
        <button
          type="button"
          onClick={handleReset}
          className="py-2 px-4 text-white text-sm font-medium bg-gray-500 rounded-md transition-opacity duration-300 hover:opacity-75"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
