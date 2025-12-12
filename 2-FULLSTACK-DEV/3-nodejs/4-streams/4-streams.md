# Streams and File Handling
Working with streams, file systems, and efficient data handling.

## Assignment-1: Stream File Copy (With Backpressure Logging)  
_🎯 Goal: Learn file streaming and backpressure._

**Tasks** ->  
1. Use `fs.createReadStream()` and `fs.createWriteStream()` to copy a file.  
2. Log messages when:  
   - The write stream applies backpressure.  
   - The stream drains (`'drain'` event).  
3. Confirm the file copies successfully.  

---

## Assignment-2: Custom Transform Stream  
_🎯 Goal: Create a custom Transform stream._

**Tasks** ->  
1. Create a Transform stream class that modifies the input text.  
2. Choose one transformation:  
   - Uppercase all text.  
   - Add a timestamp prefix to each line.  
3. Pipe input → transform → output (terminal or file).  

---

## Assignment-3: File Watcher with Debounce  
_🎯 Goal: Efficiently watch files with debouncing._

**Tasks** ->  
1. Use `fs.watch()` to detect changes to a target file.  
2. Implement a debounce timer (e.g., 300–1000ms).  
3. Only log **one message** if many rapid changes occur.  

---

## Assignment-4: Streaming Multipart File Upload Handler  
_🎯 Goal: Handle file uploads as streams._

**Tasks** ->  
1. Create an HTTP server that accepts a `multipart/form-data` file upload.  
2. Use streams to write uploaded file chunks directly to disk.  
3. Log the upload progress (bytes received).  

---

## Assignment-5: Fast Recursive File Search (grep clone)  
_🎯 Goal: Practice file traversal and efficient line scanning._

**Tasks** ->  
1. Recursively walk a folder.  
2. For each text file, stream it line-by-line (no full file buffering).  
3. Print lines that match a search keyword (case-insensitive).  
4. Display filename + line number for each match.  

---