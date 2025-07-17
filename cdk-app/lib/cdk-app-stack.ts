import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class CdkAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ✅ S3 Bucket
    const myBucket = new s3.Bucket(this, 'StudentBucket8901001', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // ✅ DynamoDB Table
    const myTable = new dynamodb.Table(this, 'StudentTable8901001', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      tableName: 'StudentRecords8901001',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // ✅ Lambda Function
    const myLambda = new lambda.Function(this, 'StudentLambda8901001', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          console.log("Lambda invoked");
          return {
            statusCode: 200,
            body: "Hello from CI/CD Pipeline!"
          };
        };
      `),
      environment: {
        BUCKET_NAME: myBucket.bucketName,
        TABLE_NAME: myTable.tableName,
      },
    });

    // Grant Lambda access to read/write DynamoDB
    myTable.grantReadWriteData(myLambda);
    // Grant Lambda access to S3
    myBucket.grantReadWrite(myLambda);
  }
}
