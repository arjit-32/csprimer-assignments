# 🎨 Figma + UI/UX for Developers

# SECTION 1 — Figma Fundamentals for Developers

## Assignment 1: Figma File Inspection Mastery

🎯 Goal: Learn to read Figma like a dev.

Tasks:
- Open any public Figma file.
- Inspect:
  - Spacing (8px grid?)
  - Font family, weight, size
  - Color styles
  - Auto-layout usage
  - Component variants
- Export assets correctly (SVG vs PNG).

Deliverable:
- Document design tokens (colors, spacing, typography).

---

## Assignment 2: Pixel-Accurate Implementation

🎯 Goal: Convert Figma → React.

Tasks:
- Choose one page.
- Implement:
  - Exact spacing
  - Exact font hierarchy
  - Responsive behavior
- Avoid magic numbers.
- Use reusable components.

Bonus:
- Use Tailwind or CSS variables for tokens.

---

# SECTION 2 — Layout Systems & Responsiveness

## Assignment 3: Build Layout from Scratch

🎯 Goal: Understand layout thinking.

Design & implement:
- Navbar
- Sidebar
- Content grid
- Footer

Constraints:
- Fully responsive.
- Mobile-first.
- No hardcoded widths.

Explain:
- Why flexbox vs grid?
- Breakpoint choices.

---

## Assignment 4: Auto Layout Thinking

🎯 Goal: Think like Figma auto-layout.

Tasks:
- Recreate dynamic card component.
- Support:
  - Long text
  - Short text
  - Empty state
- Avoid layout breakage.

---

# SECTION 3 — UX Fundamentals for Engineers

## Assignment 5: UX Heuristic Audit

🎯 Goal: Develop product sense.

Pick a real SaaS dashboard.

Evaluate:
- Clarity
- Visual hierarchy
- CTA prominence
- Error states
- Empty states
- Loading states

Write:
- 5 UX improvements.

---

## Assignment 6: Improve a Bad Form

🎯 Goal: Practical UX.

Design a form with:
- 8+ fields
- Validation
- Errors
- Helper text

Improve:
- Reduce cognitive load
- Better field grouping
- Inline validation
- Accessible labels

Explain decisions.

---

# SECTION 4 — Accessibility (CRITICAL)

## Assignment 7: WCAG Audit

🎯 Goal: Accessibility maturity.

Tasks:
- Check color contrast ratio.
- Add:
  - Proper labels
  - ARIA roles
  - Keyboard navigation
- Ensure:
  - Tab order works
  - Focus states visible

Use Lighthouse or axe.

---

## Assignment 8: Accessible Modal

🎯 Goal: Real-world component.

Build modal with:
- Focus trap
- ESC close
- Backdrop click
- aria-modal
- Role="dialog"

Test keyboard-only flow.

---

# SECTION 5 — Design Systems Thinking

## Assignment 9: Create a Mini Design System

🎯 Goal: Think in reusable UI patterns.

Define:
- Color tokens
- Typography scale
- Spacing scale
- Button variants
- Input variants

Implement:
- `<Button />`
- `<Input />`
- `<Card />`
- `<Badge />`

Explain:
- Why consistent spacing matters.
- Why design tokens reduce tech debt.

---

## Assignment 10: Dark Mode Strategy

🎯 Goal: Theming system.

Implement:
- Light/dark toggle
- CSS variables
- No duplicated styles

Explain:
- Why not hardcode colors.
- Why theme tokens are scalable.

---

# SECTION 6 — Product-Level Thinking

## Assignment 11: Empty, Loading & Error States

🎯 Goal: Professional polish.

For one CRUD page:

Add:
- Skeleton loaders
- Error retry
- Helpful empty state with CTA

Explain:
- Why empty state is opportunity, not blank.

---

## Assignment 12: UX for Performance

🎯 Goal: Perceived performance.

Tasks:
- Add optimistic updates.
- Add debounce for search.
- Add disabled state during submit.
- Add progress indicators.

Explain:
- Why perceived speed > actual speed.

---

# SECTION 7 — Collaboration with Designers

## Assignment 13: Translate Figma to Component API

🎯 Goal: Communication skill.

Take one Figma component (e.g., Button).

Define:
- Props API:
  - variant
  - size
  - disabled
  - iconLeft
  - loading

Explain:
- Why component API should match design variants.

---

## Assignment 14: Push Back on Design

🎯 Goal: Senior-level thinking.

Pick a design that:
- Breaks responsiveness
- Requires 10 API calls
- Is inaccessible

Propose:
- Technical constraints
- Alternative UX
- Trade-offs

Write explanation like you’re replying in Slack.

---

# SECTION 8 — Real Product Assignment

## Assignment 15: Design & Build an Internal Admin Dashboard

Features:
- Sidebar navigation
- Table with pagination
- Search + filter
- Modal edit
- Toast notifications
- Error handling
- Responsive layout
- Accessible components

Constraints:
- Clean design system
- No inline styles
- Proper UX states

Deliver:
- Short design rationale.