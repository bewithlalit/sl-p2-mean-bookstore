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

// to create the books
exports.storeBook = (req, res)=>{
    console.log("function called to store the book");
    // Call repository to get data.
    let book = req.body;        // get the data from request body
    repo.storeBookInfo(book);
    res.send(book)
}