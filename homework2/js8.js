document.addEventListener("DOMContentLoaded", function() {
    let a = prompt("логин")
    let b = prompt("пароль")
    if (a == "admin" && b == "12345") {
        alert("Вы вошли в систему")
    } else {
        alert("Неверный логин или пароль")
    }
});