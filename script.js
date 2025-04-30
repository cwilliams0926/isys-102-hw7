document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");
    form.addEventListener("submit", validate);
    const error = document.querySelector(".error");
    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        error.style.display = "none";
    });
});

function validate(event) {
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirm = document.querySelector("#confirm");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const error = document.querySelector(".error");
    const errorList = document.querySelector(".error-list");

    errorList.innerHTML = "";
    error.style.display = "none";

    let hasErrors = false;

    if(username.value.trim() === "") {
        const errorItem = document.createElement("li");
        errorItem.textContent = "Username cannot be empty";
        errorList.appendChild(errorItem);
        hasErrors = true;
    }
    if(email.value.trim() === "") {
        const errorItem = document.createElement("li");
        errorItem.textContent = "Email cannot be empty";
        errorList.appendChild(errorItem);
        hasErrors = true;
    }
    if(!emailPattern.test(email.value.trim())) {
        const errorItem = document.createElement("li");
        errorItem.textContent = "Invalid Email";
        errorList.appendChild(errorItem);
        hasErrors = true;
    }
    if(password.value.length < 6) {
        const errorItem = document.createElement("li");
        errorItem.textContent = "Password must be greater than six characters";
        errorList.appendChild(errorItem);
        hasErrors = true;
    }
    if(password.value !== confirm.value) {
        const errorItem = document.createElement("li");
        errorItem.textContent = "Passwords don't match";
        errorList.appendChild(errorItem);
        hasErrors = true;
    }

    if(hasErrors) {
        event.preventDefault();
        error.style.display = "block";
    }
}