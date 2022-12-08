const dataDaseConnection = require('./dataDaseConnection')
//storing products
exports.storProducts = (userId, university, college, major, choosedSubject, email, phoneNumber, sale, exchange, donation, image, userName, slide, file) => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`INSERT INTO products (user_ID , university , college ,major ,subject , email , phone_number  , sale , exchange, donation, image , userName , slide , file) VALUES(?, ? ,  ? , ? , ? ,? , ?, ?, ?, ?, ? ,? ,?,? )`,
            [userId, university, college, major, choosedSubject, email, phoneNumber, sale, exchange, donation, image, userName, slide, file]))
        reject(Error('something went wrong'))
    })
}

exports.productsAPI = () => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`SELECT * FROM products`))
        reject(Error('something went wrong'))
    })
}
//get specific userdata
exports.getAspecificUsersProducts = (userName) => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`SELECT * FROM products WHERE userName = '${userName}'`))
        reject(Error('something went wrong'))
    })
}



