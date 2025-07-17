
# AWS CDK + CodePipeline Project - Student ID: 8901001

## ✅ Full Assignment Completion Report

This project is part of the Cloud Dev & Ops coursework. It involves the complete setup of an AWS CDK project using TypeScript, deployment of core AWS services under the Free Tier, and the configuration of a CI/CD pipeline using AWS CodePipeline.

---

## 🎯 Objective

- Use AWS CDK to deploy infrastructure as code.
- Automate deployment using CodePipeline.
- Integrate GitHub with CodePipeline for CI/CD.
- Work within AWS Free Tier limits.

---

## ✅ Completed Tasks Checklist

### ✅ PART 1: AWS CDK Setup
- [x] AWS CLI installed and configured with new account credentials
- [x] AWS CDK installed globally
- [x] GitHub Codespaces initialized and project folder created
- [x] CDK project initialized in TypeScript (`cdk init`)
- [x] CDK libraries installed (S3, Lambda, DynamoDB)
- [x] CDK resources defined in `lib/cdk-app-stack.ts`
- [x] Successfully ran `cdk bootstrap`
- [x] Successfully ran `cdk deploy`
- [x] Verified all resources created in AWS Console

### ✅ PART 2: GitHub Integration
- [x] GitHub repo created and project pushed
- [x] `buildspec.yml` added to the project root

### ✅ PART 3: CodePipeline Setup
- [x] CodePipeline created via AWS Console
- [x] GitHub connected as the source provider
- [x] CodeBuild project created and linked
- [x] Pipeline stages defined: Source → Build
- [x] buildspec.yml triggered `cdk synth` and `cdk deploy`

### ✅ PART 4: Pipeline Testing
- [x] Code change made in CDK (Lambda code update)
- [x] Change pushed to GitHub
- [x] CodePipeline triggered automatically
- [x] Build and deploy succeeded
- [x] Resources updated and verified in AWS Console

---

## 🚀 Resources Created via CDK

### ✅ Amazon S3 Bucket
- Name: `MyBucket8901001`
- Versioned and auto-destroyed for dev/test

### ✅ AWS Lambda Function
- Runtime: Node.js 18.x
- Handler: `index.handler`
- Inline code returns "Hello from Lambda!"

### ✅ Amazon DynamoDB Table
- Name: `MyTable`
- Partition key: `id` (String)
- Auto-destroyed on stack delete

---

## 🔄 CI/CD Pipeline Details

| Stage   | Tool            | Description                                      |
|---------|-----------------|--------------------------------------------------|
| Source  | GitHub          | Triggers on push to `main` branch                |
| Build   | CodeBuild       | Executes `cdk synth` and `cdk deploy` via `buildspec.yml`

### ✅ `buildspec.yml`
```yaml
version: 0.2
phases:
  install:
    runtime-versions:
      nodejs: 18
    commands:
      - npm install -g aws-cdk
      - npm install
  build:
    commands:
      - npm run build
      - npx cdk synth
      - npx cdk deploy --require-approval never
artifacts:
  files:
    - '**/*'
```

---

## ✅ Visual Proof / Verification

- [x] S3 bucket visible in AWS Console
- [x] Lambda deployed and testable
- [x] DynamoDB table created and active
- [x] CodePipeline execution log shows successful deploy
- [x] GitHub repo includes all necessary files

---

## 👤 Student Information

- **Name:** Denish Akbari
- **Student ID:** 8901001

---

## 📬 Submission Summary

- ✅ GitHub Repo: [https://github.com/denishakbari/cdk-pipeline-8901001](#) *(replace with actual link)*
- ✅ All AWS resources deployed with CDK
- ✅ CI/CD pipeline fully functional
- ✅ Verified and tested with code updates
- ✅ Screenshots provided separately
