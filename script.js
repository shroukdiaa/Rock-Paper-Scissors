let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const list = document.getElementById('task-list');
    list.innerHTML = '';
    tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        ${task}
        <button onclick="deleteTask(${index})">❌</button>
    `;
    list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById('task-input');
    const task = input.value.trim();
    if (task !== '') {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        input.value = '';
    renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

renderTasks(); // أول ما الصفحة تفتح
