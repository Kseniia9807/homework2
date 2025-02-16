document.addEventListener("DOMContentLoaded", function() {
    let a = parseInt(prompt("введите число"));
    if (a>100) {
        alert("число больше 100")
    }
    else if (a<100) {
        alert("число меньше 100")
    }
    else  {
        alert("ровно 100")
    }
});