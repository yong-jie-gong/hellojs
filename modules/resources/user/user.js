var fs = require("fs");

const express = require('express');
var routers = express.Router();

routers.get('/', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        res.end(data);
    });
});

routers.post('/', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})
routers.delete('/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["user" + id];

        console.log(data);
        res.end(JSON.stringify(data));
    });
});

routers.get('/:id', function (req, res) {
    res.json({
        status: 200,
        data: {
            "id": `${req.params.id}`,
            "ancestor": ["test01"]
        }
    })
});

//如果要对外暴露属性或方法，就用 exports 就行，
//要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。
module.exports = routers