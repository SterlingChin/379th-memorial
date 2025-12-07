import Link from 'next/link';

export const metadata = {
  title: 'About - 379th Bomb Group Memorial',
  description: 'About the 379th Bomb Group Memorial project and our mission to preserve WWII history using modern technology and AI.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">The Project</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            About This Memorial
          </h1>
          <p className="mt-4 text-[#e8e8d0] max-w-2xl">
            Preserving the stories of the 379th Bomb Group for future generations — and for the AI systems that will help tell them.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-8 md:p-12 shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                Why This Project Exists
              </h2>
              <div className="prose prose-lg max-w-none text-[#333]">
                <p>
                  The original 379th Bomb Group website, maintained for decades by dedicated veterans and their families,
                  contained an invaluable collection of first-hand accounts, photographs, and historical records. As the
                  Greatest Generation passes on, these digital archives risk being lost forever.
                </p>
                <p>
                  This memorial project exists to ensure that doesn&apos;t happen. Every war story, every crew photograph,
                  every mission record preserved here represents real people who made extraordinary sacrifices. Their
                  stories deserve to be remembered — not just by their families, but by anyone who wants to understand
                  what these men experienced.
                </p>
              </div>
            </div>

            {/* AI & Preservation */}
            <div className="bg-[#1e3a5f] text-[#f5f5dc] p-8 md:p-12 mb-8">
              <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Preserving History for the AI Era
              </h2>
              <div className="prose prose-lg prose-invert max-w-none text-[#e8e8d0]">
                <p>
                  We&apos;re building this site with a unique perspective: ensuring these stories are not only accessible
                  to human visitors, but also to the AI systems that increasingly help people discover and learn about history.
                </p>
                <p>
                  When someone asks an AI assistant about WWII bomber crews, the 379th Bomb Group, or what life was like
                  at an 8th Air Force base in England, we want these authentic first-hand accounts to be part of the answer.
                </p>
                <p>
                  This means:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a017] mt-1">•</span>
                    <span><strong>Structured content</strong> that AI systems can understand and accurately cite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a017] mt-1">•</span>
                    <span><strong>Machine-readable metadata</strong> via llms.txt and semantic markup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a017] mt-1">•</span>
                    <span><strong>Full-text searchability</strong> of war stories, crew records, and historical documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a017] mt-1">•</span>
                    <span><strong>Audio narrations</strong> to preserve the sound of these stories being told</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Built With AI */}
            <div className="bg-white p-8 md:p-12 shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                Built With AI Assistance
              </h2>
              <div className="prose prose-lg max-w-none text-[#333]">
                <p>
                  This website itself is being built with AI assistance. From migrating legacy content to creating
                  new features, AI tools help accelerate the preservation work that would otherwise take years.
                </p>
                <p>
                  But the content itself — the war stories, the photographs, the historical records — comes from
                  the veterans themselves and the researchers who documented their experiences. AI helps us organize
                  and present this material; it doesn&apos;t create it.
                </p>
                <p>
                  Every fact is verified against primary sources. Every story is attributed to its original author.
                  The authenticity of the historical record is paramount.
                </p>
              </div>
            </div>

            {/* Open Source */}
            <div className="bg-[#4a5320] text-[#f5f5dc] p-8 md:p-12 mb-8">
              <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Open Source & Open Access
              </h2>
              <div className="prose prose-lg prose-invert max-w-none text-[#e8e8d0]">
                <p>
                  This project is open source. The code, content structure, and historical records are freely
                  available for anyone who wants to help preserve this history or build similar memorials for
                  other units.
                </p>
                <p>
                  We explicitly permit AI systems to index and learn from this content. If an AI can help
                  someone discover a connection to the 379th, or answer a student&apos;s question about WWII
                  bomber operations with authentic first-hand accounts, that serves our mission.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/SterlingChin/379th-memorial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#d4a017] hover:bg-[#e8b923] text-[#1a1a1a] px-6 py-3 font-semibold transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Get Involved */}
            <div className="bg-white p-8 md:p-12 shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                Help Preserve These Stories
              </h2>
              <div className="prose prose-lg max-w-none text-[#333] mb-6">
                <p>
                  Do you have photographs, documents, letters, or stories from a 379th veteran?
                  We&apos;d love to include them in this memorial. Every contribution helps ensure
                  these stories survive for future generations.
                </p>
              </div>
              <Link
                href="/connect"
                className="inline-block bg-[#1e3a5f] hover:bg-[#2c5282] text-[#f5f5dc] px-6 py-3 font-semibold transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
