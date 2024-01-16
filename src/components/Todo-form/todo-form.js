import React, { useState } from "react";
import { addForm } from "../../redux/action";
import {useDispatch} from "react-redux"

const TodoForm = () => {
  const [inpVal, setInpVal] = useState("");
const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inpVal.trim()!==""){
        const newTodo={
            id:Date.now(),
            text:inpVal,
            completed:false,
            change:false
        }
        dispatch(addForm(newTodo))
        setInpVal("")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
        type="text"
        placeholder="NEW Todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default TodoForm;
