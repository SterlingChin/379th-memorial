import Link from 'next/link';

export const metadata = {
  title: 'Memorials - 379th Bomb Group Memorial',
  description: 'Memorials honoring the men of the 379th Bomb Group across the United States and England.',
};

export default function MemorialsPage() {
  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">Lest We Forget</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            379th Memorials
          </h1>
          <p className="mt-4 text-[#e8e8d0] max-w-2xl">
            Places where the sacrifice and service of the 379th Bomb Group is commemorated.
          </p>
        </div>
      </section>

      {/* Memorials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Heritage Monument - Savannah */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                Mighty 8th Heritage Monument
              </h2>
              <p className="text-sm text-[#d4a017] mb-4">Dedicated September 20, 1997</p>
              <p className="text-[#666] leading-relaxed mb-4">
                The 379th Bomb Group WWII Association Heritage Monument was dedicated at The Mighty Eighth
                Air Force Heritage Museum Memorial Gardens in Savannah, Georgia. This monument tells where
                the 379th Bomb Group was during WWII, proudly displays what was accomplished while there,
                and preserves its outstanding history for present and future generations.
              </p>
              <p className="text-[#666] leading-relaxed mb-4">
                The monument is made of the hardest stone in the world, a highly polished jet-black granite
                imported from India. It is <strong>eight feet high</strong>, <strong>four feet wide</strong>,
                weighs <strong>7,081 pounds</strong> and is set on a 2,400-pound subterranean concrete base.
              </p>
              <div className="bg-[#e8e8d0] p-4 mb-4">
                <h3 className="font-semibold text-[#4b3621] mb-2">Monument Features:</h3>
                <ul className="text-sm text-[#666] space-y-1">
                  <li>• Triangle K on the top</li>
                  <li>• Two B-17s etched into each of the two faces</li>
                  <li>• Two flush-mounted bronze replicas with 8th Air Force and 379th BG emblems</li>
                  <li>• The Group combat history</li>
                  <li>• The 72 military occupations of 6,000 personnel that served at Kimbolton</li>
                </ul>
              </div>
              <p className="text-[#666] leading-relaxed text-sm">
                Through the cooperation of British Airways and the USDA, three pounds of soil from the old
                Kimbolton airbase were blended with soil in front of the Heritage Monument. Mrs. Peggy Convine
                of Kimbolton, owner of the family farm on which the Triangle K airbase was located, participated
                with General Lewis Lyle in distributing the soil around the base of the monument.
              </p>
              <div className="text-sm text-[#999] mt-4">
                <p><strong>Location:</strong> Mighty Eighth AF Museum, Pooler, Georgia</p>
              </div>
            </div>

            {/* Lewis Lyle Plaque */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                Plaque to Lewis E. Lyle
              </h2>
              <p className="text-sm text-[#d4a017] mb-4">Dedicated 2008</p>
              <p className="text-[#666] leading-relaxed mb-4">
                Commander of the 379th from 11 October 1944 to 5 May 1945. In 2008, the Association dedicated
                this plaque to Major General Lyle recognizing his years of service to the Association as an
                active member and advisor to the Board of Directors.
              </p>
              <div className="text-sm text-[#999]">
                <p><strong>Location:</strong> Memorial Gardens wall behind the 379th monument, Mighty Eighth AF Museum, Pooler, Georgia</p>
              </div>
            </div>

            {/* Chapel Window */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                Chapel of the Fallen Eagles Window
              </h2>
              <p className="text-sm text-[#d4a017] mb-4">Installed 2009</p>
              <p className="text-[#666] leading-relaxed mb-4">
                The 379th Association&apos;s memorial window was installed in the Mighty 8th AF Museum Chapel
                of the Fallen Eagles. Designed by artist Jon Erickson, the colors in the glass are vibrant
                with the 379th insignia and all squadron patches included, as well as a ribbon with
                &quot;379th BG&quot; and both versions of the Triangle K.
              </p>
              <p className="text-[#666] leading-relaxed">
                Our top &apos;Century Club&apos; B-17, &quot;Topper/Ol&apos; Gappy&quot;, is recognized for
                its 157 mission record. Father Sullivan, who was most always at the runway during take-offs,
                provides his blessing to a representative aircrew.
              </p>
              <div className="text-sm text-[#999] mt-4">
                <p><strong>Location:</strong> Chapel of the Fallen Eagles, Mighty Eighth AF Museum, Pooler, Georgia</p>
              </div>
            </div>

            {/* Kimbolton */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                Kimbolton Memorials, England
              </h2>
              <div className="space-y-4 text-[#666]">
                <div>
                  <h3 className="font-semibold text-[#4b3621]">Kimbolton Airfield Monument</h3>
                  <p className="text-sm">At the entrance to the old airbase</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#4b3621]">Kimbolton Plaque</h3>
                  <p className="text-sm">Commemorating the 379th&apos;s service</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#4b3621]">St. Andrew&apos;s Church</h3>
                  <p className="text-sm">Kimbolton village church where soil was gathered for the Heritage Monument</p>
                </div>
              </div>
              <div className="text-sm text-[#999] mt-4">
                <p><strong>Location:</strong> Kimbolton, Cambridgeshire, England</p>
              </div>
            </div>

            {/* Preston's Pride */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                Preston&apos;s Pride - B-17G Triangle K
              </h2>
              <p className="text-[#666] leading-relaxed">
                A preserved B-17G with Triangle K markings, named after Colonel Maurice A. Preston,
                the original commanding officer of the 379th Bomb Group.
              </p>
              <div className="text-sm text-[#999] mt-4">
                <p><strong>Location:</strong> Mefford Field, Tulare, California</p>
              </div>
            </div>

            {/* USAF Academy */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                USAF Academy Plaque
              </h2>
              <p className="text-[#666] leading-relaxed">
                Memorial plaque honoring the 379th Bomb Group at the United States Air Force Academy.
              </p>
              <div className="text-sm text-[#999] mt-4">
                <p><strong>Location:</strong> Colorado Springs, Colorado</p>
              </div>
            </div>

            {/* National Museum */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                National Museum of the Air Force Memorial
              </h2>
              <p className="text-sm text-[#d4a017] mb-4">Installed August 29, 1980 • Refurbished 2010</p>
              <p className="text-[#666] leading-relaxed">
                The 379th Bomb Group WWII Association&apos;s memorial plaque at the National Museum of the
                Air Force. The plaque, #10 in the long line of in-ground plaques, is along the main walkway
                leading to the Museum entrance.
              </p>
              <div className="text-sm text-[#999] mt-4">
                <p><strong>Location:</strong> Dayton, Ohio</p>
              </div>
            </div>

            {/* Cathedral of the Pines */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                Cathedral of the Pines
              </h2>
              <p className="text-[#666] leading-relaxed">
                Memorial at the Cathedral of the Pines, a national memorial dedicated to American war dead.
              </p>
              <div className="text-sm text-[#999] mt-4">
                <p><strong>Location:</strong> Rindge, New Hampshire</p>
              </div>
            </div>

            {/* Hill AFB */}
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                Hill AFB Chapel Banner
              </h2>
              <p className="text-sm text-[#d4a017] mb-4">Approved at Salt Lake City reunion, 2003</p>
              <p className="text-[#666] leading-relaxed">
                The addition of the 379th Bomb Group&apos;s banner to the Hill AFB chapel was approved
                by the Board of Directors at the Salt Lake City, UT reunion in 2003. The original Hill
                Field AFB Chapel was relocated to the Hill Aerospace Museum&apos;s Memorial Park. The chapel
                was restored back to its original WWII configuration and rededicated in 1989.
              </p>
              <div className="text-sm text-[#999] mt-4">
                <p><strong>Location:</strong> Hill Aerospace Museum, Salt Lake City, Utah</p>
              </div>
            </div>

            {/* Taps Link */}
            <div className="bg-[#4b3621] text-[#f5f5dc] p-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Taps - In Memoriam
              </h2>
              <p className="text-[#e8e8d0] mb-6">
                The Final Mission Roster honors 1,329 deceased veterans of the 379th Bombardment Group
                who were not KIA or MIA during WWII.
              </p>
              <Link
                href="/memorials/taps"
                className="inline-block bg-[#d4a017] hover:bg-[#e8b923] text-[#1a1a1a] px-6 py-3 font-semibold transition-colors"
              >
                View Memorial Roster
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
