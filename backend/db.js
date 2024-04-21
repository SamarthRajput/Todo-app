const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://ssamarth224:GGeJIb5AQeVTlo4G@cluster0.gvveypg.mongodb.net/todos");
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