
// Select elements
const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const logoutBtn = document.getElementById("startButton");
// Add Task
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const content = document.getElementById("content").value;

    if (title === "" || category === "Select Category") {
        alert("Please fill all fields");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    li.innerHTML = `
        <strong>${title}</strong>
        <span class="status">${category}</span>
        <span class="date">${new Date().toLocaleDateString()}</span>
        <button class="delete">Delete</button>
    `;

    taskList.appendChild(li);

    // Reset form
    form.reset();
});

// Delete Task (event delegation)
taskList.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});
// Logout
logoutBtn.addEventListener("click", function() {
    alert("Logged out and Tasks Completed!")
    window.location.href = "login.html"; // change if needed
});

// Default load
showDashboard();