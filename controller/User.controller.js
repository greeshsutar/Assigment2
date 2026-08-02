

let env = require("dotenv");
let bcrypt = require("bcrypt");
const pool = require("../config/User.config");
env.config();

function login(req,res){

    let {email,password} = req.body;

   
if(!email||!password){
    return res.status(402).json({msg:"Enter All data"});
}

try{
   let haspassword = await bcrypt.hash(password,10);

    storingData = await pool.query(
    `insert into userdetail(username,password) 
     values($1,$2) `, [username,haspassword]
    )

    return res.status(201).json({msg:"User Data Stored"});

    



}
catch(err){
    return res.status(500).json({msg:err})
}




}

function profile(req,res){


}