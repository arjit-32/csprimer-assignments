# AWS Mastery Assignments

prioritize core developer-relevant topics: serverless, containers, storage, databases, networking/security basics, observability, CI/CD, and IaC 
Focus on hands-on building, explaining trade-offs (cost/performance/scalability/security), and verbal walkthroughs (as in interviews). Use free tier where possible.

### Level 1 – Core Compute & Storage (1–5)

1. **Deploy a Serverless REST API with API Gateway + Lambda + DynamoDB**  
   Build a CRUD API (e.g., todo list) → integrate DynamoDB → add IAM role for least privilege → handle errors/retries.  
   **Focus:** Serverless architecture, event-driven design, NoSQL modeling.

2. **Build & Deploy a Containerized Service on ECS Fargate**  
   Dockerize a simple Node.js/Go/Spring service → push to ECR → deploy to Fargate with auto-scaling group and ALB.  
   **Focus:** Container basics, ECS vs EKS decision, logging to CloudWatch.

3. **Implement S3 Static Website + CloudFront CDN + Route 53**  
   Host a static React/Vue site on S3 → add CloudFront distribution → configure custom domain + HTTPS via ACM.  
   **Focus:** Object storage, global distribution, caching behaviors, signed URLs.

4. **Secure File Uploads with S3 Presigned URLs**  
   Generate presigned PUT URLs from a backend (Lambda or EC2) → allow direct browser-to-S3 uploads → enforce policies (e.g., content-type, expiration).  
   **Focus:** Direct-to-cloud patterns, security without proxying large files.

5. **Add Caching Layer with ElastiCache (Redis/Memcached)**  
   Integrate Redis cache in front of DynamoDB/RDS → implement cache-aside pattern with TTL → handle cache invalidation.  
   **Focus:** Performance optimization, read-heavy workloads, fallback logic.

### Level 2 – Databases & Messaging (6–9)

6. **Model & Scale a DynamoDB Table with GSIs & On-Demand**  
   Design table for high-read access (e.g., user profiles + orders) → add Global Secondary Indexes → enable TTL + on-demand capacity.  
   **Focus:** Partition key/sort key design, hot key mitigation, cost modeling.

7. **Provision RDS (Aurora/MySQL/PostgreSQL) with Secrets Manager**  
   Deploy Aurora Serverless v2 → store credentials in Secrets Manager → rotate automatically → connect from Lambda/ECS.  
   **Focus:** Relational DB in cloud, connection pooling, secure secrets handling.

8. **Decouple Services with SQS + SNS (Fan-out Pattern)**  
   Publish order events via SNS → multiple SQS queues subscribe (e.g., email, inventory, analytics) → process with Lambda.  
   **Focus:** Asynchronous decoupling, dead-letter queues, visibility timeout.

9. **Orchestrate Multi-Step Workflow with Step Functions**  
   Build state machine: validate input → call Lambda → wait for approval → update DynamoDB → send notification. Add retries/parallel branches.  
   **Focus:** Workflow coordination, error handling, visual debugging.

### Level 3 – Networking, Security & Observability (10–12)

10. **Design Secure VPC with Private/Public Subnets**  
    Create VPC → public subnet with NAT Gateway → private subnet for ECS/Lambda → security groups + NACLs → expose via ALB/API Gateway.  
    **Focus:** Networking fundamentals, private resources, least-privilege access.

11. **Implement Fine-Grained IAM & AssumeRole Patterns**  
    Create IAM roles for Lambda/ECS → use STS AssumeRole for cross-account/temp creds → apply condition keys (e.g., source IP, MFA).  
    **Focus:** Security best practices, least privilege, temporary credentials.

12. **Set Up Observability with CloudWatch Logs/Metrics + Alarms + X-Ray**  
    Enable structured JSON logging → create custom metrics → set alarms → add X-Ray tracing to Lambda/API Gateway.  
    **Focus:** Production monitoring, distributed tracing, alerting.

### Level 4 – Deployment & IaC (13–15)

13. **Build CI/CD Pipeline with CodePipeline + CodeBuild + CodeDeploy**  
    Trigger on Git push → build/test Docker image → deploy to ECS or Lambda → add manual approval stage.  
    **Focus:** Automated deployments, blue/green strategy basics.

14. **Provision Infrastructure with AWS CDK (or Terraform)**  
    Use CDK (preferred for developers) to define VPC, Lambda, DynamoDB, IAM → synthesize/deploy → show diff on changes.  
    **Focus:** Infrastructure as Code, reproducibility, version control of infra.

15. **Implement Blue/Green or Canary Deployment**  
    Use CodeDeploy or ECS blue/green → demonstrate rollback → explain traffic shifting and validation hooks.  
    **Focus:** Safe releases, zero-downtime, deployment patterns.