const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/roles')
const registerController = require('../controller/registerController')
router.post('/register' , registerController.signUpFunction)
module.exports = router