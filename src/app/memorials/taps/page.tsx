import Link from 'next/link';
import tapsData from '@/data/taps.json';

export const metadata = {
  title: 'Taps - In Memoriam - 379th Bomb Group Memorial',
  description: 'Final Mission Roster honoring deceased veterans of the 379th Bombardment Group.',
};

// Format name to add comma after last name: "Abbott James" -> "Abbott, James"
function formatName(name: string): string {
  const parts = name.split(' ');
  if (parts.length < 2) return name;
  const lastName = parts[0];
  const rest = parts.slice(1).join(' ');
  return `${lastName}, ${rest}`;
}

export default function TapsPage() {
  // Group names by first letter
  const groupedNames: Record<string, string[]> = {};
  tapsData.names.forEach((name) => {
    const letter = name.charAt(0).toUpperCase();
    if (!groupedNames[letter]) {
      groupedNames[letter] = [];
    }
    groupedNames[letter].push(name);
  });

  const letters = Object.keys(groupedNames).sort();

  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <Link href="/memorials" className="text-[#d4a017] hover:text-[#e8b923] text-sm mb-4 inline-block">
            &larr; Back to Memorials
          </Link>
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">In Memoriam</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Taps
          </h1>
          <p className="mt-4 text-[#e8e8d0] max-w-2xl">
            Final Mission Roster honoring {tapsData.count.toLocaleString()} deceased veterans of the 379th Bombardment Group.
          </p>
        </div>
      </section>

      {/* High Flight Poem */}
      <section className="py-12 bg-[#1e3a5f]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#d4a017] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              High Flight
            </h2>
            <p className="text-sm text-[#e8e8d0] mb-6 italic">by John Gillespie Magee, Jr.</p>
            <div className="text-[#f5f5dc] leading-relaxed space-y-4 italic" style={{ fontFamily: 'Georgia, serif' }}>
              <p>
                Oh, I have slipped the surly bonds of earth<br />
                And danced the skies on laughter-silvered wings;<br />
                Sunward I&apos;ve climbed, and joined the tumbling mirth<br />
                Of sun-split clouds... and done a hundred things<br />
                You have not dreamed of... wheeled and soared and swung<br />
                High in the sunlit silence. Hov&apos;ring there,
              </p>
              <p>
                I&apos;ve chased the shouting wind along, and flung<br />
                My eager craft through footless halls of air.<br />
                Up, up the long, delirious, burning blue<br />
                I&apos;ve topped the windswept heights with easy grace<br />
                Where never lark, or even eagle flew.
              </p>
              <p>
                And, while with silent, lifting mind I&apos;ve trod<br />
                The high untrespassed sanctity of space,<br />
                Put out my hand, and touched the face of God.
              </p>
            </div>

            {/* Audio Player */}
            <div className="mt-8 pt-6 border-t border-[#2c5282]">
              <p className="text-xs text-[#e8e8d0] mb-3">Listen to the musical tribute</p>
              <audio
                controls
                className="w-full max-w-md mx-auto"
                style={{ filter: 'invert(1) hue-rotate(180deg)' }}
              >
                <source src="/audio/music/slipped-the-surly-bonds-of-earth.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-8 border-b border-[#d4a017]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#1e3a5f] text-center">
              The Final Mission Roster honors deceased veterans of the 379th Bombardment Group WWII (H)
              who were not Killed in Action (KIA) or Missing in Action (MIA) during WWII, as they are
              shown in the 379th BG Anthology, the National Archives and the National WWII Memorial.
            </p>
          </div>
        </div>
      </section>

      {/* Letter Navigation */}
      <section className="py-4 bg-[#e8e8d0] sticky top-0 z-10 border-b border-[#d4a017]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center bg-[#1e3a5f] text-[#f5f5dc] hover:bg-[#d4a017] hover:text-[#1a1a1a] transition-colors text-sm font-semibold"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Names Roster */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="mb-8">
                <h3 className="text-3xl font-bold text-[#1e3a5f] border-b-2 border-[#d4a017] pb-2 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  {letter}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {groupedNames[letter].map((name, index) => (
                    <div key={index} className="text-[#666] py-1">
                      {formatName(name)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-[#1e3a5f]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#e8e8d0] text-sm">
            {tapsData.count.toLocaleString()} names in the memorial roster
          </p>
          <p className="text-[#999] text-xs mt-2">
            Source: {tapsData.source}
          </p>
        </div>
      </section>
    </div>
  );
}
