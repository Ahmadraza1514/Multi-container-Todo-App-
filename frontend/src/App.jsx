import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API_URL}/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      setLoading(true);
      try {
        await axios.post(`${API_URL}/todos`, { title: title.trim() });
        setTitle('');
        await fetchTodos();
      } catch (error) {
        console.error('Error adding todo:', error);
      }
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🚀 Multi-Container Todo App</h1>
      <p>Docker + React + Node.js + MongoDB</p>
      
      <form onSubmit={addTodo} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your todo..."
          style={{ 
            padding: '10px', 
            fontSize: '16px', 
            width: '300px',
            marginRight: '10px'
          }}
          disabled={loading}
        />
        <button 
          type="submit" 
          disabled={loading || !title.trim()}
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Adding...' : 'Add Todo'}
        </button>
      </form>

      <div>
        <h2>Your Todos ({todos.length})</h2>
        {todos.length === 0 ? (
          <p>No todos yet. Add your first todo!</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map(todo => (
              <li key={todo._id} style={{ 
                padding: '10px', 
                margin: '5px 0', 
                backgroundColor: '#f8f9fa',
                border: '1px solid #dee2e6',
                borderRadius: '4px'
              }}>
                {todo.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;