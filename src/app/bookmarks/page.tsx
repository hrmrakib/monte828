import { Bookmark } from "lucide-react";

export default function BookmarksPage() {
  return (
    <div className='container mx-auto px-4 py-8 md:py-16'>
      <div className='mb-8 flex items-center justify-center gap-2'>
        <Bookmark className='h-6 w-6 text-teal-700' />
        <h1 className='text-3xl font-bold text-teal-700 md:text-4xl'>
          Bookmarks
        </h1>
      </div>

      <div className='mx-auto max-w-3xl rounded-lg border bg-white p-8 shadow-sm'>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='mb-4 rounded-full bg-gray-100 p-6'>
            <Bookmark className='h-8 w-8 text-teal-700' />
          </div>
          <h2 className='mb-2 text-xl font-semibold'>No bookmarks yet</h2>
          <p className='mb-6 text-gray-500'>
            Save your favorite presentations, dashboards, and magazines for
            quick access.
          </p>
        </div>
      </div>
    </div>
  );
}
