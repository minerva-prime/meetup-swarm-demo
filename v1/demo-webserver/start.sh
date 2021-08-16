#!/bin/bash

CODE=0

until [[ $CODE -eq 200 ]]; do
	CODE=$(curl -I -s --write-out %{http_code} --output /dev/null http://${NODEAPP_URL}:3000/ping)
	echo "waiting for nodeapp at ${NODEAPP_URL}"
	sleep 1
done

echo "starting nginx"
exec nginx -g 'daemon off;'