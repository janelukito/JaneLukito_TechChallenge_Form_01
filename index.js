// penulisan nama WAJIB minimal 3 karakter
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

// penulisan nama WAJIB dgn format email
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

// tambahan, penulisan password WAJIB min 8 characters
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

// WAJIB pilih salah 1 gender
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

// reset isi form & error2 kalau berhasil kesubmit
function resetValue() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    // kosongin error
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("errorMessage").textContent = "";
}


// munculnya tulisan sukses & error
function showMessage(id, message, isSuccess = false) {
  
    document.getElementById("successMessage").style.display = "none";
    document.getElementById("errorMessage").style.display = "none";

    let element = document.getElementById(id);

    if (message) {
        element.textContent = message;
        element.style.display = "block"; 
    } else {
        element.style.display = "none";
    }
}


// fungsi kalau tombol "sumbit" ditekan
function Register(event) {
    event.preventDefault();

    // jalanin semua validasi
    let validName = validateName();
    let validEmail = validateEmail();
    let validPassword = validatePassword();
    let validGender = validateGender();

    console.log(validName, validEmail, validPassword, validGender);

    // kalau semua aman, muncullah kata2 sukses dan formnya direset
    if (validName && validEmail && validPassword && validGender) {
        showMessage("successMessage", "Form submitted successfully!", true);
        resetValue();

    // kalau ada yang janggal, error
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

//  halam selesai dimuat --> add event listener
document.addEventListener("DOMContentLoaded", function (e) {
    // tombol submit ditekan
    document.getElementById("submit-button").addEventListener("click", Register);
    // validasi nama, email, password
    document.getElementById("name").addEventListener("keyup", validateName);
    document.getElementById("email").addEventListener("keyup", validateEmail);
    document.getElementById("password").addEventListener("keyup", validatePassword);
 // validasi gender
    document.getElementById("male-gender").addEventListener("change", validateGender);
    document.getElementById("female-gender").addEventListener("change", validateGender);
    
});
