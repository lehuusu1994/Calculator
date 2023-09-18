function add() {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  let result = Number(num1) + Number(num2);
  document.getElementById("result").innerHTML = result;
}
function sub() {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  let result = Number(num1) - Number(num2);
  document.getElementById("result").innerHTML = result;
}
function mul() {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  let result = Number(num1) * Number(num2);
  document.getElementById("result").innerHTML = result;
}
function div() {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  let result = Number(num1) / Number(num2);
  document.getElementById("result").innerHTML = result;
}
