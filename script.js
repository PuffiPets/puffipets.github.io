const formOpenBtb = document.querySelector("#form-open"),
      home = document.querySelector(".home"),
      formContainer = document.querySelector(".form_container"),
      formCloseBtb = document.querySelector(".form_close"),
      loginBtb = document.querySelector("#login"),
      pwShowHide = document.querySelectorAll(".pw_hide");

// Open and close login form
formOpenBtb.addEventListener("click", () => home.classList.add("show"));
formCloseBtb.addEventListener("click", () => home.classList.remove("show"));

// Show/hide password
pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

// Store users and passwords securely
const users = {
    "sepp": "puffipets",
    "henz": "fastcar123",
    "jaakib": "toolbox678",
    "brick": "solidwall321"
};

// Login validation
const loginForm = document.querySelector(".login_form form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const username = loginForm.querySelector("input[type='text']").value.trim().toLowerCase();
    const password = loginForm.querySelector("input[type='password']").value;

    // Check credentials
    if (users[username] && users[username] === password) {
        window.location.href = `nextpage.html?user=${username}`; // Redirect with user parameter
    } else {
        alert("Invalid username or password!");
    }
});
