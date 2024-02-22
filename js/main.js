const registBtn = document.querySelector(".reg-btn");
const loginBtn = document.querySelector(".login-btn");
const modal = document.querySelector(".modal");

function showModal() {
  if ((modal.style.display = "none")) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}
registBtn.addEventListener("click", showModal);
let name = "";
