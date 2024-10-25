const express = require('express');
var routers = express.Router();


routers.get("", function (req, res) {
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie('demo1-cookie0', "demo1-cookie1-" + randomNumber, { maxAge: 900000, httpOnly: true })
    res.end(req.url);
})
routers.get('/app1', function (req, res) {
    console.log(req.headers)

    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie('demo1-cookie1', "demo1-cookie1-" + randomNumber, { maxAge: 900000, httpOnly: true, sameSite: "strict", path: "/demo1" })

    var url = req.protocol + "://" + req.get('Host') + req.originalUrl.replace("demo1", "demo2");
    var output = "<a href=" + url + ">" + url + "</a>"
    res.end(output);//baseUrl: /demo1, originalUrl: demo1/app1, req.url: /app1

    // response.writeHead(200, { "Content-Type": "text/plain"});
    // reponse.end("Looks like you didn't find a static file.");
})
routers.get('/app2', function (req, res) {
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie('demo1-cookie2', "demo1-cookie1-" + randomNumber, { maxAge: 900000, httpOnly: true, sameSite: "lax", path: "/demo1" })

    var url = req.protocol + "://" + req.get('Host') + req.originalUrl.replace("demo1", "demo2");
    var output = "<a href=" + url + ">" + url + "</a>"
    res.end(output);//baseUrl: /demo1, originalUrl: demo1/app1, req.url: /app1
})

module.exports = routers