const jwt = require('jsonwebtoken');
require('dotenv').config();
const verifyJWT = (req, res, next) => {
    const authHeader = Object.assign({}, req.rawHeaders);
    console.log(authHeader)
    let tokenAuthHeader = '';
    req.rawHeaders.map((data) => {
        if (data.startsWith('jwt=')) {
            const token = data
            tokenAuthHeader = token
        }
    })


    if (!authHeader) return res.sendStatus(401);
    const token = tokenAuthHeader.split('=')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (ERR, decoded) => {

            if (ERR) return res.sendStatus(403) //invalid token
            req.user = decoded.username;
            req.roles = decoded.UserInfo.roles
            next()
        }

    )

}

module.exports = verifyJWT;