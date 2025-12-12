# AWS Assignments

## Assignment-1: Deploy a Containerized Microservice Using ECS Fargate  
_🎯 Goal: Package a small service in Docker and deploy it to ECS Fargate with auto-scaling._  

**Scenario:** A product team wants to migrate a monolithic service to microservices.  
**AWS Focus:** ECS, Fargate, CloudWatch, IAM, ECR  
**Skills Built:** Container orchestration, CI/CD integration.  

---

## Assignment-2: Create a CI/CD Pipeline with CodePipeline + CodeBuild  
_🎯 Goal: Build a pipeline triggered by Git pushes that builds, tests, and deploys a Lambda or ECS service._  

**Scenario:** Engineering leadership wants consistent deployments.  
**AWS Focus:** CodePipeline, CodeBuild, CodeDeploy  
**Skills Built:** DevOps automation.  

---

## Assignment-3: Implement API Gateway + Lambda for a Serverless API  
_🎯 Goal: Create a CRUD API backed by DynamoDB and secured via IAM roles or Cognito._  

**Scenario:** You are tasked to build a cost-efficient API for lightweight operations.  
**AWS Focus:** API Gateway, Lambda, DynamoDB  
**Skills Built:** Serverless design, event-driven logic.  

---

## Assignment-4: Enable Observability Using CloudWatch Structured Logs + Metrics  
_🎯 Goal: Add structured JSON logging, custom CloudWatch metrics, and alarms._  

**Scenario:** Logs are currently unstructured and difficult to query.  
**AWS Focus:** CloudWatch Logs, Metrics, Alarms  
**Skills Built:** Production monitoring.  

---

## Assignment-5: Build an S3 Static Website with CloudFront and Route 53  
_🎯 Goal: Configure static hosting, use CloudFront CDN, and add domain + SSL via ACM._  

**Scenario:** Marketing needs a global landing page with caching and HTTPS.  
**AWS Focus:** S3, CloudFront, Route 53, ACM  
**Skills Built:** Web hosting, networking, SSL.  

---

## Assignment-6: Implement DynamoDB with On-Demand Scaling and GSI  
_🎯 Goal: Create a table with partition keys, GSIs, and TTL for cleanup._  

**Scenario:** The product team needs a low-latency NoSQL store for reads that scale separately from writes.  
**AWS Focus:** DynamoDB  
**Skills Built:** NoSQL data modeling.  

---

## Assignment-7: Add Step Functions to Orchestrate Multi-Step Workflows  
_🎯 Goal: Implement a state machine coordinating Lambda services with retries and parallel steps._  

**Scenario:** Business processes span several async operations.  
**AWS Focus:** Step Functions  
**Skills Built:** Workflow orchestration.  

---

## Assignment-8: Deploy Infrastructure with Terraform (or CDK)  
_🎯 Goal: Provision VPC, IAM, S3, and Lambda using Infrastructure as Code._  

**Scenario:** Ops requires infra-as-code standardization.  
**AWS Focus:** Terraform OR AWS CDK  
**Skills Built:** IaC, automation, reproducibility.  

---

## Assignment-9: Build an Event-Driven Integration with SQS + SNS  
_🎯 Goal: Use SNS to publish messages and multiple SQS queues for subscribers._  

**Scenario:** A retail service needs asynchronous communication between components.  
**AWS Focus:** SQS, SNS  
**Skills Built:** Decoupling, queuing patterns.  

---

## Assignment-10: Create an RDS Aurora Serverless DB + Connection Pooling  
_🎯 Goal: Deploy Aurora Serverless with Secrets Manager rotation and Lambda-based access._  

**Scenario:** Demand fluctuates and DB cost must scale accordingly.  
**AWS Focus:** Aurora, Secrets Manager  
**Skills Built:** Database scaling and secure access.  

---

## Assignment-11: Configure Access Control with Fine-Grained IAM Roles  
_🎯 Goal: Introduce least-privilege IAM roles and temporary credentials using IAM Roles + STS._  

**Scenario:** Dev team permissions are too broad.  
**AWS Focus:** IAM, STS  
**Skills Built:** Security and compliance.  

---

## Assignment-12: Build a Kinesis Firehose Data Ingestion Pipeline  
_🎯 Goal: Capture streaming events and persist to S3/DynamoDB._  

**Scenario:** Product analytics needs real-time streaming data.  
**AWS Focus:** Kinesis Firehose  
**Skills Built:** Scalable streaming ingestion.  

---

## Assignment-13: Configure VPC Networking with Private/Public Subnets  
_🎯 Goal: Build VPC, NAT gateway, SG rules, and deploy workload in private subnet._  

**Scenario:** A system must run privately but expose an entry API endpoint.  
**AWS Focus:** VPC, Subnets, SGs, NAT, IGW  
**Skills Built:** Cloud networking.  

---

## Assignment-14: Enable Caching with ElastiCache Redis  
_🎯 Goal: Add Redis caching layer with expiration and fallback logic._  

**Scenario:** API latency is high due to database round trips.  
**AWS Focus:** ElastiCache  
**Skills Built:** Caching strategies, performance tuning.  

---

## Assignment-15: Configure Cost Monitoring with Budgets + Cost Explorer  
_🎯 Goal: Create budgets, alerts, and cost dashboards tied to tags._  

**Scenario:** Finance detected unexpected cloud spend.  
**AWS Focus:** AWS Budgets, Cost Explorer  
**Skills Built:** Cloud FinOps.  

---

## Assignment-16: Deploy a Blue/Green Deployment Strategy  
_🎯 Goal: Implement CodeDeploy blue/green deployment for ECS or EC2._  

**Scenario:** Releases occasionally break production.  
**AWS Focus:** CodeDeploy  
**Skills Built:** Deployment reliability.  

---

## Assignment-17: Implement S3 Lifecycle Policies + Glacier Archival  
_🎯 Goal: Configure automatic tiering to IA → Glacier → Delete._  

**Scenario:** Old logs must be retained but stored cheaply.  
**AWS Focus:** S3, Glacier  
**Skills Built:** Data lifecycle management.  

---

## Assignment-18: Configure CloudTrail + GuardDuty for Security Monitoring  
_🎯 Goal: Enable GuardDuty + CloudTrail and set security alerts._  

**Scenario:** Security team needs standard auditing and anomaly detection.  
**AWS Focus:** GuardDuty, CloudTrail  
**Skills Built:** Security compliance.  

---

## Assignment-19: Automate AMI Image Creation for EC2  
_🎯 Goal: Create AMI automation job using SSM Automation documents._  

**Scenario:** System needs weekly patching snapshots for rollback.  
**AWS Focus:** EC2 AMI, SSM Automation  
**Skills Built:** Operational automation.  

---

## Assignment-20: Migrate a Local Image Upload System to S3 Presigned URLs  
_🎯 Goal: Implement presigned upload URLs and secure them via IAM policies._  

**Scenario:** Web apps currently upload files via backend; performance is slow.  
**AWS Focus:** S3, IAM, SDK  
**Skills Built:** Secure direct-to-cloud integration.  

---