const dataDaseConnection = require('./dataDaseConnection')
exports.collegeData = ()=>{
    return new Promise((resolve, reject)=>{
        resolve(dataDaseConnection.execute('SELECT * FROM university'))
        reject(Error('some thing went wrong'))
    })
}