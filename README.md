# Simplistic Webserver
*A quick way to serve static files when developing browser apps.*

##Overview
This is a minimalistic webserver to serve static files from a given directory on a given port. It came about from the need to serve some local files when developing a browser application in JavaScript. JSON test data cannot be served from a file:// URL for security reasons and thus the need for a simplistic webserver to serve the data.

Since it is just a small Node.js file, it can also be easily extended to mockup a dynamic backend with webservices and template engines if needed.

## Install
1. Clone this project
2. Do `npm install` in the project folder to pull down the dependencies.
3. DONE!

## Example Usage
This line will serve files from the given directory on http://localhost:8080

`node server.js ../../myProject/testdata 8080`

Verify that CORS headers are being served

`curl http://localhost:8080/four-oh-four-me-please --include --silent -H 'User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; de) Opera 11.01' -H 'Origin: ht$
 $tp://example.com' -H 'X-Requested-With: curl' -H 'X-Method-Override: GET'`


## License

**This software is provided under the MIT license as per below.**

Copyright (C) 2012 Anders Weijnitz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.