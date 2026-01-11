import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function MLSPage() {
  return (
    <main className="min-h-screen bg-luxury-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gold-500">MLS</span> <span className="text-luxury-white">Search</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Search Michigan's MLS database for exclusive luxury properties
          </p>
        </div>
      </section>

      {/* MLS Search Interface */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Advanced Search */}
          <div className="bg-luxury-charcoal p-8 border border-gray-800 mb-12">
            <h2 className="text-gold-500 font-semibold mb-6 tracking-wider text-xl">ADVANCED MLS SEARCH</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2 tracking-wider">MLS NUMBER</label>
                <input
                  type="text"
                  placeholder="Enter MLS #"
                  className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2 tracking-wider">CITY</label>
                <select className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500">
                  <option value="">Select City</option>
                  <option value="birmingham">Birmingham</option>
                  <option value="bloomfield">Bloomfield Hills</option>
                  <option value="grosse-pointe">Grosse Pointe</option>
                  <option value="rochester">Rochester Hills</option>
                  <option value="troy">Troy</option>
                  <option value="ann-arbor">Ann Arbor</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2 tracking-wider">ZIP CODE</label>
                <input
                  type="text"
                  placeholder="Enter ZIP"
                  className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2 tracking-wider">MIN PRICE</label>
                <select className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500">
                  <option value="">No Min</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="2000000">$2,000,000</option>
                  <option value="3000000">$3,000,000</option>
                  <option value="5000000">$5,000,000</option>
                  <option value="10000000">$10,000,000</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2 tracking-wider">MAX PRICE</label>
                <select className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500">
                  <option value="">No Max</option>
                  <option value="3000000">$3,000,000</option>
                  <option value="5000000">$5,000,000</option>
                  <option value="10000000">$10,000,000</option>
                  <option value="15000000">$15,000,000</option>
                  <option value="20000000">$20,000,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2 tracking-wider">PROPERTY TYPE</label>
                <select className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500">
                  <option value="">All Types</option>
                  <option value="single-family">Single Family</option>
                  <option value="condo">Condominium</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="multi-family">Multi-Family</option>
                  <option value="land">Land</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2 tracking-wider">BEDROOMS</label>
                <select className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500">
                  <option value="">Any</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2 tracking-wider">BATHROOMS</label>
                <select className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500">
                  <option value="">Any</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2 tracking-wider">SQUARE FEET</label>
                <input
                  type="number"
                  placeholder="Min Sq Ft"
                  className="w-full bg-luxury-gray text-luxury-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>
            
            {/* Additional Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <label className="flex items-center text-gray-400 cursor-pointer hover:text-gold-500">
                <input type="checkbox" className="mr-2" />
                Waterfront
              </label>
              <label className="flex items-center text-gray-400 cursor-pointer hover:text-gold-500">
                <input type="checkbox" className="mr-2" />
                Pool
              </label>
              <label className="flex items-center text-gray-400 cursor-pointer hover:text-gold-500">
                <input type="checkbox" className="mr-2" />
                Fireplace
              </label>
              <label className="flex items-center text-gray-400 cursor-pointer hover:text-gold-500">
                <input type="checkbox" className="mr-2" />
                Garage
              </label>
              <label className="flex items-center text-gray-400 cursor-pointer hover:text-gold-500">
                <input type="checkbox" className="mr-2" />
                Basement
              </label>
              <label className="flex items-center text-gray-400 cursor-pointer hover:text-gold-500">
                <input type="checkbox" className="mr-2" />
                New Construction
              </label>
              <label className="flex items-center text-gray-400 cursor-pointer hover:text-gold-500">
                <input type="checkbox" className="mr-2" />
                Smart Home
              </label>
              <label className="flex items-center text-gray-400 cursor-pointer hover:text-gold-500">
                <input type="checkbox" className="mr-2" />
                Guest House
              </label>
            </div>
            
            <div className="flex gap-4">
              <button className="bg-gold-500 text-luxury-black px-10 py-4 font-semibold tracking-wider hover:bg-gold-400 transition-all">
                SEARCH MLS
              </button>
              <button className="border border-gray-700 text-gray-400 px-8 py-4 font-semibold tracking-wider hover:border-gold-500 hover:text-gold-500 transition-all">
                RESET FILTERS
              </button>
            </div>
          </div>

          {/* MLS Integration Notice */}
          <div className="bg-luxury-charcoal border-l-4 border-gold-500 p-8">
            <h3 className="text-gold-500 font-semibold mb-4 text-xl">MLS Integration Ready</h3>
            <div className="text-gray-400 space-y-3">
              <p>
                This search interface is ready to connect with Michigan's MLS database. To activate live MLS data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Obtain MLS API credentials from your local Michigan MLS board</li>
                <li>Configure API keys in environment variables</li>
                <li>Update the MLS integration module with your credentials</li>
                <li>Test the connection with your MLS provider</li>
              </ul>
              <p className="mt-4">
                For detailed integration instructions, see <code className="bg-luxury-gray px-2 py-1 text-gold-500">/docs/MLS_INTEGRATION.md</code>
              </p>
              <p className="text-sm mt-4">
                Supported MLS systems: Realcomp, MichRIC, Bridge Interactive, and standard RETS protocol
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
