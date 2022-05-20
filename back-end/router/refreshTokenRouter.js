const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/roles')
const refreshTokenController = require('../controller/refreshTokenController')
router.get('/refresh' ,verifyRoles(ROLES_LIST.User ,ROLES_LIST.Admin , ROLES_LIST.Editor) ,  refreshTokenController.refreshFunction)
module.exports = router