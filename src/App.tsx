import { useState } from 'react'
import TodoRow from './Components/TodoRow'

function App() {
  const myTodo={
    id:1,
    title: "bring milk",
    done: true
  }

  return(
    <div className="p-5">

<TodoRow
todo={myTodo} />
    </div>
    
  )
   
  
}

export default App
