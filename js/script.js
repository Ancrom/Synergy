document.querySelectorAll(".questions__item").forEach((item) =>
  item.addEventListener("click", () => {
    item.querySelector(".questions__text").classList.toggle("active");
  })
);


