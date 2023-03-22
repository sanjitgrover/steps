import * as cdk from '@aws-cdk/core';
import {join} from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import * as sfn from '@aws-cdk/aws-stepfunctions';
import * as tasks from '@aws-cdk/aws-stepfunctions-tasks';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class StepsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

   const helloFunction = new lambda.Function(this, 'MyLambdaFunction', {
     runtime: lambda.Runtime.NODEJS_16_X,
            code: lambda.Code.fromAsset(join(__dirname, '..','services','hello')),
            handler: 'hello.main'
        })
        
    
  }
}
