"use strict";
const http = require("http");
const url = require("url");
const PORT = process.env.PORT || 3000;
const {STATUS_CODES} = http;

const hello = `
<html>
  <head>
    <style>
    body {background: #333; margin: 1.25rem}
    h1 {color:#eee; font-family: sans-serif}
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
`;

const root = `
<html>
  <head>
    <style>
     body {background: #333; margin: 1.25rem}
     a {color: yellow; font-size: 2rem; font-family: sans-serif}
    </style>
  </head>
  <body>
    <a href='/hello'>Hello</a>
  </body>
</html>
`;

// a function is passed to createServer and this function is called EVERY
// TIME a request is made to the server
const server = http.createServer((req, res) => {
  // setHeader and end are built-in methods to the response object
  res.setHeader("Content-Type", "text/html");

  if (req.method !== "GET") {
    res.statusCode = 405;
    res.end(STATUS_CODES[res.statusCode] + "\r\n");
    return;
  }

  const {pathname} = url.parse(req.url);
  if (pathname === "/") {
    res.end(root);
    return;
  }

  if (pathname === "/hello") {
    res.end(hello);
    return;
  }
  res.statusCode = 404;
  res.end(STATUS_CODES[res.statusCode] + "\r\n");
});
// res object inherits from > http.ServerResponse inherits from >
// http.OutgoingMessage inherits from > stream.Stream
// for all practical purposes the res object is a writable stream, which is
// why calling end writes our content and also closes the connection

// createServer returns object that represents server. server.listen binds
// the server to a port
server.listen(PORT);
