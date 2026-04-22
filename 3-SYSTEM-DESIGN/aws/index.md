# ☁️ AWS for SDE 

---

# 🟢 PHASE 1 — Serverless & Event-Driven Backend

---

## Assignment 1: Serverless REST API (API Gateway + Lambda + DynamoDB)

🎯 Goal: Build scalable event-driven API.

### Tasks:
1. Build CRUD API using:
   - API Gateway
   - Lambda
   - DynamoDB
2. Add:
   - Proper IAM least-privilege role
   - Structured logging
   - Input validation
3. Implement:
   - Idempotent writes
   - Error handling
4. Enable CloudWatch logs.

### Interview Readiness:
- Explain cold starts.
- Explain Lambda concurrency limits.
- Explain DynamoDB partition key choice.
- Compare Lambda vs ECS for this use case.
- Discuss cost model (pay per request).

---

## Assignment 2: Async Processing with SQS + Lambda

🎯 Goal: Decouple request processing.

### Tasks:
1. Modify API to:
   - Push event to SQS.
2. Lambda consumes from SQS.
3. Configure:
   - Visibility timeout
   - Dead-letter queue
4. Simulate failure and retry.

### Interview Readiness:
- Explain at-least-once delivery.
- Explain idempotency importance.
- Explain DLQ usage.
- What happens if consumer crashes?
- How does scaling work?

---

## Assignment 3: Fan-out with SNS + Multiple SQS Queues

🎯 Goal: Event-driven architecture.

### Tasks:
1. Publish order event via SNS.
2. Create:
   - Inventory queue
   - Email queue
   - Analytics queue
3. Each handled by Lambda.

### Interview Readiness:
- Explain SNS vs SQS.
- Explain fan-out pattern.
- Compare event-driven vs synchronous API call.

---

# 🟡 PHASE 2 — Containers & Compute Trade-offs

---

## Assignment 4: Containerized Service on ECS Fargate

🎯 Goal: Run backend as container.

### Tasks:
1. Dockerize Node service.
2. Push to ECR.
3. Deploy to ECS Fargate.
4. Attach ALB.
5. Enable auto-scaling based on CPU.

### Interview Readiness:
- When to choose ECS over Lambda?
- Cost comparison.
- Scaling behavior.
- How rolling deployments work.

---

## Assignment 5: Compare Lambda vs ECS

🎯 Goal: Trade-off thinking.

### Tasks:
1. Deploy same API in:
   - Lambda
   - ECS
2. Compare:
   - Cold start
   - Latency
   - Cost (low vs steady traffic)
   - Scaling model

### Interview Readiness:
Explain decision matrix clearly.

---

# 🟠 PHASE 3 — Databases & Caching

---

## Assignment 6: RDS (Aurora/MySQL/Postgres) + Secrets Manager

🎯 Goal: Managed relational DB in cloud.

### Tasks:
1. Deploy RDS.
2. Store credentials in Secrets Manager.
3. Connect from ECS/Lambda.
4. Implement connection pooling strategy.

### Interview Readiness:
- Explain RDS vs DynamoDB.
- Discuss scaling limitations.
- Discuss connection exhaustion problem.

---

## Assignment 7: Add Redis (ElastiCache) for Caching

🎯 Goal: Reduce DB load.

### Tasks:
1. Implement cache-aside pattern.
2. Add TTL.
3. Invalidate cache on update.
4. Simulate cache failure.

### Interview Readiness:
- Explain cache-aside vs write-through.
- Discuss stale data risks.
- Discuss memory eviction policy.

---

# 🔵 PHASE 4 — Storage & CDN

---

## Assignment 8: S3 + Presigned Upload

🎯 Goal: Secure file uploads.

### Tasks:
1. Backend generates presigned PUT URL.
2. Client uploads directly to S3.
3. Restrict:
   - File type
   - Expiration
4. Block public bucket access.

### Interview Readiness:
- Why not upload through backend?
- Explain signed URL security.
- Explain S3 cost model.

---

## Assignment 9: Static Site + CloudFront + Route 53

🎯 Goal: Global frontend hosting.

### Tasks:
1. Deploy React build to S3.
2. Add CloudFront distribution.
3. Configure HTTPS (ACM).
4. Add cache invalidation.

### Interview Readiness:
- Explain CDN caching.
- Explain edge locations.
- Discuss cost optimization.

---

# 🟣 PHASE 5 — Networking & Security Basics

---

## Assignment 10: VPC with Public & Private Subnets

🎯 Goal: Understand cloud networking fundamentals.

### Tasks:
1. Create:
   - Public subnet (ALB)
   - Private subnet (ECS/RDS)
2. Configure:
   - Security groups
3. Ensure private DB not publicly accessible.

### Interview Readiness:
- Explain public vs private subnet.
- Explain security group vs NACL (high level).
- Why keep DB private?

---

## Assignment 11: IAM Best Practices

🎯 Goal: Least privilege access.

### Tasks:
1. Create:
   - Lambda execution role
   - ECS task role
2. Restrict access to:
   - Specific S3 bucket
   - Specific DynamoDB table
3. Test denied access scenario.

### Interview Readiness:
- Explain principle of least privilege.
- Explain temporary credentials.
- Discuss risks of over-permission.

---

# 🔴 PHASE 6 — Observability & Failure Handling

---

## Assignment 12: Structured Logging + Metrics + Alarms

🎯 Goal: Production monitoring.

### Tasks:
1. Add structured JSON logs.
2. Create custom CloudWatch metrics.
3. Create alarm for:
   - Error rate
   - High latency
4. Simulate error spike.

### Interview Readiness:
- Logs vs metrics vs tracing.
- Alert fatigue.
- Error budget concept.

---

## Assignment 13: Distributed Tracing with X-Ray

🎯 Goal: Trace request across services.

### Tasks:
1. Enable X-Ray on:
   - API Gateway
   - Lambda
2. Observe trace flow.
3. Identify slow component.

### Interview Readiness:
Explain how tracing helps debug production issues.

---

# 🟤 PHASE 7 — CI/CD & Infrastructure as Code

---

## Assignment 14: Infrastructure with AWS CDK

🎯 Goal: Define infra programmatically.

### Tasks:
1. Define:
   - Lambda
   - DynamoDB
   - IAM
2. Deploy via CDK.
3. Make change → show diff.

### Interview Readiness:
- Why IaC?
- Compare CDK vs Terraform.
- Benefits for team collaboration.

---

## Assignment 15: CI/CD Pipeline

🎯 Goal: Automated deployment.

### Tasks:
1. On Git push:
   - Run tests
   - Build Docker image
   - Deploy to ECS/Lambda
2. Add staging environment.
3. Simulate rollback.

### Interview Readiness:
- Blue/green deployment.
- Canary rollout.
- Safe release strategies.

---

# 🏁 FINAL CAPSTONE

---

## Assignment 16: Full Architecture Walkthrough

Take one system and explain:

1. Architecture diagram.
2. Scaling strategy.
3. Failure handling.
4. Cost drivers.
5. Security model.
6. Deployment flow.
7. Monitoring & alerting.
8. Trade-offs made.


---