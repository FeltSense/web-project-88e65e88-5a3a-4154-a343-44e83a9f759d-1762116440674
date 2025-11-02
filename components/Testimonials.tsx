export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-og-cream to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-og-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-og-charcoal/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-og-gold font-display text-sm tracking-[0.2em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="heading-1 mb-6">
            What Our Guests Are Saying
          </h2>
          <p className="body-large text-og-charcoal/70">
            Real experiences from real people who've discovered something special at OG's Resto
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Testimonial 1 */}
          <div className="card-elevated group hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-og-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="body-base text-og-charcoal/80 mb-8 leading-relaxed">
                "The truffle risotto was absolutely divine! I've been to dozens of upscale restaurants, but OG's has this perfect balance of innovation and comfort. Plus, their online reservation system made booking our anniversary dinner seamless—confirmed in under 2 minutes."
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-og-charcoal/10">
                <div className="w-12 h-12 rounded-full bg-og-gold/20 flex items-center justify-center text-og-gold font-semibold">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-og-charcoal">Sarah Martinez</div>
                  <div className="text-sm text-og-charcoal/60">Food Blogger</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="card-elevated group hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-og-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="body-base text-og-charcoal/80 mb-8 leading-relaxed">
                "Best dining experience in the city! The ambiance is cozy yet elegant, and the staff made us feel like family. We tried the chef's tasting menu and every single course was a masterpiece. Already planning our next visit!"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-og-charcoal/10">
                <div className="w-12 h-12 rounded-full bg-og-gold/20 flex items-center justify-center text-og-gold font-semibold">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-og-charcoal">James Chen</div>
                  <div className="text-sm text-og-charcoal/60">Business Executive</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="card-elevated group hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-og-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="body-base text-og-charcoal/80 mb-8 leading-relaxed">
                "A hidden gem! The seasonal menu changes keep things exciting, and the wine pairing suggestions were spot-on. The online ordering for takeout is super convenient too. Five stars all around!"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-og-charcoal/10">
                <div className="w-12 h-12 rounded-full bg-og-gold/20 flex items-center justify-center text-og-gold font-semibold">
                  EP
                </div>
                <div>
                  <div className="font-semibold text-og-charcoal">Emily Parker</div>
                  <div className="text-sm text-og-charcoal/60">Wine Enthusiast</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="body-base text-og-charcoal/70 mb-6">
            Join hundreds of satisfied diners
          </p>
          <button className="btn-primary">
            Make a Reservation
          </button>
        </div>
      </div>
    </section>
  );
}
