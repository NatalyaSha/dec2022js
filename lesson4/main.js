// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle (a, b) {
    return a * b
}
console.log(rectangle (12, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle (r) {
    return 2 * 3.14 * r
}
console.log(circle(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder (r, H) {
    return 2 * 3.14 * r * H
}
console.log(cylinder(2,4));


// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'ivan', username: 'st22', password: 2222},
    {name: 'roman', username: 'wwsq', password: 2311},
    {name: 'yura', username: 'erwq', password: 3422},
    {name: 'katya',username: 'gghd', password: 7767},
    {name: 'olya', username: 'ffff', password: 4433},
    {name: 'stepan', username: 'klaa', password: 3399},
    {name: 'kolya', username: 'bnnn', password: 3322},
    {name: 'sasha', username: 'op33', password: 2233},
    {name: 'vova', username: 'rr11',password: 5777},
    {name: 'ira',username: 'po00', password: 8991},
];
function boom (arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
boom (users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function text (title) {
    let html = `<p>${title}</p>`;
    document.write(html);
}
text('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function text1 (title) {
    let html = `<ul>
<li>${title}</li>
<li>${title}</li>
<li>${title}</li>
</ul>`;
    document.write(html);
}
text1('stop');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function text2 (text, num1) {
    document.write(`<ul>`);
    for (let i = 0; i < num1; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
text2('go', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = [2,1,'hello', 'go',true,false];
function list() {
    document.write(`<ul>`);
    for (let Element of array) {
        document.write(`<li>${Element}</li>`);
    }
    document.write(`</ul>`);
}
list(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let array1 = [
    {id: 't34', name: 'ivan', age: 23},
    {id: '56y', name: 'kolya', age: 20},
    {id: 'p98', name: 'stepan', age: 30}
];
function arrObj(arr) {
    for (let arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
    }
}
arrObj(array1);

// - створити функцію яка повертає найменьше число з масиву

let array2 = [23,34,21,56,45,55,14,9];
function arr2() {
    let min = Math.min.apply(null, array2);
    console.log(min);
    return min;
}
arr2();

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let array3 = [3,5,2];
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
}
arraySum(array3);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let array4 = [11,22,33,44,0,1];
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
swap(array4, 0, 1);
console.log(array4);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let exchangeValue = 0;
    for (let value of currencyValues) {
        if (value.currency === exchangeCurrency) {
            exchangeValue = value.value;
        }
    }
    return sumUAH/exchangeValue;
}
console.log(exchange(1000, [{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
