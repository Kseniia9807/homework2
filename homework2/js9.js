document.addEventListener("DOMContentLoaded", function() {
    const year = prompt("Введите год:");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Это високосный год");
} else {
    console.log("Это не високосный год");
}

});