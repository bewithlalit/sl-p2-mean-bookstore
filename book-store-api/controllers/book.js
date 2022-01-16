// accessing repository to get the data
const repo = require("../repositories/book")

// get all the books
exports.allBooks = (req, res) => {
    console.log("Get all the books");
    // call repository to get data
    repo.getAll((books)=> {
        res.send(books);
    })
}