# meetup-swarm-demo

There are 2 versions for this demo

## v1
Demonstrate docker stack deploy that use auto discovery, rolling update
To build this project easily run the build.sh with the directory you want to build
```
./build.sh v1
```
To run it using stack deploy
```
docker stack deploy -c v1.yml meetup
```

## v2
Demonstrate docker stack deploy that use auto discovery, rolling update, swarm internal network, volumes, backend replicas
To build this project easily run the build.sh with the directory you want to build
```
./build.sh v2
```
To run it using stack deploy
```
docker stack deploy -c v2.yml meetup
```