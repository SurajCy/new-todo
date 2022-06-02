
import { CompleteTodo, IncompleteTodo } from './Components/TodoList'
import TodoCreator from './Components/TodoCreator'

function App() {

 
  return(
    <div className="p-5 h-screen bg-[url('https://media.istockphoto.com/photos/coffee-cup-with-latte-art-foam-and-empty-sheet-of-paper-for-writing-picture-id1197664613?b=1&k=20&m=1197664613&s=170667a&w=0&h=YyfD_GxeOag7tC4komKdLYhOSz8VVvzrcaVmtWk7WL0=')]">
    <h1 className="text-2x font-bold"> Things to do </h1>
<IncompleteTodo/>
<TodoCreator></TodoCreator>
<h1 className="text-2x text-latin font-bold"> Things to be done </h1>
<CompleteTodo/>
    </div>
    
  )
   
  
}

export default App
