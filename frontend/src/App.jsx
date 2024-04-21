import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

//render for backend
//vercel for frontend

function App() {

  const [todos, setTodos] = useState([]);

  //hitting the backend
  //this is not the right way to send request to an express backend
  useEffect(()=> {
    setInterval(()=>{
      fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
    }, 10000)
  }, []);

  return (
    <div>
      <CreateTodo setTodos={setTodos}></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </div>
  )
}

export default App
