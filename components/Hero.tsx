export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black z-10" />
        <div className="w-full h-full bg-luxury-charcoal" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-luxury-white">Exceptional</span>
          <br />
          <span className="text-gold-500">Living</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-up">
          Discover Michigan's most exclusive luxury properties and multi-million dollar estates
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <a
            href="/properties"
            className="bg-gold-500 text-luxury-black px-10 py-4 text-sm font-semibold tracking-wider hover:bg-gold-400 transition-all inline-block"
          >
            EXPLORE PROPERTIES
          </a>
          <a
            href="/contact"
            className="border-2 border-gold-500 text-gold-500 px-10 py-4 text-sm font-semibold tracking-wider hover:bg-gold-500 hover:text-luxury-black transition-all inline-block"
          >
            SCHEDULE VIEWING
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
