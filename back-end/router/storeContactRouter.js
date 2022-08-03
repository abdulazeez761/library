const express = require('express')
const router = express.Router();
const storeContactController = require('../controller/storeContactController')
const contactsApi = require('../controller/contactsApi')
router.post('/direct', storeContactController.storeContactFunctio)
//api for contactws to use in  client 
router.get('/userContacts', contactsApi.getAllContacts)
module.exports = router