const mongodb = require("mongodb");

const url = "mongodb+srv://bewithlalit:Fun4mongodb@cluster0.twblp.mongodb.net/sl-mean-bookStore?retryWrites=true&w=majority"

const mongoClient = mongodb.MongoClient;
var dbClient;

exports.connect = () => {
    mongoClient.connect(url).
    then((client)=>{
        dbClient = client
        console.log("Mongodb is connected")
    })
    .catch(err=>{console.log(err)});
}

exports.getCollection = (name) => {
    return dbClient.db("sl-mean-bookStore").collection(name);
}