const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const message = document.getElementById("message");

const errorFullName = fullName.nextElementSibling;
const errorEmail = email.nextElementSibling;
const errorMessage = message.nextElementSibling;

function validateForm() {
  let isValid = true;

  // Full Name Validation
  if (fullName.value.trim().length < 3) {
    errorFullName.textContent = "Full name must be at least 3 characters.";
    isValid = false;
  } else {
    errorFullName.textContent = "";
  }

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    errorEmail.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    errorEmail.textContent = "";
  }

  // Message Validation
  if (message.value.trim() === "") {
    errorMessage.textContent = "Message is required.";
    isValid = false;
  } else {
    errorMessage.textContent = "";
  }

  submitBtn.disabled = !isValid;
}

form.addEventListener("input", validateForm);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  submitBtn.innerText = "Submitting...";
  submitBtn.disabled = true;

  setTimeout(() => {
    alert("Form submitted successfully!");
    form.reset();
    submitBtn.innerText = "Submit";
    validateForm(); // disable button again
  }, 1000);
});
