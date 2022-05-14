const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userData = require('../model/userInfro')
 require('dotenv').config()
exports.refreshFunction = async (req , res , nex)=>{
    try{
    let cookies = req.cookies
    if(!cookies?.jwt) return res.status(401);
    // console.log(cookies)
    let refreshToken = cookies.jwt 
    let [rows , meta] = await userData.findeRefreshToken(refreshToken)
    console.log(rows)
    // if(!rows) res.status(403)
    if(rows.length <=0) res.status(403) //forbidden

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err , decoded)=>{
            if(err || rows[0]['user_name'] !== decoded.username)return res.status(403);
            const accessToken = jwt.sign(
                {"user_name" : decoded.username},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '15m'}
            );
            res.json({
                accessToken
            })
            
        }

    )

    }catch(err){
        res.sendStatus(401);
        res.json({
            message:err
        })
    }
  


}