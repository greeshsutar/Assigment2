
let dotenv = require("dotenv");
let bcrypt = require("bcrypt");
let express = require("express")
let app = express();

app.use(express.json());



app.use(cors());


allroutes(app);

