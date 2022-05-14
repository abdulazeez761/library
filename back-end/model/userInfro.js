const dataDaseConnection = require('./dataDaseConnection')
exports.isUserExist = (user) =>{
    return new Promise ((resolve, reject)=>{
        resolve(dataDaseConnection.execute(`SELECT * FROM userinfo WHERE user_name = '${user}'`))
        reject(Error('somthing went wrong'))
    })
}
exports.addNewUser = (user , hashedPassowrd) =>{
    return new Promise((resolve , reject)=>{
        resolve(dataDaseConnection.execute(`INSERT INTO userinfo (user_name , pwd ) values(?, ?)`, 
        [user ,hashedPassowrd]))
        reject(Error ('something went wrong '))
    })
}

exports.otherUsers = () =>{
    return new Promise ((resolve, reject)=>{
        resolve(dataDaseConnection.execute(`SELECT * FROM userinfo`))
        reject(Error('somthing went wrong'))
    })
}

exports.refreshToken = (user , token) =>{
    return new Promise ((resolve, reject)=>{
        resolve(dataDaseConnection.execute(`UPDATE userinfo SET refresh_token="${token}" WHERE user_name = '${user}'`))
        reject(Error('somthing went wrong'))
    })
}
exports.findeRefreshToken = ( refreshToken) =>{
    return new Promise ((resolve, reject)=>{
        resolve(dataDaseConnection.execute(` SELECT * FROM userinfo WHERE refresh_token="${refreshToken}"`))
        reject(Error('somthing went wrong'))
    })
}
//delete the token for the logout method
exports.logOut = ( refreshToken) =>{
    return new Promise ((resolve, reject)=>{
        resolve(dataDaseConnection.execute(`UPDATE userinfo SET refresh_token= NULL WHERE refresh_token = '${refreshToken}'`))
        reject(Error('somthing went wrong'))
    })
}