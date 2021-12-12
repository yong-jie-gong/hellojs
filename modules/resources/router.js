const topRouterPath ="/api/v1"
var groupRouter = require('./group/group');
var userRouter = require('./user/user');

function Router() {
}
Router.prototype.register = function (app) {
    app.use(topRouterPath+'/groups', groupRouter);
    app.use(topRouterPath+'/users', userRouter);

    app.use(function (req, res) {
        res.send('404 not found');
    });

    //设置跨域访问
    app.all('*', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1');
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });

}
var routerInstance = new Router();
module.exports = routerInstance