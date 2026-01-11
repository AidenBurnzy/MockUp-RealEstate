import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { mockProperties } from '@/types/property'

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = mockProperties.find(p => p.id === parseInt(params.id))

  if (!property) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-luxury-black">
      <Navigation />

      {/* Hero Image */}
      <section className="pt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="h-[60vh] relative overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-luxury-white mb-4">
                  {property.title}
                </h1>
                <p className="text-gray-400 text-lg flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {property.location}
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="bg-luxury-charcoal p-6 text-center border border-gray-800">
                  <div className="text-gold-500 text-3xl font-bold mb-2">{property.beds}</div>
                  <div className="text-gray-400 text-sm tracking-wider">BEDROOMS</div>
                </div>
                <div className="bg-luxury-charcoal p-6 text-center border border-gray-800">
                  <div className="text-gold-500 text-3xl font-bold mb-2">{property.baths}</div>
                  <div className="text-gray-400 text-sm tracking-wider">BATHROOMS</div>
                </div>
                <div className="bg-luxury-charcoal p-6 text-center border border-gray-800">
                  <div className="text-gold-500 text-3xl font-bold mb-2">{property.sqft}</div>
                  <div className="text-gray-400 text-sm tracking-wider">SQ FT</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-semibold text-gold-500 mb-4">About This Property</h2>
                <div className="text-gray-400 space-y-4">
                  <p>
                    Experience unparalleled luxury in this meticulously designed estate. This exceptional property 
                    showcases the finest craftsmanship and attention to detail throughout, offering an extraordinary 
                    living experience in one of Michigan's most prestigious locations.
                  </p>
                  <p>
                    The residence features soaring ceilings, expansive windows that flood the space with natural light, 
                    and premium finishes at every turn. The gourmet kitchen is a chef's dream, while the master suite 
                    provides a private sanctuary with spa-like amenities.
                  </p>
                  <p>
                    Outdoor living is equally impressive with professionally landscaped grounds, multiple entertaining 
                    areas, and stunning views. This is truly a rare opportunity to own one of the region's most 
                    distinguished properties.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-gold-500 mb-4">Premium Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Smart Home Technology',
                    'Home Theater',
                    'Wine Cellar',
                    'Heated Pool & Spa',
                    'Three-Car Garage',
                    'Guest House',
                    'Professional Landscaping',
                    'Security System',
                    'Chef\'s Kitchen',
                    'Marble Countertops',
                    'Custom Cabinetry',
                    'Hardwood Floors'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-luxury-charcoal p-8 border border-gray-800 sticky top-24">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gold-500 mb-2">${property.price}</div>
                  <div className="text-gray-400 text-sm">Asking Price</div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-gold-500 text-luxury-black px-6 py-4 font-semibold tracking-wider hover:bg-gold-400 transition-all">
                    SCHEDULE VIEWING
                  </button>
                  <button className="w-full border-2 border-gold-500 text-gold-500 px-6 py-4 font-semibold tracking-wider hover:bg-gold-500 hover:text-luxury-black transition-all">
                    REQUEST INFO
                  </button>
                  <button className="w-full border border-gray-700 text-gray-400 px-6 py-4 font-semibold tracking-wider hover:border-gold-500 hover:text-gold-500 transition-all">
                    SAVE PROPERTY
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h3 className="text-gold-500 font-semibold mb-4 tracking-wider">PROPERTY ID</h3>
                  <p className="text-gray-400">LE-{property.id.toString().padStart(6, '0')}</p>
                </div>

                <div className="mt-6">
                  <h3 className="text-gold-500 font-semibold mb-4 tracking-wider">SHARE</h3>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-luxury-gray p-3 hover:bg-gold-500 hover:text-luxury-black transition-all">
                      <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    <button className="flex-1 bg-luxury-gray p-3 hover:bg-gold-500 hover:text-luxury-black transition-all">
                      <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button className="flex-1 bg-luxury-gray p-3 hover:bg-gold-500 hover:text-luxury-black transition-all">
                      <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
