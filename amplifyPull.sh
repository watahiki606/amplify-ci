#!/bin/bash
set -e
IFS='|'
REACTCONFIG="{\
    \"SourceDir\":\"src\",\
    \"DistributionDir\":\"build\",\
    \"BuildCommand\":\"npm run-script build\",\
    \"StartCommand\":\"npm run-script start\"\
}"


AMPLIFY="{\
    \"envName\":\"${ENV}\",\
    \"appId\":\"${AWS_APP_ID}\"\
}"
FRONTEND="{\
    \"frontend\":\"javascript\",\
    \"framework\":\"react\",\
    \"config\":$REACTCONFIG\
}"
PROVIDERS="{\
    \"awscloudformation\":${AWSCONFIG}\
}"
CODEGEN="{\
    \"generateCode\":false,\
    \"generateDocs\":false\
}"

amplify init --app $AWS_CLONE_URL -y
amplify push -y
# amplify init \
# --amplify $AMPLIFY \
# --providers $PROVIDERS \
# --codegen $CODEGEN \
# --yes
