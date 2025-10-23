const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://frontend:3000'],
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.DB_HOST ? 
  `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT || 27017}/${process.env.DB_NAME || 'todoapp'}` : 
  'mongodb://localhost:27017/todoapp';

console.log('Connecting to MongoDB:', mongoURI);

mongoose.connect(mongoURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.log('❌ MongoDB Connection Error:', err));

// Todo Model
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Todo = mongoose.model('Todo', TodoSchema);

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Todo Backend API is running!',
    endpoints: {
      getTodos: 'GET /todos',
      addTodo: 'POST /todos'
    }
  });
});

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/todos', async (req, res) => {
  try {
    const { title } = req.body;
    if (!title || title.trim() === '') {
      return res.status(400).json({ error: 'Title is required' });
    }

    const newTodo = new Todo({
      title: title.trim()
    });
    
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Backend Server is running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});