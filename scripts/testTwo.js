// const mouth = 2;

// switch (mouth) {
//     case 12:
//         console.log('Декабрь');
//         break
//     case 1:
//         console.log('Январь')
//         break
//     case 2:
//         console.log('Фувраль')
//         break
//     default:
//         console.log('Это не зимний месяц');
// }

// //Тернарный оператор;

// const value = false;

// value ? console.log('yes') : console.log('no');

// const valueOne = 11

// console.log(valueOne >= 0 ? valueOne : -valueOne);

// const valueTwo = -5


// const res = valueTwo >= 0 ? valueTwo : -valueTwo;

// console.log(res);

// // Цыклы

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// //

// let i = 0

// while (i < 5) {
//     console.log(i);
//     i++ // если не будет i++ будет бесконечно проводить цикл
// }

// //

// let j = 10

// do {
//     console.log(j)
//     j++
// } while (j < 5) // если хотим выполнить цикл один раз, так как 10 > 5 и while false

// // перебрать область объекта

// const mypersenect = {
//     x: 10,
//     y: true,
//     z: 'abc',
// }

// for (key in mypersenect) {
//     console.log(key, mypersenect[key])
// }

// persenect.keys(mypersenect).forEach(key => {
//     console.log(key, mypersenect[key]);

// })

// persenect.values(mypersenect).forEach(value => {
//     console.log(value);
// })


// const myArray = [true, 10, 'abc', null];

// for (key in myArray) {
//     console.log(myArray[key])
// }

// for (element of myArray) {
//     console.log(element);
// }

// myArray.forEach(element => {
//     console.log(element);
// })

// const welcomeMessages = {
//     russian: 'Добро пожаловать',
//     english: 'Welcome',
//     french: 'Bienvenue',
//     italian: 'Benvenuto',
//     spanish: 'bienvenido',
//     chinese: '歡迎',
//     finnish: 'Tervetuloa'
// };

// const addWelcomeMessage = (language, messeg) => {
//     welcomeMessages[language] = messeg;
// }

// addWelcomeMessage('danish', 'Velkommen');
// addWelcomeMessage('zulu', 'Ukwamukela');

// console.log(welcomeMessages.danish); // "Velkommen"
// console.log(welcomeMessages.zulu); // "Ukwamukela"

// const phonebook = {
//     'Тёма': {
//         mobile: '+79995164420',
//         work: '+79569172374',
//         home: '+78123552223'
//     },
//     'Вася брат Андрея': {
//         mobile: '+79045174415'
//     }
// };

// function addPhoneNumber(name, numberType, number) {
//     if (!phonebook[name]) {
//         phonebook[name] = {}
//     }
//     phonebook[name][numberType] = number;
// }

// // когда функция будет готова, добавьте мобильный Анастасии Павловны
// addPhoneNumber('Анастасия Павловна', 'mobile', '+79111545616');

// console.log(phonebook['Анастасия Павловна'].mobile); // "+79111545616"

// const yourNumber = 'Л059';
// let windowNumber;

// const windows = {
//     'Л054': 1,
//     'Л055': 2,
//     'Л056': 3,
//     'Л057': 4,
//     'Л058': 5
// };

// windowNumber = windows[yourNumber] || 0;

// console.log(windowNumber); // 0

// const welcomeMessages = {
//     russian: 'Добро пожаловать',
//     english: 'Welcome',
//     french: 'Bienvenue',
//     italian: 'Benvenuto',
//     spanish: 'bienvenido',
//     chinese: '歡迎',
//     finnish: 'Tervetuloa'
// };

// function countLanguages(persen, propsArr) {
//     return propsArr.reduce(function (res, current) {
//         if (welcomeMessages[current]) {
//             res += 1;
//         }
//         return res;
//     }, 0)
// }

// console.log(countLanguages(welcomeMessages, ['english', 'french', 'mandarin'])); // 2
// console.log(countLanguages(welcomeMessages, ['russian', 'czech'])); // 1


// /**
//  * Возращает разницу двух чисел
//  * @param {number} a
//  * @param {number} b
//  * @returns {number} Разница чисел
//  */

// const myFn = (a, b) => a - b;

// const result = myFn(10, 5);

// console.log(result);


// const helloWorld = () => console.log('Hellow, world');

// setTimeout(helloWorld, 5000);

// const persen = {
//     name: 'Anton',
//     surname: 'Kyjelev',
//     faloriteNumber: 11,
// }

// const personInfo = `My name is ${persen.name} ${persen.surname} and my falorite number is ${persen.faloriteNumber}`

// console.log(personInfo);


// console.log('My name is ' + persen.name + ' ' + persen.surname + ' and my falorite number is ' + persen.faloriteNumber);

// const string = 'I love you'

// console.log(string.length);

// const string = 'My Kati for live'

// console.log(string instanceof String);

// const arr = []

// console.log(arr instanceof Array); // true

// const number = 10

// console.log(number instanceof Number); // false

/** instanceof проверяет, принадлежит объект переменной string?
*  нет так как string является строкой, если она имела объект ,
*  то консольвывела true
*
*/

// const persen = {
//     name: 'Anton',
//     surname: 'Kyjelev',
//     faloriteNumber: 11,
// }

// console.log(persen instanceof Object); // true


// console.log(typeof string);

// const stringCaps = string.toUpperCase()

// console.log(stringCaps);


// // Создание экземпляра String

// const myString = new String('Anton'); //true

// console.log(myString instanceof String);

// console.log(typeof myString);

// console.log(myString.toUpperCase());

// const newPeremen = 'Good Morning';

// const updateGreeting = newPeremen.replace('Morning', 'Evening');

// console.log(updateGreeting);

// const array = ['abc', true, 10];

// array.forEach((arr) => console.log(arr));

// const myArray = ['abc', 200, true, 200, undefined];

// myArray.push(20, 'Kate', null);

// console.log(myArray);

// const time = new Date().getTime()

// console.log(time);

// let myVariable1 = 10;

// let myVariable2 = '5';

// // 1 способ конвентировать строку в число

// console.log(parseInt(myVariable2));

// console.log(typeof parseInt(myVariable2));

// // 2 спосбо конвентировать строку в число

// console.log(+myVariable2);

// console.log(typeof +myVariable2);

// console.log(parseInt(myVariable1) <= parseInt(myVariable2));


// myVariable1 = '20';

// myVariable2 = 100;


// console.log(+myVariable1 <= +myVariable2);


// const myNamber1 = 10;

// const myNamber2 = 3;

// console.log(myNamber1 % myNamber2);

// console.log(20 * (10 % 3));

// console.log(3 || true && null || false);

// let a = 10;

// a += 1

// console.log(a);

// a *= 2;

// console.log(a);

// a -= 5;

// console.log(a);

// a /= 2;

// console.log(a);

// function fn() {
//     console.log('Hello, friend');

//     return function (a) {
//         console.log(a);
//         return function (b) {
//             console.log(b);

//         }
//     }
// }

// fn()(true)('anton')

// let myFavoriteAnimal = 'Mockey';

// console.log(myFavoriteAnimal);

// myFavoriteAnimal = 'Cat'

// console.log(myFavoriteAnimal);

// // мы сделали так

// console.log(myFavoriteAnimal = 'Tom');

// 'use strict'

// function myFunction() {
//     const a = 2 // <-- Тут изнабально небыло прописано const, по этому 'use strict' выдал ошибку
//     return a
// }

// myFunction(); // тут будет 2


// setTimeout(() => console.log('Hello, friend'), 2000);
// /**        __________________________________  _____
//  *                         ^                     ^
//  *                  первый параметр           Второй
//  *                                           параметр
//  */

// const messag = 'Сообщение номер';

// function myFn(messag) {
//     for (let i = 1; i <= 5; i++) {
//         console.log(messag + ' ' + i);
//     }
// }

// let timeId = setInterval(() => myFn(messag), 2000);

// setInterval(() => {
//     clearInterval(timeId); myFn(messag)
// }, 5000);

// let i = 1

// const numberMesseg = setInterval(() => {
//     console.log('Сообщение номер ' + i);
//     i += 1
// }, 2000);



// setTimeout(() => clearInterval(numberMesseg), 10000);

// /** Консоль каждые 2 сек будет выводить сообщение и добавлять число. 
// Сообщение номер 1
// Сообщение номер 2
// Сообщение номер 3
// Сообщение номер 4
// Сообщение номер 5
//  */

// const song = {
//     title: 'На заре',
//     artist: 'Альянс',
//     isLiked: false,
//     like: function () {
//         song.isLiked = !song.isLiked;
//     }
// };

// console.log(song);


// /* объявляем функцию createSong,
// она будет возвращать новые объекты песен */
// function createSong(title, artist) {
//     // создаём новый объект песни*
//     const newSong = {
//         title,
//         artist,
//         isLiked: false,
//         like: function () {
//             newSong.isLiked = !newSong.isLiked;
//         }
//     }

//     return newSong; // возвращаем этот объект
// }

// // теперь создавать объекты песен гораздо проще
// const song1 = createSong('Футбольный мяч', 'Антоха MC');
// const song2 = createSong('На заре', 'Альянс');
// const song3 = createSong('Ай', 'Хаски');

// // тестируем, как данные и функциональность работают вместе
// console.log(song1.isLiked); // false
// song1.like();
// console.log(song1.isLiked); // true 

function like() {
    this.isLiked = !this.isLiked;
}

function createSong(title, artist) {
    const newSong = {
        title,
        artist,
        isLiked: false,
        like: like
    }

    return newSong;
}

const song1 = createSong('Футбольный мяч', 'Антоха MC');

song1.like();

console.log(song1.isLiked);

const obj = {
    prop: 'Свойство',
    method: function () {
        console.log(this); // выведем значение this
    }
}

obj.method()
