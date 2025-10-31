# CLAUDE.md - Kebi AI Website Developer Guide

## Project Overview

This is the **marketing website for Kebi AI LLC**, an early-stage startup building AI-powered SaaS solutions for the automotive industry. The website showcases **Vehix**, our flagship vehicle recall management platform for automotive dealerships, while establishing Kebi AI as a multi-product company with a broader vision.

### Purpose
- **Primary Goal**: Generate demo requests and leads for Vehix
- **Secondary Goal**: Establish brand identity and multi-product vision
- **Target Audience**: Automotive dealership managers, service directors, fleet managers

### Project Stage
- Homepage is fully implemented with 9 sections
- Single-page marketing site (SPA) currently
- Ready for expansion to multi-page structure
- No backend integration yet (all static content)

---

## Technology Stack

### Core Framework
- **React 18.3.1** - Modern React with hooks
- **TypeScript 5.8.3** - Type-safe JavaScript (strict mode OFF for rapid development)
- **Vite 5.4.19** - Fast build tool and dev server with SWC compiler
- **React Router DOM 6.30.1** - Client-side routing

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework with custom configuration
- **shadcn/ui** - 50+ high-quality, accessible components built on Radix UI
- **Radix UI** - 30+ primitive component packages (Dialog, Dropdown, Navigation, etc.)
- **lucide-react 0.462.0** - Consistent icon library
- **class-variance-authority 0.7.1** - Component variant management
- **tailwind-merge 2.6.0** - Intelligent class merging

### Data & Forms
- **@tanstack/react-query 5.83.0** - Async state management (configured but not actively used)
- **react-hook-form 7.61.1** - Performant form handling
- **zod 3.25.76** - TypeScript-first validation
- **@hookform/resolvers 3.10.0** - Validation resolvers

### Additional Libraries
- **embla-carousel-react 8.6.0** - Carousels/sliders
- **recharts 2.15.4** - Chart library
- **sonner 1.7.4** - Toast notifications
- **next-themes 0.3.0** - Theme management (dark mode support ready)
- **date-fns 3.6.0** - Date utilities
- **react-day-picker 8.10.1** - Date picker

### Dev Tools
- **ESLint 9.32.0** - Code linting with TypeScript support
- **PostCSS 8.5.6** + **Autoprefixer 10.4.21** - CSS processing

---

## Project Structure

```
/Users/vex_one/Projects/kebi_ai/kebiai-website/
├── public/                          # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/
│   ├── assets/                      # Images and media
│   │   ├── kebi-logo.png           # Company logo (1.4MB)
│   │   ├── hero-bg.jpg             # Hero section background
│   │   ├── dashboard-preview.jpg   # Product screenshots
│   │   ├── ai-routing.jpg
│   │   └── future-products.jpg
│   │
│   ├── components/
│   │   ├── ui/                     # 50+ shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   └── [47+ more components]
│   │   │
│   │   ├── Navigation.tsx          # Sticky header with mobile menu
│   │   ├── Hero.tsx                # Hero section with CTAs
│   │   ├── ProblemStatement.tsx    # Pain points section
│   │   ├── Features.tsx            # 6 key features
│   │   ├── HowItWorks.tsx          # 4-step process
│   │   ├── Benefits.tsx            # 6 measurable outcomes
│   │   ├── FutureProducts.tsx      # Product roadmap teaser
│   │   ├── FinalCTA.tsx            # Conversion section
│   │   └── Footer.tsx              # Footer with links
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx          # Mobile breakpoint detection
│   │   └── use-toast.ts            # Toast notification hook
│   │
│   ├── lib/
│   │   └── utils.ts                # cn() utility for className merging
│   │
│   ├── pages/
│   │   ├── Index.tsx               # Homepage (main landing page)
│   │   └── NotFound.tsx            # 404 error page
│   │
│   ├── App.tsx                     # Root component with routing
│   ├── main.tsx                    # Entry point
│   ├── index.css                   # Global styles + CSS variables
│   └── vite-env.d.ts               # Vite type definitions
│
├── components.json                 # shadcn/ui configuration
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML entry point with SEO meta tags
├── package.json                    # Dependencies and scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.ts              # Tailwind with custom theme
├── tsconfig.json                   # TypeScript base config
├── tsconfig.app.json               # App TypeScript config
├── tsconfig.node.json              # Node TypeScript config
├── vite.config.ts                  # Vite dev server config
├── website-design-brief.md         # Comprehensive design specification (710 lines)
├── CLAUDE.md                       # This file
└── README.md                       # Public project documentation
```

---

## Design System

### Brand Colors

Defined as HSL CSS variables in `src/index.css`:

**Primary Colors:**
- **Golden Amber** (`hsl(43 84% 55%)` / `#E8B02D`)
  - Use for: Primary CTAs, accents, highlights, hover states
  - CSS Variable: `--primary`

- **Deep Black** (`hsl(222.2 84% 4.9%)` / `#1A1A1A`)
  - Use for: Text, headers, dark sections
  - CSS Variable: `--foreground`

**Secondary Colors:**
- **Deep Blue** (`hsl(217 91% 60%)` / `#2563EB`)
  - Use for: Secondary CTAs, links, trust indicators
  - CSS Variable: `--secondary`

**Supporting Colors:**
- Light Gray (`#F8F9FA`) - Backgrounds
- Medium Gray (`#6B7280`) - Secondary text
- White (`#FFFFFF`) - Primary background
- Success Green (`#10B981`) - Success states
- Error Red (`#EF4444`) - Errors

**Dark Mode:**
- CSS variables support dark mode via `next-themes`
- Dark variants defined in `:root.dark` selector

### Typography

Loaded from Google Fonts in `index.html`:

- **Body Text**: Inter (400, 500, 600, 700 weights)
- **Headlines**: Poppins (500, 600, 700 weights)

**Font Scale:**
- Hero: 48-64px (desktop), 32-40px (mobile)
- H1: 36-48px
- H2: 30-36px
- H3: 24-28px
- Body: 16-18px (base text-base in Tailwind)
- Small: 14px (text-sm)

### Animations

Custom keyframes defined in `tailwind.config.ts`:

- `fade-in` - Opacity 0 → 1
- `slide-up` - Transform translateY(20px) → 0
- `scale-in` - Scale 0.95 → 1
- `glow-pulse` - Box shadow pulse effect

**Usage Pattern:**
```tsx
className="animate-fade-in animation-delay-200"
```

**Timing:**
- Transitions: 200-300ms
- Staggered delays: 0ms, 200ms, 400ms, 600ms

### Component Patterns

**shadcn/ui Components:**
- Located in `src/components/ui/`
- Built on Radix UI primitives
- Styled with Tailwind + CVA for variants
- Fully accessible (WCAG 2.1 AA)

**Section Components:**
- Top-level sections of homepage
- Self-contained with internal state
- Use shadcn/ui components internally
- Follow consistent structure: container → content grid → elements

---

## Current Implementation

### Homepage Sections (All Implemented)

1. **Navigation** - `Navigation.tsx`
   - Sticky header with backdrop blur
   - Desktop: Horizontal menu with CTA button
   - Mobile: Hamburger menu with slide-in panel
   - Links: Features, Benefits, Product, Contact + "Request Demo" button
   - Logo displays `kebi-logo.png`

2. **Hero** - `Hero.tsx`
   - Tagline: "AI-Powered Solutions for Automotive Operations"
   - Main headline: "Intelligent Automation for Automotive Operations"
   - Subheadline about Vehix
   - 2 CTAs: "Request Demo" + "Watch Demo Video"
   - Social proof: 50+ dealerships, 10K+ recalls, 99.9% uptime
   - Background image with gradient overlay
   - Scroll indicator animation

3. **Problem Statement** - `ProblemStatement.tsx`
   - 3 pain point cards with icons
   - Icons: AlertTriangle, Clock, BarChart3
   - Hover effects and staggered animations

4. **Features** - `Features.tsx`
   - 6 key features with alternating layout
   - Icons from lucide-react
   - Product screenshots for first 2 features
   - Gradient placeholders for remaining features
   - Each feature: title, description, benefit callout

5. **How It Works** - `HowItWorks.tsx`
   - 4-step process with numbered cards
   - Icons: Upload, Route, Activity, FileText
   - Connector lines between steps (desktop only)
   - Staggered fade-in animations

6. **Benefits** - `Benefits.tsx`
   - 6 metric cards with icons
   - Measurable outcomes: 40% more recalls, 35% cost reduction, etc.
   - Hover effects on cards

7. **Future Products** - `FutureProducts.tsx`
   - "Coming Soon" badge
   - Vision statement about multi-product strategy
   - 5 future products with icons
   - "Join Early Access Program" CTA
   - Background image with opacity overlay

8. **Final CTA** - `FinalCTA.tsx`
   - Compelling headline
   - 2 CTAs: "Request Your Demo" + "Talk to Sales"
   - 4 trust indicators: No credit card, 14-day trial, etc.
   - Gradient background

9. **Footer** - `Footer.tsx`
   - Company info with logo
   - 4 columns: Products, Company, Legal
   - Social media icons (LinkedIn, Twitter, Email)
   - Copyright notice
   - Links to all major pages

### Routing

Current routes in `App.tsx`:
- `/` - Homepage (Index.tsx)
- `*` - 404 page (NotFound.tsx)

**Note:** All navigation links use anchor tags (`#features`) or placeholder hrefs. Need proper routing for multi-page structure.

### Configuration Files

**Vite** (`vite.config.ts`):
- Dev server: port 8080, host `::`
- React SWC plugin for fast refresh
- Path alias: `@` → `./src`

**Tailwind** (`tailwind.config.ts`):
- Dark mode: `class` strategy
- Custom colors via CSS variables
- Extended animations
- Container max-width: 1400px
- Custom border radius values

**TypeScript** (`tsconfig.app.json`):
- Target: ES2020
- Strict mode: OFF (relaxed for rapid dev)
- Path aliases: `@/*` → `./src/*`
- JSX: react-jsx

**shadcn/ui** (`components.json`):
- Style: default
- Base color: slate
- CSS variables: true
- Aliases: `@/components`, `@/lib`, `@/hooks`

---

## Development Guidelines

### Adding New Components

**UI Components (shadcn/ui):**
```bash
npx shadcn@latest add [component-name]
```
This adds to `src/components/ui/`

**Section Components:**
1. Create in `src/components/`
2. Follow naming: PascalCase (e.g., `PricingSection.tsx`)
3. Use shadcn/ui components internally
4. Add to appropriate page in `src/pages/`

### Adding New Pages

1. **Create page component** in `src/pages/`:
```tsx
// src/pages/Pricing.tsx
export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Page content */}
    </div>
  );
}
```

2. **Add route** in `src/App.tsx`:
```tsx
import Pricing from "@/pages/Pricing";

<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

3. **Update navigation** in `src/components/Navigation.tsx`:
```tsx
<Link to="/pricing">Pricing</Link>
```

### Styling Patterns

**Use Tailwind utilities:**
```tsx
<div className="container mx-auto px-4 py-16">
  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
    Heading
  </h2>
</div>
```

**Use cn() for conditional classes:**
```tsx
import { cn } from "@/lib/utils";

<button className={cn(
  "px-4 py-2 rounded-md",
  isPrimary && "bg-primary text-white",
  isSecondary && "bg-secondary text-white"
)}>
  Button
</button>
```

**Use CSS variables for colors:**
```tsx
className="bg-primary text-primary-foreground hover:bg-primary/90"
```

### Animation Patterns

**Staggered animations:**
```tsx
{items.map((item, index) => (
  <div
    key={item.id}
    className="animate-fade-in"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    {item.content}
  </div>
))}
```

**Smooth transitions:**
```tsx
className="transition-all duration-300 hover:scale-105"
```

### Form Implementation

**Using react-hook-form + zod:**
```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", name: "" },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Form fields */}
      </form>
    </Form>
  );
}
```

### Image Handling

**Assets location:**
- Place images in `src/assets/`
- Import in components:
```tsx
import heroImage from "@/assets/hero-bg.jpg";

<img src={heroImage} alt="Description" />
```

**Optimization:**
- Compress images before adding
- Use WebP format when possible
- Provide alt text for accessibility

---

## What's Not Implemented (Roadmap)

### Missing Pages
According to [website-design-brief.md](website-design-brief.md), these pages need to be created:

- `/features` or `/product` - Detailed product information
- `/pricing` - Pricing tiers and plans
- `/about` - Company story, team, vision
- `/contact` - Contact form and information
- `/blog` or `/resources` - Content hub (optional)
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/security` - Security practices

### Missing Functionality

**Forms:**
- No functional form submissions
- All CTA buttons are non-functional
- Need form backend/API integration
- Need email service integration

**Sections:**
- No testimonials/case studies section
- No customer logo social proof band
- No pricing teaser on homepage
- No video demo modal/player

**Integrations:**
- No analytics tracking (Google Analytics, etc.)
- No CRM integration (HubSpot, Salesforce)
- No live chat widget
- No email newsletter signup functionality
- No early access program signup

**Technical:**
- No API client configured
- No environment variables setup
- No deployment configuration
- No CI/CD pipeline

---

## Development Workflow

### Available Scripts

```bash
# Start dev server on http://localhost:8080
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

### Environment Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to `http://localhost:8080`

### Code Style

**TypeScript:**
- Use functional components with hooks
- Prefer named exports for components
- Use TypeScript types (not `any`)
- Use interfaces for props

**React:**
- One component per file
- Use destructured props
- Keep components focused and small
- Use custom hooks for reusable logic

**Tailwind:**
- Use utility classes over custom CSS
- Use `cn()` utility for conditional classes
- Follow mobile-first responsive design
- Use Tailwind's built-in spacing scale

**File Naming:**
- Components: PascalCase (e.g., `HeroSection.tsx`)
- Utilities: kebab-case (e.g., `use-mobile.tsx`)
- Pages: PascalCase (e.g., `Index.tsx`)

---

## Key Reference Files

### Must-Read Files

1. **[website-design-brief.md](website-design-brief.md)** (710 lines)
   - Complete design specification
   - Brand guidelines
   - Content strategy
   - All page wireframes
   - Multi-product vision

2. **[src/index.css](src/index.css)**
   - CSS variables for theme
   - Global styles
   - Tailwind directives

3. **[tailwind.config.ts](tailwind.config.ts)**
   - Custom color system
   - Animation definitions
   - Theme extensions

4. **[components.json](components.json)**
   - shadcn/ui configuration
   - Path aliases

### Key Component References

**Navigation patterns:**
- [src/components/Navigation.tsx](src/components/Navigation.tsx:1-150)

**Section layouts:**
- [src/components/Features.tsx](src/components/Features.tsx:1-200)
- [src/components/Hero.tsx](src/components/Hero.tsx:1-150)

**UI components usage:**
- Check any file in `src/components/ui/` for patterns

---

## Important Context

### Business Context

**Kebi AI LLC:**
- Early-stage automotive SaaS startup
- Founded to solve operational challenges in automotive industry
- AI and data analytics focused
- Multi-product vision from day one

**Vehix (Current Product):**
- Vehicle recall management platform
- Target: Automotive dealerships
- Key features: Geographic visualization, AI routing, real-time tracking
- B2B SaaS model (demo-driven sales)

**Future Products:**
- Inventory optimization
- Service scheduling
- Fleet management
- Parts procurement analytics
- Customer experience tools

### Design Philosophy

**Multi-Product Strategy:**
- Focus on Vehix NOW (it's what we're selling)
- Subtly establish Kebi AI as multi-product company
- Plant seeds for future product expansion
- Don't dilute current offering with vague future promises

**Where to mention future products:**
- About page (prominent)
- Footer "Products" section
- Optional homepage section (brief)
- Newsletter signup messaging

**Where NOT to mention:**
- Hero headline (focus on Vehix)
- Primary product descriptions
- Pricing page

### Conversion Focus

**Primary CTA:** "Request Demo" / "Schedule a Demo"
- Most effective for B2B SaaS
- Used throughout site
- Golden Amber color

**Secondary CTAs:**
- "Watch Demo Video"
- "Contact Sales"
- "View Features"

**Trust Signals:**
- Social proof (customer count, metrics)
- Industry credibility (dealership logos if available)
- Security mentions (critical for vehicle data)
- Compliance (NHTSA, OEM standards)

---

## Next Steps for Development

### Immediate Priorities

1. **Add Multi-Page Routing:**
   - Create `/pricing` page
   - Create `/about` page with product roadmap
   - Create `/contact` page with form
   - Update all navigation links

2. **Implement Functional Forms:**
   - Demo request form with validation
   - Contact form with email integration
   - Newsletter signup (if desired)
   - Early access program signup

3. **Add Missing Homepage Sections:**
   - Testimonials/case studies (if content available)
   - Customer logo social proof band
   - Pricing teaser

4. **Integration Setup:**
   - Add Google Analytics or alternative
   - Configure email service (Resend, SendGrid, etc.)
   - Optional: Add live chat widget
   - Optional: CRM integration

### Medium-Term Enhancements

5. **Create Legal Pages:**
   - Privacy policy
   - Terms of service
   - Security practices page

6. **Add Demo Video Modal:**
   - Implement video player component
   - Connect to "Watch Demo Video" CTAs

7. **SEO Optimization:**
   - Add structured data (Schema.org)
   - Create XML sitemap
   - Optimize meta descriptions per page
   - Add Open Graph images

8. **Performance Optimization:**
   - Image optimization (convert to WebP)
   - Implement lazy loading
   - Code splitting for routes
   - Analyze bundle size

### Long-Term Considerations

9. **Blog/Resources Section:**
   - If content strategy exists
   - Article templates
   - Category/tag system

10. **Advanced Features:**
    - Interactive product demo
    - ROI calculator
    - Comparison tool vs competitors
    - Customer portal/dashboard preview

11. **Multi-Product Expansion:**
    - When new products launch
    - Product switcher navigation
    - Product hub page
    - Cross-product integration messaging

---

## Troubleshooting

### Common Issues

**Tailwind classes not applying:**
- Check `tailwind.config.ts` includes correct content paths
- Ensure you're using valid Tailwind classes
- Use `cn()` utility for conditional classes

**shadcn/ui component not found:**
- Check component is installed: `npx shadcn@latest add [component]`
- Verify path aliases in `tsconfig.app.json`
- Check import statement uses `@/components/ui/`

**Build errors:**
- Run `npm run lint` to check for linting errors
- Verify all imports are correct
- Check TypeScript errors in IDE

**Images not loading:**
- Verify image is in `src/assets/`
- Check import path is correct
- Ensure image format is supported (jpg, png, svg, webp)

### Development Tips

**Hot reload not working:**
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear browser cache
- Check for syntax errors

**Slow build times:**
- Check bundle size: `npm run build` and analyze output
- Consider lazy loading for large components
- Optimize image sizes

**TypeScript errors:**
- Install type definitions: `npm install -D @types/[package]`
- Check `tsconfig.app.json` configuration
- Use `// @ts-ignore` sparingly as last resort

---

## Additional Resources

### Documentation Links

- **React**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Vite**: https://vite.dev/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/
- **Radix UI**: https://www.radix-ui.com/
- **React Hook Form**: https://react-hook-form.com/
- **Zod**: https://zod.dev/
- **TanStack Query**: https://tanstack.com/query/latest
- **Lucide Icons**: https://lucide.dev/icons/

### Design Inspiration

Reference these modern SaaS sites (mentioned in design brief):
- Notion.so - Clean, illustration-heavy
- Linear.app - Minimalist, sleek
- Stripe.com - Clear hierarchy, smooth animations
- Framer.com - Modern, gradient accents
- Vercel.com - Excellent typography
- Retool.com - B2B focused feature displays

### Automotive Context

**Remember:**
- Target audience values efficiency and ROI
- Use automotive terminology appropriately (DMS, OEM, recalls)
- Focus on safety, compliance, and reliability
- Professional but not overly "techy"
- Show product in dealership context

---

## Contact & Support

**Project Owner:** Kebi AI LLC

**For Development Questions:**
- Refer to this document first
- Check [website-design-brief.md](website-design-brief.md) for design decisions
- Review component examples in `src/components/`

**For Design Questions:**
- Consult [website-design-brief.md](website-design-brief.md)
- Follow established patterns in existing components
- Maintain brand consistency (colors, typography, tone)

---

**Last Updated:** October 30, 2025
**Document Version:** 1.0
**Next Review:** After multi-page implementation
