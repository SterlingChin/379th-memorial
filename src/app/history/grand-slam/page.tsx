import { getContentBySlug } from '@/lib/markdown';
import Link from 'next/link';

export const metadata = {
  title: 'The Grand Slam - 379th Bomb Group Memorial',
  description: 'The unprecedented achievement of April 1944 that made the 379th the only bomb group in 8th Air Force history to finish first in all five operational categories.',
};

export default async function GrandSlamPage() {
  const content = await getContentBySlug('history', 'grand-slam');

  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">April 1944</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            The Grand Slam
          </h1>
          <p className="mt-4 text-xl text-[#e8e8d0] max-w-2xl">
            The only bomb group in 8th Air Force history to finish first in all five operational categories.
          </p>
        </div>
      </section>

      {/* Five Categories Visual */}
      <section className="bg-[#2c5282] text-[#f5f5dc] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm">
            <div className="bg-[#1e3a5f] p-4">
              <p className="text-[#d4a017] font-bold text-2xl">#1</p>
              <p className="mt-1">Bombing Accuracy</p>
            </div>
            <div className="bg-[#1e3a5f] p-4">
              <p className="text-[#d4a017] font-bold text-2xl">#1</p>
              <p className="mt-1">Tonnage Dropped</p>
            </div>
            <div className="bg-[#1e3a5f] p-4">
              <p className="text-[#d4a017] font-bold text-2xl">#1</p>
              <p className="mt-1">Aircraft Attacking</p>
            </div>
            <div className="bg-[#1e3a5f] p-4">
              <p className="text-[#d4a017] font-bold text-2xl">#1</p>
              <p className="mt-1">Lowest Losses</p>
            </div>
            <div className="bg-[#1e3a5f] p-4 col-span-2 md:col-span-1">
              <p className="text-[#d4a017] font-bold text-2xl">#1</p>
              <p className="mt-1">Lowest Abort Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 shadow-md">
              {content ? (
                <article
                  className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#1e3a5f] prose-a:text-[#1e3a5f] prose-strong:text-[#1e3a5f] prose-table:text-sm"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              ) : (
                <p>Content loading...</p>
              )}
            </div>

            {/* Navigation */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
              <Link
                href="/history"
                className="bg-[#4a5320] text-[#f5f5dc] px-6 py-3 hover:bg-[#5a6330] transition-colors text-center"
              >
                &larr; Back to History
              </Link>
              <Link
                href="/missions"
                className="bg-[#1e3a5f] text-[#f5f5dc] px-6 py-3 hover:bg-[#2c5282] transition-colors text-center"
              >
                View All Missions &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
