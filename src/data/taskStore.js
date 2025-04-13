let taskList = [];

export const getTasks = () => taskList;

export const addTask = (task) => {
  taskList.push(task);
};

export const updateTaskStatus = (id, status, comment = '') => {
  const task = taskList.find((t) => t.id === id);
  if (task) {
    task.status = status;
    task.comment = comment;
  }
};

export const deleteTask = (id) => {
  taskList = taskList.filter((t) => t.id !== id);
};
