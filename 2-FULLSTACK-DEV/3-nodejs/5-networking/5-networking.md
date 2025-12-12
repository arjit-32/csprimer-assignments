# Networking and Communication
Building networking applications and understanding communication protocols.

## Assignment-1: TCP Chat Server (`net` module)  
_🎯 Goal: Build a basic multi-client chat system._

**Tasks** ->  
1. Create a TCP server using `net.createServer()`.  
2. Broadcast messages from one client to all others.  
3. Log when clients connect or disconnect.  

---

## Assignment-2: UDP Echo Server (`dgram` module)  
_🎯 Goal: Understand UDP messaging._

**Tasks** ->  
1. Create a UDP server that receives text from a client.  
2. Send the exact same data back to the sender.  
3. Log incoming messages and sender info.  

---

## Assignment-3: WebSocket Log-Tailing Server  
_🎯 Goal: Stream real-time updates to connected clients._

**Tasks** ->  
1. Create a WebSocket server.  
2. Watch a log file for new lines (`fs.watch()` or streaming).  
3. Push new lines to all connected WebSocket clients.  

---