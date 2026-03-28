export default function MemePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6 text-primary dark:text-gray-100">Apologetics Memes</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        Coming soon: A collection of memes for a lighter take on structured apologetics.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 opacity-30 select-none">
        <div className="bg-gray-200 dark:bg-gray-800 h-64 rounded-xl flex items-center justify-center">Meme Placeholder</div>
        <div className="bg-gray-200 dark:bg-gray-800 h-64 rounded-xl flex items-center justify-center">Meme Placeholder</div>
      </div>
    </div>
  );
}
