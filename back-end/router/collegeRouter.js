const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/roles')
const collegeApiController = require('../controller/collegeApiController')
// college api
router.get('/college', collegeApiController.getColleges)
//majors api
router.get('/major', collegeApiController.getMajors)
router.get('/subjects', collegeApiController.getSubjects)
module.exports = router