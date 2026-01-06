/*
Password Box
Confirm Password Box
Sign Up Button

8 Letter Check (under Password Box - adds a check symbol when matched)
Special Symbol (under Password Box - adds a check symbol when matched)
Uppercase Check (under Password Box - adds a check symbol when matched)
Lowercase Check (under Password Box - adds a check symbol when matched)
Number Check (under Password Box - adds a check symbol when matched)
Confirm Password (sign up button becomes clickable after confirmation)

Alert on Sign Up success
Alert when empty
Alert when doesn't meet all requirementsd (dynamic based on what parameters aren't met)

Optional: Reveal/Hide Password Button, Default type="password"

Clean Code!
*/

let signUp = document.getElementById("sign-up");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let char = document.getElementById("atleast-8char")
let interval;

function constantPasswordChecker() {
    atleast8char();
    specialSymbol();
    uppercaseCheck();
    lowercaseCheck();
    numbersCheck();
}

function confirmPasswordMatch() {
    if (password.value === confirmPassword.value) {
        // set the border of the Confirm Password = Green
    }
}

function buttonPasswordCheck() {}

function atleast8char() {
    char.classList.remove("text-green-500", "text-red-500");
    if (password.value.length >= 8) {
        char.classList.toggle("text-green-500");
        char.textContent = "✓ At least 8 characters";
    }
    else {
        char.classList.toggle("text-red-500");
        char.textContent = "✗ At least 8 characters";
    }
}

function specialSymbol() {

}

function uppercaseCheck() {

}

function lowercaseCheck() {

}

function numbersCheck() {

}

password.addEventListener("input", constantPasswordChecker) // checks everytime there is input into password

// function password check should always be running when there is input
// function password check should run again at signUp click to check and give alerts