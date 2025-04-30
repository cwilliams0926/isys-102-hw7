document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");
    form.addEventListener("submit", validate);
});

function validate(event) {
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirm = document.querySelector("#confirm");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const errorList = document.querySelector(".error-list");
    if(username.value.trim() === "") {
        event.preventDefault();
        const errorItem = document.createElement("li");
        errorItem.textContent = "Username cannot be empty";
        errorList.appendChild(errorItem);
    }
    if(email.value.trim() === "") {
        event.preventDefault();
        const errorItem = document.createElement("li");
        errorItem.textContent = "Email cannot be empty";
        errorList.appendChild(errorItem);
    }
    if(!emailPattern.test(email.value.trim())) {
        event.preventDefault();
        const errorItem = document.createElement("li");
        errorItem.textContent = "Invalid Email";
        errorList.appendChild(errorItem);
    }
    if(password.value.length < 6) {
        event.preventDefault();
        const errorItem = document.createElement("li");
        errorItem.textContent = "Password must be greater than six characters";
        errorList.appendChild(errorItem);
    }
    if(password.value !== confirm.value) {
        event.preventDefault();
        const errorItem = document.createElement("li");
        errorItem.textContent = "Passwords don't match";
        errorList.appendChild(errorItem);
    }
}