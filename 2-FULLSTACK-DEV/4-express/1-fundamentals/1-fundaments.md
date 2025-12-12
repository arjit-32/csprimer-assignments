# Express Fundamentals

## Assignment-1: First Express Server  
_🎯 Goal: Get familiar with Express setup._

**Tasks** ->  
1. Initialize project with `npm init -y`.  
2. Install `express`.  
3. Create:  
   - `GET /` → returns `"Hello Express"`.  
   - `GET /time` → returns server time.  

---

## Assignment-2: Routes & Route Parameters  
_🎯 Goal: Learn routing patterns._

**Tasks** ->  
1. Add routes:  

| Path              | Behavior                     |  
|-------------------|------------------------------|  
| `/hello/:name`    | Returns greeting with name.  |  
| `/math/add/:a/:b` | Returns sum.                |  

2. Validate that `a` and `b` are numbers.  

---

## Assignment-3: Express Middleware Basics  
_🎯 Goal: Understand middleware pipeline._

**Tasks** ->  
1. Add a custom logger middleware printing:  
   - method  
   - url  
   - timestamp  
2. Add a request counter stored in memory.  

---

## Assignment-4: Serving Static Files  
_🎯 Goal: Serve a simple frontend from Express._

**Tasks** ->  
1. Create a `public/` folder.  
2. Serve:  
   - `index.html`.  
   - CSS + images.  
3. Add route `/about.html`.  

---

## Assignment-5: Basic Error Handling  
_🎯 Goal: Learn Express error patterns._

**Tasks** ->  
1. Create a route `/error` that throws an error.  
2. Add error middleware that returns JSON:  
   ```json
   { "error": "message" }
Add 404 fallback for unknown routes.
