# ⚛️ React SDE Curriculum 


# 🟢 PHASE 1 — Core React Foundations

---

## Assignment 1: Project Setup + Component Basics
🎯 Understand rendering & structure.

Tasks:
1. Setup with Vite + React.
2. Create reusable components:
   - Header
   - Button
   - Card
3. Pass:
   - props
   - children
4. Create basic layout structure.

Goal:
Component composition clarity.

---

## Assignment 2: State & Controlled Inputs
🎯 Manage UI state correctly.

Tasks:
1. Build a counter.
2. Create controlled form:
   - name
   - email
3. Validate inputs.
4. Reset form properly.

Goal:
Understand controlled components deeply.

---

## Assignment 3: Lists & Derived State
🎯 Render dynamic data safely.

Tasks:
1. Build todo list.
2. Add:
   - create
   - delete
   - toggle complete
3. Avoid using array index as key.
4. Compute derived values:
   - completed count
   - total count

Goal:
Understand state-driven UI.

---

# 🟡 PHASE 2 — Effects & Data Fetching

---

## Assignment 4: useEffect + API Integration
🎯 Handle async data.

Tasks:
1. Fetch users from API.
2. Show:
   - loading
   - error
   - data
3. Cancel previous request (AbortController).
4. Refetch on dependency change.

Goal:
Correct side-effect handling.

---

## Assignment 5: Debounced Search
🎯 Avoid excessive API calls.

Tasks:
1. Create search input.
2. Debounce 300ms.
3. Show how many API calls executed.
4. Handle rapid typing gracefully.

---

## Assignment 6: Custom Hook Extraction
🎯 Reuse logic cleanly.

Tasks:
1. Extract:
   - useDebounce
   - useFetch
2. Ensure:
   - proper cleanup
   - dependency handling
3. Use in multiple components.

Goal:
Separate logic from UI.

---

# 🟠 PHASE 3 — Routing & Auth

---

## Assignment 7: React Router
🎯 SPA routing.

Tasks:
1. Create routes:
   - /
   - /users
   - /users/:id
2. Handle not-found route.
3. Add navigation menu.

---

## Assignment 8: Authentication Flow
🎯 Protected UI patterns.

Tasks:
1. Create:
   - Login page
   - Protected profile route
2. Store session in:
   - Context
3. Redirect unauthorized users.
4. Persist session using localStorage.

Goal:
Understand guarded routes.

---

# 🔵 PHASE 4 — State Management & Architecture

---

## Assignment 9: Context vs Global Store
🎯 Avoid prop drilling.

Tasks:
1. Create Theme context.
2. Toggle light/dark theme.
3. Refactor part of app using:
   - Redux Toolkit OR Zustand.
4. Compare:
   - When to use context
   - When to use store

Goal:
State modeling maturity.

---

## Assignment 10: Optimizing Re-renders
🎯 Performance awareness.

Tasks:
1. Build a dashboard with:
   - list
   - stats
2. Identify unnecessary renders.
3. Apply:
   - React.memo
   - useMemo
   - useCallback
4. Measure improvement using React DevTools.

---

# 🟣 PHASE 5 — Advanced UI Patterns

---

## Assignment 11: Modal with Portal
🎯 Proper overlay rendering.

Tasks:
1. Render modal using portal.
2. Close via:
   - ESC
   - backdrop
3. Prevent background scroll.
4. Trap focus inside modal.

---

## Assignment 12: Form Handling with React Hook Form
🎯 Real-world form management.

Tasks:
1. Use React Hook Form.
2. Integrate Zod/Yup validation.
3. Show field-level errors.
4. Handle async submission.

---

## Assignment 13: Infinite Scroll with Virtualization
🎯 Efficient large lists.

Tasks:
1. Use react-window.
2. Fetch paginated data.
3. Load more on scroll.
4. Keep DOM nodes minimal.

---

# 🔴 PHASE 6 — Production Readiness

---

## Assignment 14: Error Boundaries
🎯 Prevent app crashes.

Tasks:
1. Create error boundary component.
2. Simulate crash in child.
3. Show fallback UI.
4. Log error.

---

## Assignment 15: Code Splitting & Lazy Loading
🎯 Improve performance.

Tasks:
1. Use React.lazy + Suspense.
2. Lazy load routes.
3. Show fallback loader.
4. Analyze bundle size.

---

## Assignment 16: Testing (RTL + Vitest/Jest)
🎯 Test UI properly.

Tasks:
1. Write tests for:
   - form submission
   - list rendering
   - protected route
2. Mock API calls.
3. Test error states.

---

# 🏁 FINAL PROJECT

---

## Assignment 17: Full React Dashboard App

Build:
- Auth flow
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

Requirements:
- Clean folder structure
- Separation of UI & logic
- Reusable hooks
- Minimal unnecessary re-renders
- Proper loading & error states

---
