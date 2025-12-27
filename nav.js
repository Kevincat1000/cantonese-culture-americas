document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const button = document.querySelector(".dropdown > button");

  if (!dropdown || !button) return;

  button.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdown.classList.remove("open");
    }
  });
});
