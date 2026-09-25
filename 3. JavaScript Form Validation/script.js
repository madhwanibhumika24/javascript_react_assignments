const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

function setError(input, errorElement, message) {
    input.classList.add("input-error");
    input.classList.remove("input-success");
    errorElement.innerText = message;
}

function setSuccess(input, errorElement) {
    input.classList.remove("input-error");
    input.classList.add("input-success");
    errorElement.innerText = "";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    successMessage.innerText = "";

    let isValid = true;

    // Name validation
    const name = nameInput.value.trim();

    if (name === "") {
        setError(nameInput, nameError, "Name is required");
        isValid = false;
    } else if (name.length < 3) {
        setError(
            nameInput,
            nameError,
            "Name must contain at least 3 characters"
        );
        isValid = false;
    } else {
        setSuccess(nameInput, nameError);
    }

    // Email validation
    const email = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        setError(emailInput, emailError, "Email is required");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        setError(
            emailInput,
            emailError,
            "Enter a valid email address"
        );
        isValid = false;
    } else {
        setSuccess(emailInput, emailError);
    }

    // Phone validation
    const phone = phoneInput.value.trim();

    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        setError(phoneInput, phoneError, "Phone number is required");
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        setError(
            phoneInput,
            phoneError,
            "Phone number must contain 10 digits"
        );
        isValid = false;
    } else {
        setSuccess(phoneInput, phoneError);
    }

    // Password validation
    const password = passwordInput.value;

    if (password === "") {
        setError(passwordInput, passwordError, "Password is required");
        isValid = false;
    } else if (password.length < 8) {
        setError(
            passwordInput,
            passwordError,
            "Password must contain at least 8 characters"
        );
        isValid = false;
    } else {
        setSuccess(passwordInput, passwordError);
    }

    // Successful submission
    if (isValid) {
        successMessage.innerText = "Registration successful!";

        form.reset();

        nameInput.classList.remove("input-success");
        emailInput.classList.remove("input-success");
        phoneInput.classList.remove("input-success");
        passwordInput.classList.remove("input-success");
    }
});