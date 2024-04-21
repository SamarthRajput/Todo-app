//The component which will actually render all our todos
//render means actually put them on the DOM

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


export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return  <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>

}