//Add all of the zod inputs that you expect from the end user
const zod = require("zod");

/*
    post request{
        title: string,
        description: string
    }

    put request{
        id : string
    }

*/

const createTodo = zod.object({
    title: zod.string().min(1),
    description: zod.string().min(1),
});

const updateTodo = zod.object({
    id: zod.string()
});

//there are various ways to export variables from a file 
//we are using 
//module.exports = { } syntax
//it says export the createTodo object , and the updateTodo object 
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}