function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "home.html";
        return false; // Prevent form submission (optional)
    } else {
        alert("Invalid username or password!");
        return false;
    }
}