//1.
// - 5 баллов
// Задача

// Напишите программу JavaScript, которая принимает строку в качестве входных данных и меняет регистр каждого символа.
// 	Примеры
// 	input: 'The Quick Brown Fox’
// 	output: 'tHE qUICK bROWN fOX'
//
// 	input: ‘IT run’
// 	output: ‘it RUN’

// const task1 = (str) => {
//     let  result = '';
//     for (let  i = 0; i < str.length; i++) {
//         let  char = str[i];
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase();
//         } else {
//             result += char.toUpperCase();
//         }
//     }
//     return result;
// }
// console.log(task1('The Quick Brown Fox'));
// console.log(task1('IT run'));



//2.
// - 10 баллов
// 	Задача


// 	Напишите программу на JavaScript для поиска наиболее часто встречающегося элемента массива.
// Примеры
// Input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Output : ‘a 5 раз’
// Input: [3,3,2,2,1,2];
// Output : ‘2 3 разa’

// const task2 = (arr) => {
//     const itemMap = arr.reduce((map, item) => map.set(item, (map.get(item) || 0) + 1), new Map());
//     const [mostItemInArray, count] = [...itemMap.entries()].reduce(([item, count], [key, value]) => value > count ? [key, value] : [item, count], ['', 0]);
//     return `${mostItemInArray} ${count} раз`;
// };
// console.log(task2([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
// console.log(task2([3,3,2,2,1,2]));

//3.
// - 10 баллов
// Задача


// Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.
//
// Примеры
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// const sortArr = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
// const result = arr.reduce((acc, num) => {
//     if (num % 2 === 0) {
//         acc.push(num);
//     } else {
//         acc.push(sortArr.shift());
//     }
//     return acc;
// }, []);
// console.log(result);


//4.
// - 5 баллов
// Напишите функцию, которая принимает на вход массив чисел,
// и возвращает новый, в котором все элементы возведены в куб, и те числа,
// которые кратны и трем и пяти одновременно, заменить их на 0.
//input: [7, 8, 15, 30, 2]
// output: [ 343, 512, 0, 0, 8 ]

// const task4=(arr)=>{
//     return arr.map((item) => {
//         if (item % 3 === 0 || item % 5 ===0) {
//             return 0;
//         } else {
//             return item ** 3;
//         }
//     });
// };
// console.log(task4([7, 8, 15, 30, 2]));

//5.
// - 10 баллов
// Задача
// Напишите программу на JavaScript для вычисления объединения двух
// массивов.  И вести без дубликатов с порядком возрастания.
// Примеры
// Input: [1, 2, 3], [100, 2, 1, 10]
// Output: [1, 2, 3, 10, 100]
// Input: [4, 4, 4], [2, 2, 2, 1]
// Output: [1, 2, 4]

// const task5 = (arr1, arr2) => {
//     const newArr= [...arr1, ...arr2];
//     const result = Array.from(new Set(newArr)).sort((a, b) => a - b);
//     return result;
// }
//
// console.log(task5([1, 2, 3],[100, 2, 1, 10]));


//6. - 5 баллов
// Напишите функцию, которая принимает массив массивов и возвращает одноранговый массив
// Input: [['ab','abc'],['abcd']]
// Output: ['ab','abc','abcd']
// Input: [[1,2,3],[4,5],[6],[7,8,9]]
// Output: [1,2,3,4,5,6,7,8,9]

// const task6 = (arrays) => {
//     return arrays.reduce((flatArray, innerArray) => flatArray.concat(innerArray), []);
// };
// console.log(task6([['ab', 'abc'] , ['abcd']]));


//7.
// - 5 баллов

// Напишите функцию, которая принимает строку и возвращает новую строку, где после каждой фразы(между запятой) стоит в скобках длина этой фразы.
// См пример
// Используйте split, join, map
// Input: 'hello,world,abra,carabfa,re,wrewer,rwer'
// Actions:
// Output: «hello(5),world(5),abra(4),carabfa(7),re(2),wrewer(6),rwer(4)"


// const task7 = string => string.split(',').map(counter => `${counter}(${counter.length})`).join(',');
// console.log(task7('hello,world,abra,carabfa,re,wrewer,rwer'));


//8.
// - 15 баллов
// Задача с интервью. Функция принимает строку и число. Ваша задача вернуть массив под строк не превышающий по длине это число. Для того, чтобы преобразовать строку в массив - используйте .split('')
// Для решения задачи надо получить массив букв
// 1.	Добавить редьюс
// 2.	Начальное значение редьюса массив с пустой строкой
// 3.	Если в текущей итерации в последнем элементе массива букв меньше, чем надо - добавить букву
// 4.	Если букв столько сколько надо - добавить новый элемент с 1 текущей буквой в конец массива;
// Input: "abrac", 2
// Actions:
// Output: ["ab", "ra", "c"]
// Input: "abracadabra", 4
// Actions:
// Output: ["abra", "cada", "bra"]


//reshit ne smog ^_^

//9.
// - 5 баллов

// Напишите функцию которая принимает объект. Возвращает массив четных значений объекта.
// Input: {a: 5, b: 3, c: 8, d:10}
// Actions:
// Output: [8,10]
// Input: {a: 6, b: 7, c: 11, d:12}
// Actions:
// Output: [6,12]

// const task9 = obj => {
//     const values = Object.values(obj);
//     const chetnyeChisla = values.filter(value => value % 2 === 0);
//     return chetnyeChisla;
// };
// console.log(task9({a: 5, b: 3, c: 8, d:10}));


//10. - 10 баллов
// Напишите функцию которая принимает два параметра и число (цель).
// Функция должна вернуть строку пару чисел  (индексов двух чисел) из заданного массива,
// сумма которых равна определенному целевому числу (нашей цели).
// Input:  [10,20,10,40,50,60,70], 50
// Actions:
// Output: 2,3
// Input:  [10,20,10,40,50,60,70], 30
// Actions:
// Output: 0,1
// Input:  [10,20,10,40,50,60,70], 80
// Actions:
// Output: 1,5

//reshit ne smog ^_^