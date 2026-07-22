const express = require('express');
const app = express();
app.use(express.json());

let tasks = [
  { id: 1, title: '牛乳を買う', done: false },
  { id: 2, title: 'レポートを提出する', done: false },
];
let nextId = 3;

// ---- Issue #3 (GET /tasks) ----


// ---- Issue #4 (POST /tasks) ----
app.post('/tasks', (req, res) => {
  const { title } = req.body;

  const newTask = {
    id: nextId,
    title: title,
    done: false
  };

  tasks.push(newTask);
  nextId++;

  res.status(201).json(newTask);
});

// ---- Issue #5 (GET /tasks/:id) ----


// ---- Issue #6 (PUT /tasks/:id) ----


// ---- Issue #7 (DELETE /tasks/:id) ----


// ---- Issue #8 (PATCH /tasks/:id/toggle) ----


// ---- Issue #9 (GET /health) ----


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
