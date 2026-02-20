# Beginner

## Assignment-1: Connect to MongoDB  
_🎯 Goal: Learn how to connect to MongoDB using Mongoose._

**Tasks** ->  
1. Install MongoDB locally or set up MongoDB Atlas.  
2. Install Mongoose.  
3. Create `db.js` that:  
   - Connects to MongoDB.  
   - Logs “Connected to MongoDB”.  
4. Handle connection errors.  

---

## Assignment-2: Create Your First Schema + Model  
_🎯 Goal: Understand schema vs model._

**Tasks** ->  
1. Create `Student` schema with fields:  
   - name.  
   - age.  
   - email.  
   - createdAt (default now).  
2. Create the model.  
3. Insert one student through a Node script.  

---

## Assignment-3: CRUD with Mongoose  
_🎯 Goal: Master basic database operations._

**Tasks** ->  
1. Write scripts to:  
   - Create a student.  
   - Find all students.  
   - Find by ID.  
   - Update student.  
   - Delete student.  
2. Use `lean()` wherever possible.  

---

## Assignment-4: Schema Validation Rules  
_🎯 Goal: Apply strong database-level validation._

**Tasks** ->  
1. Update schema with:  
   - Required fields.  
   - Min/max age.  
   - String length rules.  
   - Regex validation for email.  
2. Handle validation errors.  

---

## Assignment-5: Virtuals, Getters, Setters  
_🎯 Goal: Learn derived and formatted fields._

**Tasks** ->  
1. Add virtual: `isAdult` → true when age ≥ 18.  
2. Add setter to normalize name to lowercase.  
3. Add getter to capitalize name.  

---

## Assignment-6: Pre/Post Hooks  
_🎯 Goal: Use schema middleware._

**Tasks** ->  
1. `pre('save')` → log “Saving student…”.  
2. `post('save')` → log student ID.  
3. `pre('find')` → track query execution start.  

---

## Assignment-7: Indexes + Unique Constraints  
_🎯 Goal: Improve performance and enforce uniqueness._

**Tasks** ->  
1. Add indexes:  
   - email (unique).  
   - age.  
2. Compare indexed vs non-indexed performance using `explain()`.  
3. Try inserting duplicate email → handle uniqueness error.  

---

## Assignment-8: Embedded Documents (Subdocuments)  
_🎯 Goal: Practice document modeling._

**Tasks** ->  
1. Add `address` object:  
   ```jsx
   address: {
     city: String,
     state: String,
     zip: Number
   }
   ```
Update student with address.
Query students by city.

---

## Assignment-9: Referenced Documents (Population)  
_🎯 Goal: Work with relations in MongoDB._

**Tasks** ->  
1. Create a `Course` model.  
2. Add field to student:  
   - `courses: [{ type: ObjectId, ref: "Course" }]`.  
3. Use `populate()` to fetch course details.  

---

## Assignment-10: Aggregation Pipeline Basics  
_🎯 Goal: Learn grouped analysis._

**Tasks** ->  
1. Group students by city and sort by count (desc).  
2. Create aggregation to find the average student age.  

---

## Assignment-11: Advanced Aggregation  
_🎯 Goal: Work with complex pipelines._

**Tasks** ->  
1. `$lookup` students with courses.  
2. `$unwind` courses array.  
3. `$project` only required fields.  
4. Use `$facet` for:  
   - Pagination.  
   - Metadata (count).  

---

## Assignment-12: Transactions & ACID  
_🎯 Goal: Perform safe multi-document operations._

**Tasks** ->  
1. Write function to:  
   - Create student.  
   - Create course enrollment.  
   - Update student course array.  
2. Wrap entire process inside a transaction using `session`.  

---

## Assignment-13: Bulk Write Operations  
_🎯 Goal: Perform high-performance batch operations._

**Tasks** ->  
1. Use `bulkWrite()` to:  
   - Insert 100 students.  
   - Update selected students.  
   - Delete some.  
2. Compare performance to normal operations.  

---

## Assignment-14: Pagination & Query Optimization  
_🎯 Goal: Scale real-world querying._

**Tasks** ->  
1. Implement skip/limit pagination.  
2. Implement cursor-based pagination.  
3. Compare indexed vs non-indexed performance.  

---

## Assignment-15: Text Search  
_🎯 Goal: Implement search capability._

**Tasks** ->  
1. Add text index on name + email.  
2. Query:  
   - Exact matches.  
   - Partial match.  
   - Ranked relevance with `textScore`.  

---

## Assignment-16: GeoSpatial Queries  
_🎯 Goal: Work with geographic data._

**Tasks** ->  
1. Add:  
   ```jsx
   location: { type: { type: String }, coordinates: [Number] }
   ```
Create 2dsphere index.
Query students within 5 km of a point.

---

## Assignment-17: Capped Collections + TTL Index  
_🎯 Goal: Work with special MongoDB storage types._

**Tasks** ->  
1. Create a capped collection for logs.  
2. Use TTL index for temporary data.  
3. Insert expiring documents.  

---

## Assignment-18: Change Streams  
_🎯 Goal: React to live DB events._

**Tasks** ->  
1. Watch `Students` collection.  
2. Log:  
   - Insert.  
   - Update.  
   - Delete.  
3. Trigger events from another script.  

---

## Assignment-19: Performance Benchmarking  
_🎯 Goal: Evaluate MongoDB performance._

**Tasks** ->  
1. Generate script to insert 100k records.  
2. Benchmark:  
   - Find queries.  
   - Indexed queries.  
   - Aggregations.  
   - Sorts.  

---

## Assignment-20: Full Database Design Project  
_🎯 Goal: Design scalable Mongoose architecture._

**Tasks** ->  
Design a database for a **Learning Management System** including:  
- User (roles: student, teacher, admin).  
- Courses.  
- Lessons.  
- Enrollment.  
- Assignments.  
- Submissions.  
- Comments.  

**Requirements** ->  
1. Use references appropriately.  
2. Use embedded docs where optimal.  
3. Use indexes strategically.  
4. Include aggregation examples such as:  
   - Top-performing students.  
   - Grade averages.  
   - Completion statistics.  

---