const express = require('express')
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const collegeApiController = require('../controller/collegeApiController')
router.get('/college' , verifyJWT , collegeApiController.getColleges)
module.exports = router