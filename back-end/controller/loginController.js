const bcrypt = require('bcrypt');
const userData = require('../model/userInfro')
const jwt = require('jsonwebtoken');
 require('dotenv').config()
exports.LoginFunction = async (req , res , nex)=>{
    let {user , pwd} = req.fields;
    let [rows , meta] = await userData.isUserExist(user)
    let [otherUsersRow , otherUsersMeta] = await userData.otherUsers()
    try{
        const unencryptedPassword = await bcrypt.compare(pwd, rows[0]['pwd'])
        if(rows.length <=0) return res.sendStatus(401);
        if(unencryptedPassword){
            const accessToken =   jwt.sign(
                {"username" : rows[0]['user_name']},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:'15m'}//15m
            );
            const refreshToken =   jwt.sign(
                {"username" : rows[0]['user_name']},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn:'1d'}
            );
            const otherUsersArry = []
            const currentUser = {...rows , refreshToken}
            let token = currentUser['refreshToken']
            for(let i =0; i <otherUsersRow.length; i++){
                // console.log(otherUsersRow[i])
                if(otherUsersRow[i]['user_name'] !== rows[0]['user_name']){
                    otherUsersArry.push(otherUsersRow[i])
                    // console.log(otherUsersArry)
                }
            }

            //storing the refresh token in the data base
            userData.refreshToken(user ,token ).then(()=>{
                res.status(200)

            })
            res.cookie('jwt' , refreshToken , {httpOnly: true , maxAge: 24 *60 *60 *1000})
            res.json({
                accessToken
            })
        } else {
            res.sendStatus(401)
        }

    } catch(ERROR){
        res.sendStatus(401)
        console.log(ERROR)
    }
   
  


}