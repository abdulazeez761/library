const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const registerController = require('../controller/registerController')
router.post('/register' ,verifyJWT, registerController.signUpFunction)
module.exports = router