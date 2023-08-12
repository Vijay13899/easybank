const navbtn = document.querySelector(".nav-button");
const closebtn = document.querySelector(".close");
// const nav_links = document.querySelector("nav ul");
// const nav = document.querySelector("nav");
const dialog = document.querySelector("dialog");
navbtn.addEventListener("click", () => {
  // nav_links.classList.add("active");
  // navbtn.classList.add("not-active");
  // closebtn.classList.add("active");
  // closebtn.style.paddingTop = "2rem";
  dialog.showModal();
});
closebtn.addEventListener("click", () => {
  // nav_links.classList.remove("active");
  // navbtn.classList.remove("not-active");
  // closebtn.classList.remove("active");
  dialog.close();
});
dialog.addEventListener("click", (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});

function handleSubmit() {
  alert("Your message has been submitted!");
  window.location.href = "index.html";
}
