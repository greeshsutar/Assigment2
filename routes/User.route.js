const { login, profile } = require("../controller/User.controller.js");
const authnticatingUser = require("../validate/auth.middlware.js");

function allroutes(app){


app.post("/login",  login);

app.get("/profile", authnticatingUser,   profile);





}
module.exports = allroutes;