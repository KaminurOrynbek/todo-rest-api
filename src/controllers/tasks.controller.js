const TasksService = require('../services/tasks.service');
const { authenticate } = require('../middlewares/auth.middleware');

async function addTask(req, res, next) {
  try {
    const { title, description } = req.body;
    await TasksService.addTask(req.user, title, description);
    res.status(201).json({ message: 'Task created successfully.' });
  } catch (error) {
    next(error);
  }
}

async function getTasks(req, res, next) {
  try {
    const tasks = await TasksService.getTasks(req.user);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
}

async function markTaskAsDone(req, res, next) {
  try {
    const { title } = req.body;
    await TasksService.markTaskAsDone(req.user, title);
    res.status(200).json({ message: 'Task marked as done.' });
  } catch (error) {
    next(error);
  }
}

async function getCompletedTasks(req, res, next) {
  try {
    const tasks = await TasksService.getCompletedTasks(req.user);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
}

async function updateTask(req, res, next) {
  try {
    const { taskTitle } = req.params;
    const { title, description } = req.body;
    await TasksService.updateTask(req.user, taskTitle, title, description);
    res.status(200).json({ message: 'Task updated successfully.' });
  } catch (error) {
    next(error);
  }
}

async function deleteTask(req, res, next) {
  try {
    const { title } = req.body;
    await TasksService.deleteTask(req.user, title);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addTask,
  getTasks,
  markTaskAsDone,
  getCompletedTasks,
  updateTask,
  deleteTask,
};
