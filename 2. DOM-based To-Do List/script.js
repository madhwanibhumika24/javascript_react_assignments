const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");


// Add Task
function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    // Create task item
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    // Create checkbox
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    // Create task text
    const taskTextElement = document.createElement("span");

    taskTextElement.className = "task-text";
    taskTextElement.innerText = taskText;

    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-btn";


    // Mark task as completed
    checkbox.addEventListener("change", function () {

        taskTextElement.classList.toggle(
            "completed",
            checkbox.checked
        );

    });


    // Delete task
    deleteButton.addEventListener("click", function () {

        listItem.remove();

        updateTaskCount();

    });


    // Add elements to task
    listItem.appendChild(checkbox);
    listItem.appendChild(taskTextElement);
    listItem.appendChild(deleteButton);

    // Add task to list
    taskList.appendChild(listItem);

    // Clear input
    taskInput.value = "";

    updateTaskCount();
}


// Update task count
function updateTaskCount() {

    const totalTasks = taskList.children.length;

    taskCount.innerText =
        totalTasks + (totalTasks === 1 ? " task" : " tasks");

    emptyMessage.style.display =
        totalTasks === 0 ? "block" : "none";
}


// Add task using button
addTaskBtn.addEventListener("click", addTask);


// Add task using Enter key
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});