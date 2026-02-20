# System Design Mastery Assignments

Focus on key aspects like requirements gathering, trade-offs, diagrams (UML/component), scalability, reliability, and edge cases. Practice sketching on paper/whiteboard and explaining verbally.

### Level 1 – LLD Fundamentals (1–4)

1. **Design a Parking Lot System**  
   Model classes/interfaces for vehicles, parking spots (handicap, compact, large), levels, and payment. Handle entry/exit, spot assignment, fees. Consider extensibility for sensors or electric charging.

2. **Design an Elevator System**  
   Create classes for elevators, floors, requests, and controllers. Implement scheduling algorithms (e.g., FCFS, shortest seek), handle multiple elevators, maintenance mode, and overload scenarios.

3. **Design a Deck of Cards Game**  
   Model cards, suits, ranks, deck shuffling/dealing. Extend to a simple game like Blackjack: include players, dealer, betting, win conditions. Focus on OOP principles (inheritance, polymorphism).

4. **Design a Vending Machine**  
   Classes for items, inventory, coins/notes, payment processing, and state machine (idle, selecting, dispensing). Handle change calculation, out-of-stock, and error states like jammed items.

### Level 2 – Advanced LLD (5–7)

5. **Design an LRU Cache**  
   Implement a Least Recently Used cache with O(1) get/put. Use data structures like hashmap + doubly-linked list. Discuss thread-safety, eviction policies, and variations like LFU.

6. **Design a Restaurant Reservation System**  
   Model tables, reservations, users, time slots. Handle bookings, cancellations, waitlists, no-shows. Include notifications and integration points for payments or reviews.

7. **Design a File System**  
   Create a hierarchical structure with directories, files, permissions. Support operations like create/read/write/delete, search, and symlinks. Consider disk space management and concurrency.

### Level 3 – HLD Fundamentals (8–11)

8. **Design a URL Shortener (TinyURL)**  
   High-level architecture: hashing for short keys, database choices (SQL/NoSQL), redirection service. Address collisions, analytics, expiration, scalability with partitioning.

9. **Design a Key-Value Store (like Redis)**  
   Components: in-memory storage, persistence, replication, sharding. Handle consistency (eventual vs strong), eviction, and high availability. Discuss CAP theorem trade-offs.

10. **Design a Notification System**  
    For push/email/SMS: event triggers, queues, workers, user preferences. Scale for high volume, handle failures/retries, and personalization. Integrate with external services.

11. **Design a Chat System (like WhatsApp)**  
    Real-time messaging: WebSockets, message queues (Kafka), storage (Cassandra). Cover online/offline status, group chats, media, end-to-end encryption, and global scaling.

### Level 4 – Complex HLD (12–15)

12. **Design Twitter (or X)**  
    Timeline generation, feeds (fan-out vs fan-in), trending topics, search. Handle high read/write, caching (Redis), sharding users/tweets, and moderation.

13. **Design Uber (Ride-Sharing)**  
    Matching riders/drivers: geohashing, ETA calculation, routing. Components: dispatch service, payments, maps integration. Address surge pricing, safety, and real-time tracking.

14. **Design Netflix (Video Streaming)**  
    Content recommendation, CDN for delivery, encoding/transcoding. Handle user profiles, A/B testing, offline downloads, and global replication for low latency.

15. **Design a Web Crawler**  
    Polite crawling: URL frontier (priority queue), duplicate detection (Bloom filter), robots.txt respect. Scale with distributed workers, storage (HDFS), and handling dynamic content.