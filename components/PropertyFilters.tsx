'use client'

import { useState } from 'react'

export default function PropertyFilters() {
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [bedrooms, setBedrooms] = useState('any')
  const [propertyType, setPropertyType] = useState('any')

  return (
    <div className="bg-luxury-charcoal p-8 rounded-none mb-12 border border-gray-800">
      <h3 className="text-gold-500 font-semibold mb-6 tracking-wider">FILTER PROPERTIES</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Location */}
        <div>
          <label className="block text-sm text-gray-400 mb-2 tracking-wider">LOCATION</label>
          <input
            type="text"
            placeholder="City or ZIP"
            className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500"
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm text-gray-400 mb-2 tracking-wider">PROPERTY TYPE</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500"
          >
            <option value="any">Any Type</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="estate">Estate</option>
            <option value="waterfront">Waterfront</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm text-gray-400 mb-2 tracking-wider">BEDROOMS</label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500"
          >
            <option value="any">Any</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
            <option value="6">6+</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm text-gray-400 mb-2 tracking-wider">PRICE RANGE</label>
          <select
            className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500"
          >
            <option>Any Price</option>
            <option>$1M - $3M</option>
            <option>$3M - $5M</option>
            <option>$5M - $10M</option>
            <option>$10M+</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="bg-gold-500 text-luxury-black px-8 py-3 font-semibold tracking-wider hover:bg-gold-400 transition-all flex-1 md:flex-none">
          APPLY FILTERS
        </button>
        <button className="border border-gray-700 text-gray-400 px-8 py-3 font-semibold tracking-wider hover:border-gold-500 hover:text-gold-500 transition-all">
          RESET
        </button>
      </div>
    </div>
  )
}
