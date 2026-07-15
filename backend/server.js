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


// ---- Issue #5 (GET /tasks/:id) ----


// ---- Issue #6 (PUT /tasks/:id) ----


// ---- Issue #7 (DELETE /tasks/:id) ----


// ---- Issue #8 (PATCH /tasks/:id/toggle) ----
app.patch('/tasks/:id/toggle', (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  task.done = !task.done;
  res.json(task);
});

// ---- Issue #9 (GET /health) ----


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
