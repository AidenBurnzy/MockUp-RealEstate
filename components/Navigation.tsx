'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-luxury-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight">
            <span className="text-gold-500">LUXURY</span>
            <span className="text-luxury-white ml-2">ESTATES</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm tracking-wider hover:text-gold-500 transition-colors">
              HOME
            </Link>
            <Link href="/properties" className="text-sm tracking-wider hover:text-gold-500 transition-colors">
              PROPERTIES
            </Link>
            <Link href="/about" className="text-sm tracking-wider hover:text-gold-500 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-sm tracking-wider hover:text-gold-500 transition-colors">
              CONTACT
            </Link>
            <Link
              href="/properties"
              className="bg-gold-500 text-luxury-black px-6 py-2 text-sm font-semibold tracking-wider hover:bg-gold-400 transition-all"
            >
              VIEW LISTINGS
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-luxury-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4 animate-fade-in bg-luxury-black/95 backdrop-blur-sm -mx-6 px-6 border-t border-gray-800">
            <Link href="/" className="block text-sm tracking-wider hover:text-gold-500 transition-colors pt-4">
              HOME
            </Link>
            <Link href="/properties" className="block text-sm tracking-wider hover:text-gold-500 transition-colors">
              PROPERTIES
            </Link>
            <Link href="/about" className="block text-sm tracking-wider hover:text-gold-500 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="block text-sm tracking-wider hover:text-gold-500 transition-colors">
              CONTACT
            </Link>
            <Link
              href="/properties"
              className="block bg-gold-500 text-luxury-black px-6 py-2 text-sm font-semibold tracking-wider text-center hover:bg-gold-400 transition-all"
            >
              VIEW LISTINGS
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
