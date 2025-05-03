const form = document.querySelector("form")
const password = document.getElementById("password")
const togglePassword = document.getElementById('toggle-password');
const icon = document.getElementById("eye-icon");

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let isValid = true;

    const passwordInput = password.value.trim();
    if (passwordInput.length < 8) {
        isValid = false;
    }

    if (!isValid) {
        alert("Incorrect Password (min 8 characters)")
    }
});

togglePassword.addEventListener("click", function () {
    const isPasswordHidden = password.type === "password";
    password.type = isPasswordHidden ? "text" : "password";

    // !FIXME
    // icon.classList.toggle('fa-eye-slash', isPasswordHidden); 
    // icon.classList.toggle('fa-eye', !isPasswordHidden); 
})


