// Запросить у пользователя год рождения. Если возраст больше 18 лет - сообщить о доступе к сервису, в противном случае - о запрете. Если пользователю меньше 12 - посоветовать другой сервис. Если пользователь ввел не число - сообщить ему об этом.Записать при помощи if/else.

// const todayDate = 2019;
// let userYearOfBirth = +prompt("Какой Ваш год рождения?");

// if (Number.isNaN(Number(userYearOfBirth))) {
//     alert("Вы ввели не число!");
// }else if (typeof userYearOfBirth === 'number' && userYearOfBirth !== 0 ) {
//     const age = todayDate - userYearOfBirth

//     // if (age >= 18) {
//     //     alert("Доступ к серверу предоставлен");
//     // } else if (age < 18 && age >= 12) {
//     //     alert("Доступ к серверу запрещён");
//     // } else if (age < 12)  {
//     //     alert("Вы можете воспользоваться другим сервесом");
//     // } else {
//     //     alert("У вас вообще не доступа к какому-либо серверу!!"); 
//     // }


//     // switch (true) {
//     //     case age >= 18:
//     //         alert("Доступ к серверу предоставлен");
//     //         break;
//     //     case age<18:
//     //     case age>=12:
//     //         alert("Доступ к серверу запрещён");
//     //         break;
//     //     case age<12:
//     //         alert('Вы можете воспользоваться другим сервесом');
//     //         break;
//     //     default:
//     //        alert("У вас вообще не доступа к какому-либо серверу!!"); 
//     // }


//     let ageUser = (age >= 18) ? "Доступ к серверу предоставлен" :
//     (age < 18 && age >= 12) ? "Доступ к серверу запрещён":
//     (age < 12) ? "Вы можете воспользоваться другим сервесом":
//     "У вас вообще не доступа к какому-либо серверу!!";

//     alert(ageUser);
// }



    








// Написать опросник для поступления на работу. К примеру, захардкоженные условия требуют, чтобы человек был не младше 30 лет, имел опыт в данной области больше 3-х лет и т.п. Выдать результат: подходит человек на должность, или нет.

// const todayDate = 2019;
// const dateOfBirth = +prompt("Введите Ваш год рождения");

// if (Number.isNaN(Number(dateOfBirth))) {
//     alert("Вы ввели не число!");
// } else if (typeof dateOfBirth === 'number' && dateOfBirth !== 0 ) {
//     const age = todayDate - dateOfBirth;
//     const userExperience = +prompt("Сколько лет опыта?")

//     if (Number.isNaN(Number(userExperience))) {
//         alert("Вы ввели не число!");
//     } else if (typeof userExperience === 'number' && userExperience !== 0) {

//         // if (age >= 30 && userExperience >= 3) {
//         //     alert("Вы нам подходите") 
//         // } else if (age >= 30 && userExperience <= 3) {
//         //     alert('Мало опыта')
//         // } else if (age < 30 && userExperience >= 3) {
//         //     alert('Вы слишком молоды');
//         // } else {
//         //     alert('Вы нам НЕ подходите!')
//         // }


//         // switch (true) {
//         //     case age >= 30:
//         //         switch (true) {
//         //             case userExperience >= 3:
//         //             alert("Вы нам подходите");
//         //             break;  
//         //             case userExperience < 3:
//         //             alert('Мало опыта');
//         //             break;
//         //         }
//         //     case age < 30:
//         //         alert('Вы слишком молоды');
//         //         break;
//         //     default:
//         //         alert('Вы нам НЕ подходите!')
//         // }


//         // let result = (age >= 30 && userExperience >= 3) ? "Вы нам подходите" :
//         // (age >= 30 && userExperience <= 3) ? 'Мало опыта' :
//         // (age < 30 && userExperience >= 3) ? 'Вы слишком молоды':
//         // 'Вы нам НЕ подходите!';

//         // alert(result);

//     }
// }










// Модифицировать скрипт конвертации валюты. Выбрать валюту в которую будут конвертироваться деньги. После чего спросить пользователя в какую валюту будет производиться перевод. В соответствии с выбором конвертировать значение. по дефолту мы ставим валюту(допустим грн), добавляем список доступных для конвертации валют,пользователь из них выбирает какую хочет и потом в неё конвертируем

// const exchangeEuro = 27
// const exchangeUSD = 25
// const exchangeRu = 0.39

// function calc(quantity, exchange){
//     return quantity * exchange
// }

// function exchange (event){
//     event.preventDefault()
//     let result
//     let select = document.getElementById("currency")
//     let currency = select.options[select.selectedIndex].value
//     let quantity = (document.getElementById("money").value)
//     console.log(quantity, currency)

//     // if(currency === 'eur') {
//     //     result = calc(quantity, exchangeEuro)
//     // } else if (currency === 'usd') {
//     //     result = calc(quantity, exchangeUSD)
//     // } else {
//     //     result = calc(quantity, exchangeRu)
//     // }


//     // switch(currency) {
//     //     case 'eur':
//     //         result = calc(quantity, exchangeEuro);
//     //         break;
//     //     case 'usd':
//     //         result = calc(quantity, exchangeUSD);
//     //         break;
//     //     default:
//     //         result = calc(quantity, exchangeRu)
//     // }


//     // result = (currency === 'eur') ? calc(quantity, exchangeEuro):
//     //     (currency === 'usd') ? calc(quantity, exchangeUSD):
//     //     result = calc(quantity, exchangeRu);


//     let newElem = document.createElement("div")
//     newElem.innerHTML = 'Ваша сумма ' + result
//     document.body.append(newElem)
// }
// let button = document.getElementById("button");
// button.addEventListener('click', exchange)

    
