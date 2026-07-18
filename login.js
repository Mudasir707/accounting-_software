const USERNAME = "admin";
const PASSWORD = "123456";

document.getElementById("loginBtn").addEventListener("click", function () {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === USERNAME && password === PASSWORD) {

        alert("Login Successful");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Username or Password");

    }

});
