const nameForm = document.querySelector(".js-nameForm");
const nameInput = nameForm.querySelector("input");
const greetingContainer = document.querySelector(".js-greetings");
const greeting = greetingContainer.querySelector(".js-greetings__title");
const reGreeBtn = greetingContainer.querySelector(".js-greetings__btn");

const USER_LS = "user";
const HIDDEN_CN = "hidden";
const SHOW_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleNameSubmit(event) {
  event.preventDefault();
  const currentValue = nameInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function handleReGreeClick() {
  askForGreeting();
}

function paintGreeting(text) {
  nameForm.classList.add(HIDDEN_CN);
  nameForm.classList.remove(SHOW_CN);
  greetingContainer.classList.add(SHOW_CN);
  greetingContainer.classList.remove(HIDDEN_CN);

  reGreeBtn.addEventListener("click", handleReGreeClick);

  greeting.innerText = `Hello ${text}`;
}

function askForGreeting() {
  nameForm.addEventListener("submit", handleNameSubmit);

  nameForm.classList.add(SHOW_CN);
  nameForm.classList.remove(HIDDEN_CN);
  greetingContainer.classList.add(HIDDEN_CN);
  greetingContainer.classList.remove(SHOW_CN);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser !== null) {
    paintGreeting(currentUser);
  } else {
    askForGreeting();
  }
}

function init() {
  loadName();
}

init();
