# Prisma Basics

## Assignment-1: Initialize Prisma & Generate Client  
_🎯 Goal: Set up Prisma with PostgreSQL._

**Tasks** ->  
1. Initialize Node project.  
2. Install:  
   ```bash
   npm install prisma @prisma/client
   ```
Run:
npx prisma init
Configure DATABASE_URL.
Run first migration.

---

## Assignment-2: Model User Schema in Prisma  
_🎯 Goal: Replicate earlier SQL table using Prisma schema._

**Tasks** ->  
1. Create `User` model with:  
   - id (autoincrement).  
   - name.  
   - email (unique).  
   - createdAt (default now).  
2. Migrate and inspect using `prisma studio`.  

---

## Assignment-3: Prisma CRUD  
_🎯 Goal: Perform database operations with Prisma API._

**Tasks** ->  
1. Create user via Prisma.  
2. Query:  
   - All users.  
   - User by condition.  
3. Update a field.  
4. Delete a record.  

---

## Assignment-4: Prisma Relations (1-to-Many)  
_🎯 Goal: Apply relational logic in Prisma._

**Tasks** ->  
1. Create `Post` model linked to `User`.  
2. Create:  
   - A user with posts.  
   - Posts referencing an existing user.  
3. Query using:  
   ```tsx
   include: { posts: true }
    ```

---

## Assignment-5: Filtering, Searching, Sorting, Pagination  
_🎯 Goal: Query efficiently using Prisma._

**Tasks** ->  
1. Write queries using:  
   ```tsx
   where  
   orderBy  
   skip  
   take  
   contains / startsWith / endsWith  
   ```

---

## Assignment-6: Aggregations & GroupBy in Prisma  
_🎯 Goal: Run analytical queries._

**Tasks** ->  
1. Use Prisma:  
   - `count`.  
   - `avg`.  
   - `groupBy`.  
2. Compare Prisma performance with raw SQL.  

---

## Assignment-7: Raw SQL via Prisma  
_🎯 Goal: Use raw queries when Prisma API isn’t enough._

**Tasks** ->  
1. Run a raw SQL query using:  
   ```tsx
   prisma.$queryRaw`SELECT email FROM users LIMIT 10`
   ```
Compare with Prisma’s native equivalent.

---

## Assignment-8: Prisma Transactions  
_🎯 Goal: Execute multi-step logic safely._

**Tasks** ->  
1. Use:  
   ```tsx
   await prisma.$transaction([...])
   ```
Test:
Valid transaction.
Transaction that fails (email duplicate).

---

## Assignment-9: Prisma Client Extensions  
_🎯 Goal: Add custom helpers to Prisma._

**Tasks** ->  
1. Add extension:  
   ```tsx
   prisma.user.fullName()
Add a custom utility for:
Soft delete.
Restore.
WithDeleted queries.

```markdown
---

## Assignment-10: Prisma Data Browser + Studio Exploration  
_🎯 Goal: Learn visual DB inspection._

**Tasks** ->  
1. Use Prisma Studio to:  
   - Edit records.  
   - Create new rows.  
   - Delete records.  
2. Explore Prisma Data Browser (Supabase/Railway).  

---