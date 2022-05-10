const collegeApi = require('./dataDaseConnection')
exports.collegeData = ()=>{
    return new Promise((resolve, reject)=>{
        resolve(collegeApi.execute('SELECT * FROM university'))
        reject(Error('some thing went wrong'))
    })
}