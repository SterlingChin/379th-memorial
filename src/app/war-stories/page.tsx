import { getAllContent } from '@/lib/markdown';
import Link from 'next/link';

export const metadata = {
  title: 'War Stories - 379th Bomb Group Memorial',
  description: 'First-hand accounts from the men who flew combat missions with the 379th Bomb Group.',
};

export default async function WarStoriesPage() {
  const stories = await getAllContent('war-stories');

  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">In Their Own Words</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            War Stories
          </h1>
          <p className="mt-4 text-[#e8e8d0] max-w-2xl">
            First-hand accounts from the men who flew combat missions over Nazi-occupied Europe.
          </p>
        </div>
      </section>

      {/* Stories List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {stories.length > 0 ? (
              <div className="space-y-6">
                {stories.map((story) => (
                  <Link
                    key={story.slug}
                    href={`/war-stories/${story.slug}`}
                    className="block bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-semibold text-[#4b3621] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                          {story.meta.title}
                        </h2>
                        {story.meta.author && (
                          <p className="text-[#666] text-sm">
                            by {story.meta.author}
                            {story.meta.squadron && ` • ${story.meta.squadron} Squadron`}
                          </p>
                        )}
                      </div>
                      <span className="text-[#d4a017]">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 text-center shadow-md">
                <p className="text-[#666]">War stories are being migrated. Check back soon.</p>
              </div>
            )}

            {/* Call to Action */}
            <div className="mt-12 bg-[#4b3621] text-[#f5f5dc] p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Do You Have a Story to Share?
              </h3>
              <p className="text-[#e8e8d0] mb-6">
                If your family member served with the 379th, we&apos;d love to hear their story.
              </p>
              <Link
                href="/connect"
                className="inline-block bg-[#d4a017] hover:bg-[#e8b923] text-[#1a1a1a] px-6 py-3 font-semibold transition-colors"
              >
                Submit a Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
