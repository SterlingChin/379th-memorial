import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-[#f5f5dc]">
      {/* Squadron patches row */}
      <div className="bg-[#4b3621] py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 text-sm">
            <span>524th BS</span>
            <span className="text-[#d4a017]">|</span>
            <span>525th BS</span>
            <span className="text-[#d4a017]">|</span>
            <span>526th BS</span>
            <span className="text-[#d4a017]">|</span>
            <span>527th BS</span>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-[#d4a017] text-lg font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              379th Bomb Group Memorial
            </h3>
            <p className="text-sm leading-relaxed text-[#e8e8d0]">
              Preserving the history and honoring the memory of the men who served
              in the 379th Bombardment Group (Heavy) during World War II.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#d4a017] text-lg font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/history" className="text-[#e8e8d0] hover:text-[#d4a017] transition-colors">
                  Group History
                </Link>
              </li>
              <li>
                <Link href="/crew" className="text-[#e8e8d0] hover:text-[#d4a017] transition-colors">
                  Search for Crew Members
                </Link>
              </li>
              <li>
                <Link href="/war-stories" className="text-[#e8e8d0] hover:text-[#d4a017] transition-colors">
                  Read War Stories
                </Link>
              </li>
              <li>
                <Link href="/connect" className="text-[#e8e8d0] hover:text-[#d4a017] transition-colors">
                  Connect with Families
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#d4a017] text-lg font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.mightye8th.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e8e8d0] hover:text-[#d4a017] transition-colors"
                >
                  Mighty 8th Air Force Museum
                </a>
              </li>
              <li>
                <a
                  href="https://www.8thafhs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e8e8d0] hover:text-[#d4a017] transition-colors"
                >
                  8th Air Force Historical Society
                </a>
              </li>
              <li>
                <Link href="/about" className="text-[#e8e8d0] hover:text-[#d4a017] transition-colors">
                  About This Site
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2c5282] py-4">
        <div className="container mx-auto px-4 text-center text-sm text-[#e8e8d0]">
          <p>
            Dedicated to the men of the 379th Bomb Group who served at Kimbolton, England 1943-1945
          </p>
          <p className="mt-2 text-xs">
            This site is open source. {' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4a017] hover:underline"
            >
              Contribute on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
