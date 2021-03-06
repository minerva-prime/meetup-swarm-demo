# Demo time

## demo create a small swarm cluster
> on the first node (which will be the manager)
```
docker swarm init
docker swarm join-token worker
```
> on the workers node 
```
docker swarm join # with the token provided
```
> Verify that the node joined the swarm
```
docker node list #run on the manager
```

## demo v1 deploy
1. deploying the v1 stack of nginx and node
```
docker stack deploy -c v1.yml meetup # --with-registry-auth
```
2. list current stack
```
docker stack list
```
3. list services in a stack
```
docker stack services meetup
```
4. exmaple for docker ps
```
docker service ps meetup_nodeapp --no-trunc
```
5. see aggregated application logs
```
docker service logs -f meetup_nodeapp
docker service logs -f meetup_webserver
```
6. Inspect the service on the manager node
```
docker service inspect --pretty meetup_nodeapp
```
7. Lets add a replica to a service without stack deploy
```
docker service update meetup_nodeapp --replicas 3 # --with-registry-auth
docker service list | grep meetup_nodeapp
docker service ps meetup_nodeapp
```
8. locate one of the workers that runs a task of service meetup_nodeapp
> see the health state of the container
```
docker ps
```
9. go to browser to show that v1 is running and using ingress VIP to round robin into the nodeapp containers

## demo v1.1 deploy with improper health check
1. Running stack deploy and show the rollback on failed health check
```
docker stack deploy -c v1-rollback.yml meetup
```
2. Watch the deploy process start the deploy
```
watch "docker service ps meetup_nodeapp"
```

## demo v1.2 deploy with bad code
1. Running stack deploy and show rollback on bad code
```
docker stack deploy -c v1.2-rollback.yml meetup
```
2. Run service logs to see the code exception
```
docker logs -f meetup_nodeapp
```
3. Run ps to see that the application rolledback to the last working version
```
watch "docker service ps meetup_nodeapp"
```

## demo v2 deploy with additional component
1. Running stack deploy for a bit more complex environment using nginx, node and redis
```
docker stack deploy -c v2.yml meeytup
```
2. go to browser to see the redis counter
