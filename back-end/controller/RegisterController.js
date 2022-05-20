const bcrypt = require('bcrypt')
const userData = require('../model/userInfro')
exports.signUpFunction = async (req ,res , next) =>{
    let {user , pwd} = req.fields
    if(!user || !pwd) return res.status(400).json({
        'message': 'user and passowrd are required'
    })
    //check for duplicate user name in the data base
    let [rwos , meta] = await userData.isUserExist(user)
    if(rwos[0]){
        return res.sendStatus(409);
    } 
    //adding a user
    try{ 
        //encrypt the passowrd
        const hashedPassowrd = await bcrypt.hash(pwd , 10);
        userData.addNewUser(user , hashedPassowrd).then(()=>{
            res.status(201).json({
                'success' : `new user ${user} created `
            })
            
        })
    //  adding user roles 
      let[Id , ID] = await userData.getUserId(user)
      let userRole = 2001; //this is  user's role
      let userId = Id[0]['id']
      userData.addUserRoles(userRole , userId)
    }catch(err){
         res.status(500).json({
             'message': err.message
         })
    }
      
}