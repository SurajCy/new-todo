export const TODO_STATUS_CHANGE="todo status change";
export const TODO_ADD="todo added";


let nextId=0
export const todoAdd=(todoText:string)=>({
    type:TODO_ADD,
    payload: {id: ++nextId, title:todoText,done:false},
});
 
export const todoStatusChange=(todoId:number,newStatus:boolean)=>({
    type:TODO_STATUS_CHANGE,
    payload:{id:todoId,done:newStatus}
})