
let dotenv = require("dotenv");
let bcrypt = require("bcrypt");
let express = require("express")
let app = express();
let env = require("dotenv");
env.config();

app.use(express.json());

app.use(cors());

allroutes(app);


app.listen(process.env,()=>{
    console.log("Server Connect")
})




