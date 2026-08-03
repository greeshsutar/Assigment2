const { login, profile } = require("../controller/User.controller.js");


function allroutes(app){
console.log("login:", login);
console.log("profile:", profile);
console.log("auth:", authnticatingUser);

console.log(typeof login);
console.log(typeof profile);
console.log(typeof authnticatingUser);

app.post("/login",  login);

app.get("/profile", authnticatingUser,   profile);





}
module.exports = allroutes;