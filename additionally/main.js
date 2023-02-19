// // створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function sqr(a,b) {
//     return a*b;
// }
// console.log(sqr(2, 3));
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function circle(r) {
//     return 3.14*r**2;
// }
//
// console.log(circle(4));
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function cylindr(h,r) {
//     return 2*3.14*r*h;
// }
//
// console.log(cylindr(3, 5));
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// let x = [22,'as',true];
// function f(arr) {
//     for (let item of arr) {
//         console.log(item);
//     }
// }
// f(x);
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function f1(text) {
//     document.write(`<p>${text}</p>`)
// }
// f1('lorem');
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function f2(text) {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// f2('hello');
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function f3(text, num) {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// f3('okten',5);
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let s = [true,44,'ok'];
// function f4(arr) {
//     document.write(`<ul>`);
//     for (const element of arr) {
//         document.write(`<li>${element}</li>`);
//     }
//     document.write(`</ul>`);
// }
// f4(s);
//
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// // Для кожного об'єкту окремий блок.
//
// let a = [
//     {id: 1, name: 'kolya', age:23},
//     {id: 2, name: 'olya', age: 21}
// ];
// function f5(arr1) {
//     for (const Element of arr1) {
//         document.write(`<div>${Element.id} ${Element.name} ${Element.age}</div>`);
//     }
// }
// f5(a);
// - створити функцію яка повертає найменьше число з масиву

// let d = [22, -9, 14,432,55];
// function f6(arr) {
//     let min = 0;
//     for (let element of arr) {
//         if (min > element) {
//             min = element
//         }
//     }
//     return min;
// }
// console.log(f6(d));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// function f7(arr) {
//     let result = 0;
//     for (let element of arr) {
//         result += element;
//     }
//     return result;
// }
// console.log(f7([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arr4 = [11,22,33,44];
function swap(arr,index1,index2){
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

swap(arr4, 2, 3);
console.log(arr4);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     let result = 0;
//     for (let currencyValue of currencyValues) {
//         if (currencyValue.currency === exchangeCurrency){
//             result = sumUAH/currencyValue.value;
//
//         }
//
//     }return result;
// }
//
// console.log(exchange(1000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));