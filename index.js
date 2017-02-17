var express = require("express")
  , http = require("http")
  , path = require('path');

var server = express();

console.log("DEMO server for person API");

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, GET, HEAD, POST, PUT, OPTIONS, TRACE");
  next();
// res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With,xtoken,Authorization');
//   next();
});

server.configure('dev', function () {
  server.config = require('./config/dev');
});

// var config = require('./config/dev');

server.use(express.bodyParser({ limit: '50mb' }));

server.get('/', function (req, res, next) {
  console.log("TRACK");
  res.json({'status':'OKAY'});
});
require('./config/routes')(server);

http.createServer(server)
  .listen(process.env.PORT || server.config.port, function () {
    console.log("Person demo server start on port = = " + (process.env.PORT || server.config.port));
  });
