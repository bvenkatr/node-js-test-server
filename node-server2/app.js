// app.js
const request = require("request");
const http = require('http');
const os = require('os');
const ip = '0.0.0.0';
const port = 5552;
const hostname = os.hostname();
const whoami = process.env['WHOAMI'] || 'Anonymous';
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  request('http://node-server1-service:5551', (err, response, body) => {
     if (!err) {
       res.end(`I am from app2.js(aka server2) and rerver1 response is here ${body}`);
     } else {
       res.end("I am from app2.js(aka server2)"); 
     }
  });
});
server.listen(port, ip, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});
