 import {State} from "../store"

export const completeTodoSelector=(s:State)=>s.todos.filter(t => t.done);
console.log(completeTodoSelector);
export const incompleteTodoSelector=(s:State)=>s.todos.filter(t => !t.done);

