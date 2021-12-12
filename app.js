var express = require('express');
var cors=require("cors")
var app = express(); 
//middleware
app.use(express.json());
app.use(cors({
   origin: ["http://localhost:3001"],
   methods: ["GET", "POST", "PUT", "DELETE"],
   allowedHeaders: ["Content-Type", "Authorization"]
})) 
app.use(express.urlencoded({extended:true}));
var logger = require('./modules/middlewares/logger');
app.use(logger)
app.use('/', express.static('public')); 
 
//RESTful Resources
var router = require('./modules/resources/router');
router.register(app)

app.get('/users', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("应用实例，访问地址为 http://%s:%s", host, port)

})