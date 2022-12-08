const express = require('express');

const port = 4000
const cookie = require('cookie-parser')
const formidable = require('express-formidable');
const core = require('cors')
const bodyParser = require('body-parser');
// const upload = require('./middleware/uploadFiles')

const http = require("http");
const { Server } = require("socket.io");

const collegeData = require('./router/collegeRouter')
const registerFunction = require('./router/registerRouter')
const loginFunction = require('./router/loginRouter')
const refreshToken = require('./router/refreshTokenRouter')
const logOutFunction = require('./router/logOutRouter')
const storeContact = require('./router/storeContactRouter')
const addBookRouter = require('./router/addBookRouter')
const dierectChatRouter = require('./router/dierctChatRouter')
const getUser = require('./router/getUserRouter')
const path = require('path')
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

// app.use(formidable())

app.use(cookie())

app.use('/files', express.static(path.join(__dirname, '/uploads')))

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


app.use(collegeData)
app.use(registerFunction)
app.use(loginFunction)
app.use(refreshToken)
app.use(logOutFunction)
app.use(getUser)
app.use(storeContact)
app.use(addBookRouter)

const io = new Server(server, {
    cors: corsOptions,
});

server.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})

// //
// const users = [];

// const addUser = (username) => {
//     const name = username.trim().toLowerCase();
//     const existingUser = users.find((u) => u === name);
//     if (!username.trim()) return { error: "Name is required" };
//     if (existingUser) {
//         return {
//             error: "Name is taken",
//         };
//     } else {
//         users.push(name);
//         return username;
//     }
// };

// const chatFunction = () => {
//     io.use((socket, next) => {
//         const token = socket.handshake.auth.accessToken
//         let payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url"));
//         const userName = payload.UserInfo.user_name
//         console.log(userName)
//         if (!userName) {
//             return next(new Error("invalid username"));
//         }
//         socket.username = userName;
//         next();
//     });

//     //   console.log("live chat ---> ", io.opts);
//     io.on("connection", (socket) => {
//         // console.log("socket id", socket.id);
//         // socket.on("username", (username, next) => {
//         //   // console.log("username", username);
//         //   // io.emit("user joined", `${username} joined`);
//         //   let result = addUser(username);
//         //   if (result.error) {
//         //     return next(result.error);
//         //   } else {
//         //     io.emit("users", users);
//         //     socket.broadcast.emit("user joined", `${username} joined`);
//         //   }
//         // });

//         let users = [];
//         for (let [id, socket] of io.of("/").sockets) {
//             const existingUser = users.find((u) => u.username === socket.username);
//             if (existingUser) {
//                 socket.emit("username taken");
//                 socket.disconnect();
//                 return;
//             } else {
//                 users.push({
//                     userID: id,
//                     username: socket.username,
//                 });
//             }
//         }

//         socket.emit("users", users);

//         // when a new user joins, nofity existing users
//         socket.broadcast.emit("user connected", {
//             userID: socket.id,
//             username: socket.username,
//         });

//         socket.on("message", (data) => {
//             io.emit("message", data);
//         });

//         socket.on("typing", (username) => {
//             // console.log("typing", username);
//             socket.broadcast.emit("typing", `${username} is typing...`);
//         });

//         socket.on("private message", ({ message, to }) => {
//             socket.to(to).emit("private message", {
//                 message,
//                 from: socket.id,
//             });
//         });

//         // disconnect
//         socket.on("disconnect", () => {
//             // console.log("user disconnected");
//             socket.broadcast.emit("user disconnected", socket.id);
//         });
//     });

// }
// chatFunction()