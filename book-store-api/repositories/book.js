const db = require("../configs/mongodb");

exports.getAll = (cb) => {
    const collection = db.getCollection("Book");
    collection.find().toArray()
    .then((books) => {
        cb(books)
    })
    .catch(err => {console.log(err)})
}

