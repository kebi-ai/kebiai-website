# Kebi AI Marketing Website

[![Production Ready](https://img.shields.io/badge/status-production--ready-brightgreen)]()
[![React](https://img.shields.io/badge/React-18.3.1-blue)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)]()
[![Vite](https://img.shields.io/badge/Vite-5.4.19-purple)]()
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)]()

> **Official marketing website for Kebi AI LLC** - Showcasing AI-powered solutions for the automotive industry, starting with [Vehix](http://www.vehix.ai), our flagship vehicle recall management platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Project Overview

This is a modern, production-ready single-page marketing website built with React, TypeScript, and Tailwind CSS. The site is designed to generate demo requests and leads for Vehix while establishing Kebi AI's multi-product vision.

### Key Features

- ✅ **Production-ready** - Clean, optimized codebase
- 📱 **Mobile-first design** - Fully responsive across all devices
- ⚡ **Lightning fast** - Built with Vite for optimal performance
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎨 **Modern UI** - Built with shadcn/ui and Tailwind CSS
- 🔗 **SEO optimized** - Proper meta tags and structured content

## 🏗️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18.3.1 + TypeScript 5.8.3 |
| **Build Tool** | Vite 5.4.19 |
| **Styling** | Tailwind CSS 3.4.17 + shadcn/ui |
| **Icons** | Lucide React 0.462.0 |
| **Routing** | React Router DOM 6.30.1 |
| **Forms** | React Hook Form + Zod |
| **State** | TanStack Query 5.83.0 |

## 📁 Project Structure

```
kebiai-website/
├── public/                  # Static assets
├── src/
│   ├── assets/images/      # Images and media
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Benefits.tsx
│   │   ├── FutureProducts.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities
│   ├── pages/             # Page components
│   │   ├── Index.tsx     # Homepage
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx
│   └── main.tsx
├── CLAUDE.md              # Developer guide
└── README.md             # This file
```

## 🎨 Design System

### Brand Colors

- **Primary (Golden Amber)**: `#E8B02D` - CTAs, accents, links
- **Deep Black**: `#1A1A1A` - Text, headers
- **Deep Blue**: `#2563EB` - Secondary CTAs

### Typography

- **Body**: Inter (400, 500, 600, 700)
- **Headlines**: Poppins (500, 600, 700)

## 📱 Homepage Sections

1. **Navigation** - Sticky header with mobile menu
2. **Hero** - Main headline with single CTA
3. **Problem Statement** - Pain points (3 cards)
4. **About Kebi AI** - Vision, Mission, and Vehix introduction
5. **How It Works** - 4-step process
6. **Benefits** - 6 measurable outcomes
7. **Future Products** - Product roadmap with Vehix card
8. **Final CTA** - Conversion section
9. **Footer** - Company info and links

## 🔗 External Links

- **Vehix Website**: <http://www.vehix.ai>
- **Contact Email**: <contact@kebi.ai>

All Vehix mentions throughout the site link to the Vehix website and open in a new tab.

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Available Scripts

```bash
npm run dev         # Start dev server on http://localhost:8080
npm run build       # Build for production
npm run build:dev   # Build with source maps
npm run lint        # Run ESLint
npm run preview     # Preview production build
```

### Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Components are added to `src/components/ui/`.

### Code Style

- Functional components with hooks
- TypeScript for type safety
- Tailwind CSS for styling
- Mobile-first responsive design
- Accessible (WCAG 2.1 AA)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Deployment Options

This is a static site and can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**
- **AWS S3 + CloudFront**
- Any static hosting service

### Environment Configuration

For production deployment:

1. Configure custom domain
2. Set up SSL certificate
3. Configure redirects (SPA routing)
4. Add analytics (optional)
5. Set up form backend for demo requests

## 📊 Performance

- **Bundle Size**: ~344 KB (gzipped: ~107 KB)
- **Build Time**: ~1 second
- **Lighthouse Score**: 95+ (expected)

## ✅ Production Checklist

- [x] Removed unused components and assets
- [x] All Vehix references link to <http://www.vehix.ai>
- [x] Contact email updated to <contact@kebi.ai>
- [x] Mobile-responsive design verified
- [x] SEO meta tags configured
- [x] Production build successful
- [x] Documentation updated

## 🚧 Future Enhancements

### Immediate Next Steps

- [ ] Form backend integration (demo requests)
- [ ] Analytics setup (Google Analytics, Plausible, etc.)
- [ ] CRM integration (HubSpot, Salesforce)
- [ ] Email service integration (Resend, SendGrid)

### Additional Pages

- [ ] `/pricing` - Pricing tiers and plans
- [ ] `/contact` - Contact form page
- [ ] `/about` - Dedicated about page
- [ ] `/blog` - Content hub (optional)
- [ ] `/privacy` - Privacy policy
- [ ] `/terms` - Terms of service

### Features

- [ ] Demo video player modal
- [ ] Live chat widget integration
- [ ] Newsletter signup
- [ ] Early access program signup
- [ ] Customer testimonials section

## 📝 Documentation

- **[CLAUDE.md](CLAUDE.md)** - Comprehensive developer guide
- **[website-design-brief.md](website-design-brief.md)** - Design specifications

## 🤝 Contributing

This is a private project for Kebi AI LLC. For internal development:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

## 📧 Contact

- **Email**: <contact@kebi.ai>
- **Website**: <http://www.kebi.ai>
- **Vehix**: <http://www.vehix.ai>

## 📄 License

Copyright © 2025 Kebi AI LLC. All rights reserved.

---

**Built with** ⚡ [Vite](https://vitejs.dev/) • 💙 [React](https://react.dev/) • 🎨 [Tailwind CSS](https://tailwindcss.com/) • ✨ [shadcn/ui](https://ui.shadcn.com/)
