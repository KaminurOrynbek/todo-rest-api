const express = require('express');
const {
  addTask,
  getTasks,
  markTaskAsDone,
  getCompletedTasks,
  updateTask,
  deleteTask,
} = require('../controllers/tasks.controller');
const { authenticate } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authenticate, addTask);
router.get('/', authenticate, getTasks);
router.post('/done', authenticate, markTaskAsDone);
router.get('/done', authenticate, getCompletedTasks);
router.put('/:taskTitle', authenticate, updateTask);
router.delete('/', authenticate, deleteTask);

module.exports = router;
