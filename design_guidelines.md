# MAINTelligence Consulting Website - Design Guidelines

## Design Approach

**Selected Framework**: Professional B2B SaaS aesthetic drawing from Stripe's clarity, IBM Carbon's industrial credibility, and Salesforce's enterprise polish. This creates trust while maintaining modern sophistication suitable for manufacturing decision-makers.

**Core Principles**:
- Industrial credibility through clean, authoritative design
- Data-driven storytelling with prominent metrics
- Professional yet approachable tone
- Multi-language support seamlessly integrated

---

## Typography System

**Primary Font**: Inter (Google Fonts)
- Headings: 700 weight, tracking-tight
- Body: 400-500 weight, leading-relaxed
- Metrics/Numbers: 600-700 weight for emphasis

**Type Scale**:
- Hero: text-5xl to text-7xl (responsive)
- Section Headings: text-3xl to text-4xl
- Subsections: text-xl to text-2xl
- Body: text-base to text-lg
- Captions/Labels: text-sm

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Component gaps: gap-6 to gap-12
- Container max-width: max-w-7xl with px-4 to px-8

**Grid Strategy**:
- Hero: Single column, centered content
- Features/Benefits: 3-column grid (lg:grid-cols-3)
- Case Studies: 2-column layout (lg:grid-cols-2)
- Metrics: 4-column stats bar (lg:grid-cols-4)
- Implementation Process: Horizontal timeline or vertical steps

---

## Component Library

### Navigation
- Sticky header with logo, main nav links, language selector (dropdown with flags), and primary CTA button
- Language selector: Compact dropdown in top-right, supports EN/ES/DE/ZH
- Mobile: Hamburger menu with slide-out panel

### Hero Section
- Full-width hero with large industrial imagery (factory floor, machinery, or maintenance workers)
- Overlay with headline, value proposition subtext, and dual CTAs ("Schedule Consultation" + "View Case Studies")
- Subtle gradient overlay for text readability
- Buttons with backdrop-blur for elevated appearance

### Statistics Dashboard
- 4-metric horizontal bar showcasing key outcomes (ROI %, Uptime Improvement, Cost Reduction, Implementation Time)
- Large numbers (text-4xl to text-5xl) with descriptive labels
- Animated count-up on scroll (subtle)

### Feature Cards
- 3-column grid showcasing OBC route benefits
- Icon + title + 2-3 line description format
- Minimal borders, generous padding (p-6 to p-8)
- Hover: subtle elevation with shadow-lg transition

### Case Study Section
- 2-column layout alternating image/content placement
- Industry name, challenge summary, solution implemented, measurable results
- Pull quotes from factory managers
- "Read Full Case Study" link

### Implementation Process
- Visual timeline with 4-5 stages
- Step number, title, description, duration estimate
- Connected with subtle lines or progress indicators

### Contact Form
- 2-column layout: Form (left) + Information card (right with office hours, email, phone)
- Fields: Name, Company, Email, Phone, Message, Preferred Language
- Large, accessible input fields with clear labels
- Primary CTA button: "Request Consultation"

### Footer
- 3-column layout: Company info + Quick links + Contact details
- Newsletter signup with inline form
- Social links, compliance/privacy links
- Multi-language disclaimer

---

## Images

**Hero Image**: 
Large, professional photo of a modern factory floor or maintenance technician using tablet/digital device near industrial equipment. Should convey reliability, technology, and expertise. Full-width, hero height (70vh to 85vh).

**Case Study Images**:
Before/after facility photos, screenshots of MAINTelligence dashboard, team collaboration photos. Minimum 2-3 case study visuals showing real implementations.

**Feature Section Graphics**:
Optional icons or illustrations representing: preventive maintenance, route optimization, digital checklists, reliability analytics. Clean, technical style.

**Background Elements**:
Subtle diagonal lines or geometric patterns in section backgrounds to add industrial aesthetic without distraction.

---

## Key Page Sections (In Order)

1. **Hero**: Large image, value proposition, dual CTAs
2. **Trust Bar**: Client logos (4-6 major factories/brands)
3. **Statistics Dashboard**: 4 key metrics
4. **OBC Routes Overview**: What it is, why it matters (2-column text + visual)
5. **Benefits Grid**: 6 benefit cards in 3-column layout
6. **Implementation Process**: 5-step timeline
7. **Case Studies**: 2-3 detailed examples with results
8. **ROI Calculator/Interactive Element**: Simple input for factory size → estimated savings
9. **CTA Section**: Final conversion moment with strong value statement
10. **Contact Form**: Full section with form + context

---

## Interaction Patterns

- Smooth scroll between sections (scroll-smooth)
- Lazy-load images below fold
- Form validation with inline error states
- Language switcher updates all text content instantly
- Sticky CTA button appears on scroll past hero
- Minimal animations: fade-in on scroll for cards, subtle hover states only

This creates a comprehensive, trust-building presentation that showcases MAINTelligence's value through data, credibility, and clear implementation pathways.