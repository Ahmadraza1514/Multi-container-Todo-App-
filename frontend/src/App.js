import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get(`${API_URL}/todos`);
    setTodos(response.data);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (title) {
      await axios.post(`${API_URL}/todos`, { title });
      setTitle('');
      fetchTodos();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;