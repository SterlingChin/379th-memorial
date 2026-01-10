import { getContentBySlug } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const squadronData: Record<string, { name: string; code: string; fullName: string }> = {
  '524th': { name: '524th', code: 'WA', fullName: '524th Bombardment Squadron' },
  '525th': { name: '525th', code: 'FR', fullName: '525th Bombardment Squadron' },
  '526th': { name: '526th', code: 'LF', fullName: '526th Bombardment Squadron' },
  '527th': { name: '527th', code: 'FO', fullName: '527th Bombardment Squadron' },
};

export async function generateStaticParams() {
  return Object.keys(squadronData).map((squadron) => ({
    squadron,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ squadron: string }> }) {
  const { squadron } = await params;
  const data = squadronData[squadron];

  if (!data) {
    return { title: 'Squadron Not Found' };
  }

  return {
    title: `${data.fullName} - 379th Bomb Group Memorial`,
    description: `History of the ${data.fullName} (${data.code}), part of the 379th Bombardment Group during World War II.`,
  };
}

export default async function SquadronPage({ params }: { params: Promise<{ squadron: string }> }) {
  const { squadron } = await params;
  const data = squadronData[squadron];

  if (!data) {
    notFound();
  }

  const content = await getContentBySlug('history/squadrons', squadron);

  // Get other squadrons for navigation
  const otherSquadrons = Object.entries(squadronData)
    .filter(([key]) => key !== squadron)
    .map(([key, value]) => ({ id: key, ...value }));

  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">379th Bomb Group</p>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-[#2c5282] rounded-full flex items-center justify-center flex-shrink-0 border-4 border-[#d4a017]">
              <span className="text-[#d4a017] font-bold text-2xl">{data.code}</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                {data.fullName}
              </h1>
              <p className="mt-2 text-[#e8e8d0]">
                Squadron Code: {data.code} &bull; Triangle K Group
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-[#2c5282] text-[#f5f5dc] py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="bg-[#1e3a5f] p-4">
              <p className="text-[#d4a017] font-bold">Activated</p>
              <p className="mt-1">Nov 26, 1942</p>
            </div>
            <div className="bg-[#1e3a5f] p-4">
              <p className="text-[#d4a017] font-bold">First Mission</p>
              <p className="mt-1">May 29, 1943</p>
            </div>
            <div className="bg-[#1e3a5f] p-4">
              <p className="text-[#d4a017] font-bold">Last Mission</p>
              <p className="mt-1">Apr 25, 1945</p>
            </div>
            <div className="bg-[#1e3a5f] p-4">
              <p className="text-[#d4a017] font-bold">Base</p>
              <p className="mt-1">RAF Kimbolton</p>
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
                  className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#1e3a5f] prose-a:text-[#1e3a5f] prose-strong:text-[#1e3a5f]"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              ) : (
                <p className="text-[#666]">Squadron history content is being compiled...</p>
              )}
            </div>

            {/* Other Squadrons */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                Other Squadrons
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {otherSquadrons.map((sq) => (
                  <Link
                    key={sq.id}
                    href={`/history/squadrons/${sq.id}`}
                    className="bg-white p-4 shadow-md hover:shadow-lg transition-shadow flex items-center gap-3"
                  >
                    <div className="w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#d4a017] font-bold text-sm">{sq.code}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1e3a5f]">{sq.name}</p>
                      <p className="text-sm text-[#666]">View history</p>
                    </div>
                  </Link>
                ))}
              </div>
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
                href="/crew"
                className="bg-[#1e3a5f] text-[#f5f5dc] px-6 py-3 hover:bg-[#2c5282] transition-colors text-center"
              >
                View The Men &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
