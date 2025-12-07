import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Photo Archive - 379th Bomb Group Memorial',
  description: 'Browse photographs of crews, aircraft, and life at Kimbolton airfield during World War II.',
};

export default function PhotosPage() {
  const aircraftPhotos = [
    {
      src: '/images/aircraft/b17-42-38052.jpg',
      alt: 'B-17 Flying Fortress 42-38052',
      caption: 'B-17 Flying Fortress 42-38052',
    },
  ];

  const crewPhotos = [
    {
      src: '/images/crew/charles-brown-crew.jpg',
      alt: 'Charles Brown and Crew',
      caption: 'Charles Brown and Crew',
    },
  ];

  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">Visual History</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Photo Archive
          </h1>
          <p className="mt-4 text-[#e8e8d0] max-w-2xl">
            Browse photographs of crews, aircraft, and life at Kimbolton airfield.
          </p>
        </div>
      </section>

      {/* Aircraft Photos */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
              Aircraft
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {aircraftPhotos.map((photo, index) => (
                <div key={index} className="bg-white shadow-md overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[#333] text-sm">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Crew Photos */}
            <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
              Crews
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {crewPhotos.map((photo, index) => (
                <div key={index} className="bg-white shadow-md overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[#333] text-sm">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon Notice */}
            <div className="bg-white p-8 shadow-md mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                More Photos Coming Soon
              </h2>
              <p className="text-[#666] mb-4">
                We are actively digitizing and cataloging photographs from the 379th Bomb Group.
                This archive will continue to grow as we preserve more visual history.
              </p>
              <p className="text-[#666]">
                If you have photographs from the 379th Bomb Group that you would like to contribute,
                please <Link href="/connect" className="text-[#1e3a5f] hover:text-[#d4a017] underline">contact us</Link>.
              </p>
            </div>

            {/* Photo Categories Coming Soon */}
            <h2 className="text-2xl font-semibold mb-6 text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
              Categories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Aircraft', count: aircraftPhotos.length, available: true },
                { name: 'Crews', count: crewPhotos.length, available: true },
                { name: 'Kimbolton Airfield', count: 0, available: false },
                { name: 'Missions', count: 0, available: false },
              ].map((category) => (
                <div
                  key={category.name}
                  className={`p-6 shadow-md ${category.available ? 'bg-white' : 'bg-[#e8e8d0]'}`}
                >
                  <h3 className="font-semibold text-[#1e3a5f]" style={{ fontFamily: 'Georgia, serif' }}>
                    {category.name}
                  </h3>
                  <p className="text-sm text-[#666] mt-1">
                    {category.available ? `${category.count} photo${category.count !== 1 ? 's' : ''}` : 'Coming soon'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
