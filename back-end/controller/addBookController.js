const userData = require('../model/userInfro')
const productsModle = require('../model/productsModl')
const getSubjects = require('../model/collegeAPI')


let file = ''
exports.fileName = (fileName, originalFilename) => {

    file = fileName
}



exports.addBook = async (req, res, next) => {
    let cookies = req.cookies
    let token = cookies.jwt
    let payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url"));

    let user = payload.username
    let [rows, meta] = await userData.isUserExist(user)
    let userId = rows[0].id,
        university = req.fields.universityOption,
        college = req.fields.collegeOption,
        email = req.fields.emailOption,
        phoneNumber = req.fields.phoneNumberOption,
        sale = req.fields.sale,
        donation = req.fields.donation,
        exchange = req.fields.exchange,
        slide = req.fields.slide,
        choosedSubject = req.fields.choosedSubject,
        major = req.fields.major,
        image = '',
        userName = rows[0].user_name

    //we will add user avatart

    if (university == 'choose a university' || college == 'choose a college' || major == 'choose a major' || choosedSubject == 'choose a subject') return res.sendStatus(409)
    // if (slide == true && file == undefined || slide == true && file == null || slide == true && file == '') return res.sendStatus(409)
    if (slide == false) file = 'none'
    if (file.length == 0) file = 'none'
    if (university?.length <= 0 || college?.length <= 0 || choosedSubject?.length <= 0 || major?.length <= 0) return res.sendStatus(204)
    if (sale == false && donation == false && exchange == false && slide == false) return res.sendStatus(204)
    // if (file == undefined || file == null || file?.length == 0 || file == '') file = 'none'
    let [subjectsRow, subjectsMeta] = await getSubjects.subject()
    for (let i = 0; i < subjectsRow.length; i++) {

        if (subjectsRow[i].subject == choosedSubject) {
            let subjectimage = subjectsRow[i].image
            image = subjectimage
        }
    }
    // console.log(userId, university, college, major, choosedSubject, email, phoneNumber, sale, exchange, donation, image, userName, slide, file)
    // console.log(sale, exchange, donation)

    await productsModle.storProducts(userId, university, college, major, choosedSubject, email, phoneNumber, sale, exchange, donation, image, userName, slide, file).then(() => {
        console.log(userId, university, college, major, choosedSubject, email, phoneNumber, sale, exchange, donation, slide, image, userName, "file" + ':' + file)
        res.status(200).json({
            'success': `the book has been puplished`
        })
    })
}

//products API
exports.productsAPI = async (req, res) => {
    productsModle.productsAPI().then(([rows, meta]) => {
        res.status(200).json({
            data: rows
        })
    }).catch(err => {
        res.status(400).json({
            data: err
        })
    });

}

//specific user books API
exports.specificData = async (req, res) => {


    const token = req.cookies.jwt

    let payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url"));
    const userName = payload.username
    productsModle.getAspecificUsersProducts(userName).then(([rows, meta]) => {
        res.status(200).json({
            data: rows
        })
    }).catch(err => {
        res.status(400).json({
            data: err
        })
    });

}
