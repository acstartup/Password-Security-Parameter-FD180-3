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
let char = document.getElementById("atleast-8char");
let symbol = document.getElementById("symbol");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let number = document.getElementById("number");

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
        char.classList.add("text-green-500");
        char.textContent = "✓ At least 8 characters";
    }
    else {
        char.classList.add("text-red-500");
        char.textContent = "✗ At least 8 characters";
    }
}

function specialSymbol() {
    symbol.classList.remove("text-green-500", "text-red-500");
    if (password.value.replace(/[^a-zA-Z0-9\s-_]/, '') !== password.value) { // removes special symbols, if it is same, there are no special symbols
        symbol.classList.add("text-green-500");
        symbol.textContent = "✓ Special symbol (@,!,$,etc...)";
    }
    else {
        symbol.classList.add("text-red-500");
        symbol.textContent = "✗ Special symbol (@,!,$,etc...)";
    }
}

function uppercaseCheck() {
    upper.classList.remove("text-green-500", "text-red-500");
    if (password.value.replace(/[A-Z]/) !== password.value) {
        upper.classList.add("text-green-500");
        upper.textContent = "✓ Uppercase letter (A-Z)";
    } 
    else {
        upper.classList.add("text-red-500");
        upper.textContent = "✗ Uppercase letter (A-Z)";
    }
}

function lowercaseCheck() {
    lower.classList.remove("text-green-500", "text-red-500");
    if (password.value.replace(/[a-z]/) !== password.value) {
        lower.classList.add("text-green-500");
        lower.textContent = "✓ Lowercase letter (a-z)";
    }
    else {
        lower.classList.add("text-red-500");
        lower.textContent = "✗ Lowercase letter (a-z)";
    }
}

function numbersCheck() {
    number.classList.remove("text-green-500", "text-red-500");
    if (password.value.replace(/[0-9]/) !== password.value) {
        number.classList.add("text-green-500");
        number.textContent = "✓ Number (0-9)";
    }
    else {
        number.classList.add("text-red-500");
        number.textContent = "✗ Number (0-9)";
    }
}

password.addEventListener("input", constantPasswordChecker) // checks everytime there is input into password

// function password check should always be running when there is input
// function password check should run again at signUp click to check and give alerts