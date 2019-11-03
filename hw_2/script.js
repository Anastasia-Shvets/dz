// Написать скрипт, который предлагает пользователю угадать число, которое будет сгенерировано. Сообщить об успехе   

var myNumber = Math.random() * (30 - 20) + 20;
myNumber = Math.round(myNumber);
console.log(myNumber);
var yourNumber = prompt("Угадайте число от 20 до 30");
yourNumber = Number(yourNumber);
console.log(yourNumber);

if (myNumber === yourNumber) {
    alert("Вы выиграли");
} else {
    alert("Вы проиграли");
}



// Среднее арифметическое нескольких введенных чисел

// let inputNumbers = prompt("Введите несколько чисел через запятую"); 
// let numbers = inputNumbers.split(',');  

// numbers = numbers.map(string => +string)

// let sumOfNumbers = numbers.reduce(function(sum, current) {
//     return sum + current ;
// });

// let quantity = numbers.length;
// let average = sumOfNumbers/quantity;

// alert(average);