//The component which will actually render all our todos
//render means actually put them on the DOM

import axios from "axios"
import { useState } from "react"

/*
    todos = [
    {
        title: "go to gym",
        description: " go to gym from 9 to 7"
    }
    ]

*/
//Given that you have an array how do you render all the elements of the array one by one 

function handleComplete(id){
    //To make a PUT request using axios we have to provide the data that we want to update in the request body
    axios.put(`http://localhost:3000/completed/${id}`, {
        completed: true
    })
    .then(function(response){
        console.log(response)
    })
}

function handleDelete(id){
    axios.delete(`http://localhost:3000/delete/${id}`)
    .then(function(response){
        console.log(response)
    })
}

export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return  <div>     
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => handleComplete(todo._id)}>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
                <button onClick={() => handleDelete(todo._id)}>{"Delete todo"}</button>
            </div>
        })}
    </div>

}