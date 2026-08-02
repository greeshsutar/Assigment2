
let {pool} = require("pg");

function login(req,res){

    let {email,password} = req.body;

   
if(!email||!password){
    return res.status(402).json({msg:"Enter All data"});
}

try{


    storingData = await pool.query
}




}

function profile(req,res){


}