# AWS Cognito, DynamoDB, API Gateway and Lambda

This exercise was proposed to create a user pool in Cognito that would be used for authorization to access a REST API at API Gateway. The API would call a Lambda function that writes an item in DynamoDB.

##the issue

When I created a Lambda function, I noticed that the aws-sdk was not a built-in module, so it required pre-installation. As pre-installation is not possible in this AWS service, I solved this problem by adding a layer with all the necessary node modules to the Lambda function.

