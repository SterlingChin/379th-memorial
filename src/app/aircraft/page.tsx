import Link from 'next/link';

export const metadata = {
  title: 'Aircraft - 379th Bomb Group Memorial',
  description: 'The B-17 Flying Fortresses of the 379th Bomb Group, including the famous "Ol\' Gappy" with 157 missions.',
};

export default function AircraftPage() {
  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">B-17 Flying Fortress</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            The Aircraft
          </h1>
          <p className="mt-4 text-[#e8e8d0] max-w-2xl">
            345 B-17 Flying Fortresses were assigned to the 379th Bomb Group during World War II.
            141 were lost to enemy action — a 43% loss rate.
          </p>
        </div>
      </section>

      {/* B-17 Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                Boeing B-17 Flying Fortress
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-3">Specifications</h3>
                  <ul className="space-y-2 text-[#333]">
                    <li><span className="text-[#666]">Crew:</span> 10</li>
                    <li><span className="text-[#666]">Length:</span> 74 ft 4 in</li>
                    <li><span className="text-[#666]">Wingspan:</span> 103 ft 9 in</li>
                    <li><span className="text-[#666]">Max Speed:</span> 287 mph</li>
                    <li><span className="text-[#666]">Range:</span> 2,000 miles</li>
                    <li><span className="text-[#666]">Ceiling:</span> 35,600 ft</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-3">Armament</h3>
                  <ul className="space-y-2 text-[#333]">
                    <li><span className="text-[#666]">Guns:</span> 13 × .50 caliber M2 machine guns</li>
                    <li><span className="text-[#666]">Bombs:</span> Up to 8,000 lbs</li>
                  </ul>
                  <h3 className="font-semibold text-[#1e3a5f] mb-3 mt-6">379th Variants</h3>
                  <ul className="space-y-2 text-[#333]">
                    <li>B-17F (early missions)</li>
                    <li>B-17G (majority of service)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Triangle K */}
            <div className="bg-[#4a5320] text-[#f5f5dc] p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                The Triangle K
              </h2>
              <p className="text-[#e8e8d0] leading-relaxed">
                All B-17s of the 1st Bombardment Division had a large triangle painted on the vertical
                stabilizer. Each Bomb Group was assigned a letter within the triangle. The 379th&apos;s
                planes carried the letter <strong className="text-[#d4a017]">K</strong>, earning them
                the nickname &quot;Triangle K Group.&quot;
              </p>
            </div>

            {/* Ol' Gappy */}
            <div className="bg-white p-8 shadow-md mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#d4a017] text-[#1a1a1a] px-3 py-1 text-sm font-bold">
                  RECORD
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                    &quot;Ol&apos; Gappy&quot; — 157 Missions
                  </h2>
                  <p className="text-[#666] mt-4 leading-relaxed">
                    A B-17G of the 379th Bomb Group, &quot;Ol&apos; Gappy&quot; flew more combat missions
                    than any other bomber in the entire 8th Air Force. The aircraft earned its nickname
                    from the gap in its nose where the chin turret had been removed and replaced with
                    a flat panel.
                  </p>
                </div>
              </div>
            </div>

            {/* Lost Aircraft */}
            <div className="bg-[#4b3621] text-[#f5f5dc] p-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Aircraft Lost in Action
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-3xl font-bold text-[#d4a017]">80</p>
                  <p className="text-[#e8e8d0]">Lost May 1943 – March 1944</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#d4a017]">61</p>
                  <p className="text-[#e8e8d0]">Lost April 1944 – April 1945</p>
                </div>
              </div>
              <p className="text-[#e8e8d0] text-sm">
                The 379th lost one B-17 to enemy action for every 70 sorties flown — a loss rate
                of one bomber for every 22 missions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
