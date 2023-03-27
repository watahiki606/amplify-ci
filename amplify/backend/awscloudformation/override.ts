import { AmplifyRootStackTemplate } from "@aws-amplify/cli-extensibility-helper";

export function override(resources: AmplifyRootStackTemplate) {
  const unauthRole = resources.unauthRole;

  const basePolicies = Array.isArray(unauthRole.policies)
    ? unauthRole.policies
    : [unauthRole.policies];
  unauthRole.policies = [
    ...basePolicies,

    {
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
      policyName: "amplifyLoggerCWLogsPolicy2",
    },
  ];
  console.log(
    "-------------------------------------------unauthRole",
    unauthRole.policies
  );
}
