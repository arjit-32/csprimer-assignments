# MySQL Mastery Assignments 

### MySQL Assignments

1. **Install & Connect to MySQL**  
   _🎯 Goal: Get MySQL running locally and verify connectivity._  

   **Tasks** →  
   1. Install MySQL locally (brew install mysql, docker run, etc.) or use a hosted instance.  
   2. Create a new database: `CREATE DATABASE learning_db;`  
   3. Connect using:  
      - `mysql` CLI  
      - GUI client (MySQL Workbench, TablePlus, DBeaver, etc.)  
   4. Create a test table manually:  
      ```sql
      CREATE TABLE hello (
        id INT AUTO_INCREMENT PRIMARY KEY,
        message TEXT
      );
      ```  
   5. Insert one record and query it back.

2. **Create Tables, Datatypes & Constraints**  
   _🎯 Goal: Master MySQL datatypes, constraints, and schema basics._  

   **Tasks** →  
   1. Create a `users` table with:  
      - `id` INT AUTO_INCREMENT PRIMARY KEY  
      - `name` VARCHAR(100) NOT NULL  
      - `email` VARCHAR(255) UNIQUE NOT NULL  
      - `age` INT  
      - `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
   2. Test constraint violations: duplicate email, null name, invalid data types.  
   3. Use `SHOW CREATE TABLE users;` to inspect the generated DDL.

3. **CRUD Operations in SQL**  
   _🎯 Goal: Build fluency with basic data manipulation._  

   **Tasks** →  
   1. Write queries to:  
      - Insert 5+ users (multi-row INSERT).  
      - SELECT all users.  
      - SELECT users WHERE age > 18.  
      - UPDATE one user's email.  
      - DELETE a user by id.  
   2. Use `LAST_INSERT_ID()` after an insert to retrieve the new id.

4. **Relationships: One-to-Many with Foreign Keys**  
   _🎯 Goal: Model relational data correctly._  

   **Tasks** →  
   1. Create a `posts` table:  
      ```sql
      CREATE TABLE posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        title VARCHAR(200) NOT NULL,
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );
      ```  
   2. Insert posts linked to multiple users.  
   3. Query:  
      - All posts with user name (INNER JOIN).  
      - All posts by a specific user (JOIN + WHERE).  
   4. Test ON DELETE CASCADE behavior.

5. **Querying with Filters, Sorting & Pagination**  
   _🎯 Goal: Handle real-world list endpoints._  

   **Tasks** →  
   1. Write queries for:  
      - Sorting: `ORDER BY created_at DESC`  
      - Pagination: `LIMIT 10 OFFSET 20`  
      - Filtering: `WHERE title LIKE '%mysql%'` (case-insensitive in most collations)  
      - Counting total rows: `SELECT COUNT(*) FROM posts;`  
   2. Combine: paginated list of recent posts with user info.

6. **Aggregations, Grouping & HAVING**  
   _🎯 Goal: Perform analytical queries._  

   **Tasks** →  
   1. Query:  
      - Number of posts per user (`GROUP BY user_id`).  
      - Average age of users.  
      - Users with more than 3 posts (`HAVING COUNT(*) > 3`).  
   2. Use aggregate functions: `COUNT`, `AVG`, `SUM`, `MIN`, `MAX`.

7. **Indexes & Performance Tuning Basics**  
   _🎯 Goal: Understand indexing impact._  

   **Tasks** →  
   1. Add indexes:  
      - On `email` in users  
      - On `created_at` in posts  
      - Composite index on `user_id, created_at` in posts  
   2. Compare performance with `EXPLAIN` (or `EXPLAIN ANALYZE` in MySQL 8.0.18+):  
      ```sql
      EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';
      ```  
   3. Insert 1000+ dummy rows (use a script or loop) and observe difference.

8. **Views & Summary Tables (MySQL Workaround for Materialized Views)**  
   _🎯 Goal: Create reusable and performant abstractions._  

   **Tasks** →  
   1. Create a regular view:  
      ```sql
      CREATE VIEW popular_authors AS
      SELECT u.id, u.name, COUNT(p.id) AS post_count
      FROM users u
      LEFT JOIN posts p ON u.id = p.user_id
      GROUP BY u.id, u.name
      ORDER BY post_count DESC;
      ```  
   2. Create a summary table + refresh procedure (common MySQL pattern):  
      - Table: `author_stats` with columns id, name, post_count, last_post_date  
      - Write a stored procedure to truncate + repopulate it.  
   3. Compare query speed of view vs summary table.

9. **Transactions & Isolation Levels**  
   _🎯 Goal: Ensure data consistency._  

   **Tasks** →  
   1. Wrap operations in a transaction:  
      ```sql
      START TRANSACTION;
      INSERT INTO users (...) VALUES (...);
      INSERT INTO posts (...) VALUES (...);
      COMMIT;
      ```  
   2. Test rollback on failure (e.g., violate unique constraint).  
   3. Check default isolation level: `SELECT @@transaction_isolation;`  
   4. Experiment with `SET TRANSACTION ISOLATION LEVEL READ COMMITTED;` and observe phantom read behavior.

10. **Stored Procedures & Functions**  
    _🎯 Goal: Encapsulate reusable logic in the database._  

    **Tasks** →  
    1. Create a stored function:  
       ```sql
       DELIMITER //
       CREATE FUNCTION get_user_post_count(p_user_id INT)
       RETURNS INT DETERMINISTIC
       BEGIN
         DECLARE post_cnt INT;
         SELECT COUNT(*) INTO post_cnt FROM posts WHERE user_id = p_user_id;
         RETURN post_cnt;
       END //
       DELIMITER ;
       ```  
    2. Test it: `SELECT get_user_post_count(1);`  
    3. (Bonus) Create a procedure that creates a user + initial post atomically.