var http = require('http');

const hostName = 'localhost';
const port = '8000';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(port, hostName);

console.log('Server running at http://localhost:8000/');
