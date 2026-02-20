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
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
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
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    featured: true,
  },
]
