// ===== Переменные ===== 

// let admin;
// let name = "Джон";
// admin = name;
// alert(admin);

// let ourPlanetName = "Планета Земля";
// let currentUserName = "Дэйв";

// 1)
// let num = 3;
// console.log(num);

// 2)
// let a = 10;
// let b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// 3)
// let c = 15;
// let d = 2;
// let result = c + d;
// console.log(result);

// 4)
// let a = 10;
// let b = 2;
// let c = 5;
// console.log(a + b + c);

// 5)
// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// console.log(result);

// let a = 10;
// let b = 10.2;
// let d = true;
// let e = false;
// let i = "ssds";
// let j = Math;
// let q = null;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof i);
// console.log(typeof j);
// console.log(typeof q);

// let value = true;
// console.log(typeof value);

// value = String(value);
// console.log(typeof value);

// ===== Условные операторы: if, '?' ===== 

// let age = prompt('Какое «официальное» название JavaScript?', '');

// if (age == "ECMAScript") {
//    alert('Верно!');
// } else {
//    alert('Не знаете ? ECMAScript!');
// }


// let value = prompt('получить число', '');
// if (value > 0) {
//    alert(1);
// } else if (value < 0) {
//    alert(-1);
// } else {
//    alert(0);
// }


// let result;

// if (a + b < 4) {
//    result = 'Мало';
// } else {
//    result = 'Много';
// }

// let result = (a + b < 4) ? 'Мало' : 'Много';

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let message = (login == 'Сотрудник') ? 'Привет' :
//    (login == 'Директор') ? 'Здравствуйте' :
//    (login == '') ? 'Нет логина' :
//    '';

// 1)
// let test = prompt('Введите любое значение', '');
// test = +test;

// if (test == true) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }

// 2)
// let test = prompt('Введите любое значение', '');
// test = +test;

// if (test != true) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }


// ===== Логические операторы ===== 

// let age = prompt('Введите правильное число', '');
// if (age >= 14 && age <= 90) {
//    alert('true1');
// } else {
//    alert('false2');
// }

// let age = prompt('ВВедите число', '');
// if (age <= 14 || age >= 90) {
//    alert('rtue');
// } else {
//    alert('false');
// }

// let age = prompt('ВВедите число', '');
// if (!(age >= 14 && age <= 90)) {
//    alert('rtue');
// } else {
//    alert('false');
// }

// let login = prompt('Ведите ваш логин', '');

// if (login == "Админ") {

//    let passvord = prompt('Введите пароль', '');

//    if (passvord == 'Я главный') {
//       alert('Здравствуйте');
//    } else if (passvord == '' || passvord == null) {
//       alert('Отменео');
//    } else {
//       alert('Неверный пароль');
//    }

// } else if (login == '' || login == null) {
//    alert('Отменено');
// } else {
//    alert(`I don't know you`);
// }



// 1)
// let a = prompt('число', '');

// if (a > 0 && a < 5) {
//    alert('Верно');
// } else {
//    alert('Не верно');
// }

// 2)
// let a = prompt('число', '');

// if (a == 0 || a == 2) {
//    a = +a + 7;
// } else {
//    a /= 10;
// }

// console.log(a);

// 3)
// let a = prompt('число', '3');
// let b = prompt('число', '5');

// if (a <= 1 && b >= 3) {
//    alert((+a) + (+b));
// } else {
//    alert(a - b);
// }

// 4)
// let a = prompt('число', '1');
// let b = prompt('число', '15');

// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//    alert('Верно');
// } else {
//    alert('Не верно');
// }

// ===== Циклы =====

// for (let i = 2; i <= 10; i++) {
//    if (i % 2 == 0) {
//       alert(i);
//    }
// }

// let i = 0;
// while (i < 3) {
//    alert(`number ${i}!`);
//    i++;
// }


// let num;

// do {
//    num = prompt('vvedite', '0');
// } while (num <= 100 && num);


// 1)
// let a = 1;

// while (a <= 100) {
//    console.log(a);
//    a++;
// }

// 2)
// let a = 11;

// while (a <= 33) {
//    console.log(a);
//    a++;
// }

// 3)
// let i = 0;

// while (i <= 100) {
//    if (i % 2 == 0) {
//       console.log(i);
//    }
//    i++;
// }

// 4)
// let i = 1;
// let a = 0;

// while (i <= 100) {
//    a += i;
//    i++;
// }
// console.log(a);

// 1)
// for (let i = 1; i <= 100; i++) {
//    console.log(i);
// }

// 2)
// for (let i = 11; i <= 33; i++) {
//    console.log(i);
// }

// 3)
// for (let i = 0; i <= 100; i++) {
//    if (i % 2 == 0) {
//       console.log(i);
//    }
// }

// 4)
// let a = 0;

// for (let i = 1; i <= 100; i++) {
//    a += i;
// }
// console.log(a);

// ===== Конструкция "switch" =====

// let a = 2 + 2;

// switch (a) {
//    case 3:
//       alert('ne to');
//       break;
//    case 4:
//       alert('to');
//       break;
//    default:
//       alert('fff');
// }

// let i = "1";
// let a = 0;

// switch (+i) {
//    case a + 1:
//       alert('eeeee');
//       break;
//    default:
//       alert('jj');
// }


// let browser = prompt('');

// if (browser === 'Edge') {
//    alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' ||
//    browser === 'Safari' || browser === 'Opera') {
//    alert('Okay we support these browsers too');
// } else {
//    alert('We hope that this page looks ok!');
// }

// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//    case 0:
//       alert('Вы ввели число 0');
//       break;

//    case 1:
//       alert('Вы ввели число 1');
//       break;

//    case 2:
//    case 3:
//       alert('Вы ввели число 2, а может и 3');
//       break;

//    default:
//       alert('Что то не то');
// }

// 1)
// let num = prompt('Введите значение', '');
// let result;

// switch (num) {
//    case '1':
//       result = 'Зима';
//       break;

//    case '2':
//       result = 'весна';
//       break;

//    case '3':
//       result = 'Leto';
//       break;

//    case '4':
//       result = 'osen';
//       break;

//    default:
//       result = 'Что то не то';
// }

// alert(result);

// ===== Функции =====
// function checkAge(age) {
//    return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//    return (age > 18) || confirm('Родители разрешили?');
// }

// function min(a, b) {
//    if(a < b){
//       return a;
//    }else{
//       return b;
//    }

// }

// min(2, 5);

// function min(a, b) {
//    return (a < b) ? a : b;
// }

// min(2, 5);

// let result = 0;

// function pow(x, n) {
//    let result = x;

//    for (let i = 1; i < n; i++) {
//       result *= x;
//    }

//    return result;
// }

// let x = prompt('Введите число X', '');
// let n = prompt('Введите число N', '');

// if (n < 1) {
//    alert(`${n} -не поддерживается!`);
// } else {
//    alert(pow(x, n));
//    // alert(result);
// }

// alert(result);


// function pow(x, n) {
//    let result = x;

//    for (let i = 1; i < n; i++) {
//       result *= x;
//    }

//    return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//    alert(pow(x, n));
// }

// ask(
//    "Вы согласны?",
//    () => alert("Вы согласились."),
//    () => alert("Вы отменили выполнение.")
// );
//

// ===== Обьекты =====