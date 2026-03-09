# ⚛️ React SDE Curriculum

A structured roadmap to grow from foundational React knowledge to senior-level frontend engineering.

---

# 🟢 PHASE 1 — Core React Foundations

---

## Assignment 1: Project Setup + Component Basics  
🎯 Understand rendering & structure.

### Tasks
1. Set up project with Vite + React.
2. Create reusable components:
   - Header
   - Button
   - Card
3. Pass:
   - props
   - children
4. Create a basic layout structure.

### Goal
Develop clarity around component composition.

---

## Assignment 2: State & Controlled Inputs  
🎯 Manage UI state correctly.

### Tasks
1. Build a counter.
2. Create a controlled form:
   - name
   - email
3. Validate inputs.
4. Reset form properly.

### Goal
Deep understanding of controlled components.

---

## Assignment 3: Lists & Derived State  
🎯 Render dynamic data safely.

### Tasks
1. Build a todo list.
2. Add:
   - create
   - delete
   - toggle complete
3. Avoid using array index as key.
4. Compute derived values:
   - completed count
   - total count

### Goal
Understand state-driven UI rendering.

---

# 🟡 PHASE 2 — Effects & Data Fetching

---

## Assignment 4: useEffect + API Integration  
🎯 Handle async data properly.

### Tasks
1. Fetch users from an API.
2. Show:
   - loading
   - error
   - data
3. Cancel previous request using AbortController.
4. Refetch on dependency change.

### Goal
Master correct side-effect handling.

---

## Assignment 5: Debounced Search  
🎯 Avoid excessive API calls.

### Tasks
1. Create a search input.
2. Debounce input by 300ms.
3. Display number of API calls executed.
4. Handle rapid typing gracefully.

### Goal
Understand performance-conscious user input handling.

---

## Assignment 6: Custom Hook Extraction  
🎯 Reuse logic cleanly.

### Tasks
1. Extract:
   - useDebounce
   - useFetch
2. Ensure:
   - proper cleanup
   - correct dependency handling
3. Use hooks in multiple components.

### Goal
Separate business logic from UI.

---

# 🟠 PHASE 3 — Routing & Authentication

---

## Assignment 7: React Router  
🎯 Implement SPA routing.

### Tasks
1. Create routes:
   - /
   - /users
   - /users/:id
2. Handle not-found route.
3. Add navigation menu.

### Goal
Understand client-side routing patterns.

---

## Assignment 8: Authentication Flow  
🎯 Implement protected UI patterns.

### Tasks
1. Create:
   - Login page
   - Protected profile route
2. Store session in Context.
3. Redirect unauthorized users.
4. Persist session using localStorage.

### Goal
Understand guarded route architecture.

---

# 🔵 PHASE 4 — State Management & Architecture

---

## Assignment 9: Context vs Global Store  
🎯 Avoid prop drilling and model state properly.

### Tasks
1. Create Theme context.
2. Toggle light/dark theme.
3. Refactor part of the app using:
   - Redux Toolkit OR Zustand
4. Compare:
   - When to use Context
   - When to use a global store

### Goal
Develop state modeling maturity.

---

## Assignment 10: Optimizing Re-renders  
🎯 Build performance awareness.

### Tasks
1. Build a dashboard containing:
   - list
   - stats
2. Identify unnecessary renders.
3. Apply:
   - React.memo
   - useMemo
   - useCallback
4. Measure improvement using React DevTools Profiler.

### Goal
Understand rendering optimization tradeoffs.

---

# 🟣 PHASE 5 — Advanced UI Patterns

---

## Assignment 11: Modal with Portal  
🎯 Implement proper overlay rendering.

### Tasks
1. Render modal using a portal.
2. Close modal via:
   - ESC
   - backdrop click
3. Prevent background scroll.
4. Trap focus inside modal.

### Goal
Master layered UI behavior.

---

## Assignment 12: Form Handling with React Hook Form  
🎯 Implement real-world form management.

### Tasks
1. Use React Hook Form.
2. Integrate Zod or Yup validation.
3. Show field-level errors.
4. Handle async submission.

### Goal
Build production-grade forms.

---

## Assignment 13: Infinite Scroll with Virtualization  
🎯 Efficiently render large lists.

### Tasks
1. Use react-window.
2. Fetch paginated data.
3. Load more on scroll.
4. Keep DOM nodes minimal.

### Goal
Understand scalable rendering patterns.

---

# 🔴 PHASE 6 — Production Readiness

---

## Assignment 14: Error Boundaries  
🎯 Prevent app-wide crashes.

### Tasks
1. Create an error boundary component.
2. Simulate a crash in a child component.
3. Display fallback UI.
4. Log error information.

### Goal
Improve runtime resilience.

---

## Assignment 15: Code Splitting & Lazy Loading  
🎯 Improve performance via bundle control.

### Tasks
1. Use React.lazy + Suspense.
2. Lazy load routes.
3. Show fallback loader.
4. Analyze bundle size impact.

### Goal
Understand bundle optimization basics.

---

## Assignment 16: Testing (RTL + Vitest/Jest)  
🎯 Test UI behavior correctly.

### Tasks
1. Write tests for:
   - form submission
   - list rendering
   - protected route
2. Mock API calls.
3. Test loading and error states.

### Goal
Build confidence in UI correctness.

---

# 🟤 PHASE 7 — Advanced Data Layer & Server State

---

## Assignment 17: TanStack Query Fundamentals  
🎯 Understand server-state vs client-state.

### Tasks
1. Replace manual useEffect fetch with TanStack Query.
2. Implement:
   - useQuery
   - loading / error / success states
3. Enable:
   - refetch on window focus
   - staleTime
4. Inspect cache using Devtools.

### Goal
Understand caching lifecycle.

---

## Assignment 18: Optimistic Updates  
🎯 Make UI feel instant.

### Tasks
1. Build todo mutation.
2. Apply optimistic update.
3. Rollback on error.
4. Invalidate query properly.

### Goal
Master mutation lifecycle.

---

## Assignment 19: Pagination vs Infinite Query  
🎯 Understand data windowing.

### Tasks
1. Implement paginated users table.
2. Implement infinite scroll version.
3. Compare:
   - memory usage
   - UX tradeoffs
4. Prefetch next page.

### Goal
Understand scalable API consumption.

---

## Assignment 20: WebSocket Integration  
🎯 Real-time state sync.

### Tasks
1. Connect to WebSocket.
2. Update UI on server push.
3. Handle:
   - reconnect logic
   - cleanup on unmount
4. Prevent duplicate state entries.

### Goal
Manage live data safely.

---

# 🟫 PHASE 8 — Architecture & Scalability

---

## Assignment 21: Feature-Based Folder Architecture  
🎯 Design scalable structure.

### Tasks
1. Refactor app into:
   - features/
   - shared/
   - entities/
2. Remove cross-feature imports.
3. Create index barrel exports.
4. Document structure reasoning.

### Goal
Think like an architect.

---

## Assignment 22: Build a Headless Component  
🎯 Separate logic from UI.

### Tasks
1. Build headless dropdown.
2. Expose:
   - state
   - handlers
3. Create two different UI implementations.
4. Avoid styling inside logic layer.

### Goal
Adopt reusability mindset.

---

## Assignment 23: Compound Component Pattern  
🎯 Advanced composition.

### Tasks
1. Build:
   - `<Tabs>`
   - `<Tabs.List>`
   - `<Tabs.Panel>`
2. Share internal state via context.
3. Support controlled and uncontrolled modes.
4. Prevent invalid usage.

### Goal
Design clean component APIs.

---

## Assignment 24: Build Internal UI Library  
🎯 Production component thinking.

### Tasks
1. Extract Button, Input, Modal into a package.
2. Add:
   - variants
   - sizes
3. Document with Storybook.
4. Add basic visual regression tests.

### Goal
Think at design-system level.

---

# 🟪 PHASE 9 — SSR, Hydration & Modern React

---

## Assignment 25: Next.js SSR vs CSR  
🎯 Understand rendering strategies.

### Tasks
1. Build page using:
   - Server-side rendering
   - Client-side rendering
2. Compare:
   - HTML output
   - network waterfall
3. Inspect hydration process.
4. Measure LCP difference.

### Goal
Clarify rendering mental models.

---

## Assignment 26: React Server Components  
🎯 Separate server and client logic.

### Tasks
1. Move data fetching to server component.
2. Keep interactivity in client component.
3. Inspect bundle size reduction.
4. Identify what cannot run on server.

### Goal
Understand server-client boundaries.

---

## Assignment 27: Streaming UI  
🎯 Improve perceived performance.

### Tasks
1. Add Suspense boundaries.
2. Simulate slow data.
3. Stream partial UI.
4. Avoid waterfall requests.

### Goal
Master progressive rendering.

---

# 🔐 PHASE 10 — Security & Accessibility

---

## Assignment 28: XSS Simulation & Prevention  
🎯 Build frontend security awareness.

### Tasks
1. Render user HTML using dangerouslySetInnerHTML.
2. Inject malicious script.
3. Fix using sanitization.
4. Add CSP meta configuration.

### Goal
Understand real attack vectors.

---

## Assignment 29: Accessibility Audit  
🎯 Production-ready accessibility.

### Tasks
1. Add:
   - ARIA labels
   - roles
   - alt text
2. Enable full keyboard navigation.
3. Trap focus properly in modal.
4. Run Lighthouse accessibility audit.

### Goal
Engineer inclusive interfaces.

---

## Assignment 30: Token Storage Tradeoffs  
🎯 Auth security modeling.

### Tasks
1. Compare:
   - localStorage
   - httpOnly cookies
2. Simulate XSS scenario.
3. Implement CSRF-safe flow.
4. Document tradeoffs.

### Goal
Think in security architecture terms.

---

# 📊 PHASE 11 — Performance Engineering

---

## Assignment 31: Diagnose Render Bottleneck  
🎯 Profiling skills.

### Tasks
1. Create heavy list rendering.
2. Use React DevTools Profiler.
3. Identify wasted renders.
4. Optimize with memo strategy.
5. Compare flamegraph before and after.

### Goal
Debug like a senior engineer.

---

## Assignment 32: Bundle Optimization  
🎯 Reduce JavaScript payload.

### Tasks
1. Analyze bundle with analyzer.
2. Identify large dependencies.
3. Replace heavy library.
4. Implement route-level code splitting.
5. Reduce bundle size by at least 30%.

### Goal
Understand performance tradeoffs.

---

## Assignment 33: Avoid Waterfall Fetching  
🎯 Improve network efficiency.

### Tasks
1. Create dependent API chain.
2. Identify waterfall issue.
3. Refactor to parallel queries.
4. Measure load improvement.

### Goal
Develop network performance awareness.

---

# 🧠 PHASE 12 — Frontend System Design

---

## Assignment 34: Design Real-Time Dashboard  
🎯 Architecture thinking.

### Tasks
1. Combine:
   - polling
   - WebSocket
   - cache
2. Prevent data inconsistency.
3. Handle reconnect edge cases.
4. Document architecture diagram.

### Goal
Build system design clarity.

---

## Assignment 35: Multi-Tenant Frontend  
🎯 Enterprise scenario modeling.

### Tasks
1. Support dynamic themes per tenant.
2. Inject runtime configuration.
3. Avoid full rebuild per tenant.
4. Isolate tenant-level state.

### Goal
Design scalable frontend architecture.

---

## Assignment 36: Micro-Frontend Prototype  
🎯 Large-organization architecture patterns.

### Tasks
1. Split app into two independent builds.
2. Integrate via Module Federation.
3. Share common dependencies.
4. Handle version mismatch.

### Goal
Think at enterprise scale.

---

# 🏁 FINAL CAPSTONE PROJECT

---

## Full React Dashboard Application  
🎯 Integrate all major concepts into one production-style application.

### Build
- Authentication flow
- Protected routes
- CRUD list
- API integration
- Pagination
- Search with debounce
- Modal forms
- Global theme
- Error boundary
- Code splitting
- Basic tests
- Server-state caching
- Performance optimizations

### Requirements
- Clean feature-based folder structure
- Clear separation of UI and logic
- Reusable hooks
- Minimal unnecessary re-renders
- Proper loading and error states
- Accessibility compliance
- Basic performance audit

### Goal
Demonstrate senior-level frontend engineering maturity.