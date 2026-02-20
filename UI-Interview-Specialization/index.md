
## Assignment-20: Advanced Floating Label Input  
_Goal: Upgrade basic form styling into a polished, production-ready floating label input._  

Tasks ->  
1. Build an input component (email or password) with:  
   - A label that floats/shrinks when the input is focused or has a value.  
   - Smooth transitions for size, position, and color.  
2. Add:  
   - Error state with shake animation + red underline.  
   - Success state (subtle color change).  
   - Password toggle icon (eye / eye-off) with icon morph animation.  
3. Ensure:  
   - Proper `label`/`for` association.  
   - Visible focus styles.  

---

## Assignment-21: Range Slider with Dual Thumbs (No Library)  
_Goal: Create a fully accessible dual-range slider (e.g., price filter)._  

Tasks ->  
1. Implement:  
   - Two thumbs (min and max).  
   - Track fill between thumbs.  
   - Tooltip(s) showing current values.  
2. Add:  
   - Mouse drag support.  
   - Keyboard support (arrow keys, Home/End).  
   - Proper ARIA roles and `aria-valuenow`, `aria-valuemin`, `aria-valuemax`.  
3. Support:  
   - RTL layout.  
   - Reasonable min/max and step.  

---

## Assignment-22: Accessible Modal with Focus Trap  
_Goal: Build a modal that looks great and is truly accessible._  

Tasks ->  
1. Create a modal with:  
   - Slide-up animation.  
   - Backdrop fade.  
   - Close button + optional close icon.  
2. Implement:  
   - Focus trap inside the modal.  
   - Close on `Esc` and backdrop click.  
   - Return focus to the trigger when closed.  
3. Add:  
   - `aria-modal="true"`, `role="dialog"`, `aria-labelledby`, `aria-describedby`.  
   - Inert/blocked background (use `inert` attribute or polyfill).  

---

## Assignment-23: Toast Notification System with Queue  
_Goal: Design a reusable toast system with animation and accessibility._  

Tasks ->  
1. Create:  
   - Toast container (bottom-right on desktop, bottom-center on mobile).  
   - Toasts that slide in and fade out.  
2. Features:  
   - Max 3 visible at once; the rest queue.  
   - Auto-dismiss with visible progress bar/timer.  
   - Pause timer on hover.  
   - Swipe-to-dismiss on mobile.  
3. Accessibility:  
   - Use `role="status"` or `role="alert"`.  
   - Ensure screen readers announce toast content.  

---

## Assignment-24: Resizable Split Pane (VS Code Style)  
_Goal: Build a layout with resizable panes like an IDE sidebar/content._  

Tasks ->  
1. Create:  
   - Two vertical panes (sidebar + main).  
   - A draggable handle between them.  
2. Behavior:  
   - Drag handle to resize with min/max width constraints.  
   - Hover preview (cursor change + subtle highlight).  
   - Smooth width transition after release.  
3. Support:  
   - Mouse + touch input.  
   - Responsive adjustments for smaller screens.  

---

## Assignment-25: Tree View / File Explorer  
_Goal: Implement a nested file tree with clean visuals and keyboard navigation._  

Tasks ->  
1. UI:  
   - Nested folders/files with indentation.  
   - Connecting guide lines like VS Code.  
   - Chevron icons that rotate on expand/collapse.  
2. Interaction:  
   - Expand/collapse via mouse click and keyboard (`Enter` / `Space`).  
   - Arrow key navigation (Up/Down/Left/Right).  
3. Accessibility:  
   - Use appropriate roles (`tree`, `treeitem`, `group`).  
   - Maintain `aria-expanded` on folders.  
   - Show focus outline that respects indentation.  

---

## Assignment-26: Dark Mode Toggle with Smooth Transitions  
_Goal: Implement theming that respects system settings and user preferences._  

Tasks ->  
1. Implement:  
   - `prefers-color-scheme` detection for default theme.  
   - Toggle button (sun/moon icon) that switches themes.  
2. Behavior:  
   - Animate color changes smoothly (background, text, borders, buttons).  
   - Avoid “flash of incorrect theme” on load.  
   - Persist user choice in `localStorage`.  
3. Bonus:  
   - Adjust images/icons via CSS filters or `picture` sources for dark mode.  

---

## Assignment-27: Text Truncation with “Show More”  
_Goal: Handle long text gracefully with progressive disclosure._  

Tasks ->  
1. Layout:  
   - Block of text truncated after ~3 lines.  
   - Gradient fade at the bottom.  
2. Interaction:  
   - “Show more” button that expands the text in place.  
   - Smooth height animation without hardcoded height values.  
   - “Show less” to collapse back.  
3. Accessibility:  
   - Use `aria-expanded`.  
   - Ensure the content remains readable with reduced motion.  

---

## Assignment-28: Container Queries Responsive Card  
_Goal: Use container queries so a card adapts to its parent width (not viewport)._  

Tasks ->  
1. Build a reusable card with:  
   - Image, title, description, actions.  
2. Behavior:  
   - Layout changes based on **card width**:  
     - Narrow: stacked (image on top).  
     - Medium: image left, text right.  
     - Wide: multi-column layout with extra metadata.  
3. Demonstrate:  
   - Cards inside both flex and grid parents.  
   - Container query usage (no media queries for the card itself).  

---

## Assignment-29: CSS-Only Carousel with Snap Points & Indicators  
_Goal: Build a horizontally scrollable carousel using only CSS._  

Tasks ->  
1. Layout:  
   - Horizontal list of slides.  
   - Use `scroll-snap` for smooth paging.  
2. Features:  
   - Dot indicators that reflect the current slide.  
   - “Infinite loop” illusion (e.g., duplicated slides at ends).  
   - Keyboard accessibility (tab and arrow keys).  
3. No JavaScript for the core sliding logic (JS allowed only for progressive enhancements if needed).  

---

## Assignment-30: Masonry Grid with Perfect Gaps (No JS)  
_Goal: Recreate a Pinterest-style layout using pure CSS._  

Tasks ->  
1. Layout:  
   - Use CSS Grid with `grid-auto-flow: dense` (or equivalent technique).  
   - Support variable card heights.  
2. Requirements:  
   - No large gaps at the bottom.  
   - Consistent horizontal and vertical gaps.  
3. Bonus:  
   - Use `aspect-ratio` and object-fit for images.  

---

## Assignment-31: Complex Dashboard Grid with Asymmetric Cards  
_Goal: Master complex dashboard layouts using Grid and subgrid._  

Tasks ->  
1. Layout:  
   - 4-column dashboard grid.  
   - Cards of varying sizes; some span 2×2 cells.  
2. Techniques:  
   - Use `grid-template-areas` or explicit placements.  
   - Use `subgrid` where supported (with fallbacks).  
   - Perfect gap alignment at all breakpoints.  
3. Content:  
   - Charts/metrics boxes (use placeholders).  
   - Activity feed and sidebar.  

---

## Assignment-32: CSS-Only Skeleton Loading States  
_Goal: Create skeleton screens with shimmer and motion._  

Tasks ->  
1. Layout:  
   - Skeleton versions of cards, avatars, text lines.  
   - Variable widths and heights to feel “real”.  
2. Animation:  
   - Pulsing background.  
   - Moving “shine” gradient across skeletons.  
3. Respect:  
   - `prefers-reduced-motion` (disable or simplify animations).  

---

## Assignment-33: Responsive Email Template (No Framework)  
_Goal: Build a bulletproof marketing email layout._  

Tasks ->  
1. Layout:  
   - Max-width ~600px, centered.  
   - Table-based layout (no flex/grid).  
   - Inline CSS only.  
2. Requirements:  
   - Bulletproof buttons (works with images off).  
   - Graceful behavior in Outlook, Gmail, Apple Mail.  
   - Dark mode support using CSS hacks/media queries.  
3. Include:  
   - Header, hero, content blocks, CTA, footer.  

---

## Assignment-34: Chrome-Style Tab Strip  
_Goal: Recreate the Chrome browser’s tab bar._  

Tasks ->  
1. Visuals:  
   - Slanted active tab shape.  
   - Pinned tabs (16px icons).  
   - Favicons inside tabs.  
   - Overflow fade effect.  
2. Interaction:  
   - Hover states with clear hit areas for the close button.  
   - Active tab highlight.  
   - Drag-to-reorder visual feedback (simulate with CSS/JS).  
3. Ensure:  
   - Good keyboard focus states.  
   - Tabs are accessible via ARIA roles.  

---

## Assignment-35: macOS Dock with Magnification & Reflection  
_Goal: Reproduce the macOS Dock behavior and look in the browser._  

Tasks ->  
1. Visuals:  
   - Row of app icons.  
   - Reflection effect below icons.  
2. Interaction:  
   - Icons magnify on hover (nonlinear easing: center icon largest).  
   - Smooth scaling of neighbors.  
   - Bouncing launch animation for an “opened” app.  
3. Layout:  
   - Dock centered and responsive.  
   - Spacing adjusts to number of icons.  

---

## Assignment-36: 60fps Parallax Scrolling (No JS)  
_Goal: Create a multi-layer parallax hero that stays performant._  

Tasks ->  
1. Layout:  
   - 5 layers (background → foreground → floating elements).  
   - Clear depth effect.  
2. Implementation:  
   - Use `transform` and `will-change` to keep 60fps.  
   - No JavaScript for the parallax effect (CSS + scroll behavior only).  
3. Respect:  
   - `prefers-reduced-motion` (reduce or disable parallax).  
   - Mobile performance.  

---

## Assignment-37: Figma-to-CSS: Pixel-Perfect Component  
_Goal: Translate a complex Figma design into pixel-perfect UI._  

Tasks ->  
1. Choose a Figma frame (e.g., dashboard widget, pricing card, or analytics tile).  
2. Recreate:  
   - Exact spacing, typography, colors, and corner radii.  
   - Shadows, borders, and states (hover, active, disabled).  
3. Validate:  
   - Overlay screenshots to compare.  
   - Adjust until nearly indistinguishable at normal zoom.  

---

## Assignment-38: Design System: Mini Utility Class Framework  
_Goal: Implement a small, Tailwind-like atomic utility system._  

Tasks ->  
1. Create utilities for:  
   - Responsive spacing (`u-px-4`, `u-md:px-8`, etc.).  
   - Fluid typography using `clamp()` (e.g., `u-text-lg`).  
2. Define:  
   - Color palette with light/dark variants (`u-bg-primary`, `u-bg-primary--dark`).  
   - Stack and cluster layout utilities (vertical stack, horizontal cluster).  
3. Accessibility:  
   - Consistent `:focus-visible` utilities.  
   - Helpers for visually hidden text.  

---

## Assignment-39: Bonus — Framer Motion-style Spring Animation in Pure CSS  
_🎯 Goal: Approximate spring physics with just CSS._  

Tasks ->  
1. Choose a simple element (button or card).  
2. Create:  
   - Press/release animation that overshoots and settles (spring-like).  
   - Use chained keyframes or multiple transitions.  
3. Make it reusable:  
   - Class-based (`.springy`) so it can be applied to other elements.  

---

## Assignment-40: Bonus — CSS-Only 3D Flip Card with Realistic Lighting  
_🎯 Goal: Build a realistic 3D card flip effect._  

Tasks ->  
1. Layout:  
   - Front and back faces of a card.  
   - Use `perspective` and `transform-style: preserve-3d`.  
2. Interaction:  
   - Flip on hover or focus.  
   - Use `backface-visibility` to hide the reverse side.  
3. Visual polish:  
   - Dynamic shadows that shift during rotation.  
   - Subtle lighting gradients to enhance depth.  

---