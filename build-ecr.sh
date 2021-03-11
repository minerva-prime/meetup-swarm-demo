#!/bin/bash
# requirements: install jq
# $1 will be the tag

if [ "$#" -ne 1 ]; then
    echo "please add the version paramter, e.g. $0 v1"
    exit 1
fi

REGION='eu-west-1'
ACCOUNT_ID=$(aws sts get-caller-identity --output text --query 'Account')
ECR_URL="$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com"
START=`pwd`

# docker login
aws ecr get-login-password --region ${REGION} \
| docker login --username AWS --password-stdin $ECR_URL

for SVC in `ls $1`; do
	echo $SVC
	cd $1/$SVC
    
    ## Check if exists in ECR
    check=$(aws ecr describe-repositories --region ${REGION} --repository-name ${SVC} --no-cli-pager | jq -r .repositories[].repositoryName | wc -l)
    if [[ $check -eq 0 ]]; then
        aws ecr --region ${REGION} create-repository --repository-name ${SVC} --image-scanning-configuration scanOnPush=true --no-cli-pager
    fi

	docker build --no-cache -t $ECR_URL/$SVC:$1 .
	docker push $ECR_URL/$SVC:$1
	cd $START
done