import Link from 'next/link'
import PropertyCard from './PropertyCard'
import { mockProperties } from '@/types/property'

export default function FeaturedProperties() {
  const featuredProperties = mockProperties.filter(p => p.featured)

  return (
    <section className="py-24 bg-luxury-charcoal">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold-500">Featured</span> <span className="text-luxury-white">Properties</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our handpicked selection of Michigan's finest luxury estates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/properties"
            className="inline-block border-2 border-gold-500 text-gold-500 px-10 py-4 text-sm font-semibold tracking-wider hover:bg-gold-500 hover:text-luxury-black transition-all"
          >
            VIEW ALL PROPERTIES
          </Link>
        </div>
      </div>
    </section>
  )
}
