const jwt = require('jsonwebtoken');
require('dotenv').config();
const verifyJWT = (req , res , next)=>{
    let authHeader = req.rawHeaders
    if(!authHeader) return res.sendStatus(401);
    const token = authHeader[1].split(' ')[1]
    jwt.verify(
        token ,
        process.env.ACCESS_TOKEN_SECRET,
        (ERR , decoded)=>{
            if(ERR) return res.sendStatus(403) //invalid token
            req.user = decoded.username;
            next()
        }
       
    )
}

module.exports = verifyJWT;