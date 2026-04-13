const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  const mediaLink = project.querySelector(".project-media");
  const cta = project.querySelector(".project-link");

  const activate = () => project.classList.add("is-active");
  const deactivate = () => project.classList.remove("is-active");

  project.addEventListener("mouseenter", activate);
  project.addEventListener("mouseleave", deactivate);
  project.addEventListener("focusin", activate);
  project.addEventListener("focusout", deactivate);

  project.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      mediaLink?.click();
    }
  });

  [mediaLink, cta].forEach((link) => {
    if (!link) return;
    link.addEventListener("click", (event) => {
      project.classList.add("is-clicked");
      window.setTimeout(() => project.classList.remove("is-clicked"), 260);
      const href = link.getAttribute("href");
      if (!href || href === "#") {
        event.preventDefault();
      }
    });
  });
});
