"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-menu-toggle]").forEach(function (toggle) {
    const menuId = toggle.getAttribute("aria-controls");
    const menu = menuId ? document.getElementById(menuId) : null;

    if (!menu) {
      return;
    }

    function closeMenu() {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }

    toggle.addEventListener("click", function () {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      menu.classList.toggle("is-open", !isExpanded);
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        toggle.focus();
      }
    });
  });

  document.querySelectorAll("[data-demo-form]").forEach(function (form) {
    const submitButton = form.querySelector("[data-demo-submit]");
    const status = form.querySelector("[data-form-status]");

    if (!submitButton || !status) {
      return;
    }

    submitButton.addEventListener("click", function () {
      if (!form.reportValidity()) {
        return;
      }

      status.textContent =
        "Esta es una demostración: no se envió ni se guardó información. El canal de citas aún no está conectado.";
    });
  });
});
