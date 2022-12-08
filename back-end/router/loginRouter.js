const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const loginRouter = require('../controller/loginController')
const formidable = require('express-formidable');
router.post('/login', formidable(), loginRouter.LoginFunction)
// router.put('/login' , loginRouter.LoginFunction)
// router.put('/login' , loginRouter.LoginFunction)
module.exports = router