
# AWS CDK + CodePipeline Project - Student ID: 8901001

## 🎯 Objective

This project demonstrates how to use the **AWS Cloud Development Kit (CDK)** to programmatically create AWS infrastructure and set up a **CI/CD pipeline using AWS CodePipeline**. It includes the deployment of three Free Tier resources:

- Amazon S3 Bucket
- AWS Lambda Function
- Amazon DynamoDB Table

The pipeline automatically deploys the infrastructure upon changes pushed to GitHub.

---

## 📁 Project Structure

```
cdk-pipeline-8901001/
└── cdk-app/
    ├── lib/
    │   └── cdk-app-stack.ts     # CDK resources
    ├── buildspec.yml            # CI/CD build configuration
    ├── cdk.json
    └── README.md                # (this file)
```

---

## 🔧 Technologies Used

- **Language:** TypeScript
- **AWS CDK CLI**
- **AWS CodePipeline**
- **AWS CodeBuild**
- **AWS S3, Lambda, DynamoDB**
- **GitHub + Codespaces**

---

## 🚀 Resources Created via CDK

### ✅ Amazon S3 Bucket
- Stores artifacts/code
- Created using CDK with versioning enabled

### ✅ AWS Lambda Function
- Runtime: Node.js 18.x
- Handler: `index.handler`
- Inline code
- Logs execution on trigger

### ✅ Amazon DynamoDB Table
- Table name: `MyTable`
- Partition Key: `id` (type: string)
- Removal policy: `DESTROY` for dev/testing

---

## 🔄 CI/CD Pipeline Details

| Stage   | Tool            | Description                                      |
|---------|-----------------|--------------------------------------------------|
| Source  | GitHub          | Triggered on changes pushed to `main` branch     |
| Build   | AWS CodeBuild   | Uses `buildspec.yml` to run `cdk synth` and `cdk deploy` |
| Deploy  | CDK in build stage | Deploys stack using CloudFormation          |

### 📄 `buildspec.yml` Sample
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

## ✅ Verification

### 🔎 AWS Console
- **S3:** Bucket visible and accessible
- **Lambda:** Deployed and testable
- **DynamoDB:** Table created and live

### 📈 CodePipeline
- GitHub push → triggers CodeBuild → CDK deploy runs automatically

### 📸 Screenshots (provided separately)
- `cdk deploy` output in terminal
- AWS Console: S3, Lambda, DynamoDB
- CodePipeline successful run log

---

## 👤 Author

- **Name:** Denish Akbari
- **Student ID:** 8901001


---

## 📬 Submission Contents

- GitHub Repo: [https://github.com/denishakbari/cdk-pipeline-8901001](#) *(replace with actual link)*
- All required AWS resources deployed
- CI/CD pipeline working as expected
- All code and configuration files included
