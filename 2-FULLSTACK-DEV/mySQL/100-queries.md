# 100 MySQL Queries 

Schema (MySQL 8.0+)

```sql
CREATE TABLE users (
  id          BIGINT PRIMARY KEY AUTO_INCREMENT,
  email       VARCHAR(255) UNIQUE NOT NULL,
  country     CHAR(2)              NOT NULL,   -- ISO 3166-1 alpha-2
  created_at  TIMESTAMP            NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_created_at (created_at),
  INDEX idx_country (country)
);

CREATE TABLE subscriptions (
  id          BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id     BIGINT               NOT NULL,
  plan        ENUM('free','pro','enterprise') NOT NULL,
  status      ENUM('trialing','active','past_due','canceled','incomplete') NOT NULL,
  started_at  TIMESTAMP            NOT NULL,
  ended_at    TIMESTAMP            NULL,
  INDEX idx_user_plan_status (user_id, plan, status),
  INDEX idx_started_at (started_at)
);

CREATE TABLE payments (
  id              BIGINT PRIMARY KEY AUTO_INCREMENT,
  subscription_id BIGINT               NOT NULL,
  amount          DECIMAL(12,4)        NOT NULL,
  currency        CHAR(3)              NOT NULL DEFAULT 'USD',
  paid_at         TIMESTAMP            NOT NULL,
  status          ENUM('succeeded','failed','refunded') NOT NULL,
  INDEX idx_subscription_paid_at (subscription_id, paid_at),
  INDEX idx_paid_at_status (paid_at, status)
);

CREATE TABLE trials (
  id          BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id     BIGINT      NOT NULL,
  started_at  TIMESTAMP   NOT NULL,
  ended_at    TIMESTAMP   NULL
);

CREATE TABLE sessions (
  id                BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id           BIGINT      NOT NULL,
  ip                VARCHAR(45) NOT NULL,
  device            VARCHAR(100),
  started_at        TIMESTAMP   NOT NULL,
  duration_seconds  INT         NOT NULL DEFAULT 0,
  INDEX idx_user_started_at (user_id, started_at),
  INDEX idx_ip (ip)
);

CREATE TABLE support_tickets (
  id          BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id     BIGINT      NOT NULL,
  category    VARCHAR(50) NOT NULL,
  opened_at   TIMESTAMP   NOT NULL,
  closed_at   TIMESTAMP   NULL,
  INDEX idx_user_opened_at (user_id, opened_at)
);

CREATE TABLE feature_usage (
  id        BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id   BIGINT      NOT NULL,
  feature   VARCHAR(100) NOT NULL,
  used_at   TIMESTAMP   NOT NULL,
  metadata  JSON        NULL,
  INDEX idx_user_feature_used_at (user_id, feature, used_at),
  INDEX idx_used_at (used_at)
);
```

## SECTION 1 – Core & Warm-up (10)
How many users signed up in total?  
How many users currently have at least one active subscription?  
Show top 10 countries by user count (descending).  
List the 20 most recently registered users (email + created_at).  
Show subscription count broken down by plan and current status.  
What is the total revenue (USD) from succeeded payments ever?  
What is the average payment amount per unique subscription that has ≥1 successful payment?  
For each user who ever paid, show the date & amount of their most recent successful payment.  
Find all users who signed up but have zero successful payments (anti-join style).  
Show all sessions that lasted longer than 3600 seconds, including user email.

## SECTION 2 – Joins & Common Business Questions (10)
Users who started a trial but never got a paid (active or past_due) subscription.  
Users who have made at least one successful payment, but never created a support ticket.  
Subscriptions that have received more than 1 successful payment (i.e., at least one renewal).  
For each plan, count how many subscriptions have ended (ended_at IS NOT NULL).  
Users who have logged in from more than 3 distinct devices (distinct device values).  
Users whose very first session happened before their very first subscription/trial started.  
Find duplicate emails (case-insensitive) that exist in the users table.  
Calculate approximate MRR per country for the most recent complete month.  
Total successful payment revenue per plan, sorted descending.  
What percentage of users who started a trial eventually made at least one successful payment?

## SECTION 3 – CTEs & Intermediate Analytics (10)
Monthly new user signups (first day of month → count).  
Cumulative total users over time (show one row per month-end).  
Users who have been inactive (no session) for ≥ 30 days, but had ≥1 session before.  
For each subscription, classify it as: first-ever, renewal, re-activation (after gap ≥60 days).  
Users who churned (canceled subscription) and then later started a new subscription.  
Count of failed payment attempts per user, only counting users with ≥1 failure.  
Create a wide user-level churn-prediction row: lifetime payments, sessions count, tickets count, last active date, etc.  
Users whose support ticket count in last 7 days is > 3× their own 90-day average.  
Average days between trial start and first successful payment (only for converters).  
For each session, find the nearest feature usage event within ±30 minutes (if any).

## SECTION 4 – Window Functions Mastery (12)
Rank users by total successful payment amount (dense_rank, handle ties).  
Within each country, dense_rank users by number of sessions.  
Running total revenue over time (ordered by paid_at).  
30-day trailing average daily revenue (use frame clause).  
For each user: date & plan of their first and most recent subscription.  
Users in the top 10% of lifetime feature usage events (use PERCENT_RANK).  
Month-over-month % growth in new users (use LAG on monthly aggregates).  
Month-over-month change in churn rate (users who ended subscription that month).  
Label each successful payment per user: 'first', 'renewal', 'reactivation', 'downgrade'.  
Bucket users into revenue quartiles (NTILE(4)).  
Calculate z-score of session duration per user (manual: (duration - avg) / stddev).  
Find users who had at least one payment where amount < previous payment (regression).

## SECTION 5 – Time Series & Recursive CTEs (10)
Generate all dates from 2024-01-01 to 2026-02-22 (recursive CTE).  
MRR time series: show daily MRR even on days with zero activity (LEFT JOIN dates).  
Daily new users, padded with 0 on missing days.  
Weekly signup cohorts: first week of activity → user count.  
Side-by-side: trial starts vs first payments per month.  
6-month retention curve: % of each monthly cohort still active after 1,2,3,4,5,6 months.  
Daily count of feature_usage events (all features combined).  
Rolling 90-day distinct active users (at least one session in last 90 days).  
Distribution of subscription lifetimes in 30-day buckets.  
Monthly seasonality: average revenue per month-of-year (1–12).

## SECTION 6 – Advanced Aggregates & Funnels (10)
Classic SaaS funnel counts: signed up → started trial → made ≥1 payment.  
Most frequently used feature per user (tie-breaker: latest used_at).  
Classify users: power (>200 feature usages), medium (50–200), casual (<50).  
Users who only ever had exactly one session in their lifetime.  
Bucket users by number of successful payments: 1, 2–3, 4–6, 7+.  
What % of total revenue comes from the top 10% of paying customers?  
Most common support ticket category per plan.  
Average session duration grouped by device type.  
For paying users: average # tickets + # sessions created before first payment.  
In the signed → trial → paid funnel, which transition has the biggest drop-off %?

## SECTION 7 – JSON Power User Queries (10)
Count how many times each distinct metadata->>'action' value appears.  
Users who used feature = 'export' with metadata->>'format' = 'pdf'.  
Features that have >10 distinct top-level keys in metadata across all rows.  
Group feature_usage by the value of metadata->>'source' (or 'unknown').  
Users who have at least one row where metadata contains key "experiment_id".  
Count usage events where metadata JSON array "tags" contains "beta".  
Update all metadata for a specific feature to add {"updated": true} (JSON_SET).  
Find users whose metadata JSON has changed structure over time (different JSON_KEYS).  
Use JSON_TABLE to turn metadata arrays into rows (if present).  
Create a functional index suggestion + query that filters on metadata->>'plan_tier'.

## SECTION 8 – Hard & Tricky Patterns (13)
Recursive CTE: show chain of renewals for each subscription (previous → next payment).  
Recursive CTE: detect cycles in subscription renewals (very rare bad data).  
For each successful payment, find the next session start time after it (correlated).  
Per user: top 3 most used features ranked by count (ROW_NUMBER in subquery).  
Recursive: generate cohort month offsets (0,1,2,…,11) for retention.  
For each user, find 5 other users with most similar lifetime session count (±).  
Suspected account sharing: same IP used by ≥3 different users in <7 days.  
Users whose average session duration increased >50% after changing country.  
Sparse funnel: show % of users reaching each step at 0,7,14,30,60,90 days after signup.  
Current lifecycle stage per user: never_trialed, trialing, active, churned, returned.  
Users whose payment amounts have strictly increased every time.  
Feature adoption: first use date of each feature per monthly cohort.  
For failed payments: show retry chain and eventual success/fail per subscription.

## SECTION 9 – Performance & Index Thinking (5)
Write query + CREATE INDEX that efficiently finds all active enterprise subscriptions.  
Suggest and use a functional index to speed up WHERE JSON_EXTRACT(metadata, '$.source') = 'mobile'.  
Compare runtime: CTE vs. temporary table for a large monthly aggregate.  
Show query + EXPLAIN that benefits from covering index on payments (paid_at, status, amount).  
Query that can use full-text index on JSON_UNQUOTE(metadata->>'notes').

## SECTION 10 – Expert / Production-grade Challenges (10)
Build a churn reason classifier: 'no usage', 'many tickets', 'failed payments', 'short trial', 'other'.  
Approximate next-month revenue using simple linear trend on last 6 months MRR.  
Compare average feature usage (last 30 days) between users who renewed vs churned next month.  
Detect likely multi-account abuse: same IP + different emails starting trials within 48h.  
Predict “expected next payment date” = last paid + average days between payments per user.  
Segment users into 5 behavioral clusters using NTILE on: session count, duration, feature variety, tickets.  
Single query that produces a mini SaaS dashboard: MRR, new users, churn rate, top feature, top country.  
Billing health check: count refunds + failed payments > $X in last 7 days + outlier detection.  
Create one wide JSON row per user containing: lifetime stats, last 3 payments, top features, etc.  
Lifecycle report per user cohort  
Produce a report for users who signed up in January 2025:
- cohort size
- trial start rate
- conversion to paid
- 1-month, 3-month, 6-month retention
- average LTV so far
- most used feature
- % with ≥1 ticket
