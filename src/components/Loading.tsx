const Loading = () => {
  return (
    <div className="h-[90vh] flex gap-4 justify-center items-center">
      <div className="size-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent" />
      <p className="text-green-500 text-sm font-medium">Loading...</p>
    </div>
  );
};

export default Loading;
