export default function Services() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-cream-50 to-white">
  <div className="container-custom">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
      <span className="badge-primary inline-block mb-4">
        What We Offer
      </span>
      <h2 className="heading-1 mb-6">
        Crafted Experiences for Every Craving
      </h2>
      <p className="body-large text-neutral-600">
        From farm-fresh ingredients to your table, we've reimagined every touchpoint of your dining journey with care and authenticity.
      </p>
    </div>

    {/* Services Accordion */}
    <div className="max-w-5xl mx-auto space-y-4">
      {/* Service 1 - Seasonal Menu */}
      <div className="group bg-white rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden border border-neutral-100">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="heading-3 mb-2">Curated Seasonal Menu</h3>
                <span className="text-sm font-medium text-primary-600">Farm-to-Table Excellence</span>
              </div>
            </div>
            <p className="body-base text-neutral-600 mb-6 leading-relaxed">
              Experience the authentic taste of each season with our rotating menu featuring locally-sourced, premium ingredients. Every dish tells a story of the farmers, artisans, and culinary traditions that inspire us.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Partnerships with 20+ local farms</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Menu updates every 6-8 weeks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Zero compromise on quality</span>
              </li>
            </ul>
          </div>
          <div className="relative h-64 md:h-auto order-1 md:order-2">
            <img 
              src="https://picsum.photos/seed/og-resto-seasonal-menu/800/600" 
              alt="Fresh seasonal ingredients and locally-sourced produce arranged artistically on a rustic wooden table"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-black/5"></div>
          </div>
        </div>
      </div>

      {/* Service 2 - Online Ordering */}
      <div className="group bg-white rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden border border-neutral-100">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto">
            <img 
              src="https://picsum.photos/seed/og-resto-online-order/800/600" 
              alt="Person using smartphone to place food delivery order with restaurant app interface visible"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-black/5"></div>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="heading-3 mb-2">Seamless Online Ordering</h3>
                <span className="text-sm font-medium text-accent-600">Pickup & Delivery</span>
              </div>
            </div>
            <p className="body-base text-neutral-600 mb-6 leading-relaxed">
              Craving OG's at home? Our intuitive ordering platform brings the full restaurant experience to your doorstep. Order ahead for pickup or let us deliver—your meal, your way, always fresh.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Real-time order tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Save favorites & reorder instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Contactless delivery available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service 3 - Table Reservations */}
      <div className="group bg-white rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden border border-neutral-100">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="heading-3 mb-2">Easy Table Reservations</h3>
                <span className="text-sm font-medium text-primary-600">Any Occasion, Anytime</span>
              </div>
            </div>
            <p className="body-base text-neutral-600 mb-6 leading-relaxed">
              Whether it's date night, a business lunch, or celebrating with friends, securing your spot is effortless. Book in seconds and walk into an experience tailored just for you.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Instant confirmation & reminders</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Special requests & dietary notes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Flexible cancellation policy</span>
              </li>
            </ul>
          </div>
          <div className="relative h-64 md:h-auto order-1 md:order-2">
            <img 
              src="https://picsum.photos/seed/og-resto-reservation/800/600" 
              alt="Elegant restaurant interior with beautifully set tables ready for guests and warm ambient lighting"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-black/5"></div>
          </div>
        </div>
      </div>

      {/* Service 4 - Dietary Options */}
      <div className="group bg-white rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden border border-neutral-100">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto">
            <img 
              src="https://picsum.photos/seed/og-resto-dietary/800/600" 
              alt="Colorful array of vegetarian, vegan, and gluten-free dishes beautifully plated and garnished"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-black/5"></div>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-600 to-accent-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="heading-3 mb-2">Dietary-Friendly Options</h3>
                <span className="text-sm font-medium text-accent-600">Everyone's Welcome</span>
              </div>
            </div>
            <p className="body-base text-neutral-600 mb-6 leading-relaxed">
              Your dietary choices shouldn't limit your culinary adventure. Our menu celebrates vegetarian, vegan, and gluten-free options with the same creativity and flavor as our signature dishes.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Clearly labeled menu items</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Dedicated prep areas to avoid cross-contamination</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="body-small text-neutral-700">Chef consultations for allergies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16 fade-in">
      <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button className="btn-primary group">
          View Full Menu
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <button className="btn-secondary">
          Make a Reservation
        </button>
      </div>
    </div>
  </div>
</section>
  );
}