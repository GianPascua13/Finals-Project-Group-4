document.addEventListener('DOMContentLoaded', function() {
    const deleteLinks = document.querySelectorAll('.delete a');

    deleteLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const confirmed = confirm("Are you sure you want to delete this task?");
            if (!confirmed) {
                event.preventDefault();
            }
        });
    });

    const taskForm = document.getElementById('task-form');
    taskForm.addEventListener('submit', function(event) {
        const taskInput = document.querySelector('.task_input').value;
        if (taskInput === "") {
            event.preventDefault();
            alert('Please enter a task');
        }
    });

    const filterForm = document.getElementById('filter-form');
    filterForm.addEventListener('submit', function(event) {
    });
});
