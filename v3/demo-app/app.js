var express = require('express');
var redis = require('redis');
var os = require('os');

var app = express();

var redis_port = process.env.REDIS_PORT || 6379;
var redis_host = process.env.REDIS_HOST || 'localhost';

var client = redis.createClient(redis_port, redis_host);

client.on('error', function (err) {
    console.log('Client ' + err);
});

app.get('/', function (req, res, next) {
    client.incr('counter', function(err, counter) {
        if(err) {
            res.status(500).send('GET ' + err);
            return next(err);
        }
        res.send('Hello docker swarm meetup v2 This page has been viewed ' + counter + ' tiems <br> Hostname: ' + os.hostname() );
        console.log(counter + ' times');
    });
});

app.get('/healthcheck', function (req, res) {
  client.get('counter', function(err,reply){
    console.log(reply)
    if(reply == null || reply < 10){
      res.status(200).send('GET ' + reply)
    }else {
      res.status(500).send('GET ' + reply);
    };
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});