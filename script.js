document.addEventListener("DOMContentLoaded", () => {
  const msgBox = document.querySelector(".message-box");
  msgBox.style.opacity = 0;
  msgBox.style.transition = "opacity 2s";

  setTimeout(() => {
    msgBox.style.opacity = 1;
  }, 500);
});