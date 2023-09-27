import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
`;

const TodoInputContainer = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoInput = styled.input`
  padding: 10px;
  width: 60%;
  border: none;
  font-weight: bold;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const TodoListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoListItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#888" : "inherit")};
  background-color: ${(props) => (props.completed ? "#f2f2f2" : "#f7ffdd")}; /* Unique color style */
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 3px 6px;
  cursor: pointer;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoObj = {
      userId: 1,
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoObj]);
    setNewTodo("");
  };

  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <AppContainer>
      <Title>TO-Do LIST</Title>
      <TodoInputContainer>
        <TodoInput
          type="text"
          placeholder="Add A New TODO Detail..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <AddButton onClick={handleAddTodo}>Add</AddButton>
      </TodoInputContainer>
      <TodoListContainer>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            completed={todo.completed}
          >
            {todo.title}
            <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>DELETE</DeleteButton>
          </TodoListItem>
        ))}
      </TodoListContainer>
    </AppContainer>
  );
}

export default App;
