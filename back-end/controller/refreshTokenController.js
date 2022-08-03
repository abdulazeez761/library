const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userData = require('../model/userInfro')
require('dotenv').config()
exports.refreshFunction = async (req, res, nex) => {
    //decoding the cookies so we can get the user name to use it ti get the user id then to get the user roles 
    let unDecodedJWT = req?.cookies['jwt']
    // console.log(unDecodedJWT)
    if (!unDecodedJWT) return res.sendStatus(401)
    let payload = JSON.parse(Buffer.from(unDecodedJWT.split(".")[1], "base64url"));
    let user = payload['username']
    let [rows, meta] = await userData.isUserExist(user)
    let userId = rows[0]['id']
    let [roles, rolesMeta] = await userData.getUserRoles(userId)
    //filtering the roles table to get only the roles columns
    roles.forEach(element => {
        let stringRolesArry = [element.Admin, element.User, element.Editor]
        let numberRoles = stringRolesArry.map(function (x) {

            if (typeof x == 'string') {
                return parseInt(x, 10);
            }

        });

        let result = numberRoles.filter(element => {
            return element !== undefined;
        });
        roles = result

    });



    //refreshing the jwt
    try {
        let cookies = req.cookies
        if (!cookies?.jwt) return res.sendStatus(401)
        let refreshToken = cookies.jwt
        let [rows, meta] = await userData.findeRefreshToken(refreshToken)
        if (rows.length <= 0) res.sendStatus(403) //forbidden

        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {

                if (err || rows[0]['user_name'] !== decoded.username) return res.sendStatus(403);
                const accessToken = jwt.sign(
                    {
                        "UserInfo": {
                            "user_name": decoded.username,
                            "roles": roles
                        }

                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '15m' }
                );
                res.json({
                    accessToken,
                    roles
                })

            }

        )

    } catch (err) {
        res.sendStatus(401);
        res.json({
            message: err
        })
    }



}