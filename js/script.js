document.querySelectorAll(".questions__item").forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  })
);


