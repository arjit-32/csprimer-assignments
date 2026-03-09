# Auth & Security SDE Assignments
## PHASE 1 — Authentication Mechanisms

## Assignment 1: Secure Password-Based Authentication
Tasks:
- Use bcrypt for password hashing (≥12 salt rounds).
- Create endpoints:
- POST /register → validate unique email, store hashed password.
- POST /login → compare hash, issue JWT on success.
- Handle failed logins with generic error messages (prevent enumeration).
- Add password strength validation (length, complexity).
Goal: Prevent common authentication vulnerabilities such as weak hashing.

## Assignment 2: JWT Token Management
Tasks:
- Sign JWT with HS256 or RS256, short expiry (15 min), plus refresh token.
- Implement token revocation (blacklist in Redis/DB).
- Middleware to validate JWT (expiry, signature).
- Secure refresh token endpoint (validate refresh token).
Goal: Understand stateless authentication and revocation challenges.

## Assignment 3: OAuth 2.0 Integration
Tasks:
- Integrate Google OAuth (Passport.js or similar).
- Handle callback, create or link user account.
- Issue own JWT after successful OAuth flow.
- Secure against redirect URI manipulation.
Goal: Enable social logins while maintaining control.

## PHASE 2 — Authorization & Access Control
## Assignment 4: Role-Based Access Control (RBAC)
Tasks:
- Define roles (e.g., user, admin) and permissions matrix.
- Middleware to check role against route.
- Fine-grained checks (e.g., user edits only their own data).
- Log unauthorized access attempts.
Goal: Prevent privilege escalation.

## Assignment 5: Attribute-Based Access Control (ABAC)
Tasks:
- Use CASL or similar library to define attribute-based policies.
- Integrate into middleware for API endpoints.
- Test scenarios: allow/deny based on context.
- Handle policy updates without server restart.
Goal: Manage complex authorization logic.

## PHASE 3 — Security Hardening & Best Practices
## Assignment 6: OWASP Top 10 Mitigation
Tasks:
- Protect against:
- Injection → parameterized queries.
- Broken auth → session fixation prevention.
- Sensitive data exposure → encrypt at rest & transit.
- XML external entities (if applicable).
- Use Helmet for secure headers (CSP, X-Frame-Options).
- Scan code with npm audit / Snyk.
Goal: Build defensible applications.

## Assignment 7: Rate Limiting & Brute Force Protection
Tasks:
- Implement IP-based rate limiting (e.g., 100 req/min with express-rate-limit).
- Account lockout after 5 failed logins (unlock after 15 min).
- Use CAPTCHA for high-risk actions (password reset).
- Log and alert on suspicious patterns.
Goal: Maintain availability under attack.

## Assignment 8: Security Auditing & Logging
Tasks:
- Log security events (logins, failures, access denials) in structured format.
- Use Winston for log rotation and external shipping.
- Implement audit trail for sensitive actions (e.g., data deletion).
- Simulate a security incident and trace via logs.
Goal: Enable forensic analysis.

## Final Project — Secure Authenticated API Service
Features to Implement:
- Password authentication with JWT
- OAuth integration
- RBAC & ABAC
- Rate limiting
- Secure headers
- Input validation (Zod/Joi)
- Structured security logging
- Graceful error handling for auth failures
Requirements:
- Use environment variables for secrets
- Write tests for auth flows and edge cases
- Document security considerations in README
- Ensure no hard-coded credentials
