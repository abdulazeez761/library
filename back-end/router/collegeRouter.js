const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/roles')
const collegeApiController = require('../controller/collegeApiController')
router.get('/college' , collegeApiController.getColleges)
module.exports = router