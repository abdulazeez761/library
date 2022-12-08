const dataBaseConnection = require('./dataDaseConnection')
exports.isThereContact = ((sender, toUserName) => {
    return new Promise((resolve, reject) => {
        resolve(dataBaseConnection.execute(`SELECT * FROM contact WHERE sender="${sender}" `))
        reject(Error('somthing went wrong'))
    })
})
exports.haveIrecivedAmessageFromThisAccount = ((toUserName) => {
    return new Promise((resolve, reject) => {
        resolve(dataBaseConnection.execute(`SELECT * FROM contact WHERE toUserName="${toUserName}" `))
        reject(Error('somthing went wrong'))
    })
})
exports.storeMyContact = (sender, toUserName) => {
    return new Promise((resolve, reject) => {
        resolve(dataBaseConnection.execute(`INSERT INTO contact (sender , toUserName) VALUES(? , ?)`, [sender, toUserName]))
        reject(Error('somthing went wrong'))
    })
}

exports.allContacts = () => {
    return new Promise((resolve, reject) => {
        resolve(dataBaseConnection.execute(`SELECT * FROM contact`))
        reject(Error('somthing went wrong'))
    })
}
//adding user info when he join the chat  session storage 

exports.joindUser = (userName) => {
    return new Promise((resolve, reject) => {
        resolve(dataBaseConnection.execute(`SELECT * FROM joinedUser WHERE username="${userName}"`))
    })
}
exports.addNewOne = (username, userID, sessionID) => {
    return new Promise((resolve, reject) => {
        resolve(dataBaseConnection.execute(`INSERT INTO joinedUser (sessionID , userID, username) VALUES(? , ? , ?)`,
            [sessionID, userID, username]))
        reject(Error('somthing went wrong'))
    })
}