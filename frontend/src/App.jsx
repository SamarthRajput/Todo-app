import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from 'axios'

//render for backend
//vercel for frontend

function App() {

  const [todos, setTodos] = useState([]);

  //hitting the backend
  //this is not the right way to send request to an express backend using fetch api call function
  // useEffect(()=> {
  //     fetch("http://localhost:3000/todos")
  //     .then(async function(res) {
  //       const json = await res.json();
  //       setTodos(json.todos);
  //     })
  // }, []);

  //using axios to function to call the backend server
  //todos in dependency array because if todo get deleted or new todo is created then the axios.get() call will happen
  useEffect(()=> {
    axios.get("http://localhost:3000/todos")
    .then(function(response){
      setTodos(response.data.todos)
    })
    .catch(err => console.log(err))
  } , [todos])
 
  return (
    <div>
      <h1>TODO LIST</h1>
      <CreateTodo setTodos={setTodos}></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </div>
  )
}

export default App
