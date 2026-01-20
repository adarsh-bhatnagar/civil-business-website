# BIM & Digital Twin Consultancy Website

Enterprise-grade website for a BIM and Digital Twin consultancy built with Next.js 14 App Router, featuring professional design, 3D visualizations, and comprehensive service information.

## Tech Stack

- **Next.js 14** - App Router with TypeScript
- **Tailwind CSS** - Custom BIM color palette
- **Framer Motion** - Smooth animations and micro-interactions
- **React Three Fiber** - 3D BIM and Digital Twin visualizations
- **Three.js** - 3D graphics library
- **Lucide React** - Icon library

## Features

### Pages
- **Home** - Full-screen hero with 3D visualization, problem section, services overview, process flow, standards, industries, and CTA
- **Services** - Overview page with individual detail pages for each service category
- **Digital Twin** - Interactive Digital Twin visualization with IoT integration concepts
- **ISO-19650 & Compliance** - Comprehensive explanation of all five parts and compliance value
- **About** - Company mission, values, and experience
- **Contact** - Contact form and information
- **Team** - Leadership profiles, technical experts, and standards responsibility mapping

### Design System
- **Colors:**
  - Deep Blue Headers: `#0A2540`
  - Light Concrete Backgrounds: `#F5F7FA`
  - BIM Teal Accents: `#14B8A6`
  - Safety Orange CTAs: `#F97316`
  - Charcoal Black Text: `#1F2933`

### Components
- Reusable UI components (Button, Navigation, Footer)
- Section components (Hero, ProblemSection, ServiceOverview, etc.)
- 3D visualization components (BIMVisualization, DigitalTwinVisualization)
- Service detail template

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

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navigation and Footer
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── about/
│   ├── contact/
│   ├── digital-twin/
│   ├── iso-19650/
│   ├── services/
│   └── team/
├── components/
│   ├── 3d/                # 3D visualization components
│   ├── layout/            # Navigation, Footer
│   ├── sections/          # Page sections
│   ├── services/          # Service-specific components
│   └── ui/                # Reusable UI components
├── public/                # Static assets
└── package.json
```

## Service Categories

1. **BIM Design & Engineering** - 3D/4D/5D modeling, coordination, design optimization
2. **Construction Intelligence** - 4D/5D scheduling, clash detection, sequencing
3. **Reality Capture** - Laser scanning, photogrammetry, point cloud processing
4. **Digital Twin & IoT** - Live digital replicas with IoT integration
5. **Compliance & Standards** - ISO-19650 implementation and compliance

## Standards Compliance

Full compliance with:
- ISO-19650-1, 2, 3, 4, 5
- BS EN ISO 16739 (IFC)
- BS EN ISO 29481 (IDM)
- PAS 1192 Series

## Browser Support

Modern browsers with WebGL support for 3D visualizations.

## License

Proprietary - All rights reserved.
