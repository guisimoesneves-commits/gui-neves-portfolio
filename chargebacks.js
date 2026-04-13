const interactiveCards = document.querySelectorAll(".mini-project");
const hoverLinks = document.querySelectorAll(".case-back-link, .case-more-head a");

interactiveCards.forEach((card) => {
  const media = card.querySelector(".mini-project-media");

  const activate = () => card.classList.add("is-active");
  const deactivate = () => card.classList.remove("is-active");

  card.addEventListener("mouseenter", activate);
  card.addEventListener("mouseleave", deactivate);
  card.addEventListener("focusin", activate);
  card.addEventListener("focusout", deactivate);

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      media?.click();
    }
  });

  media?.addEventListener("click", (event) => {
    const href = media.getAttribute("href");
    card.classList.add("is-clicked");
    window.setTimeout(() => card.classList.remove("is-clicked"), 260);
    if (!href || href === "#") {
      event.preventDefault();
    }
  });
});

hoverLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("is-clicked");
    window.setTimeout(() => link.classList.remove("is-clicked"), 220);
  });
});
