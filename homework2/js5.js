document.addEventListener("DOMContentLoaded", function() {
    let a= prompt("введите число 1");
    let b= prompt("введите число 2");
   if (a>b) {
    alert("Первое число больше")
   }
   else if (a<b) {
    alert("Второе число больше")
   }
   else if (a=b){
    alert("Числа равны")
   }
 
});