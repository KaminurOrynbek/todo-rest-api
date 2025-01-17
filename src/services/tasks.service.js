const tasks = []; 

async function addTask(user, title, description) {
  if (tasks.find((task) => task.user === user && task.title === title)) {
    throw new Error('Task with this title already exists');
  }
  tasks.push({ user, title, description, done: false });
}

async function getTasks(user) {
  return tasks.filter((task) => task.user === user && !task.done);
}

async function getCompletedTasks(user) {
  return tasks.filter((task) => task.user === user && task.done);
}

async function markTaskAsDone(user, title) {
  const task = tasks.find((task) => task.user === user && task.title === title);
  if (!task) {
    throw new Error('Task not found');
  }
  task.done = true;
}

async function updateTask(user, taskTitle, newTitle, newDescription) {
  const task = tasks.find((task) => task.user === user && task.title === taskTitle);
  if (!task) {
    throw new Error('Task not found');
  }
  if (tasks.find((task) => task.user === user && task.title === newTitle && task.title !== taskTitle)) {
    throw new Error('A task with the new title already exists');
  }
  task.title = newTitle;
  task.description = newDescription;
}

async function deleteTask(user, title) {
  const index = tasks.findIndex((task) => task.user === user && task.title === title);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

module.exports = {
  addTask,
  getTasks,
  getCompletedTasks,
  markTaskAsDone,
  updateTask,
  deleteTask,
};
