const express = require('express');
const bodyParser = require('body-parser');
const port = 4000
const cookie = require('cookie-parser')
const formidable = require('express-formidable');
const core = require('cors')
const collegeData = require('./router/collegeRouter')
const registerFunction = require('./router/registerRouter')
const loginFunction = require('./router/loginRouter')
const refreshToken = require('./router/refreshTokenRouter')
const logOutFunction = require('./router/logOutRouter')
const app = express(); 
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,          
    optionSuccessStatus:200
}
app.use(core(corsOptions));
app.use(formidable())
app.use(cookie())
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(collegeData)
app.use(registerFunction)
app.use(loginFunction)
app.use(refreshToken)
app.use(logOutFunction)
app.listen(port , ()=>{
    console.log(`listening on http://localhost:${port}`)
})