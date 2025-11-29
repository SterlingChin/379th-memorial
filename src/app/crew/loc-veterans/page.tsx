import Link from 'next/link';
import locVeterans from '@/data/loc-veterans.json';

export const metadata = {
  title: 'Library of Congress Veterans - 379th Bomb Group Memorial',
  description: 'Oral histories and collections from 379th Bomb Group veterans preserved by the Library of Congress Veterans History Project.',
};

export default function LOCVeteransPage() {
  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <Link href="/crew" className="text-[#d4a017] hover:text-[#e8b923] text-sm mb-4 inline-block">
            &larr; Back to The Men
          </Link>
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">Veterans History Project</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Library of Congress Collections
          </h1>
          <p className="mt-4 text-[#e8e8d0] max-w-2xl">
            Oral histories and documentary collections from veterans of the 379th Bomb Group,
            preserved by the American Folklife Center at the Library of Congress.
          </p>
        </div>
      </section>

      {/* About VHP */}
      <section className="py-8 bg-[#e8e8d0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#1e3a5f]">
              The{' '}
              <a
                href={locVeterans.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e3a5f] underline hover:text-[#d4a017]"
              >
                Veterans History Project
              </a>{' '}
              collects, preserves, and makes accessible the firsthand recollections of U.S. military veterans.
              These collections include oral histories, photographs, letters, diaries, and memoirs.
            </p>
          </div>
        </div>
      </section>

      {/* Veterans List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {locVeterans.veterans.map((veteran) => (
              <div key={veteran.id} className="bg-white p-8 shadow-md">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                      {veteran.name}
                    </h2>
                    <p className="text-[#d4a017] font-medium">
                      {veteran.rank} &bull; {veteran.position}
                    </p>
                  </div>
                  <a
                    href={veteran.locUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1e3a5f] text-[#f5f5dc] px-4 py-2 text-sm font-medium hover:bg-[#2c5282] transition-colors whitespace-nowrap"
                  >
                    View at LOC
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-[#666] uppercase tracking-wide mb-2">Service</h3>
                    <ul className="text-[#333] space-y-1">
                      <li><span className="text-[#666]">Unit:</span> {veteran.squadron}</li>
                      {veteran.datesOfService && (
                        <li><span className="text-[#666]">Dates:</span> {veteran.datesOfService}</li>
                      )}
                      {veteran.aircraft && (
                        <li><span className="text-[#666]">Aircraft:</span> {veteran.aircraft}</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#666] uppercase tracking-wide mb-2">Locations</h3>
                    <p className="text-[#333] text-sm">
                      {veteran.locationsOfService.slice(0, 4).join(', ')}
                      {veteran.locationsOfService.length > 4 && '...'}
                    </p>
                  </div>
                </div>

                {veteran.pow && (
                  <div className="bg-[#f5f5dc] p-4 mb-4 border-l-4 border-[#d4a017]">
                    <p className="text-sm font-semibold text-[#1e3a5f]">Prisoner of War</p>
                    <p className="text-[#666] text-sm">{veteran.powCamp}</p>
                    {veteran.shootdownDetails && (
                      <p className="text-[#666] text-sm mt-1">{veteran.shootdownDetails}</p>
                    )}
                  </div>
                )}

                <p className="text-[#666] leading-relaxed mb-4">{veteran.summary}</p>

                <div className="border-t border-[#e8e8d0] pt-4">
                  <h3 className="text-sm font-semibold text-[#666] uppercase tracking-wide mb-2">Collection Materials</h3>
                  <div className="flex flex-wrap gap-2">
                    {veteran.collectionMaterials.map((material, idx) => (
                      <span
                        key={idx}
                        className="bg-[#e8e8d0] text-[#1e3a5f] px-3 py-1 text-xs rounded-full"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-[#999] mt-2">
                    Collection: {veteran.collectionNumber}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attribution */}
      <section className="py-8 bg-[#1e3a5f]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#e8e8d0] text-sm mb-2">
            All collections are part of the Veterans History Project at the American Folklife Center, Library of Congress.
          </p>
          <a
            href="https://www.loc.gov/collections/veterans-history-project-collection/?fa=subject_conflict:world+war,+1939-1945%7Csubject_branch:army+air+forces/corps%7Clocation_service:european+theater%7Csubject_unit:8th+air+force%7Csubject_unit:379th+bomb+group,+8th+air+force"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4a017] hover:text-[#e8b923] text-sm underline"
          >
            View all 379th Bomb Group records at the Library of Congress
          </a>
        </div>
      </section>
    </div>
  );
}
