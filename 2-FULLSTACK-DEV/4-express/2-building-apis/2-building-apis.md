# Building APIs

## Assignment-1: CRUD API (In-Memory)  
_🎯 Goal: Build structured REST APIs._

**Tasks** ->  
1. Build `/api/todos`.  
2. Endpoints:  
   - POST → create.  
   - GET → list.  
   - GET `/id`.  
   - PUT `/id`.  
   - DELETE `/id`.  

---

## Assignment-2: Query Filtering & Pagination  
_🎯 Goal: Make APIs dynamic._

**Tasks** ->  
1. Support filters such as:  
   `/api/todos?completed=true`.  
2. Add:  
   - Pagination: `page`, `limit`.  
   - Sorting: `sort=createdAt:desc`.  

---

## Assignment-3: Request Validation  
_🎯 Goal: Secure and sanitize inputs._

**Tasks** ->  
1. Integrate **Zod or Joi**.  
2. Validate:  
   - Body schema.  
   - Query params.  
   - Route params.  
3. Ensure consistent JSON errors.  

---

## Assignment-4: Authentication (JWT)  
_🎯 Goal: Require login to access protected routes._

**Tasks** ->  
1. Create `/auth/register` & `/auth/login`.  
2. Use:  
   - bcrypt hashing.  
   - Signed JWT.  
3. Protect `/api/todos` so only logged-in users see their own items.  

---

## Assignment-5: Role-Based Authorization  
_🎯 Goal: Implement permissions._

**Tasks** ->  
1. Add roles: `"user"`, `"admin"`.  
2. Only admin can:  
   - Delete any todo.  
   - Access `/admin/stats`.  

---