const userData = require('../model/userInfro')
exports.logOutFunction = async (req, res, nex) => {
    //on client, also delete access token
    try {
        let cookies = req.cookies
        if (!cookies?.jwt) return res.sendStatus(204); // no conent to send back
        // console.log(cookies)
        let refreshToken = cookies.jwt
        let [rows, meta] = await userData.findeRefreshToken(refreshToken)
        // console.log(rows)
        if (rows.length <= 0) {
            res.clearCookie('jwt', { httpOnly: true })
            res.status(204)
        }
        // console.log(cookies)
        // if(rows.length <=0) res.status(403) 
        //delete the refresh token from teh database
        await userData.logOut(refreshToken)
        res.clearCookie('jwt', { httpOnly: true })
        res.sendStatus(204)
    } catch (err) {
        res.sendStatus(401);
        res.json({
            message: err
        })
    }



}