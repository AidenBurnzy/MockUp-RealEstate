# Luxury Real Estate Website

A high-performance, luxury real estate website built with Next.js 14, TypeScript, and Tailwind CSS. Designed for premium property listings in Michigan with MLS integration capabilities.

## Features

- **Premium Design**: Black and gold color scheme with clean, sophisticated aesthetics
- **High Performance**: Optimized images, lazy loading, and SSR for blazing-fast load times
- **Mobile Responsive**: Fully adaptive design for all devices
- **MLS Integration Ready**: Pre-configured module for Michigan MLS data integration
- **Property Management**: Advanced filtering, search, and property detail pages
- **SEO Optimized**: Built-in metadata and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image with Sharp
- **Font**: Inter (sans-serif) & Playfair Display (serif)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app                  # Next.js app directory
  /properties         # Property listings and details
  /mls               # MLS search interface
  /contact           # Contact page
  /about             # About page
/components          # Reusable React components
/lib                 # Utility functions and MLS integration
/types               # TypeScript type definitions
/docs                # Documentation
```

## MLS Integration

The site is prepared for MLS integration. See `/docs/MLS_INTEGRATION.md` for detailed setup instructions.

### Quick MLS Setup
1. Obtain API credentials from your Michigan MLS provider
2. Add credentials to `.env.local`
3. Update `/lib/mls.ts` with your API endpoints
4. Test the connection

## Performance Optimizations

- Image optimization with AVIF/WebP formats
- Lazy loading for images and components
- Minimal JavaScript bundle
- CSS optimization with Tailwind's purge
- Server-side rendering for critical pages
- Compressed assets in production

## Pages

- **Home** (`/`) - Hero section with featured properties
- **Properties** (`/properties`) - Full property listings with filters
- **Property Details** (`/properties/[id]`) - Individual property pages
- **MLS Search** (`/mls`) - Advanced MLS search interface
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and information

## Color Palette

- **Gold**: #d4af37 (Primary accent)
- **Black**: #0a0a0a (Primary background)
- **Charcoal**: #1a1a1a (Secondary background)
- **White**: #fafafa (Primary text)
- **Gray**: Various shades for borders and secondary text

## Customization

### Update Branding
Edit `/components/Navigation.tsx` and `/components/Footer.tsx` to update the brand name and contact information.

### Add More Properties
Edit `/types/property.ts` to add more mock properties or integrate with your database/API.

### Modify Color Scheme
Update `/tailwind.config.ts` to customize colors while maintaining the luxury aesthetic.

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The site can be deployed to any platform that supports Next.js (Netlify, AWS, etc.).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - All rights reserved

## Support

For technical support or questions, contact your development team.