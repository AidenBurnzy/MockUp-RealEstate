export interface Property {
  id: number
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: string
  image: string
  featured: boolean
}

// Mock data - Will be replaced with MLS API
export const mockProperties: Property[] = [
  {
    id: 1,
    title: 'Modern Waterfront Estate',
    location: 'Birmingham, MI',
    price: '8,950,000',
    beds: 6,
    baths: 7,
    sqft: '12,450',
    image: 'data:image/svg+xml,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="800" height="600" fill="%232a2a2a"/%3E%3Ctext x="50%25" y="50%25" font-size="32" fill="%23d4af37" text-anchor="middle" dominant-baseline="middle"%3EWaterfront Estate%3C/text%3E%3C/svg%3E',
    featured: true,
  },
  {
    id: 2,
    title: 'Elegant Colonial Mansion',
    location: 'Bloomfield Hills, MI',
    price: '6,750,000',
    beds: 5,
    baths: 6,
    sqft: '10,200',
    image: 'data:image/svg+xml,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="800" height="600" fill="%232a2a2a"/%3E%3Ctext x="50%25" y="50%25" font-size="32" fill="%23d4af37" text-anchor="middle" dominant-baseline="middle"%3EColonial Mansion%3C/text%3E%3C/svg%3E',
    featured: true,
  },
  {
    id: 3,
    title: 'Contemporary Luxury Villa',
    location: 'Grosse Pointe, MI',
    price: '5,200,000',
    beds: 5,
    baths: 5,
    sqft: '8,900',
    image: 'data:image/svg+xml,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="800" height="600" fill="%232a2a2a"/%3E%3Ctext x="50%25" y="50%25" font-size="32" fill="%23d4af37" text-anchor="middle" dominant-baseline="middle"%3ELuxury Villa%3C/text%3E%3C/svg%3E',
    featured: true,
  },
]
