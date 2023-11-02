
// Dupe code for accessing modals
const ModalA = document.querySelector('.modal-a');
const ModalAButton = document.querySelector(".modal-a-button");
const ModalB = document.querySelector('.modal-b');
const ModalBButton = document.querySelector(".modal-b-button");

// Dupe code for event listeners
ModalAButton.addEventListener("click", toggleModalA);
ModalA.querySelector(".close").addEventListener("click", toggleModalA);

ModalB.querySelector(".close").addEventListener("click", toggleModalB);
ModalBButton.addEventListener("click", toggleModalB);

function toggleModalA() {
  ModalA.classList.toggle("hidden");
}

// Tightly coupled & not single responsibility
function toggleModalB() {
  ModalB.classList.toggle("hidden");
}

function showModalBButton() {
  ModalBButton.classList.remove('hidden')
}