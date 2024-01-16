import React from "react";
import TodoForm from "./Todo-form/todo-form";
import TodoList from "./Todo-list/todo-list";
import { useSelector } from "react-redux";

const Main = () => {
  const { todos } = useSelector((state) => state.todoReducer);
  return (
    <div className="home">
      <h1>Number of Todos </h1>
      <TodoForm />
      {todos.map((elem, i) => {
        return <TodoList key={i} {...elem}/>;
      })}
    </div>
  );
};
export default Main;
