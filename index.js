function validateName() {
    let name = document.getElementById("name").value;
    let nameError = document.getElementById("nameError");
    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        emailError.textContent = "Invalid email format";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

function validateGender() {
    let gender = document.getElementById("male-gender").checked || document.getElementById("female-gender").checked;
    let genderError = document.getElementById("genderError");
    if (!gender) {
        genderError.textContent = "Please select a gender";
        return false;
    } else {
        genderError.textContent = "";
        return true;
    }
}

function resetValue() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("errorMessage").textContent = "";
}

function showMessage(id, message, isSuccess = false) {
    let element = document.getElementById(id);
    if (message) {
        element.textContent = message;
        element.style.display = "block"; 
    } else {
        element.style.display = "none"; 
    }
}

function Register(event) {
    event.preventDefault();
    let validName = validateName();
    let validEmail = validateEmail();
    let validPassword = validatePassword();
    let validGender = validateGender();

    if (validName && validEmail && validPassword && validGender) {
        showMessage("successMessage", "Form submitted successfully!", true);
        resetValue();
    } else {
        let errorMessage = "Please check the following fields: ";
        if (!validName) errorMessage += "Name, ";
        if (!validEmail) errorMessage += "Email, ";
        if (!validPassword) errorMessage += "Password, ";
        if (!validGender) errorMessage += "Gender, ";
        errorMessage = errorMessage.slice(0, -2) + ".";

        showMessage("errorMessage", errorMessage);
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("submit-button").addEventListener("click", Register);
    document.getElementById("name").addEventListener("keyup", validateName);
    document.getElementById("email").addEventListener("keyup", validateEmail);
    document.getElementById("male-gender").addEventListener("change", validateGender);
    document.getElementById("female-gender").addEventListener("change", validateGender);
    document.getElementById("password").addEventListener("keyup", validatePassword);
});
