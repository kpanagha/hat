
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), description: newTodo, status: false }]);
      setNewTodo("");
    }
  };

  const handleToggleStatus = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const handleEditTodo = (todoId, newDescription) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, description: newDescription } : todo
      )
    );
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="project-details">
      <h2>Project {id}</h2>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div className="todo-list">
        <h3>Todos</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className="todo-item">
                <input
                  type="checkbox"
                  checked={todo.status}
                  onChange={() => handleToggleStatus(todo.id)}
                />
                <span className={todo.status ? "completed" : ""}>
                  {todo.description}
                </span>
                <button
                  onClick={() =>
                    handleEditTodo(todo.id, prompt("Edit Todo:", todo.description))
                  }
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDetails;


