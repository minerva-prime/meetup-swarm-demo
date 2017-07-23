var express = require('express')
var os =  require('os')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello docker swarm meetup v1 <br>' + 'Hostname: ' + os.hostname())
  console.log(req.headers)
})

app.get('/healthcheck', function (req, res) {
  res.send('up')
  console.log(req.headers)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})