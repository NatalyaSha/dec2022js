// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let names = ['book',
    'ball',
    'pen',
    'stop',
    'go',
    22,
    -15,
    123,
    'phone',
    'pensil'];
console.log(names);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book4 = {
    title:'I am legend',
    pageCount:224,
    genre:'science fiction novel'
};
let book5 = {
    title:'1984',
    pageCount: 312,
    genre:'novel'
};
let book6 = {
    title:'The Sun Also Rises',
    pageCount:288,
    genre:'novel'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title:'I am legend',
    pageCount:224,
    genre:'science fiction novel',
    authors:[
        name ='Richard Matheson',
        age =28
    ]
};
let book2 = {
    title:'1984',
    pageCount: 312,
    genre:'novel',
    autors:[
        name ='George Orwell',
        age =45
    ]
};
let book3 = {
    title:'The Sun Also Rises',
    pageCount:288,
    genre:'novel',
    autors:[
        name ='Ernest Hemingway',
        age =25
]
};


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr = [
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
console.log(arr[0].password);
console.log(arr[1].password);
console.log(arr[2].password);
console.log(arr[3].password);
console.log(arr[4].password);
console.log(arr[5].password);
console.log(arr[6].password);
console.log(arr[7].password);
console.log(arr[8].password);
console.log(arr[9].password);

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 9;
if (x !== 0) {
    console.log(true);
}else {
    console.log(false);
}

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 35;
if (time <= 14 && time >= 0) {
    console.log('first quarter');
}else if (
    time <= 29 && time >=15) {
    console.log('second quarter');
}else if (
    time <=44 && time >=30) {
    console.log('third quard');
}else if (
    time <=59 && time >= 45) {
    console.log('fourth quard');
}else {
    console.log('number between 0-59')
}

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 6;
if (day >= 0 && day <= 8) {
    console.log('first');
}else if (day >= 9 && day <=17) {
    console.log('second');
}else if (day >= 18 && day <=28) {
    console.log('third')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weeksday = prompt('enter day');
switch (weeksday) {
    case '1':
        console.log('monday');
        break;
    case '2':
        console.log('tuesday');
        break
    case '3':
        console.log('wednesday');
        break
    case '4':
        console.log('thursday');
        break;
    case '5':
        console.log('friday');
        break;
    case '6':
        console.log('saturday');
        break;
    case '7':
        console.log('sunday');
        break;
    default:
        console.log('wrong');
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let answer = confirm('are you older than 18');
if (answer <= 18){
    console.log('18');
}else if (answer > 18){
    console.log('no enter');
}

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x = undefined;
// x = x || 'default';
// console.log(x);



// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('super');
}else if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('super');
}else if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('super');
}else if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('super');
}else if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('super');
}else if (coursesAndDurationArray[0].monthDuration < 5){
    console.log('no super');
}


