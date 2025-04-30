# isys-102-hw7
Website that uses simple form validation.

# How it's made
**Tech Used**: HTML, CSS, and JavaScript

HTML has forms for username, email, password, and to confirm the password. The submitted.html file is where the form sends the user if the form is valid. The CSS uses flexbox to align everything. 

The javascript uses an event listener for DOMContentLoaded. Inside this event listener, there are three other event listeners. One of them uses a function to validate if the user's input is valid. If the input is invalid, it prevents the form from submitting, and displays an error div showing what's invalid. Another event listener uses input to check if the email being entered is valid while it's being typed. Another event listener hides the error div when a close button is clicked.

# Lessons learned
Helped me get comfortable working with forms, as it's not something I have used before. 
