const bcrypt = require('bcrypt');
const userData = require('../model/userInfro')
const jwt = require('jsonwebtoken');
require('dotenv').config()
exports.LoginFunction = async (req, res, nex) => {
    let { user, pwd } = req.fields;
    let [rows, meta] = await userData.isUserExist(user)
    if (rows.length <= 0) return res.sendStatus(401);
    let userId = rows[0]['id']
    let [roles, rolesMeta] = await userData.getUserRoles(userId)
    //filtering the data
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



    try {
        const unencryptedPassword = await bcrypt.compare(pwd, rows[0]['pwd'])
        if (rows.length <= 0) return res.sendStatus(401);
        if (unencryptedPassword) {

            const accessToken = jwt.sign(
                {
                    'UserInfo': {
                        "username": rows[0]['user_name'],
                        'roles': roles
                    }


                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15s' }//15m
            );
            const refreshToken = jwt.sign(
                { "username": rows[0]['user_name'] },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1d' }
            );
            const currentUser = { ...rows, refreshToken }
            let token = currentUser['refreshToken']

            //storing the refresh token in the data base
            userData.refreshToken(user, token).then(() => {
                res.status(200)

            })
            res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
            res.json({
                accessToken,
                roles
            })
            // console.log(user , pwd)
        } else {
            res.sendStatus(401)
        }

    } catch (ERROR) {
        res.sendStatus(401)
        console.log(ERROR)
    }




}