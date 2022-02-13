const db = require("../configs/mongodb");

exports.getAll = (cb) => {
    const collection = db.getCollection("Book");
    collection.find().toArray()
    .then((books) => {
        cb(books)
    })
    .catch(err => {console.log(err)})
}

exports.storeBookInfo = (book)=>{
    const collection = db.getCollection('Book');
    collection.insertOne(book).then(res=>console.log("record stored")).
    catch(err=>console.log(err));
}

