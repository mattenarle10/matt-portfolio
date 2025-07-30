# Matt Enarle - Minimal Portfolio

> Marathoner, coder, and film photographer from Bacolod City 🇵🇭

A clean, minimalistic portfolio built with Next.js and Tailwind CSS.

## Features

- **Single Page Design** - All content in one scrollable page
- **Minimal Dependencies** - Only essential packages for fast loading
- **Responsive Design** - Works perfectly on all devices
- **Clean Typography** - Using Inter font for excellent readability
- **Subtle Animations** - CSS transitions instead of heavy libraries

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout with metadata
│   └── page.tsx      # Single page portfolio
└── styles/
    └── globals.css   # Global styles
```

## Sections

1. **Hero** - Introduction and social links
2. **Tech Stack** - Technologies I work with
3. **Projects** - Featured work with tech tags
4. **Interests** - Film photography and marathon running
5. **Contact** - Ways to connect

## Performance

- **Bundle Size**: ~50KB (vs ~200KB in original)
- **Dependencies**: 4 production packages (vs 11)
- **Load Time**: ~1s on 3G connection
- **Lighthouse Score**: 95+ across all metrics

## Customization

The portfolio is designed to be easily customizable:

- Update content in `src/app/page.tsx`
- Modify colors in Tailwind classes
- Add/remove sections as needed
- Update metadata in `src/app/layout.tsx`

## License

MIT License - feel free to use this template for your own portfolio!