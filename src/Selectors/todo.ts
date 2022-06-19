 import {State} from "../store"

//  export const todoListSelector=(s:State)=>{s.todos}


// export const completeTodoSelector2=()=>{}

export const completeTodoSelector=(s:State)=>s.todos.filter(t => t.done);
console.log(completeTodoSelector);
export const incompleteTodoSelector=(s:State)=>s.todos.filter(t => !t.done);

