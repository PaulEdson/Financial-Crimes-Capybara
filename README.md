### Project 1 (Due 12/02/2024)

#### Financial Crimes!

# Objective:

Each team will create an online portal for the reporting and management of
financial crimes — money laundering, bad-actor financing, and shady dealing in
general. Anonymous users must be able to report crimes without providing PII or
credentials. Credentialed users must be able do almost anything with records in the
system, including creating them, editing/annotating existing ones, or recategorizing
them as “solved.” However, only someone with top-tier privileges should be able to

delete them or take other high-level action. As your users will have variable tech savviness, clear and logical UI/UX are critical. Special care should be taken, leveraging containers and serverless technology, to minimize deployment time, latency, cost, and unresponsiveness/downtime in case of failure.

Functional Requirements:
Must be a full-stack solution consisting of:

- Angular Frontend (HTML, CSS, TS)
- AWS API Gateway
- EventBridge
- NestJS Backend using TypeORM
- AWS Lambda
- AWS Aurora PostgreSQL Database
- AWS EKS Deployment
- SAM
- SNS and SQS
- Mocha, Chai, Jasmine
- Code should be available in a public GitHub repository (one per team)
- Handles edge cases, errors and exceptions effectively, application-wide
- Test Driven Development

Non-Functional Requirements:

- Well-documented code
- Code upholds industry best practices (Solid/Dry)
- Industry-Grade UI (User Interface)
- Intuitive UX (User Experience

Bonus Points:

- Implementing authentication
- Passport.js
