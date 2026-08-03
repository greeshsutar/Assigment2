let jwt = require("jsonwebtoken");

let env = require("dotenv");

env.config();
function authnticatingUser(req,res,next){

    let head= req.headers.authorization

    if (!head || !head.startsWith("Bearer"))  return res.status(401).json({msg:"Token Does not exist"});
    
    let payload  = head.split(" ")[1];

    if(!payload) return res.status(404).json({msg:"payload does not exists"});
     
 try{
      let verifyingtoken =   jwt.verify(payload,process.env.JWT_SECRET);

   if(!verifyingtoken) return res.status(401).json({msg:"User data mismatch"});

    req.user = verifyingtoken;
    
   next()
 }

 catch(err){
    return res.status(500).json({msg:"Server Error 500"})
 }
    

}

module.exports = authnticatingUser;
