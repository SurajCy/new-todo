 import { Reducer , createStore } from "redux";
import { TODO_STATUS_CHANGE } from "./Actions/todo";
import Todo from "./Models/Todo"

 export type State ={
     todos: Todo[]
 }

  const initialState: State ={
      todos:[{
        id:1,
        title:"aaaa",
        done: false
      },{
        id:2,
        title:"bbbb",
        done: true
      },{
        id:3,
        title:"cccc",
        done: false
      },{
        id:4,
        title:"dddd",
        done: true
      }]
  }

 const reducer: Reducer<State> =(state=initialState,action) => {
  switch (action.type){
      case TODO_STATUS_CHANGE:{
          const todoId= action.payload;
          const newTodo=state.todos.map(t=>{
              if(t.id===todoId){
                return {...t,done:!t.done}
              }
                    return t;
                });
                return {...state,todos:newTodo}
              
          
      
        }
  
  


     default: return state;
  }
 }

  const store = createStore(reducer);
  export default store;