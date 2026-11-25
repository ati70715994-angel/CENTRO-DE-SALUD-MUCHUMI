"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const search = document.querySelector("[data-faq-search]");
  const filters = Array.from(document.querySelectorAll("[data-faq-filter]"));
  const questions = Array.from(document.querySelectorAll("[data-faq-category]"));
  const count = document.querySelector("[data-faq-count]");
  const emptyState = document.querySelector("[data-faq-empty]");

  if (!search || !filters.length || !questions.length || !count || !emptyState) {
    return;
  }

  let selectedCategory = "todos";

  function normalize(value) {
    return value
      .toLocaleLowerCase("es")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function updateQuestions() {
    const searchTerm = normalize(search.value.trim());
    let visibleCount = 0;

    questions.forEach(function (question) {
      const categories = question.dataset.faqCategory.split(/\s+/);
      const matchesCategory =
        selectedCategory === "todos" || categories.includes(selectedCategory);
      const matchesSearch = normalize(question.textContent).includes(searchTerm);
      const isVisible = matchesCategory && matchesSearch;

      question.hidden = !isVisible;
      visibleCount += isVisible ? 1 : 0;
    });

    count.textContent =
      "Se muestran " +
      visibleCount +
      (visibleCount === 1 ? " pregunta." : " preguntas.");
    emptyState.hidden = visibleCount > 0;
  }

  filters.forEach(function (filter) {
    filter.addEventListener("click", function () {
      selectedCategory = filter.dataset.faqFilter;

      filters.forEach(function (item) {
        const isActive = item === filter;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      updateQuestions();
    });
  });

  search.addEventListener("input", updateQuestions);
});
