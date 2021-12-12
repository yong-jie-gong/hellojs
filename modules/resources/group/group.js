const express = require('express');
var routers = express.Router();

routers.get('/', function (req, res) {
    res.send('用户首页');
});

routers.get('/:id', function (req, res) {
    fs.readFile( __dirname + "/" + "groups.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["group" + req.params.id] 
        console.log( user );
        res.end( JSON.stringify(user));
    });
});

//如果要对外暴露属性或方法，就用 exports 就行，
//要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。
module.exports = routers