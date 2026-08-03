const { login, profile } = require("../controller/User.controller");
const authnticatingUser = require("../validate/auth.middlware");

function allroutes(app){


app.post("/login",  login);

app.get("/profile", authnticatingUser,   profile);





}