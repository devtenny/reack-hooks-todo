import React from "react";
import TodoListWithHook from "./component/TodoListWithHook";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <TodoListWithHookContainer>
        <TodoListWithHook />
      </TodoListWithHookContainer>
      <TodoListWithContextContainer></TodoListWithContextContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
`;
const TodoListWithHookContainer = styled.div`
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 500px;
  padding: 20px;
`;
const TodoListWithContextContainer = styled.div`
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 500px;
  padding: 20px;
  margin-left: 50px;
`;

export default App;
