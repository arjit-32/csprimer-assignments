# Git Assignments

# SECTION 1 — Core Workflow Mastery

## Foundations & Daily Workflow (1–8)

1. **Initialize a professional repository**  
   Create a new repo with a clean folder structure (src/, tests/, docs/, etc.), add a meaningful `.gitignore`, include `.gitattributes` for line-ending normalization, and make your first conventional/semantic commit.

2. **Feature branch + clean commit discipline**  
   From `main`, create a feature branch → make 4–5 small, logical commits with conventional commit messages → open and merge a PR (simulate review feedback).

3. **Merge vs Rebase – understand the trade-offs**  
   Create two diverging branches editing the same lines → resolve conflicts once with a merge commit, once with rebase → document (in README or comment) when to choose each and why force-push is dangerous on shared branches.

4. **Interactive rebase for beautiful history**  
   Create 6–8 messy commits (WIP, fix typo, refactor split, etc.) → use `git rebase -i` to squash, reorder, edit messages, fixup, and even split one commit.

5. **Amend & autosquash workflow**  
   Commit something → realize you forgot a file or want to tweak the message → use `git commit --amend` → later use `git commit --fixup` + `rebase --autosquash`.

6. **Context switching with stash & worktree**  
   Stash mid-feature changes → switch to urgent hotfix → use `git worktree add` to work on two branches in parallel without stashing everything.

7. **Cherry-pick hotfix across branches**  
   Fix a bug on `main` → cherry-pick that commit to a `release/v1` branch and an older long-lived branch → resolve any conflicts cleanly.

8. **Realistic multi-contributor conflict resolution**  
   Simulate 3-way conflict (same lines changed + function moved) → resolve, test, commit resolution with excellent message.

## Recovery, Safety & Debugging (9–13)

9. **Disaster recovery with reflog & restore**  
   Accidentally delete a branch, hard-reset `main` backwards, drop commits → recover everything using `git reflog`, then `git restore` / `git switch -`.

10. **Safely undo public history mistakes**  
    Force-push a bad rebase to a shared branch → recover production safety using `git revert` (not rebase/force-push again) → fix forward.

11. **Find regressions with git bisect**  
    Intentionally introduce a bug across several commits → use `git bisect` (preferably with a test script) to locate the first bad commit.

12. **Read and investigate history like a pro**  
    In any real/open-source repo, use:  
    - `git log --graph --oneline --decorate --all`  
    - `git blame -L`, `git log -S "string"`, `git log -G "regex"`  
    - `git shortlog`, `git log --author` to understand authorship and changes.

13. **Revert a merge commit correctly**  
    Merge a feature → discover it breaks production → use `git revert -m 1 <merge-commit>` → later re-merge the fixed branch.

---

# SECTION 2 — Production Debugging with Git

## Assignment: Identify Production Regression

Scenario:
- Version v1.2.0 works.
- v1.3.0 introduces latency bug.
- v1.3.1 patch failed.

Tasks:
- Compare:
  - `git diff v1.2.0..v1.3.0`
- Use:
  - `git bisect`
- Identify offending commit.
- Revert safely.

---

## Assignment: Compare Deployed Code vs Main

Tasks:
- Tag simulated deployment.
- Make changes in main.
- Diff deployed tag vs main.
- Document safe rollback strategy.

---

# SECTION 3 — CI/CD Integration

## Assignment: Version-Based Deployments

Tasks:
- Use semantic commits.
- Auto-generate version number.
- Tag release.
- Simulate CI pipeline trigger.

Explain:
- Why tagging commit matters.
- Why not deploy from branch name.

---

## Assignment: Breaking the Pipeline

Tasks:
- Commit failing test.
- Observe CI fail.
- Fix without rewriting history.
- Explain why never amend after push in shared branch.

---

# SECTION 4 — Large Team Collaboration

## Assignment: Backport Patch

Scenario:
- Bug fixed in main.
- Must backport to v1 branch.

Tasks:
- Cherry-pick cleanly.
- Resolve conflicts.
- Avoid dragging unrelated commits.

---

## Assignment: Release Branch Strategy

Design strategy for:
- SaaS product (daily deploy)
- Enterprise on-prem product (quarterly release)

Choose:
- GitHub flow
- Trunk-based
- GitFlow

Justify trade-offs.

---

# SECTION 5 — Advanced Git Internals (Conceptual)

## Assignment: Understand Git Object Model

Tasks:
- Explain:
  - Blob
  - Tree
  - Commit
  - Tag
- Inspect `.git/objects`
- Explain SHA-based immutability.

Interview Relevance:
- Why rewriting history changes commit hashes.

---

## Assignment: Rebase vs Merge Ethics

Write decision doc:

When to:
- Rebase feature branch
- Merge main into feature
- Force push
- Avoid rewriting shared history

---

# SECTION 6 — Monorepo & Scaling

## Assignment: Monorepo Optimization

Tasks:
- Use sparse-checkout.
- Explain:
  - Why monorepos slow clone.
  - Partial clone benefits.

---

# SECTION 7 — Security & Compliance

## Assignment: Signed Releases

Tasks:
- Sign tag.
- Verify signature.
- Explain supply chain security.

---

# FINAL SCENARIO

Simulate:

Production incident at 2 AM:
- CI green.
- Tests passed.
- Deployment caused outage.
- Rollback required.

Explain:
- How to identify bad commit.
- How to revert safely.
- How to avoid force-push disaster.
- How to communicate via commit history.