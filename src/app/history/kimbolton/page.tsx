import { getContentBySlug } from '@/lib/markdown';
import Link from 'next/link';

export const metadata = {
  title: 'Kimbolton Airfield - 379th Bomb Group Memorial',
  description: 'The history of RAF Kimbolton (Station 117), home of the 379th Bomb Group from May 1943 to July 1945.',
};

export default async function KimboltonPage() {
  const content = await getContentBySlug('history', 'kimbolton');

  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#4a5320] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">AAF Station 117</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Kimbolton Airfield
          </h1>
          <p className="mt-4 text-xl text-[#e8e8d0] max-w-2xl">
            Home of the 379th Bomb Group in England, May 1943 – July 1945.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-[#5a6330] text-[#f5f5dc] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="bg-[#4a5320] p-4">
              <p className="text-[#d4a017] font-bold text-2xl">6,000</p>
              <p className="mt-1">Personnel Assigned</p>
            </div>
            <div className="bg-[#4a5320] p-4">
              <p className="text-[#d4a017] font-bold text-2xl">4</p>
              <p className="mt-1">Squadrons</p>
            </div>
            <div className="bg-[#4a5320] p-4">
              <p className="text-[#d4a017] font-bold text-2xl">330</p>
              <p className="mt-1">Missions Flown</p>
            </div>
            <div className="bg-[#4a5320] p-4">
              <p className="text-[#d4a017] font-bold text-2xl">26</p>
              <p className="mt-1">Months Active</p>
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
                href="/memorials"
                className="bg-[#1e3a5f] text-[#f5f5dc] px-6 py-3 hover:bg-[#2c5282] transition-colors text-center"
              >
                View Memorials &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
