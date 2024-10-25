var Hello = /** @class */ (function () {
    function Hello(fiestName, lastName) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    Hello.prototype.greeter = function () {
        return "欢迎来到typescript的世界，hello" + this.firstName + " " + this.lastName;
    };
    return Hello;
}());
var user = new Hello("王", "小二");
document.body.innerHTML = user.greeter();

function displayUser(t) {
    $.get("/api/v1/users", function (data, status) {

        // document.getElementById("content").innerText = JSON.stringify({
        //   "data": data,
        //   "status": status
        // })

        var userTable = document.getElementById("userTable");
        var userTableCapation = document.createElement("caption")
        userTableCapation.appendChild(document.createTextNode("User List"))
        userTable.appendChild(userTableCapation)
        {
            let theadElement = document.createElement("thead")
            let trElement = document.createElement("tr")
            let th1Element = document.createElement("th")
            trElement.appendChild(th1Element)
            th1Element.appendChild(document.createTextNode("Name"))
            let th2Element = document.createElement("th")
            trElement.appendChild(th2Element)
            th2Element.appendChild(document.createTextNode("Profession"))
            theadElement.appendChild(trElement)

            userTable.appendChild(theadElement)
        }
        let tbodyElement = document.createElement("tbody")

        let userData = JSON.parse(data)
        for (let i = 0, len = userData.length; i < len; i++) {
            let trElement = document.createElement("tr")
            tbodyElement.appendChild(trElement)
            let th1Element = document.createElement("td")
            trElement.appendChild(th1Element)
            th1Element.appendChild(document.createTextNode(userData[i].name))
            let th2Element = document.createElement("td")
            trElement.appendChild(th2Element)
            th2Element.appendChild(document.createTextNode(userData[i].profession))
        }
        userTable.appendChild(tbodyElement)

    });

}