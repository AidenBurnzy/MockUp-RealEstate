import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-luxury-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-charcoal">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gold-500">About</span> <span className="text-luxury-white">Luxury Estates</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Michigan's premier luxury real estate specialists, dedicated to excellence in high-end property representation
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                <span className="text-gold-500">Our</span> <span className="text-luxury-white">Story</span>
              </h2>
              <div className="text-gray-400 space-y-4 text-lg">
                <p>
                  Founded with a vision to redefine luxury real estate in Michigan, Luxury Estates has become 
                  synonymous with excellence, discretion, and unparalleled service in the high-end property market.
                </p>
                <p>
                  We specialize in representing Michigan's most prestigious properties, from waterfront estates 
                  to architectural masterpieces. Our deep understanding of the luxury market, combined with our 
                  commitment to client satisfaction, has established us as the trusted choice for discerning buyers 
                  and sellers.
                </p>
                <p>
                  Every property we represent receives our signature white-glove treatment, with comprehensive 
                  marketing strategies, professional photography, and access to our exclusive network of high-net-worth 
                  individuals and institutional buyers.
                </p>
              </div>
            </div>
            <div className="bg-luxury-charcoal h-96 border border-gray-800 flex items-center justify-center">
              <span className="text-gold-500 text-2xl font-serif">Luxury Estate Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">
            <span className="text-gold-500">Our</span> <span className="text-luxury-white">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-luxury-gray p-10 border border-gray-800 text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-luxury-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-gold-500 font-semibold text-xl mb-4 tracking-wider">EXCELLENCE</h3>
              <p className="text-gray-400">
                We maintain the highest standards in every aspect of our service, from property presentation to client communication.
              </p>
            </div>
            
            <div className="bg-luxury-gray p-10 border border-gray-800 text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-luxury-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-gold-500 font-semibold text-xl mb-4 tracking-wider">INTEGRITY</h3>
              <p className="text-gray-400">
                Trust is paramount. We operate with complete transparency and honesty in all our dealings.
              </p>
            </div>
            
            <div className="bg-luxury-gray p-10 border border-gray-800 text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-luxury-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-gold-500 font-semibold text-xl mb-4 tracking-wider">DISCRETION</h3>
              <p className="text-gray-400">
                We understand the importance of privacy and confidentiality in luxury real estate transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">
            <span className="text-gold-500">Why Choose</span> <span className="text-luxury-white">Luxury Estates</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-luxury-white font-semibold text-lg mb-2">Exclusive Network</h3>
                <p className="text-gray-400">Access to off-market properties and high-net-worth buyers not available to the general public.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-luxury-white font-semibold text-lg mb-2">Market Expertise</h3>
                <p className="text-gray-400">Deep knowledge of Michigan's luxury real estate markets and emerging opportunities.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-luxury-white font-semibold text-lg mb-2">White-Glove Service</h3>
                <p className="text-gray-400">Personalized attention and concierge-level service throughout your real estate journey.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-luxury-white font-semibold text-lg mb-2">Strategic Marketing</h3>
                <p className="text-gray-400">Sophisticated marketing campaigns that reach qualified buyers locally and internationally.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-luxury-white font-semibold text-lg mb-2">Proven Results</h3>
                <p className="text-gray-400">Track record of successful sales at optimal prices with minimal market time.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-luxury-white font-semibold text-lg mb-2">Technology Integration</h3>
                <p className="text-gray-400">Cutting-edge tools including MLS integration, virtual tours, and data analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            <span className="text-gold-500">Ready to Find Your</span> <span className="text-luxury-white">Dream Estate?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let our team of luxury real estate specialists guide you to the perfect property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/properties"
              className="bg-gold-500 text-luxury-black px-10 py-4 font-semibold tracking-wider hover:bg-gold-400 transition-all inline-block"
            >
              VIEW PROPERTIES
            </a>
            <a
              href="/contact"
              className="border-2 border-gold-500 text-gold-500 px-10 py-4 font-semibold tracking-wider hover:bg-gold-500 hover:text-luxury-black transition-all inline-block"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
