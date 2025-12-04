# Design Guidelines: Cosmic Restaurant Experience

## Design Approach

**Reference-Based Approach** drawing from premium restaurant websites (Noma, Eleven Madison Park) combined with sci-fi interface aesthetics (Interstellar UI, sci-fi dashboard patterns). This creates an immersive dining experience that feels otherworldly yet sophisticated.

## Typography System

**Primary Font**: Space Grotesk (Google Fonts) - geometric, modern, tech-forward
**Secondary Font**: Playfair Display - elegant serif for menu item names and headers

**Hierarchy**:
- Hero headline: 4xl-6xl, bold weight, tracking-wide
- Section headers: 3xl-4xl, semibold
- Menu item names: 2xl, Playfair Display
- Body text: base-lg, normal weight
- Captions/prices: sm, medium weight

## Layout System

**Spacing Units**: Tailwind units of 4, 8, 12, 16, 24 (p-4, mb-8, gap-12, py-16, mt-24)

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Menu grid: max-w-6xl
- Text content: max-w-2xl for readability

## Core Page Structure

### Hero Section (80vh)
- Full-viewport animated 3D space background with Three.js particle system
- Centered restaurant name and tagline layered over cosmic scene
- Dual CTAs: "View Menu" (primary) and "Login" (secondary with blurred background)
- Subtle scroll indicator at bottom

### Navigation
- Fixed header with glass-morphism effect (backdrop blur)
- Logo left, navigation links center, login/account right
- Sticky on scroll with increased blur depth

### Menu Section
- Category tabs with horizontal scroll on mobile
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each menu item card includes:
  - Full-bleed food photography (aspect-ratio-4/3)
  - Item name (Playfair Display, prominent)
  - Description (2-3 lines, restrained)
  - Price (bottom-right, medium emphasis)
  - Favorite icon (top-right corner for logged-in users)

### Authentication Modal
- Centered overlay with cosmic particle backdrop
- Glass-morphism card with backdrop-blur
- Replit Auth integration buttons stacked vertically
- Each button with provider icon + label
- Smooth fade-in entrance animation

### User Dashboard (Post-Login)
- Two-column layout: sidebar navigation (30%) + content area (70%)
- Sidebar includes: profile summary, order history, favorites, settings
- Content cards with consistent card treatment throughout

## Component Library

### Cards
- Subtle borders with increased border-radius (rounded-xl to rounded-2xl)
- Consistent padding: p-6 to p-8
- Hover state: subtle lift (transform translate-y)
- Shadow depth increases on interaction

### Buttons
- Primary: Large touch targets (px-8 py-4), rounded-full
- Secondary: Outlined style with backdrop-blur on image backgrounds
- Icon buttons: Circular, consistent 48px touch target
- All buttons: Built-in hover/active states, no custom interactions needed

### Forms
- Generous spacing between fields (gap-6)
- Full-width inputs with padding p-4
- Floating labels or top-aligned labels
- Clear focus states with ring treatment

### Menu Item Grid
- Responsive: 1 column mobile, 2 tablet, 3 desktop
- Consistent gap-8 between items
- Cards maintain aspect ratio across breakpoints
- Lazy-load images for performance

## Images

**Required Images**:
1. **Hero Background**: Large cosmic scene with nebula, stars, and depth - serves as animated 3D canvas backdrop (full viewport)
2. **Menu Items** (12-16 images): High-quality food photography for each menu item - consistent lighting and styling, aspect-ratio-4/3
3. **Restaurant Interior** (optional section): 2-3 images showcasing ambiance for "About" section

**Image Treatment**:
- Hero: Serves as Three.js texture/scene background, not static image
- Menu items: Sharp, well-lit food photography with generous negative space
- All images: Optimized WebP format, lazy loading

## Additional Sections

### About Section
- Two-column: left text (restaurant story), right image (interior/chef)
- Asymmetric layout with staggered alignment

### Testimonials
- Horizontal scroll carousel on mobile, 3-column grid on desktop
- Customer quotes with star ratings
- Minimal card treatment, emphasis on content

### Footer
- Four-column layout: About, Menu Links, Contact, Social
- Newsletter signup form integrated
- Operating hours and location information
- Social media icons with consistent sizing

## Animations

**Strategic Use Only**:
- Hero: Continuous slow particle drift (Three.js)
- Menu cards: Subtle hover lift
- Page transitions: Smooth fade between views
- Modal entrance: Gentle scale + fade

**Performance**: Prioritize 60fps, use CSS transforms, leverage GPU acceleration

## Viewport Management

- Hero: 80vh for impact, not forced 100vh
- Content sections: Natural height with py-16 to py-24
- Menu grid: Auto-flow based on content
- Maintain consistent vertical rhythm with spacing-16 between major sections

This design creates an immersive cosmic dining experience that balances visual spectacle with functional menu browsing and seamless authentication.