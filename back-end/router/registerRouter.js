const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/roles')
const registerController = require('../controller/registerController')
const formidable = require('express-formidable');
router.post('/register', formidable(), registerController.signUpFunction)
module.exports = router