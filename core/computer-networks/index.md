# 🌐 Computer Networks 

# SECTION 1 — TCP/IP Fundamentals

## Assignment 1: TCP 3-Way Handshake & Termination

Tasks:
- Draw handshake:
  SYN → SYN-ACK → ACK
- Explain sequence numbers.
- Explain 4-way termination.
- Explain TIME_WAIT.

Explain:
- Why short-lived connections hurt performance.

---

## Assignment 2: TCP Congestion & Retransmission

Tasks:
- Explain:
  - Slow start
  - Congestion window
  - Retransmission
- Simulate packet loss.
- Measure latency impact.

Relate to:
- Why APIs slow under packet loss.

---

# SECTION 2 — HTTP Deep Dive

## Assignment 3: HTTP Semantics

Tasks:
- Classify:
  - GET, POST, PUT, PATCH, DELETE
- Explain:
  - Idempotency
  - Safe methods
- Design retry-safe endpoint.

---

## Assignment 4: HTTP Caching

Tasks:
- Implement:
  - ETag
  - Cache-Control
  - 304 Not Modified
- Compare:
  - Strong vs weak validation.

---

## Assignment 5: HTTP/1.1 vs HTTP/2 vs HTTP/3

Tasks:
- Explain:
  - Head-of-line blocking
  - Multiplexing
  - QUIC
- Benchmark differences.

---

# SECTION 3 — Security

## Assignment 6: TLS Handshake

Tasks:
- Explain:
  - Certificate exchange
  - Public/private key usage
- Generate self-signed cert.
- Inspect handshake via Wireshark.

---

## Assignment 7: CORS vs CSRF vs SameSite

Tasks:
- Demonstrate CORS failure.
- Simulate CSRF vulnerability.
- Fix using:
  - SameSite cookies
  - CSRF tokens.

---

# SECTION 4 — Scaling & Reliability

## Assignment 8: Connection Pooling

Tasks:
- Limit DB connections.
- Simulate connection exhaustion.
- Explain:
  - Pool sizing.
  - Ephemeral ports.

---

## Assignment 9: Retry + Backoff + Jitter

Tasks:
- Implement exponential backoff.
- Add jitter.
- Compare cascading failure behavior.

---

## Assignment 10: Load Balancing Strategies

Tasks:
- Implement:
  - Round robin
  - Least connections
- Explain sticky sessions.

---

# SECTION 5 — Production Debugging

## Assignment 11: Latency Breakdown

Tasks:
Measure:
- DNS time
- TCP handshake
- TLS handshake
- TTFB
- Content download

Explain slow component.

---

## Assignment 12: Simulate Network Partition

Tasks:
- Block service temporarily.
- Observe behavior.
- Explain CAP trade-off.

---

# FINAL: Debugging Case Study

Explain:

1. Why API latency spikes at high RPS?
2. Why retries make things worse?
3. Why mobile users see slower response?
4. Why connection pool exhaustion occurs?
5. Why WebSocket disconnects under load?

Use:
- TCP
- HTTP
- DNS
- Congestion
- Load balancing