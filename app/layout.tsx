import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luxury Real Estate | Exclusive Properties',
  description: 'Discover exclusive luxury properties and multi-million dollar homes in Michigan',
  keywords: ['luxury real estate', 'Michigan homes', 'exclusive properties', 'MLS'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
