/*
Optional: Reveal/Hide Password Button, Default type="password"
*/

let signUp = document.getElementById("sign-up");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let char = document.getElementById("atleast-8char");
let symbol = document.getElementById("symbol");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let number = document.getElementById("number");
let text = "";

function constantPasswordChecker() {
    password.classList.add("border-2");
    atleast8char();
    specialSymbol();
    uppercaseCheck();
    lowercaseCheck();
    numbersCheck();
    password.classList.remove("border-2");
    text="";
}

function confirmPasswordMatch() { // need to add alert when they don't match
    confirmPassword.classList.add("border-2", "outline-black")
    confirmPassword.classList.remove("border", "outline-green-500", "border-green-500", "outline-red-500", "border-red-500", "outline-black");
    if (password.value === confirmPassword.value) {
        confirmPassword.classList.add("border-2", "outline-green-500", "border-green-500");
        return true;
    }
    else {
        confirmPassword.classList.add("border-2", "outline-red-500", "border-red-500");
        return false;
    }
}

function buttonPasswordCheck() {
    text = "";
    atleast8char();
    specialSymbol();
    uppercaseCheck();
    lowercaseCheck();
    numbersCheck();
    if (text !== "") {
        alert(`Sign Up Unsuccessful: \n ${text} \n`); // must use ` to utilize variables inside "", \n is for entering next row
    }
    else if (password.value !== confirmPassword.value) {
        text += "Confirm Invalid"; // Unseen, for successful text detection
        alert(`Sign Up Unsuccessful:\n\nPassword must match Confirm Password`);
    }
    if (text === "") {
        alert("Sign Up Successful");
    }
}

function atleast8char() {
    char.classList.remove("text-green-500", "text-red-500");
    if (password.value.length >= 8) {
        char.classList.add("text-green-500");
        char.textContent = "✓ At least 8 characters";
        return true;
    }
    else {
        char.classList.add("text-red-500");
        char.textContent = "✗ At least 8 characters";
        text += `\n ✗ At least 8 characters`;
        return false;
    }
}

function specialSymbol() {
    symbol.classList.remove("text-green-500", "text-red-500");
    if (password.value.replace(/[^a-zA-Z0-9\s-_]/, '') !== password.value) { // removes special symbols, if it is same, there are no special symbols
        symbol.classList.add("text-green-500");
        symbol.textContent = "✓ Special symbol (@,!,$,etc...)";
        return true;
    }
    else {
        symbol.classList.add("text-red-500");
        symbol.textContent = "✗ Special symbol (@,!,$,etc...)";
        text += `\n ✗ Special symbol (@,!,$,etc...)`; // utilize `` to have \n be an enter command for each row
        return false;
    }
}

function uppercaseCheck() {
    upper.classList.remove("text-green-500", "text-red-500");
    if (password.value.replace(/[A-Z]/) !== password.value) {
        upper.classList.add("text-green-500");
        upper.textContent = "✓ Uppercase letter (A-Z)";
        return true;
    } 
    else {
        upper.classList.add("text-red-500");
        upper.textContent = "✗ Uppercase letter (A-Z)";
        text += `\n ✗ Uppercase letter (A-Z)`;
        return false;
    }
}

function lowercaseCheck() {
    lower.classList.remove("text-green-500", "text-red-500");
    if (password.value.replace(/[a-z]/) !== password.value) {
        lower.classList.add("text-green-500");
        lower.textContent = "✓ Lowercase letter (a-z)";
        return true;
    }
    else {
        lower.classList.add("text-red-500");
        lower.textContent = "✗ Lowercase letter (a-z)";
        text += `\n ✗ Lowercase letter (a-z)`;
        return false;
    }
}

function numbersCheck() {
    number.classList.remove("text-green-500", "text-red-500");
    if (password.value.replace(/[0-9]/) !== password.value) {
        number.classList.add("text-green-500");
        number.textContent = "✓ Number (0-9)";
        return true;
    }
    else {
        number.classList.add("text-red-500");
        number.textContent = "✗ Number (0-9)";
        text += `\n ✗ Number (0-9)`;
        return false;
    }
}

password.addEventListener("input", constantPasswordChecker); // checks everytime there is input into password
confirmPassword.addEventListener("input", confirmPasswordMatch);
signUp.addEventListener("click", buttonPasswordCheck);

// function password check should always be running when there is input
// function password check should run again at signUp click to check and give alerts