const jwt = require('jsonwebtoken');
require('dotenv').config();
const verifyJWT = (req , res , next)=>{
    const authHeader = Object.assign({}, req.rawHeaders);
    // console.log(authHeader[9])
    
    if(!authHeader) return res.sendStatus(401);
    const token = authHeader[9].split(' ')[1] || authHeader[1].split(' ')[1]
    
    
    jwt.verify(
        token ,
        process.env.ACCESS_TOKEN_SECRET,
        (ERR , decoded)=>{
            if(ERR) return res.sendStatus(403) //invalid token
            req.user = decoded.username;
            req.roles = decoded.UserInfo.roles
            next()
        }
       
    )
  
}

module.exports = verifyJWT;