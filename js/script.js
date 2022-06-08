document.querySelectorAll(".questions__title").forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    item.parentNode.classList.toggle("active");
  })
);
