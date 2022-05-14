const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const logOutController = require('../controller/logOutController')
router.get('/logout' , logOutController.logOutFunction)
module.exports = router