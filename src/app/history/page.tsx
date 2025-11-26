import { getContentBySlug } from '@/lib/markdown';
import Link from 'next/link';

export const metadata = {
  title: 'History - 379th Bomb Group Memorial',
  description: 'The complete history of the 379th Bombardment Group (Heavy) from activation in 1942 to deactivation in 1945.',
};

export default async function HistoryPage() {
  const content = await getContentBySlug('history', 'index');

  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">1942-1945</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            History of the 379th
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 shadow-md">
              {content ? (
                <article
                  className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#1e3a5f] prose-a:text-[#1e3a5f] prose-strong:text-[#1e3a5f]"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              ) : (
                <p>Content loading...</p>
              )}
            </div>

            {/* Quick Links */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Link
                href="/history/grand-slam"
                className="bg-[#1e3a5f] text-[#f5f5dc] p-6 hover:bg-[#2c5282] transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  The Grand Slam
                </h3>
                <p className="text-[#e8e8d0] text-sm">
                  Learn about the unprecedented achievement of April 1944.
                </p>
              </Link>
              <Link
                href="/history/kimbolton"
                className="bg-[#4a5320] text-[#f5f5dc] p-6 hover:bg-[#5a6330] transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Kimbolton Airfield
                </h3>
                <p className="text-[#e8e8d0] text-sm">
                  Station 117 - home of the 379th in England.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
