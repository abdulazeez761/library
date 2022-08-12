const express = require('express')
const router = express.Router();
const addBookController = require('../controller/addBookController')
// const upload = require('../middleware/uploadFiles')
// upload.single('files'),

// here it should be verifieed 
router.post('/add-book', addBookController.addBook)

router.get('/products', addBookController.productsAPI)
module.exports = router