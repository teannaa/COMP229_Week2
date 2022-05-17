/*const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World11');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/COMP-229', (req, res) => {
    res.send('COMP-229 web application')
  })
  app.get('/exams', (req, res) => {
    res.send('Mid term exam')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})