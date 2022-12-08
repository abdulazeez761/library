const userData = require('../model/userInfro')
const verifyRoles = (...alloweroles) => {
    return async (req, res, next) => {
        let unDecodedJWT = req.cookies['jwt']
        if (!unDecodedJWT) return res.sendStatus(401)
        let payload = JSON.parse(Buffer.from(unDecodedJWT.split(".")[1], "base64url"));
        let user = payload['username']
        let [rows, meta] = await userData.isUserExist(user)
        let userId = rows[0]['id']
        let [userRoles, rolesMeta] = await userData.getUserRoles(userId)
        //filtering the roles table to get only the roles columns
        userRoles.forEach(element => {
            let stringRolesArry = [element.Admin, element.User, element.Editor]
            let numberRoles = stringRolesArry.map(function (x) {

                if (typeof x == 'string') {
                    return parseInt(x, 10);
                }

            });

            let result = numberRoles.filter(element => {
                return element !== undefined;
            });
            userRoles = result

        });
        if (!req && !userRoles) return res.sendStatus(401);
        const rolesArry = [...alloweroles]
        const result = userRoles.map(role => rolesArry.includes(role)).find(val => val == true)
        // console.log(result, 'dwd')
        if (!result) return res.sendStatus(401)
        next()
    }
}
module.exports = verifyRoles