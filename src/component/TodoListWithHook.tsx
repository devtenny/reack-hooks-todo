import React, { useState } from "react";

export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
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
  ]);
  const enterTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputText !== "") addTodo();
  };
  const submitTodo = () => {
    if (inputText !== "") addTodo();
  };
  const addTodo = () => {
    const newTodo = {
      id: todos.length,
      text: inputText,
      checked: false,
    };
    setTodos(todos.concat(newTodo));
    setInputText("");
  };
  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const checkTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((newTodos) => newTodos.id !== id));
  };
  return (
    <div>
      <h3>Todo List with Hook</h3>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        onChange={inputTodo}
        value={inputText}
        onKeyPress={enterTodo}
      ></input>
      <button onClick={submitTodo}>등록</button>
      <div>
        {todos.map((todo) => (
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
