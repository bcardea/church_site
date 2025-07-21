# Page Templates

This folder contains 3 reusable page templates for the Lifepoint Hampton Roads website. Each template provides a different layout style while maintaining brand consistency.

## Template A - Full-Width Hero
**File:** `template-a.tsx`
**Best for:** Ministry pages, events, program overviews

**Features:**
- Full-width hero section with optional background image
- Overlay text on hero image
- Sub-navigation with simple horizontal layout
- Comprehensive content sections
- Perfect for content-heavy pages

**Example Usage:**
```tsx
<TemplateA
  title="Youth Ministry"
  subtitle="Next Generation"
  description="Developing youth who influence culture"
  heroImage="path/to/image.jpg"
  subNavItems={navItems}
  ctaText="Get Involved"
  ctaHref="/youth/signup"
>
  {/* Your content sections */}
</TemplateA>
```

## Template B - Side-by-Side Layout
**File:** `template-b.tsx`
**Best for:** Program pages, community initiatives, service-focused content

**Features:**
- Side-by-side hero layout (text + image)
- Centered sub-navigation with hover effects
- Alternating background colors for content sections
- Card-based content layout
- Great for showcasing programs and services

**Example Usage:**
```tsx
<TemplateB
  title="Community Outreach"
  subtitle="Serving Together"
  description="Making an impact locally and globally"
  heroImage="path/to/image.jpg"
  subNavItems={navItems}
  ctaText="Join Us"
  ctaHref="/outreach/volunteer"
>
  {/* Your content sections */}
</TemplateB>
```

## Template C - Bold Typography
**File:** `template-c.tsx`
**Best for:** Vision-focused pages, impact stories, mission-driven content

**Features:**
- Large, bold typography in hero section
- Dark-themed sub-navigation with accent colors
- Minimal hero with background patterns
- Featured image section below hero
- Perfect for high-impact, vision-driven content

**Example Usage:**
```tsx
<TemplateC
  title="Global Impact"
  subtitle="Changing Lives"
  description="See how God is working through our community"
  heroImage="path/to/image.jpg"
  subNavItems={navItems}
  ctaText="Learn More"
  ctaHref="/impact/stories"
>
  {/* Your content sections */}
</TemplateC>
```

## Common Props

All templates accept these props:

- `title` (required): Main page title
- `subtitle` (optional): Small text above title
- `description` (optional): Description text below title
- `heroImage` (optional): Hero section background/featured image
- `subNavItems` (required): Array of navigation items `[{label, href}]`
- `children` (required): Page content sections
- `ctaText` (optional): Call-to-action button text
- `ctaHref` (optional): Call-to-action button link

## Usage Instructions

When creating a new page:

1. Choose the appropriate template based on content type
2. Import the template component
3. Define your sub-navigation items
4. Wrap your content in the template component
5. Add your content sections as children

Example sub-navigation:
```tsx
const subNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Programs", href: "#programs" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" }
];
```

## Brand Consistency

All templates maintain:
- Consistent typography scale
- Brand color usage (elevation-* colors)
- Proper spacing and layout patterns
- Responsive design principles
- Accessibility standards