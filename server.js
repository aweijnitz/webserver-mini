var connect = require('connect'),
    CORS = require('connect-cors'),
    httpProxy = require('http-proxy')
    ;

var dir = __dirname;
var port = 8080;

var green  = '\033[32m';
var reset = '\033[0m';

if(process.argv.length >= 3)
	dir = process.argv[2];

if(process.argv.length >= 4)
	port = process.argv[3];

// CORS options ("allow all")
var options = {
    origins: []                       // implicit same as ['*'], and null
    , methods: ['HEAD', 'GET', 'POST']  // OPTIONS is always allowed
    , headers: [                        // both `Exposed` and `Allowed` headers
        'X-Requested-With'
        , 'X-HTTP-Method-Override'
        , 'Content-Type'
        , 'Accept'
    ]
    , credentials: false                // don't allow Credentials
    , resources: [
        {
            pattern: '/'                // a string prefix or RegExp
        }
    ]
};

// Setup proxy to listen on defined port and
// - Forward /db calls to CouchDB
// - Everything else goes to the Connect server on port+1
endpoint  = {
      host:   '127.0.0.1', // or IP address
      port:   5984,
      prefix: '/content'
    };
var proxy = new httpProxy.RoutingProxy();

var app = connect(CORS(options))
  .use(connect.logger('dev'))
  .use(function(req, res, next) {
    if (req.url.indexOf(endpoint.prefix) == 0) {
      proxy.proxyRequest(req, res, endpoint);
      return;
    }
    return next();
  })
  .use(connect.static(dir))
  .use(connect.directory(dir))
 .listen(port);

console.log('Serving from ' + green + dir + reset +' on ' + green + 'http://localhost:' + port + reset);
console.log('Forwarding '+ green +'localhost:'+port+'/content '+ reset + 'to ' + green + '127.0.0.1:5984' + reset);