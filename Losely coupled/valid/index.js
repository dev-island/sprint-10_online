// Dupe code for accessing modals
const formModal = document.querySelector(".form-modal");
const formModalButton = document.querySelector(".form-modal-button");
const nameModal = document.querySelector(".name-modal");
const nameModalButton = document.querySelector(".name-modal-button");
const submitButton = document.querySelector(".submit");

function addToDom(query, content) {
  const container = document.querySelector(query);
  container.appendChild(content);
}

function createElement(type, content, classList, textContent, onClick) {
  const element = document.createElement(type);
  if (classList) element.classList.add(...classList);

  if (textContent) element.textContent = textContent;

  if (content) element.innerHTML = content;

  if (onClick) element.addEventListener("click", onClick);

  return element;
}

function Button(text, onClick) {
  const button = createElement("button", null, ["button"], text, onClick)
  return button;
}

function Modal(_title) {
  const modalContent = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h1>Hi! I'm ${_title}</h1>
    </div>
  `;

  const modal = createElement("div", modalContent, ["modal", "hidden"], '', null);

  function toggleModal() {
    modal.classList.toggle("hidden");
  }

  addToDom('body', modal);

  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", toggleModal);

  return {
    toggleModal,
  };
}

function createModal(_title) {
  const modal = new Modal(_title);
  new Button(`Open ${_title}`, modal.toggleModal);
}

createModal("Modal A");
createModal("Modal B");