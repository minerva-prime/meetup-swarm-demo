var express = require('express')
var redis = require('redis')

var app = express()
var client = redis.createClient('6379', 'redis');

app.get('/', function (req, res, next) {
  client.incr('counter', function(err, counter) {
   if(err) return next(err);
    res.send('Hello docker swarm meetup v1, view count: ' + counter );
    console.log(counter + 'times');
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});