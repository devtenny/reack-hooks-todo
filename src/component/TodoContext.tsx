import React, { createContext, useContext, useState } from "react";

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface State {
  inputText: string;
  todos: Todo[];
}

const TodoContext = createContext<{ state: State; functions: any } | null>(
  null
);

const TodoProvider = ({ children }: any) => {
  const [state, setState] = useState<State>({
    inputText: "",
    todos: [
      {
        id: 0,
        text: "할 일을 작성한 후 엔터를 누르거나 등록 버튼을 누르세요.",
        checked: false,
      },
      {
        id: 1,
        text: "완료한 항목은 한번 클릭하세요.",
        checked: true,
      },
      {
        id: 2,
        text: "삭제하려면 우측 삭제 버튼을 눌러주세요.",
        checked: false,
      },
    ],
  });

  const enterTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && state.inputText !== "") addTodo();
  };
  const submitTodo = () => {
    if (state.inputText !== "") addTodo();
  };
  const addTodo = () => {
    const newTodo = {
      id: state.todos.length,
      text: state.inputText,
      checked: false,
    };
    setState({
      inputText: "",
      todos: state.todos.concat(newTodo),
    });
  };
  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      inputText: e.target.value,
      todos: state.todos,
    });
  };
  const checkTodo = (id: number) => {
    const newTodos = state.todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setState({
      inputText: state.inputText,
      todos: newTodos,
    });
  };
  const deleteTodo = (id: number) => {
    const newTodos = state.todos.filter((newTodos) => newTodos.id !== id);
    setState({
      inputText: state.inputText,
      todos: newTodos,
    });
  };
  return (
    <TodoContext.Provider
      value={{
        state,
        functions: {
          enterTodo,
          submitTodo,
          addTodo,
          inputTodo,
          checkTodo,
          deleteTodo,
        },
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useStates = () => {
  const { state } = useContext(TodoContext)!;
  return state;
};
export const useFunctions = () => {
  const { functions } = useContext(TodoContext)!;
  return functions;
};
export default TodoProvider;
