const dataDaseConnection = require('./dataDaseConnection')
exports.collegeData = () => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute('SELECT * FROM university'))
        reject(Error('some thing went wrong'))
    })
}

exports.majors = () => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`SELECT * FROM majors`))
        reject(Error('some thing went wrong'))
    })
}

exports.subject = () => {
    return new Promise((resolve, reject) => {
        resolve(dataDaseConnection.execute(`SELECT * FROM subjects`))
        reject(Error('some thing went wrong'))
    })
}