import { useState } from 'react'
import TodoList from './Components/TodoList'

function App() {
  const myTodos=[{
    id:1,
    title: "bring milk",
    done: true
  },
    {
      id:2,
      title: "bring cake",
      done: false
    }
  ]

  return(
    <div className="p-5">
      <h1 className="text-2x font-bold"> Things to do </h1>
<TodoList todos={myTodos}/>
<h1 className="text-2x font-bold"> Things to be done </h1>
<TodoList todos={myTodos}/>
    </div>
    
  )
   
  
}

export default App
