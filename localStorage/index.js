function getLocalStorage(variable) {
  let data;
  if (localStorage.getItem(variable)) {
    data = JSON.parse(localStorage.getItem(variable));
  }
  return data;
}

function setLocalStorage(variable, value) {
  localStorage.setItem(variable, JSON.stringify(value));
}

const form = document.querySelector("form");

function handleSubmit(e) {
  e.preventDefault();
  const { firstName } = e.target.elements;
  setLocalStorage("name", firstName.value);
  firstName.value = "";
  renderName();
}

function clearName() {
  console.log('clearName')
  localStorage.removeItem("name");
  renderName();
}

form.addEventListener("submit", handleSubmit);

function ClearButton() {
  const button = document.createElement("button");
  button.textContent = "Clear";
  button.addEventListener("click", clearName);
  return button;
}

function renderName() {
  const name = getLocalStorage("name");
  const nameElm = document.querySelector(".name");
  if (!name) {
    nameElm.innerHTML = `<p>Enter your name</p>`;
    return;
  };

  nameElm.innerHTML = `<p>Hello ${name}</p>`;

  const clearButton = new ClearButton();
  nameElm.appendChild(clearButton);
}

renderName();