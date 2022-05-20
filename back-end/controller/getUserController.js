const userData = require('../model/userInfro')
exports.getUser =  async (req, res, next)=>{
    
    const [row , meta] = await userData.otherUsers()
    res.status(200).json({
        data:row
    })
    next()
}