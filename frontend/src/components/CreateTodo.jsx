import { useState } from "react";
import { Todos } from "./Todos";
import axios from 'axios'

export function CreateTodo(props){

    const [title, setTitle] = useState("");
    const [description , setDescription] = useState("");

    //onChange = {} , it isi like one of those callback functions that gets called, anytime the input changes which means anytime i put something in the input box
    //the onChange() function triggers and i can get the current value by doinng this
 
    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" id="title" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }}/>      <br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" id="desc" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }}/>    <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {

            //using axios library
            axios.post("http://localhost:3000/todo", {
                title: title,
                description:  description
            })
            .then(function(response){
                setTitle(response.data.title)
                setDescription(response.data.description)
                alert("todo added")
            })

            //using fetch function
            // fetch("http://localhost:3000/todo" , {
            //     method:"POST",
            //     body: JSON.stringify({
            //         //It will work but it is not the cleanest syntax to keep in mind there are 2 ways
            //         // title: document.getElementById("title").innerHTML,
            //         // description : document.getElementById("desc").innerHTML

            //         //by creating local state variable
            //         title : title,
            //         description : description
            //     }), 
            //     headers: {
            //         "Content-type" : "apllication/json"
            //     }
            // })
            //   .then(async function(res){
            //     const json = await res.json();
            //     alert("todo added");
            //   });


        }}>Add a Todo</button>
    </div>
}