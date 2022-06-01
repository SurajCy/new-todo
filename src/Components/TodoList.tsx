import { FC, memo } from "react";
import { connect } from "react-redux";
import Todo from "../Models/Todo";
import { completeTodoSelector, incompleteTodoSelector } from "../Selectors/todo";
import { State } from "../store";
import TodoRow from "./TodoRow";

type TodoListProps = {
    todos: Todo[]
};

const TodoList: FC<TodoListProps> = ({todos}) => {
  return <div>
  {todos.map(t => <TodoRow  key={t.id} todo={t}/>)}
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