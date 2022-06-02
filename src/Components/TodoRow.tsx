import cn from "classnames";
import { FC, memo, useCallback } from "react";
import Todo from "../Models/Todo";


type TodoRowProps = {
    todo: Todo,
    onStatusChange:(id:number,done:boolean)=> void
};

const TodoRow: FC<TodoRowProps> = ({todo,onStatusChange}) => {
  
const { id,title,done} = todo;
 const handleChange=useCallback(()=>{
   onStatusChange(id,!done)
 },[id,done]);

  return <div className="flex items-center">
    <input checked={done} type="checkbox" onChange={handleChange}/>
    <p className={cn("text-blue-500 ml-2",{"line-through": done})}>{title}</p>
  </div>;
};

TodoRow.defaultProps = {};

export default memo(TodoRow);