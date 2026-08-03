
let dotenv = require("dotenv");
let bcrypt = require("bcrypt");
let express = require("express")
let app = express();
let env = require("dotenv");
let cors = require("cors");
const allroutes = require("./routes/User.route.js");
env.config();

app.use(cors());
app.use(express.json());


allroutes(app);


app.listen(process.env,()=>{
    console.log("Server Connect")
})




