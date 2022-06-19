import { ChangeEvent, FC, memo, useState } from "react";
import { connect } from "react-redux";
import { todoAdd } from "../Actions/todo";

type TodoCreatorProps = {onSubmit:(todoText:string)=>void};

const TodoCreator: FC<TodoCreatorProps> = ({onSubmit}) => {
    
    const [inputValue,setValue]= useState("");

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
setValue(e.target.value);

    };
    const handleSubmit=()=>{
  onSubmit(inputValue)
   setValue("")
    }
  return <div>
      <input  value={inputValue} onChange={handleChange} className="border border-gray-2 rounded-md"/>
      <button onClick={handleSubmit} disabled={!inputValue} className="rounded-md ml-2 bg-yellow-300 p-2">SAVE</button>
  </div>;
};

TodoCreator.defaultProps = {};

export default connect(undefined,{onSubmit:todoAdd}) (memo(TodoCreator))