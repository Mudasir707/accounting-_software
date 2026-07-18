document.getElementById("loginBtn").addEventListener("click", function () {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123456") {

        window.location.replace("./dashboard.html");

    } else {

        alert("Invalid Username or Password");

    }

});
