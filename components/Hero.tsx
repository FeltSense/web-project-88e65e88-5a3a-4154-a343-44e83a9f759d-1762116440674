export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
  </div>

  {/* Grid pattern overlay */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
      
      {/* Left Content */}
      <div className="text-white space-y-8 animate-fade-in-up z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-amber-200">Authentic Culinary Excellence</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white">Where</span>
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient">
              Flavor Meets
            </span>
            <span className="block text-white">Tradition</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-xl">
            Experience the perfect blend of locally-sourced ingredients and culinary artistry. 
            <span className="text-amber-300 font-medium"> From our kitchen to your table</span>, every dish tells a story.
          </p>
        </div>

        {/* Value Props */}
        <div className="grid sm:grid-cols-3 gap-4 py-6">
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-1">Seasonal Menu</h3>
            <p className="text-sm text-slate-400">Fresh, local ingredients</p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-1">Easy Ordering</h3>
            <p className="text-sm text-slate-400">Pickup & delivery</p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-1">Reservations</h3>
            <p className="text-sm text-slate-400">Book your table</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full overflow-hidden shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Order Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            View Menu
            <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-6 pt-6 border-t border-white/10">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-slate-900"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-slate-900"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-pink-500 border-2 border-slate-900"></div>
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
              2K+
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-slate-400">Loved by <span className="text-white font-semibold">2,000+</span> food enthusiasts</p>
          </div>
        </div>
      </div>

      {/* Right Content - 3D Interactive Image */}
      <div className="relative lg:h-[600px] animate-fade-in-up animation-delay-200">
        {/* Main Image Card with 3D effect */}
        <div className="group relative perspective-1000">
          <div className="relative transform-gpu transition-all duration-500 hover:rotate-y-2 hover:rotate-x-2 preserve-3d">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                alt="Elegant restaurant interior with warm ambient lighting, showcasing modern dining tables and sophisticated atmosphere"
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <div className="text-sm font-bold text-slate-900">4.9/5</div>
                    <div className="text-xs text-slate-600">Rating</div>
                  </div>
                </div>
              </div>

              {/* Bottom info card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Chef's Special Today</h3>
                    <p className="text-sm text-slate-600">Truffle Risotto with Wild Mushrooms</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-600">$32</div>
                    <div className="text-xs text-slate-500">Limited time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-20 blur-2xl animate-pulse animation-delay-1000"></div>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
      <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
    </div>
  </div>

  <style jsx>{`
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(20px, -20px) scale(1.1); }
      50% { transform: translate(-20px, 20px) scale(0.9); }
      75% { transform: translate(20px, 20px) scale(1.05); }
    }
    
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes scroll {
      0% { transform: translateY(0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(12px); opacity: 0; }
    }
    
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    
    .animation-delay-1000 {
      animation-delay: 1s;
    }
    
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    
    .animate-scroll {
      animation: scroll 2s ease-in-out infinite;
    }
    
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out;
    }
    
    .animation-delay-200 {
      animation-delay: 0.2s;
      opacity: 0;
      animation-fill-mode: forwards;
    }
    
    .perspective-1000 {
      perspective: 1000px;
    }
    
    .preserve-3d {
      transform-style: preserve-3d;
    }
    
    .rotate-y-2 {
      transform: rotateY(2deg);
    }
    
    .rotate-x-2 {
      transform: rotateX(2deg);
    }
  `}</style>
</div>
  );
}