const contacts = require('../model/contactMoldelController');
exports.getAllContacts = (req, res, next) => {
    contacts.allContacts().then(([rows, meta]) => {
        res.status(200).json({
            data: rows
        })
    }).catch(err => {
        console.log(err)
    });
}