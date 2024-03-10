
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.


// Section 2: App State Variables
let tasks = [];


// Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");


console.log("taskform" + taskForm);
console.log("tasktable" + taskTable);

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // TODO: Get form input values
    let taskname = document.getElementById("tname").value;
    let taskDescription = document.getElementById("tdescription").value;
    let taskDeadline = document.getElementById("tDeadline").value;
    // TODO: Validate input fields
    taskname === null ? alert('Task name and deadline are required!') : taskname 

    // TODO: Update the tasks array
    tasks.push({name: taskname, description: taskDescription, deadline: taskDeadline })
    render();

}


// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr
    taskTable.innerHTML = tasks.map(task => `
    <tr>
    <td>${task.name}</td>
    <td>${task.description}</td>
    <td>${task.deadline}</td>
    <td><button onclick="markTaskComplete(this)">Complete</button></td>
    <td><button onclick="removeTask(this)">Remove</button></td>
    </tr>
    `).join('');

}



    // Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}