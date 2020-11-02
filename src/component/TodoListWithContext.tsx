import React from "react";
import { useFunctions, useStates } from "./TodoContext";

export default function TodoList() {
  const state = useStates();
  const {
    enterTodo,
    submitTodo,
    inputTodo,
    checkTodo,
    deleteTodo,
  } = useFunctions();
  return (
    <div>
      <h3>Todo List with Hook & Context</h3>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        onChange={inputTodo}
        value={state.inputText}
        onKeyPress={enterTodo}
      ></input>
      <button onClick={submitTodo}>등록</button>
      <div>
        {state.todos.map((todo) => (
          <div style={{ margin: 10 }}>
            <span
              style={{ color: todo.checked ? "green" : "black" }}
              onClick={() => checkTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button
              style={{ marginLeft: 10 }}
              onClick={() => deleteTodo(todo.id)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
