document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;      

  form.addEventListener("submit", e => {
    e.preventDefault();
    e.stopPropagation();
    form.classList.add("was-validated");

    if (!form.checkValidity()) return;
    const alertBox = document.getElementById("contactAlert");
    alertBox.style.display = "block";
    form.reset();
    form.classList.remove("was-validated");
  });
});
