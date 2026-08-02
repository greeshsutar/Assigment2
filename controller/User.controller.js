
let {pool} = require("pg");
let env = require("dotenv");
env.config();

const pool = new Pool({
user:process.env.DB_USER,
password:DB_PASSWORD,
host:DB_HOST,
port:DB_PORT,
database:DB_NAME
})




function login(req,res){

    let {email,password} = req.body;

   
if(!email||!password){
    return res.status(402).json({msg:"Enter All data"});
}

try{


    storingData = await pool.query;


}




}

function profile(req,res){


}