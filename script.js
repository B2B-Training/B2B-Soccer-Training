function wireForm(formId, statusId, successMessage) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);

  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Front-end demo behavior:
    // In a real site, you'd send this to a server or a service.
    status.textContent = successMessage;

    form.reset();
  });
}

wireForm("contactForm", "contactStatus", "Message sent! We’ll get back to you soon.");
wireForm("signupForm", "signupStatus", "Request submitted! We’ll email you with next steps.");