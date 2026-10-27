document.addEventListener("DOMContentLoaded", () => {
  const toast = document.querySelector(".toast-message");
  let toastTimer;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }

  document.querySelectorAll("[data-toast]").forEach(button => {
    button.addEventListener("click", () => showToast(button.dataset.toast));
  });

  const form = document.getElementById("newsletterForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const email = document.getElementById("emailAddress");
    if (!email.checkValidity()) {
      email.reportValidity();
      return;
    }
    showToast("Thank you for joining Opal Street Collective!");
    form.reset();
  });

  // Close the mobile navigation after choosing a section.
  document.querySelectorAll("#mainNav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
});
