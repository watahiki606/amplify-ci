import { AmplifyRootStackTemplate } from "@aws-amplify/cli-extensibility-helper";

export function override(resources: AmplifyRootStackTemplate) {
  const loggerPolicy = {
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Effect: "Allow",
          Action: "logs:PutLogEvents",
          Resource: `arn:aws:logs:*:*:log-group:*`,
        },
        {
          Effect: "Allow",
          Action: [
            "logs:CreateLogStream",
            "logs:CreateLogGroup",
            "logs:DescribeLogStreams",
          ],
          Resource: `arn:aws:logs:*:*:log-group:*`,
        },
        {
          Effect: "Allow",
          Action: ["logs:DescribeLogGroups"],
          Resource: `arn:aws:logs:*:*:log-group:*`,
        },
      ],
    },
    policyName: "amplifyLoggerCWLogsPolicy",
  };

  resources.unauthRole.policies = [loggerPolicy];
}
