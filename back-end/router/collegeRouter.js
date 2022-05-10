const express = require('express')
const router = express.Router();
const collegeApiController = require('../controller/collegeApiController')
router.get('/college' , collegeApiController.getColleges)
module.exports = router