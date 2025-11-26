import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1e3a5f] text-[#f5f5dc]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url(/images/planes700.jpg)' }}
        />
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-[#d4a017] uppercase tracking-widest mb-4 text-sm">
              Mighty 8th Air Force • 1st Bombardment Division • 41st Combat Wing
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif', color: '#f5f5dc' }}>
              379th Bombardment Group
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-[#e8e8d0]">
              &ldquo;The Grand Slam Group&rdquo;
            </p>
            <p className="text-lg mb-8 text-[#e8e8d0] leading-relaxed">
              From May 1943 to April 1945, the men of the 379th flew B-17 Flying Fortresses
              from Kimbolton, England. They flew more sorties and dropped more bombs than
              any other group in the 8th Air Force.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/history"
                className="bg-[#d4a017] hover:bg-[#e8b923] text-[#1a1a1a] px-8 py-3 font-semibold transition-colors text-center"
              >
                Explore Our History
              </Link>
              <Link
                href="/crew"
                className="border-2 border-[#f5f5dc] hover:bg-[#f5f5dc] hover:text-[#1e3a5f] px-8 py-3 font-semibold transition-colors text-center"
              >
                Search for Crew
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#4a5320] text-[#f5f5dc] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#d4a017]">330</p>
              <p className="text-sm uppercase tracking-wider mt-1">Combat Missions</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#d4a017]">10,492</p>
              <p className="text-sm uppercase tracking-wider mt-1">Sorties Flown</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#d4a017]">26,460</p>
              <p className="text-sm uppercase tracking-wider mt-1">Tons of Bombs</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#d4a017]">315</p>
              <p className="text-sm uppercase tracking-wider mt-1">Enemy Aircraft</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl md:text-4xl font-bold text-[#d4a017]">141</p>
              <p className="text-sm uppercase tracking-wider mt-1">B-17s Lost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Preserving Their Legacy
            </h2>
            <p className="text-lg text-[#1e3a5f] leading-relaxed mb-8">
              The 379th Bomb Group WWII Association was organized to perpetuate the history
              of the 379th Bomb Group (H), to remember and honor the memory of lost comrades,
              and to educate present and future generations. This site continues that mission.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 shadow-md">
                <div className="text-[#d4a017] mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>War Stories</h3>
                <p className="text-[#666] text-sm">
                  First-hand accounts from the men who flew the missions over Nazi-occupied Europe.
                </p>
                <Link href="/war-stories" className="text-[#1e3a5f] hover:text-[#d4a017] text-sm font-medium mt-4 inline-block">
                  Read their stories →
                </Link>
              </div>
              <div className="bg-white p-6 shadow-md">
                <div className="text-[#d4a017] mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>Crew Database</h3>
                <p className="text-[#666] text-sm">
                  Search for crew members by name, squadron, or position. Connect with other families.
                </p>
                <Link href="/crew" className="text-[#1e3a5f] hover:text-[#d4a017] text-sm font-medium mt-4 inline-block">
                  Search the database →
                </Link>
              </div>
              <div className="bg-white p-6 shadow-md">
                <div className="text-[#d4a017] mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>Photo Archive</h3>
                <p className="text-[#666] text-sm">
                  Browse photographs of crews, aircraft, and life at Kimbolton airfield.
                </p>
                <Link href="/photos" className="text-[#1e3a5f] hover:text-[#d4a017] text-sm font-medium mt-4 inline-block">
                  View photos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Slam Section */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">May 1944</p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Georgia, serif', color: '#f5f5dc' }}>
                The Only &ldquo;Grand Slam&rdquo; in 8th Air Force History
              </h2>
            </div>
            <p className="text-lg text-center text-[#e8e8d0] leading-relaxed mb-8">
              In April 1944, the 379th achieved an unprecedented feat — first place in every
              category by which bomb groups were measured. No other group ever accomplished this.
            </p>
            <div className="grid md:grid-cols-5 gap-4 text-center text-sm">
              <div className="bg-[#2c5282] p-4">
                <p className="text-[#d4a017] font-semibold">#1</p>
                <p>Bombing Accuracy</p>
              </div>
              <div className="bg-[#2c5282] p-4">
                <p className="text-[#d4a017] font-semibold">#1</p>
                <p>Tonnage Dropped</p>
              </div>
              <div className="bg-[#2c5282] p-4">
                <p className="text-[#d4a017] font-semibold">#1</p>
                <p>Aircraft Attacking</p>
              </div>
              <div className="bg-[#2c5282] p-4">
                <p className="text-[#d4a017] font-semibold">#1</p>
                <p>Lowest Losses</p>
              </div>
              <div className="bg-[#2c5282] p-4">
                <p className="text-[#d4a017] font-semibold">#1</p>
                <p>Lowest Abort Rate</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/history/grand-slam"
                className="text-[#d4a017] hover:text-[#e8b923] font-medium"
              >
                Learn more about the Grand Slam →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Squadrons Section */}
      <section className="bg-[#e8e8d0] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            The Four Squadrons
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['524th', '525th', '526th', '527th'].map((squadron) => (
              <Link
                key={squadron}
                href={`/history/squadrons/${squadron.toLowerCase()}`}
                className="bg-white p-6 text-center shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                  <span className="text-[#d4a017] font-bold text-lg">{squadron.slice(0, 3)}</span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                  {squadron} Bomb Squadron
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#f5f5dc' }}>
            Help Us Preserve This History
          </h2>
          <p className="text-lg text-[#e8e8d0] mb-8 max-w-2xl mx-auto">
            Do you have photos, documents, or stories from a 379th veteran?
            We&apos;re collecting materials to ensure these stories are never forgotten.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-[#d4a017] hover:bg-[#e8b923] text-[#1a1a1a] px-8 py-3 font-semibold transition-colors"
          >
            Share Your Story
          </Link>
        </div>
      </section>
    </div>
  );
}
