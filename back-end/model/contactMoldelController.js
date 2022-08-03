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