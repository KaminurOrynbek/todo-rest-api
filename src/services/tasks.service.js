const Task = require('../models/task.model');

async function addTask(user, title, description) {
  const existingTask = await Task.findOne({ user, title });
  if (existingTask) {
    throw new Error('Task with this title already exists');
  }
  const task = new Task({ user, title, description });
  await task.save();
}

async function getTasks(user) {
  return Task.find({ user, done: false });
}

async function getCompletedTasks(user) {
  return Task.find({ user, done: true });
}

async function markTaskAsDone(user, title) {
  const task = await Task.findOne({ user, title });
  if (!task) {
    throw new Error('Task not found');
  }
  task.done = true;
  await task.save();
}

async function updateTask(user, taskTitle, newTitle, newDescription) {
  const task = await Task.findOne({ user, title: taskTitle });
  if (!task) {
    throw new Error('Task not found');
  }
  const existingTask = await Task.findOne({ user, title: newTitle });
  if (existingTask && existingTask._id.toString() !== task._id.toString()) {
    throw new Error('A task with the new title already exists');
  }
  task.title = newTitle;
  task.description = newDescription;
  await task.save();
}

async function deleteTask(user, title) {
  await Task.deleteOne({ user, title });
}

module.exports = {
  addTask,
  getTasks,
  getCompletedTasks,
  markTaskAsDone,
  updateTask,
  deleteTask,
};