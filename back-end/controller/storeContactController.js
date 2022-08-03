const storeContactModel = require('../model/contactMoldelController')
exports.storeContactFunctio = async (req, res, next) => {
    let cookies = req.cookies
    let token = cookies.jwt
    let payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url"));
    let sender = payload.username
    let toUserName = req.fields.selectedUser.username
    let thereIsConnection = false;
    let [row, meta] = await storeContactModel.isThereContact(sender)
    let [toUseRrOWS, toUserMeta] = await storeContactModel.haveIrecivedAmessageFromThisAccount(toUserName)
    let [allRows, allMeta] = await storeContactModel.allContacts()

    try {
        for (let i = 0; i < allRows.length; i++) {
            if (allRows[i].sender == toUserName && allRows[i].toUserName == sender) return
        }
        for (let i = 0; i < toUseRrOWS.length; i++) {

            if (toUseRrOWS[i].sender == sender) return
        }

        storeContactModel.storeMyContact(sender, toUserName).then(() => {
            //res code
            console.log('contact has been created')
        })
    } catch (err) {
        console.log(err)
    }
}