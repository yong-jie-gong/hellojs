// 自己实现一个中间件，中间件其实就是一个函数，携带者 req | res | next 这三个参数的函数
// 1. 定义这样的一个中间件函数出来
const logger = (req, res, next) => {
    console.log(
`Request: 
    ${req.ip}, url=${req.url}, time: ${new Date().getTime()}, ${req}`
    );
    next();
};
module.exports=logger;

// 2. 使用 server.use() 调用这个中间件 use 方法需要接受的是一个携带了 req| res| next 的函数
// server.use(logger);
//在这个代码后面的请求都能使用上这个中间件