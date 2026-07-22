document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.querySelector("input[type=text]").value;
    const password = document.querySelector("input[type=password]").value;

    if(username==="admin" && password==="admin123"){
        alert("Login Successful!");
        window.location.href="dashboard.html";
    }else{
        alert("Invalid Username or Password");
    }
});
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.querySelector("input[type='text']").value.trim();
        const password = document.querySelector("input[type='password']").value.trim();

        if (username === "admin" && password === "admin123") {
            alert("Welcome to Yaarwan Accounting Software");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password");
        }
    });
}
