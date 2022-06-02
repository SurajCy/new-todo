 import { Reducer , createStore } from "redux";
import { TODO_ADD, TODO_STATUS_CHANGE } from "./Actions/todo";
import Todo from "./Models/Todo"

 export type State ={
     todos: Todo[]
 }
 let nextId=1;
  const initialState: State ={
      todos:[]
  }

 const reducer: Reducer<State> =(state=initialState,action) => {
  switch (action.type){
      case TODO_STATUS_CHANGE:{
          const {id,done}= action.payload;
          const newTodo=state.todos.map(t=>{
              if(t.id===id){
                return {...t,done}
              }
                    return t;
                });
                return {...state,todos:newTodo}
              
          
      
        }
  
        case TODO_ADD:{
          const todoText=action.payload;
const todo= {id:nextId, title:todoText,done:false};
nextId++
 return{...state,todos:[...state.todos,todo]}
        }
  


     default: return state;
  }
 }

  const store = createStore(reducer);
  export default store;