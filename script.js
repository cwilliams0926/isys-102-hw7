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
    if(username.value.trim() === "") {
        event.preventDefault();
        alert("username cannot be null")
    }
    else if(email.value.trim() === "") {
        event.preventDefault();
        alert("email cannot be null")
    }
    else if(!emailPattern.test(email.value.trim())) {
        event.preventDefault();
        alert("email must be valid")
    }
    else if(password.value.length < 6) {
        event.preventDefault();
        alert("password must be > 6 char")
    }
    else if(password.value !== confirm.value) {
        event.preventDefault();
        alert("confirm doesn't match")
    }
}