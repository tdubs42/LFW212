"use strict";
const http = require("http");
const PORT = process.env.PORT || 3000;

const hello = `<html>
<head>
<style>
body {background: #333; margin: 1.25rem}
h1 {color:#eee; font-family: sans-serif}
</style>
</head>
<body>
<h1>Hello World</h1>
</body>
</html>`;

// a function is passed to createServer and this function is called EVERY
// TIME a request is made to the server
const server = http.createServer((req, res) => {
  // setHeader and end are built-in methods to the response object
  res.setHeader("Content-Type", "text/html");
  res.end(hello);
});
// res object inherits from > http.ServerResponse inherits from >
// http.OutgoingMessage inherits from > stream.Stream
// for all practical purposes the res object is a writable stream, which is
// why calling end writes our content and also closes the connection

// createServer returns object that represents server. server.listen binds
// the server to a port
server.listen(PORT);
