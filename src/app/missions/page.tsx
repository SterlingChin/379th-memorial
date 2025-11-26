import Link from 'next/link';

export const metadata = {
  title: 'Missions - 379th Bomb Group Memorial',
  description: 'Combat missions flown by the 379th Bomb Group from May 1943 to April 1945.',
};

export default function MissionsPage() {
  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">May 29, 1943 – April 25, 1945</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Combat Missions
          </h1>
          <p className="mt-4 text-[#e8e8d0] max-w-2xl">
            The 379th flew more sorties and dropped more bombs than any other group in the 8th Air Force.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#4a5320] text-[#f5f5dc] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <p className="text-3xl font-bold text-[#d4a017]">330</p>
              <p className="text-sm">Combat Missions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#d4a017]">10,492</p>
              <p className="text-sm">Sorties Flown</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#d4a017]">26,460</p>
              <p className="text-sm">Tons of Bombs</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#d4a017]">315</p>
              <p className="text-sm">Enemy Aircraft Destroyed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Key Missions */}
            <div className="bg-white p-8 shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                Notable Missions
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#d4a017] pl-4">
                  <p className="text-sm text-[#d4a017] font-semibold">May 29, 1943</p>
                  <h3 className="font-semibold text-[#1e3a5f]">First Mission: St. Nazaire, France</h3>
                  <p className="text-[#666] text-sm mt-1">
                    German U-boat pens. The 379th&apos;s first combat mission.
                  </p>
                </div>
                <div className="border-l-4 border-[#d4a017] pl-4">
                  <p className="text-sm text-[#d4a017] font-semibold">April 1944</p>
                  <h3 className="font-semibold text-[#1e3a5f]">The Grand Slam Month</h3>
                  <p className="text-[#666] text-sm mt-1">
                    First in all five categories — the only group ever to achieve this.
                  </p>
                </div>
                <div className="border-l-4 border-[#d4a017] pl-4">
                  <p className="text-sm text-[#d4a017] font-semibold">April 25, 1945</p>
                  <h3 className="font-semibold text-[#1e3a5f]">Last Mission: Pilsen, Czechoslovakia</h3>
                  <p className="text-[#666] text-sm mt-1">
                    The 379th&apos;s final combat mission of the war.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Types */}
            <div className="bg-white p-8 shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                Target Types
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Industrial complexes',
                  'Rail marshalling yards',
                  'Airfields',
                  'Oil refineries',
                  'U-boat pens',
                  'V-weapon sites',
                  'Bridge and transportation targets',
                  'Tactical support for ground forces',
                ].map((target) => (
                  <div key={target} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1e3a5f] rounded-full"></span>
                    <span className="text-[#333]">{target}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Reports PDF */}
            <div className="bg-[#1e3a5f] text-[#f5f5dc] p-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Mission Reports Archive
              </h2>
              <p className="text-[#e8e8d0] mb-6">
                Original mission reports documenting each combat mission are available in our archive.
              </p>
              <a
                href="/pdfs/mission-reports.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#d4a017] hover:bg-[#e8b923] text-[#1a1a1a] px-6 py-3 font-semibold transition-colors"
              >
                View Mission Reports (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
