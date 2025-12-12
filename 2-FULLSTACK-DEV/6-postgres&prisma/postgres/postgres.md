# Postgres Basics

## Assignment-1: Install & Connect to PostgreSQL  
_🎯 Goal: Get PostgreSQL running locally and verify connectivity._

**Tasks** ->  
1. Install PostgreSQL locally (or use Supabase/Railway).  
2. Create a new database: `learning_db`.  
3. Connect using:  
   - `psql`.  
   - GUI client (Beekeeper, PGAdmin, TablePlus, or Prisma Data Browser).  
4. Create a test table manually:  
   ```sql
   CREATE TABLE hello (id SERIAL PRIMARY KEY, message TEXT);
    ```
Insert one record and query it back.

---

## Assignment-2: Create Tables, Datatypes & Constraints  
_🎯 Goal: Learn SQL datatypes and relational modeling._

**Tasks** ->  
1. Create a `users` table with fields:  
   - id (serial, primary key).  
   - name (text, required).  
   - email (unique).  
   - age (integer).  
   - created_at (default now).  
2. Test constraint violations (duplicate email, null values).  

---

## Assignment-3: CRUD Operations in SQL  
_🎯 Goal: Master basic data operations._

**Tasks** ->  
1. Write SQL queries to:  
   - Insert multiple users.  
   - Query all users.  
   - Query by condition (`age > 18`).  
   - Update email for a user.  
   - Delete a user.  

---

## Assignment-4: Relationships: One-to-Many  
_🎯 Goal: Model linked relational data._

**Tasks** ->  
1. Create a `posts` table with:  
   - id.  
   - user_id (foreign key referencing users).  
   - title.  
   - content.  
   - created_at.  
2. Insert posts for multiple users.  
3. Query:  
   - All posts with user info (JOIN).  
   - All posts by a specific user.  

---

## Assignment-5: Querying with Filters, Sorting, Pagination  
_🎯 Goal: Learn essential querying patterns._

**Tasks** ->  
1. Write queries for:  
   - Sorting (`ORDER BY created_at DESC`).  
   - Pagination (`LIMIT` + `OFFSET`).  
   - Filtering (`ILIKE '%keyword%'`).  
   - Counting (`SELECT COUNT(*)`).  

---

## Assignment-6: Aggregations & Grouping  
_🎯 Goal: Learn analytical SQL functions._

**Tasks** ->  
1. Query:  
   - Number of posts per user.  
   - Average age of users.  
   - Top authors based on post count.  
2. Use:  
   - `SUM`, `COUNT`, `AVG`, `MIN`, `MAX`.  
   - `GROUP BY`.  

---

## Assignment-7: Indexes & Performance Basics  
_🎯 Goal: Understand why and when to use indexes._

**Tasks** ->  
1. Add index to `email` and `created_at` fields.  
2. Compare query timing before/after using:  
   ```sql
   EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'example@test.com';
   ```

---

## Assignment-8: Views & Materialized Views  
_🎯 Goal: Create reusable database abstractions._

**Tasks** ->  
1. Create a `popular_authors` **view**.  
2. Create a **materialized view** that caches:  
user, post_count, last_post_date

3. Refresh it and compare results.  

---

## Assignment-9: Transactions  
_🎯 Goal: Learn multi-step safe operations._

**Tasks** ->  
1. Wrap user creation + post creation inside:  
   ```sql
   BEGIN;  
   COMMIT;  
   ROLLBACK;  
   ```
Try:
Success case.
Failure case (violating constraint).


---

## Assignment-10: Stored Procedures + Functions  
_🎯 Goal: Write reusable backend logic in SQL._

**Tasks** ->  
1. Create a function:  
   ```sql
   get_user_post_count(user_id)
   ```
Test the function with multiple IDs.

---
