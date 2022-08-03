const colleges = require('../model/collegeAPI');
exports.getColleges = (req, res, next) => {
    colleges.collegeData().then(([rows, meta]) => {
        res.status(200).json({
            data: rows
        })
    }).catch(err => {
        console.log(err)
    });
}
exports.getMajors = (req, res, next) => {
    colleges.majors().then(([rows, meta]) => {
        res.status(200).json({
            data: rows
        })
    }).catch(err => {
        console.log(err)
    });
}

exports.getSubjects = async (req, res, next) => {
    colleges.subject().then(([row, meta]) => {
        res.status(200).json({
            data: row
        })
    })
    // let data = await colleges.subject()
    // res.status(200).json({
    //     data: data
    // })

}