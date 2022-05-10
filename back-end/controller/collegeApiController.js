const colleges = require('../model/collegeAPI');
exports.getColleges = (req , res, next )=>{
    colleges.collegeData().then(([rows , meta]) =>{
        res.status(200).json({
            data:rows
        })
    }).catch(err=>{ 
        console.log(err)    
    });
}