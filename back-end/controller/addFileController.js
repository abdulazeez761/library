
const bodyParser = require('body-parser');
const formidable = require('formidable');
const fs = require('fs')
const path = require('path')
const addBook = require('./addBookController')
exports.uploadFile = async (req, res, next) => {
    const form = formidable({ multiples: false, uploadDir: path.join(__dirname + '../../' + '/uploads') });

    form.on('fileBegin', function (name, file) {
        //rename the incoming file to the file's name

        file.filepath = form.uploadDir + "/" + file.newFilename + '_' + file.originalFilename;
        addBook.fileName(file.newFilename + '_' + file.originalFilename, file.originalFilename)
    })

    form.parse(req, (err, fields, files) => {
        if (err) console.log(err)

    });

    res.status(200).json({
        'success': ` the book has been puplished`
    })

}


