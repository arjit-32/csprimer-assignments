# 🤖 Automata Theory + Compiler Design for SDE

> Focus: State machines, regex, parsing, AST, code execution  
> Not proof-heavy theoretical CS

---

# 🟢 SECTION 1 — Finite Automata (State Machines)

---

## Assignment 1: Build a Deterministic Finite Automaton (DFA)

🎯 Goal: Understand state-based systems.

Tasks:
- Design DFA for:
  - Binary strings divisible by 3.
  - String ending with "ab".
- Draw state transition diagram.
- Convert diagram into code.

Interview Relevance:
- Input validation engines.
- Workflow systems.
- Token parsers.
- Rate limiter states.

---

## Assignment 2: Convert Regex to State Machine (Conceptual)

🎯 Goal: Understand regex internals.

Tasks:
- Convert simple regex into:
  - NFA
  - DFA (conceptually).
- Example:
  - `a*b`
  - `(ab|cd)*`
- Explain epsilon transitions.

Interview Relevance:
- Debugging complex regex.
- Understanding backtracking cost.
- Avoiding catastrophic regex.

---

## Assignment 3: Detect Catastrophic Backtracking

🎯 Goal: Prevent performance bugs.

Tasks:
- Write regex with catastrophic backtracking.
- Measure slowdown.
- Fix using atomic/optimized pattern.

Interview Relevance:
- Security (ReDoS attacks).
- API validation safety.

---

# 🟡 SECTION 2 — Context-Free Grammars (CFG)

---

## Assignment 4: Design Grammar for Simple Expression Language

🎯 Goal: Understand syntax rules.

Design grammar for:
- Arithmetic expressions:
  - `1 + 2 * 3`
  - `(4 + 5) * 6`

Tasks:
- Define terminals & non-terminals.
- Write production rules.
- Remove ambiguity.

Interview Relevance:
- Expression parsing.
- Config file design.
- DSL building.

---

## Assignment 5: Build Simple Parser (Recursive Descent)

🎯 Goal: Parse input into AST.

Tasks:
- Parse arithmetic expression.
- Build Abstract Syntax Tree (AST).
- Evaluate expression.

Interview Relevance:
- Query parser.
- JSON validation.
- Expression evaluators.

---

# 🟠 SECTION 3 — Compiler Pipeline

---

## Assignment 6: Understand Compilation Phases

🎯 Goal: Conceptual clarity.

Explain each phase:
1. Lexical analysis
2. Syntax analysis
3. Semantic analysis
4. Intermediate representation
5. Optimization
6. Code generation

Relate to:
- TypeScript → JavaScript
- Babel transpilation

Interview Relevance:
- Build tool reasoning.
- Understanding transpilers.

---

## Assignment 7: Build Mini Interpreter

🎯 Goal: Simulate compiler execution.

Tasks:
- Define mini language:
  ```
  let x = 5;
  print(x + 2);
  ```
- Parse input.
- Execute commands.
- Maintain symbol table.

Interview Relevance:
- Understanding execution model.
- Interpreter-based logic engines.

---

# 🔵 SECTION 4 — Abstract Syntax Trees (AST)

---

## Assignment 8: Explore JavaScript AST

🎯 Goal: Understand how code is represented internally.

Tasks:
- Use parser (like Babel parser).
- Convert JS code to AST.
- Modify AST.
- Regenerate code.

Interview Relevance:
- Code transformation.
- Linting tools.
- Build systems.

---

## Assignment 9: Write Custom Linter Rule

🎯 Goal: Apply AST knowledge.

Tasks:
- Detect:
  - `console.log` usage.
  - Unused variables.
- Write simple rule.

Interview Relevance:
- Code quality tooling.
- Static analysis reasoning.

---

# 🟣 SECTION 5 — Type Systems

---

## Assignment 10: Static vs Dynamic Typing

🎯 Goal: Understand type systems.

Tasks:
- Compare:
  - JS dynamic typing
  - TypeScript static typing
- Explain:
  - Type inference
  - Type checking
- Show runtime vs compile-time errors.

Interview Relevance:
- TypeScript reasoning.
- Type safety discussions.

---

# 🟤 SECTION 6 — Optimization Awareness

---

## Assignment 11: Dead Code Elimination (Conceptual)

🎯 Goal: Understand compiler optimizations.

Tasks:
- Identify dead code.
- Remove unused branches.
- Explain tree-shaking.

Relate to:
- Webpack
- Vite
- ES modules

Interview Relevance:
- Frontend performance.
- Build optimization.

---

# 🏁 FINAL CHALLENGE

---

## Assignment 12: Build a Mini Query Language

🎯 Goal: Apply full pipeline knowledge.

Example:
```
SELECT name WHERE age > 18
```

Tasks:
1. Define grammar.
2. Parse query.
3. Convert to AST.
4. Execute against JS object array.
5. Handle errors gracefully.

Explain:
- How parsing works.
- How semantic validation works.
- How execution phase works.

---