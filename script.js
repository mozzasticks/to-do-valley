//TODO: condense code into one set of functions
//TODAY TASKS
const todayTaskForm = document.getElementById('todayTaskForm');
const todayTaskInput = document.getElementById('todayTaskInput');
const todayTaskList = document.getElementById('todayTaskList');

todayTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTask = todayTaskInput.value;
    if (newTask !== '') {
        addTodayTask(newTask);
        todayTaskInput.value = '';
    }
})

function addTodayTask(task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkbox);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);

    todayTaskList.appendChild(listItem);
    //
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskText.style.textDecoration = 'line-through';
        } else {taskText.style.textDecoration = 'none';}
    });

    deleteButton.addEventListener('click', function() {todayTaskList.removeChild(listItem);});
}

//TODO TASKS
const todoTaskForm = document.getElementById('todoTaskForm');
const todoTaskInput = document.getElementById('todoTaskInput');
const todoTaskList = document.getElementById('todoTaskList');

todoTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTask = todoTaskInput.value;
    if (newTask !== '') {
        addTodoTask(newTask);
        todoTaskInput.value = '';
    }
})

function addTodoTask(task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkbox);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);

    todoTaskList.appendChild(listItem);
    //
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskText.style.textDecoration = 'line-through';
        } else {taskText.style.textDecoration = 'none';}
    });

    deleteButton.addEventListener('click', function() {todoTaskList.removeChild(listItem);});
}

//HEALTH TASKS
const healthTaskForm = document.getElementById('healthTaskForm');
const healthTaskInput = document.getElementById('healthTaskInput');
const healthTaskList = document.getElementById('healthTaskList');

healthTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTask = healthTaskInput.value;
    if (newTask !== '') {
        addHealthTask(newTask);
        healthTaskInput.value = '';
    }
})

function addHealthTask(task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkbox);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);

    healthTaskList.appendChild(listItem);
    //
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskText.style.textDecoration = 'line-through';
        } else {taskText.style.textDecoration = 'none';}
    });

    deleteButton.addEventListener('click', function() {healthTaskList.removeChild(listItem);});
}