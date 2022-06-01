import { useState } from 'react'
import { useSelector } from 'react-redux';
import TodoList, { CompleteTodo, IncompleteTodo } from './Components/TodoList'
import Todo from './Models/Todo';
import { completeTodoSelector, incompleteTodoSelector } from './Selectors/todo';

function App() {

 
  return(
    <div className="p-5 h-screen bg-[url('https://media.istockphoto.com/photos/todo-list-in-a-spiral-notebook-on-a-wooden-background-an-empty-space-picture-id1346241019?b=1&k=20&m=1346241019&s=170667a&w=0&h=jkhjgT2-adBmTv4Rc83r4aw5wqJV0vBwJ1E4K98ibLk=')]">
    <h1 className="text-2x font-bold"> Things to do </h1>
<IncompleteTodo/>
<h1 className="text-2x text-latin font-bold"> Things to be done </h1>
<CompleteTodo/>
    </div>
    
  )
   
  
}

export default App
