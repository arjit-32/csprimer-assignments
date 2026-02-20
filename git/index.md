# Git Assignments

### Level 1 – Foundations & Daily Workflow (1–8)

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

### Level 2 – Recovery, Safety & Debugging (9–13)

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

### Level 3 – Collaboration, Releases & Modern Practices (14–20)

14. **Fork + upstream sync + PR**  
    Fork a popular repo → make a small, clean improvement → sync upstream with `fetch + rebase` → submit a well-written PR.

15. **Semantic versioning & annotated tags**  
    Create releases: v1.0.0, v1.1.0 (minor), v1.0.1 (patch), v2.0.0 (breaking) → use `git describe --tags` to verify distance.

16. **Enforce quality with Git hooks**  
    Create a pre-commit hook (bash or husky/lefthook) that runs lint/format/unit tests → prove it blocks bad commits.

17. **Manage large binaries with Git LFS**  
    Add large files (images, models, datasets) → migrate them to Git LFS → compare `.git` size before vs after.

18. **Set up production-grade repo governance**  
    (GitHub/GitLab) Protect `main`: require PRs, code reviews, status checks, signed commits, linear history, disallow force-push → explain purpose of each rule.

19. **Choose a branching strategy for the team**  
    Write a short decision doc comparing:  
    - GitFlow  
    - GitHub Flow  
    - Trunk-based development  
    Recommend one for (a) mobile app (quarterly releases), (b) web SaaS (daily deploys) — justify trade-offs.

20. **Signed commits & verified history**  
    Set up commit signing (GPG or SSH) → sign commits & tags → verify signatures in log → explain security value in open-source/enterprise.

### Level 4 – Advanced & Monorepo Awareness (21–25)

21. **Speed up monorepos with sparse-checkout & partial clone**  
    Clone a large repo → enable sparse-checkout to work only in one folder → explain performance benefit.

22. **Powerful log & diff techniques**  
    Master:  
    - `git range-diff`  
    - `git log --first-parent`  
    - `git diff --name-status`, `git log -p -G "pattern"`

23. **Long-lived branch synchronization**  
    Maintain a `release/v1` branch → regularly sync from `main` (merge or rebase?) → document strategy and drift-prevention tips.

24. **Audit real-world Git hygiene**  
    Clone a mature open-source project → analyze commit style, release tagging, PR quality, history cleanliness → list 3 excellent practices and 1 improvement suggestion.

25. **End-to-end production hotfix flow**  
    On `main`: introduce bug → create hotfix branch → fix + test → cherry-pick to `main` & release branch → tag patch release → write PR with test/migration notes.