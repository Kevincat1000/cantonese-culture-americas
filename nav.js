document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    if (!button) return;

    button.addEventListener("click", (e) => {
      e.preventDefault();

      dropdowns.forEach((d) => {
        if (d !== dropdown) d.classList.remove("open");
      });

      dropdown.classList.toggle("open");
    });
  });

  document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
      });
    }
  });
});
