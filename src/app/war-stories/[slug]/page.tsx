import { getContentBySlug, getContentSlugs } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getContentSlugs('war-stories');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const story = await getContentBySlug('war-stories', slug);

  if (!story) {
    return { title: 'Story Not Found' };
  }

  return {
    title: `${story.meta.title} - 379th Bomb Group Memorial`,
    description: `War story by ${story.meta.author || 'a 379th veteran'}`,
  };
}

export default async function WarStoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = await getContentBySlug('war-stories', slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/war-stories"
            className="text-[#d4a017] hover:text-[#e8b923] text-sm mb-4 inline-block"
          >
            ← Back to War Stories
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            {story.meta.title}
          </h1>
          {story.meta.author && (
            <p className="mt-4 text-[#e8e8d0]">
              by {story.meta.author}
              {story.meta.rank && `, ${story.meta.rank}`}
              {story.meta.squadron && ` • ${story.meta.squadron} Squadron`}
            </p>
          )}
        </div>
      </section>

      {/* Audio Narration */}
      {story.meta.audio && (
        <section className="bg-[#e8e8d0] border-b border-[#d4d4b8]">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#d4a017]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                    Listen to This Story
                  </h2>
                  <p className="text-xs text-[#666]">Audio narration available</p>
                </div>
              </div>
              <audio
                controls
                className="w-full h-12"
                preload="metadata"
              >
                <source src={story.meta.audio as string} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-xs text-[#888] mt-2 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
                AI-generated narration created using ElevenLabs. Original text by {story.meta.author || 'the author'}.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="bg-white p-8 md:p-12 shadow-md">
              <div
                className="prose prose-lg max-w-none prose-p:text-[#333] prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: story.content }}
              />
            </article>

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              <Link
                href="/war-stories"
                className="text-[#1e3a5f] hover:text-[#d4a017] font-medium"
              >
                ← More War Stories
              </Link>
              <Link
                href="/connect"
                className="text-[#1e3a5f] hover:text-[#d4a017] font-medium"
              >
                Share Your Story →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
