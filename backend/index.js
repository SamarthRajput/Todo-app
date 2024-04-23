const express = require("express");
const app = express();
//importing variables from types.js using the object destructing syntax
const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");
const cors = require("cors");
//what it will do it, It will say ki this backend is slightly insecure now any frontend can hit this backend not necessarly just localhost:3000
//you can totally hit this from a mobile app you can still hit this totally from postman but
//when you silently try to hit this from a frontend that is not hosted on localhost:3000 you will see a CORS error and to fix that your backend has to say ki han bhai i allow everyone i do allow from any frontend
//if you want to restrict ki i only allow it from localhost:5173 we can use 

/* by using this way your backend can only be accessed by localhost:5173 which is what we want 
    app.use(cors({
        origin : "https://localhost:5173"
    }));
*/

app.use(cors());
app.use(express.json());

// body {
//     title: string,
//     description : string
// }


//post endpoint for creating a todo
app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "You send the wrong input"
        })
        return;
    }

    //put it in MongoDB
    //we have used await because we should await for the thing to actually reach the database before you tell user ki han bhai todo created as database is sometimes down
    await todo.create({
        title: createPayload.title,
        description: createPayload.description
    })
    
    res.json({
        message: "Todo created"
    })

});

//get endpoint for getting all the todos
app.get("/todos", async function(req, res){
    //fetch all the todos
    //.find() => give me everything with any specific condition
    //we can also put some condition ki han bhai give this specific todo with this name

    const todos = await todo.find({});
    //console.log(todos);     // it returns a promise that why we await for the todos to actually come back to you

    res.json({
        todos:todos
    })
});

//put endpoint for marking a specific todo as completed 
app.put("/completed/:id", async function(req, res){

    const updatePayload = req.params.id;

    //update the todo
    //the findByIdAndUpdate() function takes 2 arguments 
    //First one is what are your conditions what do you want to update i want to update something which has _id has this
    //_id because mongoDB automatically generates an unique id for every data and i have update it based on that
    const updateTodo = await todo.findByIdAndUpdate(updatePayload, {completed: true})

    res.json({
        message:"Todo marked as completed"
    })
});

app.delete("/delete/:id" , async function(req, res){
    const deletePayload = req.params.id;
    const deleteTodo = await todo.findByIdAndDelete(deletePayload)
});

app.listen(3000);