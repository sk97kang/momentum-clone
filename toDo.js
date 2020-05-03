const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

let toDos = [];
let newId = 0;

function saveToDos() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function delBtnClick(event) {
  const btn = event.target;
  const li = btn.parentNode;
  console.log(li);
  toDoList.removeChild(li);
  toDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  saveToDos();
}

function paintTodo(text) {
  newId++;
  if (newId >= Number.MAX_VALUE) {
    newId = 0;
  }
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  li.id = newId;
  delBtn.title = "delete";
  delBtn.classList.add("delBtn");
  delBtn.addEventListener("click", delBtnClick);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  const toDosObj = {
    id: newId,
    text: text,
  };
  toDos.push(toDosObj);
  saveToDos();
}

function loadToDos() {
  const loadedToDos = JSON.parse(localStorage.getItem(TODO_LS));
  if (loadedToDos !== null) {
    loadedToDos.map((toDo) => {
      paintTodo(toDo.text);
    });
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintTodo(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();
