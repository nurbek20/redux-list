import { ADDFORM,DELETETODO,CHANGE_TODO } from "./types";


export const addForm=(data)=>{
    console.log("data>>>", data);
    return {
        type:ADDFORM,
        payload:data
    }
}
export const removeTodo=(id)=>{
    return {
        type:DELETETODO,
        payload:{ id }
    }
}

export const updateTodo=(id)=>{
    return {
        type:CHANGE_TODO,
        payload:{ id }
    }
}