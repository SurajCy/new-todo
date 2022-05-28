import { useState } from 'react'
import { useSelector } from 'react-redux';
import TodoList from './Components/TodoList'
import Todo from './Models/Todo';
import { completeTodoSelector, incompleteTodoSelector } from './Selectors/todo';

function App() {
 const completeTodo:Todo[]=useSelector(completeTodoSelector);
 const incompleteTodo:Todo[]=useSelector(incompleteTodoSelector)

 const myTodo=[{
   id:1,
   title:"jjj",
   done: false
 }]
  return(
    <div className="p-5">
    <h1 className="text-2x font-bold"> Things to do </h1>
<TodoList todos={incompleteTodo}/>
<h1 className="text-2x text-latin font-bold"> Things to be done </h1>
<TodoList todos={completeTodo}/>
    </div>
    
  )
   
  
}

export default App
