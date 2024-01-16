import React from 'react'
import {useDispatch} from "react-redux"
import { removeTodo,updateTodo } from "../../redux/action";

const TodoList = (props) => {
    const {text,id} = props
    const dispatch = useDispatch();

    const deleteTodo = (id) => {
      dispatch(removeTodo(id));
    };
    const changeTodo=(id)=>{
      dispatch(updateTodo(id));
    }

    return (
        <div className="todo-list" >
            <span>{text}</span>
            <button onClick={()=>changeTodo(id)} >
                <i className="fa-solid fa-pen fa-1x"></i>
            </button>

            <button onClick={()=>deleteTodo(id)} >
                < i className="fa-solid fa-trash fa-1x" ></i>
            </button>
        </div>
    )
}
export default TodoList;