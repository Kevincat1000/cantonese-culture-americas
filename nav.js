document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector("button");
    const menu = dropdown.querySelector(".dropdown-menu");
    if (!btn || !menu) return;

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // close other dropdowns
      dropdowns.forEach((d) => {
        if (d !== dropdown) d.classList.remove("open");
      });

      const isOpen = dropdown.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  });

  // click outside to close all
  document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
        const btn = dropdown.querySelector("button");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  });

  // ESC to close all
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
        const btn = dropdown.querySelector("button");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    }
  });
});
