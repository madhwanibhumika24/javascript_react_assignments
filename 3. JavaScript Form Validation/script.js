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


form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Clear previous messages
    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    passwordError.innerText = "";
    successMessage.innerText = "";

    let isValid = true;


    // Name validation
    const name = nameInput.value.trim();

    if (name === "") {

        nameError.innerText = "Name is required";
        isValid = false;

    } else if (name.length < 3) {

        nameError.innerText = "Name must contain at least 3 characters";
        isValid = false;
    }


    // Email validation
    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.innerText = "Email is required";
        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.innerText = "Enter a valid email address";
        isValid = false;
    }


    // Phone validation
    const phone = phoneInput.value.trim();

    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {

        phoneError.innerText = "Phone number is required";
        isValid = false;

    } else if (!phonePattern.test(phone)) {

        phoneError.innerText =
            "Phone number must contain 10 digits";

        isValid = false;
    }


    // Password validation
    const password = passwordInput.value;

    if (password === "") {

        passwordError.innerText = "Password is required";
        isValid = false;

    } else if (password.length < 8) {

        passwordError.innerText =
            "Password must contain at least 8 characters";

        isValid = false;
    }


    // Successful submission
    if (isValid) {

        successMessage.innerText =
            "Registration successful!";

        form.reset();
    }

});