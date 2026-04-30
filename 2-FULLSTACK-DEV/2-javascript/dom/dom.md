# Practical DOM Mastery Assignments

---

# 🟢 PHASE 1 - DOM Fundamentals

## Assignment 1: DOM Selection & Basic Manipulation
🎯 Learn how to read and modify the DOM.

Tasks:
1. Select elements using:
   - getElementById
   - querySelector
   - querySelectorAll -> Traverse it and show text element
2. Modify:
   - textContent -> after 1 second
   - innerHTML
   - attributes
   - styles
3. Add a button that changes background color.
4. Toggle a class to highlight text.

---

## Assignment 2: Events & Event Handling
🎯 Master event fundamentals.

Tasks:
1. Add click, input, change events.
2. Display mouse coordinates live.
3. Toggle visibility of a section.
4. Prevent default form submission.
5. Stop event propagation example.

---

## Assignment 3: Creating & Removing Elements
🎯 Build UI dynamically.

Tasks:
1. Add item button to dynamically add new list item.
2. Add delete button to each item.
3. Clear entire list with one button.

---

# 🟡 PHASE 2 - State + UI Sync

## Assignment 4: Student Manager (Add + Render)
🎯 Connect JavaScript state to DOM.

Tasks:
1. Maintain students in an array.
2. Render array to DOM.
3. Add student via form.
4. Re-render list after changes.
5. Separate render logic to state logic

---

## Assignment 5: Student Manager (Edit & Update)
🎯 Modify UI dynamically. 

Tasks: Related to assignment 4
1. Add Edit button.
2. Convert text to input field.
3. Save on Enter.
4. Re-render cleanly.

---

## Assignment 6: Student Manager (Event Delegation)
🎯 Efficient event handling.

Tasks:
1. Use single event listener on parent.
2. Handle delete/edit using:
   - event.target
   - closest()
3. Remove individual listeners.
4. Explain why delegation is better.

---

# 🟠 PHASE 3 - Forms and Storage

## Assignment 7: Form Validation
🎯 Build real-world form handling.

Tasks:
1. Create registration form:
   - name, email, password
2. Validate with JS
   - required, min length, valid email format
3. Show error messages below fields.
4. Prevent submission if invalid.
5. Clear errors on valid input.

---

## Assignment 8: localStorage Integration
🎯 Persist data.

Tasks:
1. Save students to localStorage.
2. Load on page refresh.
3. Add Clear All button.
4. Add theme toggle (dark/light).
5. Persist theme in localStorage.

---

# 🟣 PHASE 4 - Filtering, Sorting & UX

## Assignment 9: Search & Filter
🎯 Live filtering UI.

Tasks:
1. Add search input.
2. Filter students by name (case-insensitive).
3. Hide unmatched items.
4. Show "No results" message.

---

## Assignment 10: Sorting
🎯 Modify state & re-render.

Tasks:
1. Add A → Z button.
2. Add Z → A button.
3. Sort array.
4. Re-render UI.

---

## Assignment 11: Loading & Empty States
🎯 Improve UX.

Tasks:
1. Show loading indicator while rendering large list.
2. Show empty state when list is empty.
3. Show error message on failure simulation.
4. Disable buttons during loading.

---

# 🔵 PHASE 5 - Fetch & API Integration


## Assignment 12: Fetch API + Rendering
🎯 Connect external data to DOM.

Tasks:
1. Fetch 10 users from:
   https://jsonplaceholder.typicode.com/users
2. Show:
   - name
   - email
   - city
3. Show loader while fetching.
4. Show error if request fails.
5. Add retry button.

---

## Assignment 13: Async Interaction UI
🎯 Handle async UI updates.

Tasks:
1. Add “Refresh Data” button.
2. Disable button while loading.
3. Cancel previous request (basic logic).
4. Handle slow network simulation.

---

# 🟤 PHASE 6 - Small UI Components

## Assignment 14: Modal Component
🎯 Build reusable UI.

Tasks:
1. Create modal using hidden div.
2. Open on button click.
3. Close on:
   - close button
   - backdrop click
   - Escape key
4. Add fade animation.
5. Prevent background scroll when open.

---

## Assignment 15: Tabs & Accordion
🎯 Build interactive components.

Tasks:
1. Create tab system.
2. Switch content on click.
3. Create accordion:
   - open one
   - close others
4. Add smooth transition.

---
