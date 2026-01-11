import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-luxury-black">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h1 className="font-serif text-5xl font-bold mb-6">
                <span className="text-gold-500">Get in</span> <span className="text-luxury-white">Touch</span>
              </h1>
              <p className="text-gray-400 text-lg mb-12">
                Schedule a private viewing or inquire about our exclusive properties. Our luxury real estate specialists are ready to assist you.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2 tracking-wider">FIRST NAME *</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-luxury-charcoal text-luxury-white border border-gray-700 px-4 py-4 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2 tracking-wider">LAST NAME *</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-luxury-charcoal text-luxury-white border border-gray-700 px-4 py-4 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2 tracking-wider">EMAIL *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-luxury-charcoal text-luxury-white border border-gray-700 px-4 py-4 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2 tracking-wider">PHONE</label>
                  <input
                    type="tel"
                    className="w-full bg-luxury-charcoal text-luxury-white border border-gray-700 px-4 py-4 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2 tracking-wider">INQUIRY TYPE</label>
                  <select className="w-full bg-luxury-charcoal text-luxury-white border border-gray-700 px-4 py-4 focus:outline-none focus:border-gold-500 transition-colors">
                    <option>Property Viewing</option>
                    <option>Buy a Property</option>
                    <option>Sell a Property</option>
                    <option>General Inquiry</option>
                    <option>Investment Opportunities</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2 tracking-wider">MESSAGE *</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-luxury-charcoal text-luxury-white border border-gray-700 px-4 py-4 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold-500 text-luxury-black px-10 py-4 font-semibold tracking-wider hover:bg-gold-400 transition-all"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-luxury-charcoal p-10 border border-gray-800 mb-8">
                <h2 className="font-serif text-3xl font-semibold text-gold-500 mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex items-start mb-4">
                      <svg className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="text-luxury-white font-semibold mb-2 tracking-wider">OFFICE LOCATION</h3>
                        <p className="text-gray-400">
                          Michigan, United States<br />
                          Serving all of Southeast Michigan
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start mb-4">
                      <svg className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div>
                        <h3 className="text-luxury-white font-semibold mb-2 tracking-wider">PHONE</h3>
                        <p className="text-gray-400">
                          <a href="tel:+1234567890" className="hover:text-gold-500 transition-colors">+1 (234) 567-890</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start mb-4">
                      <svg className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <div>
                        <h3 className="text-luxury-white font-semibold mb-2 tracking-wider">EMAIL</h3>
                        <p className="text-gray-400">
                          <a href="mailto:info@luxuryestates.com" className="hover:text-gold-500 transition-colors">info@luxuryestates.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start mb-4">
                      <svg className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="text-luxury-white font-semibold mb-2 tracking-wider">BUSINESS HOURS</h3>
                        <p className="text-gray-400">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: By Appointment Only
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="bg-luxury-charcoal p-10 border border-gray-800">
                <h3 className="text-gold-500 font-semibold mb-6 tracking-wider">CONNECT WITH US</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-luxury-gray p-4 hover:bg-gold-500 hover:text-luxury-black transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-luxury-gray p-4 hover:bg-gold-500 hover:text-luxury-black transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-luxury-gray p-4 hover:bg-gold-500 hover:text-luxury-black transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
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
