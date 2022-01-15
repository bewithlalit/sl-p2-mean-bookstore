// configure server

// step2 importing express package
const express = require("Express");

// step2 creating server
const server = express();

// step3 configure port
server.listen(3100);

server.get("/", (req, res)=>{
    res.send("Hello from ExpressJS")
})

console.log("Server is listening on localhost:3100");