
// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>
var submitButton = document.getElementById("submit-button");
var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var message = document.getElementById("message");


// Declare variable that will 
// store regular expression for email
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function formValidation() {

    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    var data = {};
    // Declare array that will store the errors

    var errors = [];

    // +-----------+    
    // | FULL NAME |
    // +-----------+
    // Check if fullname is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your conditional here.
    if (fullname.value !== "") {
        data.fullname = fullname.value;
    } else {
        errors.push("Full Name is missing");
    }


    // +-------+    
    // | EMAIL | 
    // +-------+
    // Check if email is not empty.
    // Check if email is valid.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your nested conditional here.
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your outer conditional here.
    if (email.value !== "") {
        if (emailRegex.test(email.value)) {
            data.email = email.value;
        } else {
            errors.push("Email is invalid");
        }
    } else {
        errors.push("Email is missing");
    }


    // +---------+    
    // | MESSAGE | 
    // +---------+
    // Check if message is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your conditional here.
    if (message.value !== "") {
        data.message = message.value;
    } else {
        errors.push("Message is missing");
    }


    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    // Check if there is anything in array errors
    // If so: 
    // Print it in JavaScript console.
    // Otherwise:
    // Print the data in JavaScript console.
    // Clear text-fields
    // End your conditional here.
    if (errors.length !== 0) {
        console.log(errors);
    } else {
        console.log(data);
        fullname.value = "";
        email.value = "";
        message.value = "";
    }

    // Close your function here
}

// Register your form to "click" event.
submitButton.addEventListener("click", formValidation);