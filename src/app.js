require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const tasksRoutes = require('./routes/tasks.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', tasksRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the TODO API! Use /api/auth or /api/tasks for endpoints.');
});


module.exports = app;
