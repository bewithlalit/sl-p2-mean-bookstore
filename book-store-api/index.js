// configure server

// step2 importing express package
const express = require("Express");
const bookRoutes = require("./routers/book");
const mongodb = require("./configs/mongodb");
const cors = require("cors")

// step2 creating server
const server = express();

// connect to database
mongodb.connect();

// step3 configure port
server.listen(3100);
server.use(cors("*"));

// to enable the post method
server.use(express.json());

server.use("/api/Book", bookRoutes)

server.get("/", (req, res)=>{
    res.send("Hello from ExpressJS")
})

console.log("Server is listening on localhost:3100");