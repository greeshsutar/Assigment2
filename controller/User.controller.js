

let env = require("dotenv");
let bcrypt = require("bcrypt");
const pool = require("../config/User.config");
let jwt = require("jsonwebtoken")
env.config();

async function login(req,res){

    let {username,password} = req.body;

   
if(!username||!password){
    return res.status(402).json({msg:"Enter All data"});
}

try{
   let haspassword = await bcrypt.hash(password,10);

  const   storingData = await pool.query(
    `insert into userdetail(username,password) 
     values($1,$2) `, [username,haspassword]
    )



     let token =  jwt.sign( {email:email},process.env.JWT_SECRET, {expiresIn:"1h"})
     
    return  res.status(201).json({msg:`your token is :${token}`});
    
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

   

    res.status(200).send(existuser.rows[0].username)

   }  
   catch(err){
    return res.status(500).json(err)
   }


}
module.exports = {
    login,
    profile
}