const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const loginRouter = require('../controller/loginController')
router.post('/login' , loginRouter.LoginFunction)
router.put('/login' , loginRouter.LoginFunction)
// router.put('/login' , loginRouter.LoginFunction)
module.exports = router