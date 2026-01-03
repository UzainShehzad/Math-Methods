var num1 = 3.65214;

document.write("number: " + num1 + "<br>");
document.write("round off value: " + Math.round(num1) + "<br>");
document.write("floor value: " + Math.floor(num1) + "<br>");
document.write("ceil value: " + Math.ceil(num1) + "<br><br>");




var num2 = -2.673;

document.write("number: " + num2 + "<br>");
document.write("round off value: " + Math.round(num2) + "<br>");
document.write("floor value: " + Math.floor(num2) + "<br>");
document.write("ceil value: " + Math.ceil(num2) + "<br><br>");





var absNum = -4;
document.write("The absolute value of " + absNum + " is " + Math.abs(absNum) + "<br><br>");





var dice = Math.floor(Math.random() * 6) + 1;
document.write("random dice value: " + dice + "<br><br>");




var coin = Math.floor(Math.random() * 2) + 1;

if (coin === 1) {
    document.write("1<br>random coin value: Tails<br><br>");
} else {
    document.write("2<br>random coin value: Heads<br><br>");
}




var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("random number between 1 and 100: " + randomNum + "<br><br>");





var weightInput = prompt("Enter your weight in kilograms");
var weight = parseFloat(weightInput);

document.write("The weight of user is " + weight + " kilograms<br><br>");



var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Enter a number between 1 and 10"));

if (userGuess === secretNumber) {
    alert("🎉 Congratulations! You guessed the correct number.");
} else {
    alert("Try again!");
}