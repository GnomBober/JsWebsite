var num1, num2;

num1 = Math.floor(Math.random() * 100);
num2 = Math.floor(Math.random() * 100);

var toSolve1 = num1 + " + " + num2 + " =";
console.log(toSolve1);
document.getElementById("toSolve").innerHTML = toSolve1;