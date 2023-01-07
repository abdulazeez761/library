const express = require('express')
const router = express.Router();
const addBookController = require('../controller/addBookController')
const addFileController = require('../controller/addFileController')
const formidable = require('express-formidable');
const bodyParser = require('body-parser');
const verifyJWT = require('../middleware/verifyJWT')
// here it should be verifieed 

router.post('/add-book', formidable(), addBookController.addBook)

router.get('/products', formidable(), addBookController.productsAPI)
router.post('/uploadFile', addFileController.uploadFile)
//specific user data
router.get('/userBooks', formidable(), addBookController.specificData)
router.get('/userBooks/:userName', formidable(), addBookController.queryUserNameData)
module.exports = router