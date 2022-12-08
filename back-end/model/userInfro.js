const dataDaseConnection = require('./dataDaseConnection')
exports.isUserExist = (user) => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`SELECT * FROM userinfo WHERE user_name = '${user}'`))
        reject(Error('somthing went wrong'))
    })
}
exports.addNewUser = (user, hashedPassowrd, instaLink, facebookLink, twitterLink) => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`INSERT INTO userinfo (user_name , pwd , instaLink , facebookLink , twitterLink ) values(?, ? ,? , ? , ?)`,
            [user, hashedPassowrd, instaLink, facebookLink, twitterLink]))
        reject(Error('something went wrong '))
    })
}

exports.otherUsers = () => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`SELECT * FROM userinfo`))
        reject(Error('somthing went wrong'))
    })
}

exports.refreshToken = (user, token) => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`UPDATE userinfo SET refresh_token="${token}" WHERE user_name = '${user}'`))
        reject(Error('somthing went wrong'))
    })
}
exports.findeRefreshToken = (refreshToken) => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(` SELECT * FROM userinfo WHERE refresh_token="${refreshToken}"`))
        reject(Error('somthing went wrong'))
    })
}
//delete the token for the logout method
exports.logOut = (refreshToken) => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`UPDATE userinfo SET refresh_token= NULL WHERE refresh_token = '${refreshToken}'`))
        reject(Error('somthing went wrong'))
    })
}
//adding the user roles in roles table 
exports.addUserRoles = (userRole, userId) => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`INSERT INTO user_roles (User , userId ) values(?, ?)`,
            [userRole, userId]))
    })
}
exports.getUserId = (user) => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`SELECT id FROM userinfo WHERE user_name = '${user}'`))
        reject(Error('somthing went wrong'))
    })
}
exports.getUserRoles = (userId) => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`SELECT * FROM user_roles where userId = ${userId}`))
    })
}