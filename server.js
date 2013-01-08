var connect = require('connect'),
    CORS = require('connect-cors')
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

var app = connect(CORS(options))
  .use(connect.logger('dev'))
  .use(connect.static(dir))
  .use(connect.directory(dir))
 .listen(port);

console.log('Serving from ' + green + dir + reset +' on ' + green + 'http://localhost:' + port + reset);
