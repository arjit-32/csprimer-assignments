# Foundations
Foundational concepts to get started with React.

## Assignment-1: Create a React App  
_🎯 Goal: Understand basic setup and rendering._

**Tasks** ->  
1. Create a project using:  
   - `create-react-app` or `vite + react`.  
2. Render:  
   - `<h1>Hello React</h1>`.  
   - A `<p>` showing today’s date.  
3. Create and render at least one reusable component.  

---

## Assignment-2: Props & Component Hierarchy  
_🎯 Goal: Understand component composition._

**Tasks** ->  
1. Create:  
   - `Header`.  
   - `Button`.  
   - `Card`.  
2. Pass:  
   - Text props.  
   - Children props.  
3. Make components display dynamic values using props.  

---

## Assignment-3: useState Basics  
_🎯 Goal: Manage component state._

**Tasks** ->  
1. Create a counter with:  
   - Increment.  
   - Decrement.  
   - Reset.  
2. Show count in the UI.  

---

## Assignment-4: Conditional Rendering  
_🎯 Goal: Render UI based on state._

**Tasks** ->  
1. Build a login toggle:  
   - Logged-in UI when authenticated.  
   - Login request UI when logged out.  

---

## Assignment-5: Lists & Keys  
_🎯 Goal: Render dynamic arrays in UI._

**Tasks** ->  
1. Create a todo list.  
2. Render todos in a list.  
3. Add delete functionality.  
4. Ensure proper React `key` usage.  

---

# Hooks and Forms
Hooks, forms, and state-sharing techniques.

## Assignment-1: Forms & Controlled Inputs  
_🎯 Goal: Handle and validate form input._

**Tasks** ->  
1. Create a form with:  
   - Text input.  
   - Email input.  
   - Dropdown select.  
2. Submit and log form data.  
3. Show validation messages.  

---

## Assignment-2: useEffect Deep Dive  
_🎯 Goal: Understand side effects and component lifecycle._

**Tasks** ->  
1. Fetch API data (placeholder or mock).  
2. Show:  
   - Loading state.  
   - Error state.  
   - Data state.  
3. Auto-refresh every 10 seconds using cleanup.  

---

## Assignment-3: Custom Hooks  
_🎯 Goal: Reuse component logic._

**Tasks** ->  
1. Build:  
   - `useToggle(initialValue)`.  
   - `useFetch(url)`.  
2. Use both hooks in components.  

---
---

## Assignment-4: React Context  
_🎯 Goal: Share state across components without prop drilling._

**Tasks** ->  
1. Create a Theme context.  
2. Support:  
   - Light theme.  
   - Dark theme.  
3. Add a button to toggle the theme globally.  

---

## Assignment-5: Performance Optimization  
_🎯 Goal: Avoid unnecessary re-renders._

**Tasks** ->  
1. Use:  
   - `React.memo`.  
   - `useCallback`.  
   - `useMemo`.  
2. Compare behavior before vs after optimization.  

---

# State and Routing
Building scalable applications with routing and state management.

## Assignment-1: React Router  
_🎯 Goal: Build a multi-page SPA._

**Tasks** ->  
1. Set up routing for:  
   - Home.  
   - About.  
   - Users.  
2. Add a dynamic route:  
   - `/users/:id`.  

---

## Assignment-2: State Management (Redux Toolkit or Zustand/MobX)  
_🎯 Goal: Learn scalable state management._

**Tasks** ->  
1. Create:  
   - Counter slice.  
   - Todo slice.  
2. Add:  
   - Selectors.  
   - Persistence (localStorage).  

---

## Assignment-3: Authentication Flow  
_🎯 Goal: Implement protected routing._

**Tasks** ->  
1. Add:  
   - Login page.  
   - Logout flow.  
2. Store user session (context or global state).  
3. Protect `/profile` route.  

---

# UI Engineering
Reusable UI components and advanced form handling.

## Assignment-1: Component Library System  
_🎯 Goal: Build reusable UI components._

**Tasks** ->  
1. Build:  
   - Button.  
   - Modal.  
   - Badge.  
   - Card.  
2. Add variations:  
   - Sizes.  
   - Styles.  
   - Icons.  
   - Disabled state.  

---

## Assignment-2: Advanced Forms (React Hook Form + Schema Validation)  
_🎯 Goal: Build real-world validated forms._

**Tasks** ->  
1. Use React Hook Form + Zod/Yup.  
2. Implement:  
   - Live validation.  
   - Field-level error messages.  
   - Form submission preview.  

---

## Assignment-3: File Upload + Preview  
_🎯 Goal: Implement media upload interactions._

**Tasks** ->  
1. Build:  
   - Drag-and-drop file area.  
   - Preview image before upload.  
   - Upload progress indicator.  

---

## Assignment-4: Infinite Scroll UI  
_🎯 Goal: Handle large lists efficiently._

**Tasks** ->  
1. Fetch paginated items.  
2. Load more as user scrolls.  
3. Add:  
   - Skeleton loading UI.  
   - End-of-list state.  

---

# Production-Ready React
Focuses on testing, deployment, and real-time communication for production-level apps.

## Assignment-1: Testing (Vitest / Jest + RTL)  
_🎯 Goal: Test UI and business logic._

**Tasks** ->  
1. Write:  
   - Unit tests.  
   - Integration tests.  
2. Mock fetch calls.  

---

## Assignment-2: Real-Time Communication (Sockets / Firebase / Subscriptions)  
_🎯 Goal: Build live-updating UI._

**Tasks** ->  
1. Create:  
   - Live chat OR live metrics dashboard.  
2. Show:  
   - Active users.  
   - Typing indicators.  

---

## Assignment-3: Production Build + Deployment  
_🎯 Goal: Deploy a production-ready React app._

**Tasks** ->  
1. Optimize bundle using:  
   - Code-splitting.  
   - Lazy-loaded routes.  
2. Deploy to:  
   - Vercel, Netlify, Render, or AWS.  

---

# Advanced Patterns & Optimization
Advanced concepts and patterns for building highly efficient and scalable applications.

## Assignment-1: Debounced Search Input  
_🎯 Objective: Learn controlled input handling with debounce to avoid excessive network calls._

**Tasks** ->  
1. Build a search input that waits (300–500ms) after typing before triggering a fetch.  
2. Display results below the input.  
3. Log or show how many fetch calls were actually made.  

---

## Assignment-2: useFetch with Cache + Revalidation  
_🎯 Objective: Create a reusable data-fetching hook with caching and automatic refresh._

**Tasks** ->  
1. Implement a `useFetch(url)` hook that:  
   - Caches prior responses in memory.  
   - Serves cached data instantly on repeated calls.  
   - Revalidates in the background and updates UI when fresh data arrives.  
2. Show loading, cached, and updated states clearly.  

---

## Assignment-3: Multi-Step Form Wizard with Persistence  
_🎯 Objective: Build a multi-step form flow without losing progress._

**Tasks** ->  
1. Create a 2–4 step form.  
2. Persist data using:  
   - LocalStorage, or  
   - Context state that survives navigation.  
3. Allow:  
   - Next/Back navigation.  
   - "Resume later" reload ability.  

---

## Assignment-4: Infinite Scroll with Virtualized List  
_🎯 Objective: Render large lists efficiently and load more data when scrolling._

**Tasks** ->  
1. Load initial chunk of data and render using virtualization (e.g., react-window or custom).  
2. On scroll near the bottom, automatically fetch the next page.  
3. Ensure only visible rows stay in the DOM.  

---

## Assignment-5: Reusable Modal Manager (Portal + Focus Trap)  
_🎯 Objective: Build accessible modals that stack and manage focus correctly._

**Tasks** ->  
1. Render modal content using a React portal.  
2. Trap focus inside the modal until closed.  
3. Support:  
   - ESC to close.  
   - Click backdrop to close.  
   - Multiple modals stacked.  

---

## Assignment-6: Undo/Redo State Management  
_🎯 Objective: Implement time-travel functionality for state changes._

**Tasks** ->  
1. Store history of state snapshots or operations.  
2. Add buttons for:  
   - Undo.  
   - Redo.  
   - Reset (optional).  
3. Apply to a simple UI (editable text, drawing tool, or form fields).  

---

## Assignment-7: Real-Time State Sync Across Browser Tabs  
_🎯 Objective: Sync data edits across tabs using browser communication APIs._

**Tasks** ->  
1. Use either:  
   - `BroadcastChannel`, or  
   - `storage` events.  
2. Update UI instantly when another tab modifies shared state.  
3. Handle conflict cases gracefully (last-write-wins is fine).  

---

## Assignment-8: Dynamic Form Builder from Schema  
_🎯 Objective: Render a form purely from a JSON schema definition._

**Tasks** ->  
1. Define a schema with fields (text, select, checkbox, etc.).  
2. Generate the form UI automatically based on the schema.  
3. Validate and submit the form without hardcoding input fields.  

---

## Assignment-9: Optimize Slow Dashboard (Memo Rules)  
_🎯 Objective: Practice performance optimization using memoization tools._

**Tasks** ->  
1. Start with a mock dashboard containing stats, tables, charts (dummy data okay).  
2. Identify re-renders using React DevTools.  
3. Apply:  
   - `React.memo()`.  
   - `useMemo()`.  
   - `useCallback()`.  
4. Measure performance before vs after.  

---

## Assignment-10: Autocomplete with Highlighted Matches  
_🎯 Objective: Build a smart autocomplete UI with substring highlighting._

**Tasks** ->  
1. Render a suggestion list based on partially typed input.  
2. Bold or style the matching portion of each suggestion.  
3. Support:  
   - Keyboard navigation (↑/↓).  
   - Enter to select.  
   - Click to select.  

---