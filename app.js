var express = require('express');
var cors = require("cors")
var app = express();
//middleware
app.use(express.json());
app.use(cors({
   origin: ["http://localhost:3001"],
   methods: ["GET", "POST", "PUT", "DELETE"],
   allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(express.urlencoded({ extended: true }));
var logger = require('./modules/middlewares/logger');
app.use(logger)
app.use('/', express.static('public'));
// var photoPath = path.resolve(__dirname, "offensive-photos-folder");
// app.use("/offensive", express.static(photoPath));
//RESTful Resources
var router = require('./modules/resources/router');
router.register(app)
var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("应用实例，访问地址为 http://%s:%s", host, port)

})