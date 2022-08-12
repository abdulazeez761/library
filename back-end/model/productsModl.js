const dataDaseConnection = require('./dataDaseConnection')
//storing products
exports.storProducts = (userId, university, college, major, choosedSubject, email, phoneNumber, sale, exchange, donation, image, userName) => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`INSERT INTO products (user_ID , university , college ,major ,subject , email , phone_number  , sale , exchange, donation, image , userName) VALUES(?, ? ,  ? , ? , ? ,? , ?, ?, ?, ?, ? ,? )`,
            [userId, university, college, major, choosedSubject, email, phoneNumber, sale, exchange, donation, image, userName]))
        reject(Error('something went wrong'))
    })
}

exports.productsAPI = () => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`SELECT * FROM products`))
        reject(Error('something went wrong'))
    })
}


