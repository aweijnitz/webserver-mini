var config = require('../config.json');
var connect = require('connect');

var green  = '\033[32m';
var reset = '\033[0m';

var dir = __dirname;
var port = 8080;

if(config.port)
  port = parseInt(config.port);

if(process.argv.length >= 3)
	dir = process.argv[2];

if(process.argv.length >= 4)
	port = process.argv[3];

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static(dir))
  .use(connect.directory(dir))
 .listen(port);

console.log('Serving from ' + green + dir + reset +' on ' + green + 'http://localhost:' + port + reset);
