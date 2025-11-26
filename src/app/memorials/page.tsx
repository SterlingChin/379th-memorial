export const metadata = {
  title: 'Memorials - 379th Bomb Group Memorial',
  description: 'Memorials honoring the men of the 379th Bomb Group at Kimbolton, the Mighty 8th Museum, and beyond.',
};

export default function MemorialsPage() {
  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">Lest We Forget</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Memorials
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
            {/* Kimbolton */}
            <div className="bg-white p-8 shadow-md">
              <div className="md:flex gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                    Kimbolton Airfield Memorial
                  </h2>
                  <p className="text-[#666] leading-relaxed mb-4">
                    A memorial stands at the former site of RAF Kimbolton (Station 117) in Cambridgeshire,
                    England. The memorial honors all who served with the 379th Bomb Group at this location
                    from 1943 to 1945.
                  </p>
                  <p className="text-[#666] leading-relaxed mb-4">
                    Some of the original buildings from the wartime airfield still remain and can be seen
                    near the memorial site.
                  </p>
                  <div className="text-sm text-[#999]">
                    <p><strong>Location:</strong> Kimbolton, Cambridgeshire, England</p>
                  </div>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0">
                  <div className="bg-[#e8e8d0] h-48 flex items-center justify-center">
                    <span className="text-[#999]">Photo coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mighty 8th Museum */}
            <div className="bg-white p-8 shadow-md">
              <div className="md:flex gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                    National Museum of the Mighty Eighth Air Force
                  </h2>
                  <p className="text-[#666] leading-relaxed mb-4">
                    Located in Pooler, Georgia (near Savannah), this museum preserves the history of the
                    8th Air Force from World War II to the present. The 379th Bomb Group has artifacts
                    and displays within the museum.
                  </p>
                  <p className="text-[#666] leading-relaxed mb-4">
                    The museum features a restored B-17 Flying Fortress, a Chapel of the Fallen Eagles,
                    and extensive archives for research.
                  </p>
                  <div className="text-sm text-[#999] mb-4">
                    <p><strong>Address:</strong> 175 Bourne Ave, Pooler, GA 31322</p>
                    <p><strong>Website:</strong>{' '}
                      <a
                        href="https://www.mightye8th.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1e3a5f] hover:text-[#d4a017]"
                      >
                        mightye8th.org
                      </a>
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0">
                  <div className="bg-[#e8e8d0] h-48 flex items-center justify-center">
                    <span className="text-[#999]">Photo coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* American Air Museum */}
            <div className="bg-white p-8 shadow-md">
              <div className="md:flex gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                    American Air Museum in Britain
                  </h2>
                  <p className="text-[#666] leading-relaxed mb-4">
                    Part of the Imperial War Museum at Duxford, the American Air Museum commemorates
                    the 30,000 American airmen who gave their lives flying from British bases during
                    World War II.
                  </p>
                  <div className="text-sm text-[#999]">
                    <p><strong>Location:</strong> IWM Duxford, Cambridgeshire, England</p>
                    <p><strong>Website:</strong>{' '}
                      <a
                        href="https://www.americanairmuseum.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1e3a5f] hover:text-[#d4a017]"
                      >
                        americanairmuseum.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0">
                  <div className="bg-[#e8e8d0] h-48 flex items-center justify-center">
                    <span className="text-[#999]">Photo coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual Memorial */}
            <div className="bg-[#4b3621] text-[#f5f5dc] p-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Virtual Memorial Wall
              </h2>
              <p className="text-[#e8e8d0] mb-6">
                We are building a virtual memorial to honor all who served with the 379th —
                especially those who made the ultimate sacrifice. Families are invited to
                submit photos and remembrances.
              </p>
              <p className="text-sm text-[#d4a017]">Coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
