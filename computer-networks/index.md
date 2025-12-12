# Computer Network Assignments

## Assignment-1: Inspect and Decode an HTTP Request/Response  
_🎯 Goal: Use browser dev tools or `curl -v` and break down: headers, status codes, body, caching, and TLS._  

**Industry Use:** Debug slow or failing API calls.  

---

## Assignment-2: Compare HTTP/1.1 vs HTTP/2 vs HTTP/3  
_🎯 Goal: Run a site test (e.g., `curl --http2`) and document latency and connection behavior differences._  

**Industry Use:** Performance optimization for modern web apps.  

---

## Assignment-3: Run a Packet Capture With Wireshark  
_🎯 Goal: Capture traffic from a web request and identify protocol, handshake, DNS, and TLS details._  

**Industry Use:** Debugging networking at low-level when latency or TLS issues occur.  

---

## Assignment-4: Configure DNS Records and Test Resolution  
_🎯 Goal: Setup and verify A, CNAME, TXT, and AAAA records using `dig`, `nslookup`, or online tools._  

**Industry Use:** Deployments, domain configuration, email verification, service discovery.  

---

## Assignment-5: Implement Connection Keep-Alive and Measure Effect  
_🎯 Goal: Enable keep-alive in an API client and measure difference in latency vs establishing new TCP connections._  

**Industry Use:** Performance optimization for API-heavy microservices.  

---

## Assignment-6: Benchmark a REST API Under Network Constraints  
_🎯 Goal: Use Chrome throttling or `tc` network shaping to simulate: 3G, packet loss, latency spikes._  

**Industry Use:** Designing resilient mobile/web experience.  

---

## Assignment-7: Build a Simple TCP and UDP Message Sender  
_🎯 Goal: Send messages using TCP and UDP and compare reliability and ordering._  

**Industry Use:** Understanding protocols behind HTTP, WebRTC, DNS, etc.  

---

## Assignment-8: Use Reverse Proxying via Nginx or Traefik  
_🎯 Goal: Route requests to multiple backend services and enable caching, compression, and load balancing._  

**Industry Use:** API gateway fundamentals and edge networking.  

---

## Assignment-9: Implement Client-Side Retry Strategy  
_🎯 Goal: Build retry logic with exponential backoff and jitter and compare success rates under failure injection._  

**Industry Use:** Avoid cascading failures in microservices.  

---

## Assignment-10: Test TLS/SSL Certificate Flow  
_🎯 Goal: Create a local HTTPS server, generate certificates, and test secure negotiation._  

**Industry Use:** Security, compliance, avoiding browser security warnings.  

---

## Assignment-11: Measure and Compare Latency vs Throughput  
_🎯 Goal: Run benchmarks (`ping`, `wrk`, `ab`, Postman collections) and explain the relationship._  

**Industry Use:** Performance tuning and capacity planning.  

---

## Assignment-12: Debug a CORS Issue  
_🎯 Goal: Intentionally trigger a CORS error and resolve using proper headers (`Access-Control-Allow-*`)._  

**Industry Use:** Frontend/backend integration.  

---

## Assignment-13: Create a Simple Load Balancer  
_🎯 Goal: Round-robin forward requests between two servers._  

**Industry Use:** High availability, scaling, service resilience.  

---

## Assignment-14: Analyze NAT and Firewall Behavior  
_🎯 Goal: Test local app access behind NAT and firewall rules; configure port forwarding._  

**Industry Use:** Local testing, edge deployments, IoT.  

---

## Assignment-15: Implement WebSockets and Compare vs HTTP Polling  
_🎯 Goal: Build a real-time feature using WebSockets and benchmark against long polling and SSE._  

**Industry Use:** Chat apps, live dashboards, multiplayer systems.  

---

## Assignment-16: Evaluate MTU and Packet Fragmentation  
_🎯 Goal: Test ping with different packet sizes (`ping -s`) to find fragmentation threshold._  

**Industry Use:** Performance tuning across VPNs, proxies, and CDNs.  

---

## Assignment-17: Deploy a CDN and Measure Edge Latency  
_🎯 Goal: Serve a static asset from a CDN and compare geographic performance differences._  

**Industry Use:** Global performance optimization.  

---

## Assignment-18: Analyze API Traffic with Proxy Tools  
_🎯 Goal: Use `mitmproxy`, Postman intercept, or Chrome proxy to inspect encrypted traffic (legitimately)._  

**Industry Use:** Debugging client behavior and 3rd-party API integrations.  

---

## Assignment-19: Implement Request Prioritization  
_🎯 Goal: Queue slow network calls and prioritize urgent ones (e.g., WebSocket heartbeat > analytics calls)._  

**Industry Use:** Front-end optimization and backend resilience.  

---

## Assignment-20: Create a High-Level Network Topology Diagram  
_🎯 Goal: Document an app’s network flow: DNS → CDN → Load Balancer → API → DB → External Services._  

**Industry Use:** Architecture, onboarding, audits, troubleshooting.  

---