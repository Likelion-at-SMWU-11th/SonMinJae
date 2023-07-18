const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const addBtn = document.querySelector("#todo-form button");
const toDoAdd = document.getElementById("todo-add");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML = newTodo;

    const button = document.createElement("button");
    button.innerText = "⭕"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";  
    paintToDo(newTodo);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

toDoForm.addEventListener("submit", handleToDoSubmit);  // todo-form 안에서 submit이 발생하는 특정 상황에서 함수 handleToDoSubmit()을 실행시키기 위함