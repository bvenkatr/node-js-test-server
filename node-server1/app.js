// app.js
const http = require('http');
const os = require('os');
const ip = '0.0.0.0';
const port = 5551;
const hostname = os.hostname();
const whoami = process.env['WHOAMI'] || 'Anonymous';
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`I am from app1.js(aka server1)\n`);
});
server.listen(port, ip, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});
