const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const refreshTokenController = require('../controller/refreshTokenController')
router.get('/refresh' , refreshTokenController.refreshFunction)
module.exports = router