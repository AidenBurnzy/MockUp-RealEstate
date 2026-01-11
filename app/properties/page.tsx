import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PropertyFilters from '@/components/PropertyFilters'
import PropertyCard from '@/components/PropertyCard'
import { mockProperties } from '@/types/property'

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-luxury-black">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-luxury-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gold-500">Luxury</span> <span className="text-luxury-white">Properties</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Browse our exclusive collection of Michigan's finest luxury estates
          </p>
        </div>
      </section>

      {/* Filters and Listings */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <PropertyFilters />
          
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-400">
              Showing <span className="text-gold-500 font-semibold">{mockProperties.length}</span> properties
            </p>
            <select className="bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-2 focus:outline-none focus:border-gold-500">
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
              <option>Newest First</option>
              <option>Square Feet</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
