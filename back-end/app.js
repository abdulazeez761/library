const express = require('express');
const bodyParser = require('body-parser');
const port = 4000
const api = require('./model/collegeAPI')
const collegeData = require('./router/collegeRouter')
const core = require('cors')
const app = express(); 
app.use(core())
app.use(collegeData)
app.listen(port , ()=>{
    console.log(`listening on http://localhost:${port}`)
})