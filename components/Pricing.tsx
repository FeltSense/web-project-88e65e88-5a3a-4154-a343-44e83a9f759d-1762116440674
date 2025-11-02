export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16 animate-fade-in">
      <div className="inline-block mb-4">
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
          PREMIUM DINING EXPERIENCE
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
        Elevate Your Restaurant's
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
          Digital Presence
        </span>
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        A complete website solution designed for modern restaurants. 
        Showcase your culinary excellence and streamline operations—all in one place.
      </p>
    </div>

    {/* Main Pricing Card */}
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 transform hover:scale-[1.02] transition-all duration-300">
        {/* Premium Badge */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center py-4">
          <p className="text-sm font-semibold tracking-wider uppercase">Complete Restaurant Website</p>
        </div>

        <div className="p-10 md:p-12">
          {/* Price Section */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-2xl text-slate-500 font-medium line-through">$199</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                SAVE 85%
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-6xl md:text-7xl font-bold text-slate-900">$29</span>
              <span className="text-xl text-slate-500 font-medium">one-time</span>
            </div>
            <p className="text-slate-600 text-lg">
              No monthly fees. Own it forever.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Curated Seasonal Menu Display</h3>
                <p className="text-slate-600 text-sm mt-1">Showcase your locally-sourced ingredients with beautiful, easy-to-update menu pages</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Complete Online Ordering System</h3>
                <p className="text-slate-600 text-sm mt-1">Integrated pickup and delivery ordering that drives revenue 24/7</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Smart Table Reservation Portal</h3>
                <p className="text-slate-600 text-sm mt-1">Let guests book tables effortlessly for any occasion, reducing no-shows</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Dietary Options Showcase</h3>
                <p className="text-slate-600 text-sm mt-1">Highlight vegetarian, vegan, and gluten-free options to attract diverse diners</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Location & Parking Information</h3>
                <p className="text-slate-600 text-sm mt-1">Interactive maps and parking details to make visiting hassle-free</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Chef & Team Spotlight</h3>
                <p className="text-slate-600 text-sm mt-1">Tell your story and showcase your award-winning culinary expertise</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00?client_reference_id=88e65e88-5a3a-4154-a343-44e83a9f759d'}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Your Restaurant Website - $29
          </button>

          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium">Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="font-medium">One-Time Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="text-center mt-12">
        <p className="text-slate-600 mb-4">Trusted by restaurants nationwide</p>
        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-500 text-sm mt-2">4.9/5 from 200+ restaurant owners</p>
      </div>
    </div>
  </div>
</div>
  );
}