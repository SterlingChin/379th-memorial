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
