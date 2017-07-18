#!/bin/bash
# $1 folder to start build
ORG=minervaprime
START=`pwd`
for version in `ls $1`; do
	echo $version
	cd $1/$version
	docker build --no-cache -t $ORG/$version:$1 .
	docker push $ORG/$version:$1
	cd $START
done