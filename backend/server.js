const express = require("express");
const io = require("socket.io");

const app = express();

app.get("/", (req, res) => {
    res.send("salam i am alive")
});

app.get("/salam", (req, res) => {
    res.send("salam i am alive")
});

const server = app.listen(3010, () => {
    console.log("App listen to port 3010");
});

const socket = io(server);
// if user enter url: localhost/socket connect user to server socket
const mySocket = socket.of("/socket")

// کانکشن رو برقرار می کنیم
mySocket.on("connection", (socket) => {
    console.log("connect user");
    
    socket.on("newMassage",(massage)=>{
        mySocket.emit("newMassage",{...massage,date : new Date(),id :Math.floor(Math.random() * Math.pow(10,7)) });
    });

    socket.on("deleteMsg",(id)=>{
        mySocket.emit("deleteMsg",id)
    });

    socket.on("disconnect", () => {
        console.log("diss connect user")
    })
})