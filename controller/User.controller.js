

let env = require("dotenv");
let bcrypt = require("bcrypt");
const pool = require("../config/User.config");
let jwt = require("jsonwebtoken")
env.config();

async function login(req,res){

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



     let token =  json.sign( {email:email},process.env.JWT_SECRET, {expiresIn="1h"})
     
    return  res.status(201).send(token);
    
}
catch(err){
    return res.status(500).json({msg:err})
}

}

async function profile(req,res){
   let {id} = req.params;
   
   try{
   let existuser =await pool.query(
    `select * from userdetail
    where _id = $1`,[id]
   )
 
   if(existuser.length<0) return res.status(400).json({msg:"User Does Not Exist"});

   

    res.status(2).s(existuser.username)

   }  
   catch(err){
    return res.status(500).json(err)
   }


}
module.exports = {
    login,
    profile
}