var http = require("http");
const serverHandle = require('../app.js');

http.createServer(function (req, res) {
    serverHandle(req, res);
}).listen(8080);
console.log("localhost:8080");