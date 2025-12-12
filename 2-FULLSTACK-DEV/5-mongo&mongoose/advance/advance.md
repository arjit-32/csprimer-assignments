# Advanced


## Assignment-1: Flexible E-Commerce Product Schema (Variants + Attributes)  
_🎯 Objective: Design a schema that supports flexible product attributes, filtering, and variant inventory._

**Tasks** ->  
1. Create a product schema supporting:  
   - Base product info (title, description, images, category).  
   - Dynamic attributes (e.g., color, size, material).  
   - Variants/SKUs with price + stock.  
2. Create sample queries:  
   - Filter products by dynamic attributes.  
   - Retrieve available SKUs efficiently.  
3. Index fields needed for filtering performance.  

---

## Assignment-2: Soft Delete + Audit Trail System  
_🎯 Objective: Implement non-destructive deletion with history tracking._

**Tasks** ->  
1. Add a `deletedAt` field instead of actually deleting documents.  
2. Store all previous versions in an audit log collection.  
3. Modify queries to auto-exclude soft-deleted entries (middleware preferred).  
4. Add a restore function.  

---

## Assignment-3: Real-Time Analytics Dashboard (Change Streams)  
_🎯 Objective: Stream live updates without polling using MongoDB change streams._

**Tasks** ->  
1. Create a `sales` or `orders` collection.  
2. Set up a change stream for insert/update events.  
3. Stream updates to a dashboard (WebSocket or console output).  
4. Show metrics such as:  
   - Sales count.  
   - Recent order.  
   - Top product (optional).  

---

## Assignment-4: Hierarchical Comments (Materialized Path)  
_🎯 Objective: Enable unlimited nested comments with fast lookup._

**Tasks** ->  
1. Store comments using a materialized path field (e.g., `"root/child/child"`).  
2. Implement:  
   - Create comment.  
   - Reply to comment (append path).  
   - Fetch thread with pagination.  
3. Add an index for path queries.  

---

## Assignment-5: Index Optimization for Slow Query  
_🎯 Objective: Improve performance by analyzing and optimizing slow queries._

**Tasks** ->  
1. Run a slow query (real or simulated) and record execution time + explain plan.  
2. Add indexes based on the execution plan.  
3. Compare performance before and after optimization.  
4. Document the final chosen index strategy.   

---

## Assignment-6: Multi-Tenant Schema Strategy  
_🎯 Objective: Design an architecture that can scale across tenants._

**Tasks** ->  
1. Compare three strategies:  
   - Shared DB, tenant field.  
   - Database per tenant.  
   - Sharded architecture.  
2. Choose one and model:  
   - Collections.  
   - Tenant isolation rules.  
   - Access pattern assumptions.  
3. Write example queries with tenant filtering/security.  

---

## Assignment-7: Full-Text Search with Autocomplete + Highlighting  
_🎯 Objective: Build advanced search behavior beyond basic text filtering._

**Tasks** ->  
1. Create a text index (Native or Atlas Search).  
2. Implement:  
   - Autocomplete suggestions.  
   - Relevance boosting (title > description).  
   - Result highlighting.  
3. Test queries for different search patterns (typos, partial matches).  

---

## Assignment-8: Optimistic Concurrency Control (Inventory)  
_🎯 Objective: Prevent race conditions during simultaneous updates._

**Tasks** ->  
1. Create an inventory document with quantity.  
2. Implement update using:  
   - `versionKey` or conditional update (`$inc` with `$lte check` or `findOneAndUpdate` with conditions).  
3. Simulate concurrent purchase attempts (script or multiple calls).  
4. Demonstrate:  
   - Successful orders.  
   - Failure when inventory is insufficient.  

---

## Assignment-9: SQL → Mongo Migration Strategy  
_🎯 Objective: Learn how to translate relational schema into an efficient document model._

**Tasks** ->  
1. Select or mock a small SQL schema (users, orders, products).  
2. Map tables → Mongo collections using:  
   - Embedding where appropriate.  
   - Referencing where necessary.  
3. Document reasoning for structure.  
4. Run a migration script that:  
   - Reads SQL data.  
   - Transforms it.  
   - Writes to MongoDB.  

---