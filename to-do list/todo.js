// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item for the task
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');

    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create a button to delete the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    // Append the span and delete button to the task item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);

    // Add event listener to mark the task as completed
    taskSpan.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    // Add event listener to delete the task
    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}

// Add event listener to the "Add" button
addTaskBtn.addEventListener('click', addTask);

// Add event listener for pressing "Enter" in the input field
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
