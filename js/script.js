// ===== Переменные ===== 

// let admin;
// let name = "Джон";
// admin = name;
// alert(admin);

// let ourPlanetName = "Планета Земля";
// let currentUserName = "Дэйв";




// 1)Задание
// let num = 3;
// console.log(num);




// 2)Задание
// let a = 10;
// let b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);




// 3)Задание
// let c = 15;
// let d = 2;
// let result = c + d;
// console.log(result);





// 4)Задание
// let a = 10;
// let b = 2;
// let c = 5;
// console.log(a + b + c);




// 5)Задание
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





// 1)Задание
// let test = prompt('Введите любое значение', '');
// test = +test;

// if (test == true) {
//    alert('Верно');
// } else {
//    alert('Неверно');
// }





// 2)Задание
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





// 1)Задание
// let a = prompt('число', '');

// if (a > 0 && a < 5) {
//    alert('Верно');
// } else {
//    alert('Не верно');
// }




// 2)Задание
// let a = prompt('число', '');

// if (a == 0 || a == 2) {
//    a = +a + 7;
// } else {
//    a /= 10;
// }

// console.log(a);




// 3)Задание
// let a = prompt('число', '3');
// let b = prompt('число', '5');

// if (a <= 1 && b >= 3) {
//    alert((+a) + (+b));
// } else {
//    alert(a - b);
// }



// 4)Задание
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


// 1)Задание
// let a = 1;

// while (a <= 100) {
//    console.log(a);
//    a++;
// }



// 2)Задание
// let a = 11;

// while (a <= 33) {
//    console.log(a);
//    a++;
// }



// 3)Задание
// let i = 0;

// while (i <= 100) {
//    if (i % 2 == 0) {
//       console.log(i);
//    }
//    i++;
// }



// 4)Задание
// let i = 1;
// let a = 0;

// while (i <= 100) {
//    a += i;
//    i++;
// }
// console.log(a);




// 1)Задание
// for (let i = 1; i <= 100; i++) {
//    console.log(i);
// }




// 2)Задание
// for (let i = 11; i <= 33; i++) {
//    console.log(i);
// }





// 3)Задание
// for (let i = 0; i <= 100; i++) {
//    if (i % 2 == 0) {
//       console.log(i);
//    }
// }




// 4)Задание
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




// 1)Задание
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



// let user = {
//    name: 'John',
//    surname: 'Smith'
// };

// user.name = 'Pete';
// console.log(user.name);

// delete user.name;
// console.log(user.name);

// for (let key in user) {
//    console.log(key);
// }




// let schedule = {
//    a: 6
// };

// function isEmpty(schedule) {
//    for (let key in schedule) {
//       return false;
//    }
//    return true;
// }
// console.log(isEmpty(schedule));




// let salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//    sum += salaries[key];
// }

// console.log(sum);




// let menu = {
//    width: 200,
//    height: 300,
//    title: "My menu"
// };



// function multiplyNumeric(obj) {
//    for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//          obj[key] = obj[key] * 2;
//       }
//    }

// }

// multiplyNumeric(menu);
// console.log(menu);




// 1)Задание

// let obj = {
//    a: 1,
//    b: 2,
//    c: 3
// };
// console.log(obj.c);
// console.log(obj['c']);



// 2)Задание

// let obj = {
//    Коля: '1000',
//    Вася: '500',
//    Петя: '200'
// };
// console.log(obj.Коля, obj.Петя);



// 3)Задание

// let daysOfTheWeek = {
//    1: 'Monday',
//    2: 'Tuesday',
//    3: 'Wednesday',
//    4: 'Thursday',
//    5: 'Friday',
//    6: 'Saturday',
//    7: 'Sunday'
// };

// console.log(daysOfTheWeek['2']);



// 
// 4)Задание

// let daysOfTheWeek = {
//    1: 'Monday',
//    2: 'Tuesday',
//    3: 'Wednesday',
//    4: 'Thursday',
//    5: 'Friday',
//    6: 'Saturday',
//    7: 'Sunday'
// };
// let day = 2;
// for (let key in daysOfTheWeek) {
//    if (day == key) {
//       console.log(daysOfTheWeek[key]);
//    }
// }




// ===== Методы объекта, "this" =====

// let calculator = {
//    a: null,
//    b: null,
//    read() {
//       this.a = +prompt('a', '0');
//       this.b = +prompt('b', '0');
//    },

//    sum() {
//       return this.a + this.b;

//    },

//    mul() {
//       return this.a * this.b;

//    }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());





// let ladder = {
//    step: 0,
//    up() {
//       this.step++;
//       return this;
//    },
//    up2() {
//       this.step--;
//       return this;
//    },
//    up3() {
//       alert(this.step);
//       return this;
//    }
// };

// ladder.up().up().up().up2().up3();



// ===== Методы объекта, "this" =====


// function BigUser() {
//    this.name = "Vasa";

//    return {
//       name: "gdzilla"
//    };
// }

// alert(new BigUser().name);





// function Calculator() {
//    this.read = function () {
//       this.a = +prompt("a?", "0");
//       this.b = +prompt("a?", "0");
//    };

//    this.sum = function () {
//       return this.a + this.b;
//    };

//    this.mul = function () {
//       return this.a * this.b;
//    };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());




// function Accumulator(startingValue) {
//    this.value = startingValue;

//    this.read = function () {
//       this.a = +prompt("a?", "0");
//       this.value = (this.value + this.a);
//       return this.value;
//    };
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();
// accumulator.read();
// accumulator.read();

// alert(accumulator.value);




// ===== Числа =====



// let a = +prompt('a?', '0');
// let b = +prompt('b?', '0');
// let sum = a + b;
// alert(sum);



// alert(Math.round(6.35 * 10) / 10);



// function readnumber() {
//    let a = +prompt("?", '0');
//    if (a == null || a == 0) {
//       return alert('null');
//    } else {
//       return alert(a);
//    }
// }
// readnumber();



// function readNumber() {
//    let num;

//    do {
//       num = prompt("?", "0");
//    } while (!isFinite(num));

//    if (num === null || num === '') return null;

//    return +num;
// }

// alert(readNumber());



// function random(min, max) {
//    return min + Math.random() * (max - min);

// }
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));



// function randomInteger(min, max) {
//    return min + Math.random() * (max - min);

// }
// alert(randomInteger(1, 5));
// alert(randomInteger(1, 5));
// alert(randomInteger(1, 5));



// ===== Строки =====

// function ucFirst(str) {
//    str = 'В' + str.substring(1, 4);
//    return alert(str);

// }
// ucFirst("вася");

// function ucFirst(str) {
//    if (!str) return str;

//    return str[0].toUpperCase() + str.slice(1);
// }
// alert(ucFirst("вася"));




// function checkSpam(str) {
//    if (!str.indexOf('viagra') || !str.indexOf('XXX')) {
//       return false;
//    } else {
//       return true;
//    }

// }

// alert(checkSpam("viagra"));

// function checkSpam(str) {
//    let saveStr = str.toLowerCase();

//    return saveStr.includes('viagra') || saveStr.includes('xxx');
// }

// alert(checkSpam("innocent rabbit"));



// function truncate(str, maxlength) {
//    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
// }
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// alert(truncate("Всем привет!", 20));



// function extractCurrencyValue(str) {
//    return +str.slice(1);

// }
// alert(extractCurrencyValue('$120'));



// ===== Массивы =====

// let styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-ролл');
// alert(styles);

// styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
// alert(styles);

// styles.shift();
// alert(styles);

// styles.unshift('Рэп', 'Регги');
// alert(styles);


// function sumInput() {

//    let mass = [];
//    do {
//       let a = +prompt('?', '0');
//       mass.push(a);
//    } while (a === null || a === '');
// }
// alert(sumInput());
// alert(mass);


// function sumInput() {
//    let numbers = [];

//    while (true) {
//       let num = prompt("dddddddd", 0);
//       if (num === '' || num === null || !isFinite(num)) break;
//       numbers.push(+num);
//    }
//    let sum = 0;
//    for (let summ of numbers) {
//       sum += summ;
//    }
//    return sum;
// }

// alert(sumInput());