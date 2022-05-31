const express = require('express');
const bodyParser = require('body-parser');
const port = 4000


const http = require("http");
const { Server } = require("socket.io");

const cookie = require('cookie-parser')
const formidable = require('express-formidable');
const core = require('cors')
const collegeData = require('./router/collegeRouter')
const registerFunction = require('./router/registerRouter')
const loginFunction = require('./router/loginRouter')
const refreshToken = require('./router/refreshTokenRouter')
const logOutFunction = require('./router/logOutRouter')
const dierectChatRouter = require('./router/dierctChatRouter')
const getUser = require('./router/getUserRouter')
const verrify = require('./middleware/verifyJWT')
const app = express();
const server = http.createServer(app);

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200,
    methods: ["GET", "POST"]
}
app.use(core(corsOptions));
app.use(formidable())
app.use(cookie())
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(collegeData)
app.use(registerFunction)
app.use(loginFunction)
app.use(refreshToken)
app.use(logOutFunction)
app.use(getUser)
// app.use(dierectChatRouter)
const io = new Server(server, {
    cors: corsOptions,
});


// io.use((socket, next) => {
//     const token = socket.handshake.auth.accessToken
//     let payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url"));
//     const userName = payload.UserInfo.user_name
//     if (!userName) {
//         return next(new Error("invalid username"));
//     }
//     socket.username = userName;

//     next();
// });
// io.on("connection", (socket) => {
//     const users = [];
//     for (let [id, socket] of io.of("/").sockets) {
//         users.push({
//             userID: id,
//             username: socket.username,
//         });
//     }
//     // console.log(socket)
//     socket.emit("users", users);

//     socket.on("private message", ({ messages, to }) => {


//         // socket.broadcast.emit("recive message", {
//         //     content: messages,
//         //     from: socket.username,
//         // })

//         socket.to(to).emit("recive message", {
//             messages,
//             from: socket.username,
//         });
//     });
//     // ...
// });

// io.on("connection", (socket) => {
//     // notify existing users
//     socket.broadcast.emit("user connected", {
//         userID: socket.id,
//         username: socket.username,
//     });


// });


io.use((socket, next) => {
    const token = socket.handshake.auth.accessToken
    let payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url"));
    const userName = payload.UserInfo.user_name
    if (!userName) {
        return next(new Error("invalid username"));
    }
    socket.username = userName;

    next();
});

io.on("connection", (socket) => {
    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: socket.username,
            key: id,
        });
    }
    socket.emit("users", users);
    console.log(users);

    socket.broadcast.emit("user connected", {
        userID: socket.id,
        username: socket.username,
        key: socket.id,
        self: false,
    });

    socket.on("private message", ({ messages, to, username }) => {
        console.log("Content:", messages, " To:", to, 'username', username);
        socket.to(to).emit("private message", {
            content: messages,
            from: socket.id,
            username: socket.username
        });
    });
});

server.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})

