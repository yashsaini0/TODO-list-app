let inputbox = document.getElementById("input-box");
let listconatainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("Enter something.");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listconatainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listconatainer.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);
function saveData() {
    localStorage.setItem("data", listconatainer.innerHTML);
}
function showTask() {
    listconatainer.innerHTML= localStorage.getItem("data");
}
showTask();
