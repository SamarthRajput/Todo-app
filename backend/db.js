const mongoose = require("mongoose");
const { boolean } = require("zod");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("connected to mongodb.."))
.catch((err) => console.log(err));

//we have to put this url in .env so that our id password doesnt get leaked after we put our code on github
/*
    *Todo{
    title: string,
    description: string,
    completed: boolean
    }


*/
//Define Schema
const todoSchema = mongoose.Schema({
    //Schema definition here
    title : String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    // //if the key and value are same we can use shorter syntax
    // todo: todo
    todo
}