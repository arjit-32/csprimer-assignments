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