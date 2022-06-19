import { FC, memo } from "react";
import TodoCreator from "./TodoCreator";
import { CompleteTodo, IncompleteTodo } from "./TodoList";

type TodoPageProps = {};

const TodoPage: FC<TodoPageProps> = (props) => {
  return <div>
      <h1 className="text-center font-bold text-3xl text-rose-400">TODO PAGE</h1>
        <h1 className="text-2x font-bold"> Things to do </h1>
<IncompleteTodo/>
<TodoCreator></TodoCreator>
<h1 className="text-2x text-latin font-bold"> Things to be done </h1>
<CompleteTodo/>
  </div>;
};

TodoPage.defaultProps = {};

export default memo(TodoPage);