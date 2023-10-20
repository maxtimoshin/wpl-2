const actionButton = document.querySelector(".action-button");
const wheel = document.querySelector(".wheel-circle");
const modal = document.querySelector(".modal");
let rotating = false;
actionButton.addEventListener("click", () => {
  wheel.classList.add("rotate");
  wheel.classList.add("wheel-tr");
  setTimeout(() => {
    wheel.classList.remove("wheel-tr");
    setTimeout(() => {
      modal.classList.toggle("modal-visible");
    }, 1000);
  }, 5000);
});
