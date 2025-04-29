let taskinput = document.getElementById("taskinput");
let tasks = document.getElementById("tasks");
let button = document.getElementById("button");

function addTask() {
    let inputtext = taskinput.value.trim();

    if (inputtext !== "") {
        let newTask = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.marginRight = "10px";

        checkbox.addEventListener("change", function () {
            if (this.checked) {
                playSound();
                newTask.style.textDecoration = "line-through";
            } else {
                newTask.style.textDecoration = "none";
            }
        });

        newTask.appendChild(checkbox);
        newTask.appendChild(document.createTextNode(inputtext));

        tasks.appendChild(newTask);
        taskinput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function playSound() {
    let audio = new Audio("task_complete.mp3");
    audio.play();
}

taskinput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask(); 
    }
});

button.addEventListener("click", addTask);
