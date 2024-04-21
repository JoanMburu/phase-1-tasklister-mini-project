document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
    const taskList = document.getElementById('tasks');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskInput = document.getElementById('new-task-description');
        const taskDescription = taskInput.value;

        const listItem = document.createElement('li');
        listItem.textContent = taskDescription;

        const deleteButton = document.createElement('button');
        deleteButton.textContent =  ' X ';
        deleteButton.addEventListener('click', function() {
            listItem.remove(); // Remove the task when the delete button is clicked
        });

        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
    });
});