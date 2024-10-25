const express = require('express');
var routers = express.Router();

routers.get("", function (req, res) {
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie('demo2-cookie0', "demo2-cookie1-" + randomNumber, { maxAge: 900000, httpOnly: true })
    res.end(req.url);
})
routers.get('/app1', function (req, res) {
    console.log(req.headers)
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie('demo2-cookie1', "demo2-cookie1-" + randomNumber, { maxAge: 900000, httpOnly: true, sameSite: "strict", path: "/demo2" })

    var url = req.protocol + "://" + req.get('Host') + req.originalUrl.replace("demo2", "demo1");
    var output = "<a href=" + url + ">" + url + "</a>"
    res.end(output);//baseUrl: /demo1, originalUrl: demo1/app1, req.url: /app1
})
routers.get('/app2', function (req, res) {
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie('demo2-cookie2', "demo2-cookie1-" + randomNumber, { maxAge: 900000, httpOnly: true, sameSite: "lax", path: "/demo2" })

    var url = req.protocol + "://" + req.get('Host') + req.originalUrl.replace("demo2", "demo1");
    var output = "<a href=" + url + ">" + url + "</a>"
    res.end(output);//baseUrl: /demo1, originalUrl: demo1/app1, req.url: /app1
})

module.exports = routers