//user.js 
function UserRepo() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
//如果要对外暴露属性或方法，就用 exports 就行，
//要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。
module.exports = UserRepo;