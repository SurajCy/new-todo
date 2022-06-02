import { FC, memo } from "react";
import { connect, useDispatch } from "react-redux";
import { TODO_STATUS_CHANGE } from "../Actions/todo";
import Todo from "../Models/Todo";
import { completeTodoSelector, incompleteTodoSelector } from "../Selectors/todo";
import { State } from "../store";
import TodoRow from "./TodoRow";

type TodoListProps = {
    todos: Todo[]
};

const TodoList: FC<TodoListProps> = ({todos}) => {
  const dispatch=useDispatch();

 const handleStatusChange=(id:number,done:boolean)=>{
dispatch({type:TODO_STATUS_CHANGE,payload:{id,done}})
}

  return <div>
  {todos.map(t => <TodoRow onStatusChange={handleStatusChange} key={t.id} todo={t}/>)}
  </div>;
};

TodoList.defaultProps = {};

export default memo(TodoList);


const incompleteMapper=(s:State)=>{
  return{todos: incompleteTodoSelector(s)}

}
const completeMapper=(s:State)=>{
  return{todos: completeTodoSelector(s)}

}
export const IncompleteTodo= connect(incompleteMapper)(TodoList);

export const CompleteTodo= connect(completeMapper)(TodoList);