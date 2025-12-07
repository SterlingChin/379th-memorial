import Link from 'next/link';

export const metadata = {
  title: 'The Men - 379th Bomb Group Memorial',
  description: 'Search for crew members who served with the 379th Bomb Group during World War II.',
};

export default function CrewPage() {
  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">Approximately 6,000 Men Served</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            The Men of the 379th
          </h1>
          <p className="mt-4 text-[#e8e8d0] max-w-2xl">
            Search for crew members by name, squadron, or position. Connect with families of those who served.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Box */}
            <div className="bg-white p-8 shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                Search Crew Database
              </h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="flex-1 px-4 py-3 border border-[#ccc] focus:border-[#1e3a5f] focus:outline-none"
                  disabled
                />
                <button
                  className="bg-[#1e3a5f] text-[#f5f5dc] px-6 py-3 font-semibold hover:bg-[#2c5282] transition-colors disabled:opacity-50"
                  disabled
                >
                  Search
                </button>
              </div>
              <p className="text-sm text-[#666] mt-4">
                The searchable crew database is coming soon. We are migrating records from the original site.
              </p>
            </div>

            {/* Squadrons */}
            <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
              Browse by Squadron
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { id: '524th', name: '524th Bombardment Squadron' },
                { id: '525th', name: '525th Bombardment Squadron' },
                { id: '526th', name: '526th Bombardment Squadron' },
                { id: '527th', name: '527th Bombardment Squadron' },
              ].map((squadron) => (
                <div
                  key={squadron.id}
                  className="bg-white p-6 shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#d4a017] font-bold">{squadron.id.slice(0, 3)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                        {squadron.name}
                      </h3>
                      <p className="text-sm text-[#666]">View crew members →</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* LOC Veterans History Project */}
            <div className="bg-[#4a5320] text-[#f5f5dc] p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Library of Congress Oral Histories
              </h2>
              <p className="text-[#e8e8d0] mb-6">
                The Veterans History Project at the Library of Congress has preserved oral histories
                and documentary collections from 8 veterans of the 379th Bomb Group, including pilots,
                bombardiers, gunners, and POWs.
              </p>
              <Link
                href="/crew/loc-veterans"
                className="inline-block bg-[#d4a017] hover:bg-[#e8b923] text-[#1a1a1a] px-6 py-3 font-semibold transition-colors"
              >
                View LOC Collections →
              </Link>
            </div>

            {/* Taps - In Memoriam */}
            <div className="bg-[#2c2c2c] text-[#f5f5dc] p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Taps — In Memoriam
              </h2>
              <p className="text-[#ccc] mb-6">
                The Final Mission Roster honors 1,329 deceased veterans of the 379th Bombardment Group
                who were not Killed in Action or Missing in Action during WWII.
              </p>
              <Link
                href="/memorials/taps"
                className="inline-block bg-[#d4a017] hover:bg-[#e8b923] text-[#1a1a1a] px-6 py-3 font-semibold transition-colors"
              >
                View Memorial Roster →
              </Link>
            </div>

            {/* Crew Positions */}
            <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
              Crew Positions
            </h2>
            <div className="bg-white p-8 shadow-md mb-12">
              <p className="text-[#666] mb-6">
                A B-17 Flying Fortress carried a crew of 10 men:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Pilot',
                  'Co-Pilot',
                  'Navigator',
                  'Bombardier',
                  'Flight Engineer / Top Turret Gunner',
                  'Radio Operator',
                  'Ball Turret Gunner',
                  'Waist Gunner (Left)',
                  'Waist Gunner (Right)',
                  'Tail Gunner',
                ].map((position) => (
                  <div key={position} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#d4a017] rounded-full"></span>
                    <span className="text-[#333]">{position}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Looking For */}
            <div className="bg-[#1e3a5f] text-[#f5f5dc] p-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Looking for Someone?
              </h2>
              <p className="text-[#e8e8d0] mb-6">
                The original 379th website had a &quot;Looking4&quot; section where families searched for
                information about their loved ones. We&apos;re preserving those records and adding new ones.
              </p>
              <Link
                href="/connect"
                className="inline-block bg-[#d4a017] hover:bg-[#e8b923] text-[#1a1a1a] px-6 py-3 font-semibold transition-colors"
              >
                Submit a Search Request
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
