# 100 Queries to Master SQL

```jsx
users(id, email, country, created_at)
subscriptions(id, user_id, plan, status, started_at, ended_at)
payments(id, subscription_id, amount, currency, paid_at, status)
trials(id, user_id, started_at, ended_at)
sessions(id, user_id, ip, device, started_at, duration_seconds)
support_tickets(id, user_id, category, opened_at, closed_at)
feature_usage(id, user_id, feature, used_at, metadata JSONB)
```

## 🧩 SECTION 1 — Warm-up (10 queries)

1. Count total users.
2. Count active users (users with at least one subscription with status = 'active').
3. List distinct countries ordered by number of users descending.
4. Find the latest 20 users by signup date.
5. Count subscriptions by plan grouped by status.
6. Total revenue from successful payments.
7. Average payment per subscription.
8. Most recent payment per user.
9. List all users with no payments (anti-join).
10. Show sessions longer than 1 hour.

---

## 🧩 SECTION 2 — Joins & Filtering (10)

1. Users with trials but no paid subscription.
2. Paying users who have never opened a support ticket.
3. Subscriptions renewed more than once (count > 1 payment).
4. List each plan with churn (subscriptions ended).
5. Identify users with >3 devices in sessions.
6. Users whose first session occurred **before** subscription start (behavior curiosity).
7. Find duplicated emails (dirty data).
8. Country-based MRR (monthly recurring revenue).
9. Revenue per plan sorted descending.
10. Trial → paid conversion percentage.

---

## 🧩 SECTION 3 — CTEs & Data Pipelines (10)

1. CTE: Number of new users per month.
2. CTE: Rolling user count over time.
3. Identify lapsed users (inactive 30+ days).
4. CTE: Tag subscriptions as `new`, `retained`, `returned`.
5. Identify zombie users: churned then re-subscribed.
6. Failed payments per user.
7. Build a churn prediction dataset (features only).
8. Detect abnormal spikes in tickets per user.
9. Compute average first-payment delay in days.
10. Build session → feature usage mapping.

---

## 🧩 SECTION 4 — Window Functions (12)

1. Rank users by total revenue.
2. Dense rank session count by country.
3. Calculate LTV (sum payments) with running total over time.
4. 30-day moving average revenue using window frame.
5. First and latest subscription per user (window `FIRST_VALUE`, `LAST_VALUE`).
6. Identify top 10% users by usage (percentile).
7. Find month-over-month growth using `LAG`.
8. Compute churn rate change over time using `LAG` difference.
9. Label each payment as `first`, `renewal`, or `recovery`.
10. Cluster users by revenue quartiles (`NTILE`).
11. Normalize session duration (z-score).
12. Detect payment regressions (amount drop) using window compare.

---

## 🧩 SECTION 5 — Time Series & `generate_series` (10)

1. Generate a complete calendar for 1 year.
2. Build MRR time series (fill missing dates).
3. Daily new users chart.
4. Weekly cohort grouping.
5. Compare trial starts vs subscriptions over time.
6. Retention heatmap dataset (cohort × month offsets).
7. Time series of feature usage count per day.
8. Create rolling 90-day active users metric.
9. Calculate subscription lifetime length distribution.
10. Identify seasonal patterns using monthly aggregation.

---

## 🧩 SECTION 6 — Advanced Aggregation (10)

1. Funnel: `Signed → Trial → Paid`.
2. Most used feature per user.
3. Compare power users to casual users (usage threshold).
4. Count users with *only one* session (one-timers).
5. Bucket users by payment frequency.
6. Top 10% of customers generating % of revenue (Pareto query).
7. Identify support ticket patterns per plan.
8. Average session duration by device.
9. Compute CAC proxy: tickets + sessions before first payment.
10. Identify bottleneck in funnel (largest drop-off step).

---

## 🧩 SECTION 7 — JSONB Queries (10)

1. Extract key metadata fields (e.g., `{“action”:“click”}`).
2. Count feature usage filtered by metadata key.
3. Detect high variance metadata entries (distinct counts).
4. Group usage by metadata property.
5. Identify users with custom settings stored in JSON.
6. Search JSON array values using `@>` containment.
7. Update metadata field via SQL.
8. JSON full-text search.
9. Count unique metadata schema patterns.
10. Normalize metadata into relational structure with lateral.

---

## 🧩 SECTION 8 — LATERAL, Recursive, and Nasty SQL (13)

1. Recursive: build user renewal chains.
2. Recursive: detect subscription loops (bad data).
3. LATERAL: find next session after payment.
4. LATERAL: top 3 features per user.
5. Recursive cohort leveling.
6. Compare each user to similar users ("nearest neighbors" on usage count).
7. Detect account sharing (same IP but multiple users).
8. Detect suspicious high session duration/same country change frequency.
9. Build sparse funnel using lateral + filtering.
10. Derive user lifecycle stage (trial → active → churned → returned).
11. Find users with *increasing* payment amounts.
12. Compute feature adoption curve (join series + usage).
13. Payment retry success path mapping.

---

## 🧩 SECTION 9 — Optimization & Index Insights (5)

1. Query using filtered index (`WHERE status='active'`).
2. Using partial index for JSONB filtering.
3. Compare performance with / without materialized CTE.
4. Query using BRIN index on time series.
5. Query using GIN index for metadata search.

---

## 🧩 SECTION 10 — Final Expert Queries (10)

1. Full churn algorithm with reason classification.
2. Forecast next month’s revenue using linear regression (`regr_slope`).
3. Feature impact analysis: does feature usage predict renewal?
4. Detect trial abusers (multiple emails, same IP).
5. Predict next payment date (probabilistic, using averages).
6. Model segmentation based on session patterns.
7. Create full SaaS company analytics dashboard query (single query).
8. Create billing anomaly detector (refunds + failures).
9. Fully denormalized user analytics row.
10. One **monster query** combining:
- CTEs
- JSON
- Window functions
- LATERAL
- Time series filling
- Funnel labeling
    
    Producing a complete user lifecycle report.