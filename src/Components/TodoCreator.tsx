import { ChangeEvent, FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { TODO_ADD } from "../Actions/todo";

type TodoCreatorProps = {};

const TodoCreator: FC<TodoCreatorProps> = (props) => {
    const dispatch =useDispatch();
    const [inputValue,setValue]= useState("");

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
setValue(e.target.value);

    };
    const handleSubmit=()=>{
   dispatch({type:TODO_ADD, payload: inputValue})
   setValue("")
    }
  return <div>
      <input  value={inputValue} onChange={handleChange} className="border border-gray-2 rounded-md"/>
      <button onClick={handleSubmit} className="rounded-md ml-2 bg-yellow-300 p-2">SAVE</button>
  </div>;
};

TodoCreator.defaultProps = {};

export default memo(TodoCreator);