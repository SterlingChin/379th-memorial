export const metadata = {
  title: 'Connect - 379th Bomb Group Memorial',
  description: 'Connect with other families of 379th Bomb Group veterans. Share stories, photos, and research.',
};

export default function ConnectPage() {
  return (
    <div className="bg-[#f5f5dc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-2">Join Our Community</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Connect
          </h1>
          <p className="mt-4 text-[#e8e8d0] max-w-2xl">
            Share stories, photos, and connect with other families of 379th veterans.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Share Your Story */}
            <div className="bg-white p-8 shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                Share Your Story
              </h2>
              <p className="text-[#666] mb-6">
                Do you have stories, photos, letters, or documents from a 379th veteran?
                We&apos;d love to preserve them on this site for future generations.
              </p>
              <div className="bg-[#e8e8d0] p-6 rounded">
                <h3 className="font-semibold text-[#4b3621] mb-3">We&apos;re looking for:</h3>
                <ul className="space-y-2 text-[#666]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a017] mt-1">•</span>
                    <span>Photographs of crew members, aircraft, or life at Kimbolton</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a017] mt-1">•</span>
                    <span>Written accounts or oral histories from veterans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a017] mt-1">•</span>
                    <span>Letters, diaries, or official documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4a017] mt-1">•</span>
                    <span>Biographical information about crew members</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-white p-8 shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#4b3621]" style={{ fontFamily: 'Georgia, serif' }}>
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#4b3621] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-[#ccc] focus:border-[#1e3a5f] focus:outline-none"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4b3621] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-[#ccc] focus:border-[#1e3a5f] focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4b3621] mb-2">
                    Veteran&apos;s Name (if applicable)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[#ccc] focus:border-[#1e3a5f] focus:outline-none"
                    placeholder="Name of the 379th veteran"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4b3621] mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-[#ccc] focus:border-[#1e3a5f] focus:outline-none"
                    placeholder="Tell us about your connection to the 379th, or what you'd like to share..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#1e3a5f] text-[#f5f5dc] px-8 py-3 font-semibold hover:bg-[#2c5282] transition-colors"
                >
                  Send Message
                </button>
              </form>
              <p className="text-sm text-[#999] mt-4">
                Note: Contact form coming soon. For now, please open an issue on our{' '}
                <a
                  href="https://github.com/SterlingChin/379th-memorial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e3a5f] hover:text-[#d4a017]"
                >
                  GitHub repository
                </a>.
              </p>
            </div>

            {/* Related Resources */}
            <div className="bg-[#4b3621] text-[#f5f5dc] p-8">
              <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Related Resources
              </h2>
              <div className="space-y-4">
                <a
                  href="https://www.mightye8th.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-[#5c4a2e] hover:bg-[#6d5b3f] transition-colors"
                >
                  <h3 className="font-semibold text-[#d4a017]">Mighty 8th Air Force Museum</h3>
                  <p className="text-sm text-[#e8e8d0]">mightye8th.org</p>
                </a>
                <a
                  href="https://www.8thafhs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-[#5c4a2e] hover:bg-[#6d5b3f] transition-colors"
                >
                  <h3 className="font-semibold text-[#d4a017]">8th Air Force Historical Society</h3>
                  <p className="text-sm text-[#e8e8d0]">8thafhs.org</p>
                </a>
                <a
                  href="https://www.americanairmuseum.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-[#5c4a2e] hover:bg-[#6d5b3f] transition-colors"
                >
                  <h3 className="font-semibold text-[#d4a017]">American Air Museum in Britain</h3>
                  <p className="text-sm text-[#e8e8d0]">americanairmuseum.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
