const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function createTask()
 {
  const taskItem = document.createElement('li');
  taskItem.textContent = 'New Task';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}
addTaskBtn.addEventListener('click', createTask);
