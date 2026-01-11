import Link from 'next/link'
import type { Property } from '@/types/property'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="bg-luxury-gray overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/20">
        <div className="relative h-72 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-gold-500 text-luxury-black px-4 py-2 text-xs font-bold tracking-wider">
            FEATURED
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-serif text-2xl font-semibold text-luxury-white mb-2 group-hover:text-gold-500 transition-colors">
            {property.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {property.location}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-400 mb-4 pb-4 border-b border-gray-700">
            <span>{property.beds} Beds</span>
            <span>{property.baths} Baths</span>
            <span>{property.sqft} Sq Ft</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gold-500">${property.price}</span>
            <span className="text-gray-400 text-sm group-hover:text-gold-500 transition-colors">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
