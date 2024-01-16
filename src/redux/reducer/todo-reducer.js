import { ADDFORM, DELETETODO, CHANGE_TODO } from "../types";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDFORM: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    case DELETETODO: {
      const { id } = payload;
      const newArr = state.todos.filter((elem) => elem.id !== id);
      return {
        ...state,
        todos: newArr,
      };
    }
    case CHANGE_TODO: {
      const newArr = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, change: true } : todo
      );
      return {
        ...state,
        todos: newArr,
      };
    }
    default:
      return state;
  }
};
