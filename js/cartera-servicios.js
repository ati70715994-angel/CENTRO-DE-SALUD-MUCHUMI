"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const filters = Array.from(document.querySelectorAll("[data-service-filter]"));
  const cards = Array.from(document.querySelectorAll("[data-service-category]"));
  const count = document.querySelector("[data-service-count]");
  const emptyState = document.querySelector("[data-service-empty]");

  if (!filters.length || !cards.length || !count || !emptyState) {
    return;
  }

  filters.forEach(function (filter) {
    filter.addEventListener("click", function () {
      const selectedCategory = filter.dataset.serviceFilter;
      let visibleCount = 0;

      filters.forEach(function (item) {
        const isActive = item === filter;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      cards.forEach(function (card) {
        const categories = card.dataset.serviceCategory.split(/\s+/);
        const isVisible =
          selectedCategory === "todos" || categories.includes(selectedCategory);

        card.hidden = !isVisible;
        visibleCount += isVisible ? 1 : 0;
      });

      count.textContent =
        "Se muestran " +
        visibleCount +
        (visibleCount === 1 ? " servicio." : " servicios.");
      emptyState.hidden = visibleCount > 0;
    });
  });
});
