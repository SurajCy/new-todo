import cn from "classnames";
import { FC, memo } from "react";
import Todo from "../Models/Todo";


type TodoRowProps = {
    todo: Todo
};

const TodoRow: FC<TodoRowProps> = ({todo}) => {
  
const {title,done} = todo;

  return <div className="flex items-center">
    <input checked={done} type="checkbox"/>
    <p className={cn("text-blue-500 ml-2",{"line-through": done})}>{title}</p>
  </div>;
};

TodoRow.defaultProps = {};

export default memo(TodoRow);