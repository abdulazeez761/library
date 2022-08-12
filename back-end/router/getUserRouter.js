const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const getUserController = require('../controller/getUserController')
router.get('/users', /* verifyJWT, */ getUserController.getUser)
module.exports = router