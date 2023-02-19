// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let s1 = 'hello world';
// let s2 = 'lorem ipsum';
// let s3 = 'javascript is cool';
// console.log(s1.length);
// console.log(s2.length);
// console.log(s3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// function toUpper(string) {
//     console.log(`${string}`.toUpperCase());
// }
// toUpper('hello world');
// toUpper('lorem ipsum');
// toUpper('javascript is cool');


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// function toLower(string) {
//     console.log(`${string}`.toLowerCase());
// }
// toLower('HELLO WORLD');
// toLower('LOREM IPSUM');
// toLower('JAVASCRIPT IS COOL');

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.indexOf('d'));
// console.log(str.indexOf('g'));
// console.log(str.substring(1,13));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// function stringToarray(str) {
//     console.log(`${str}`.split(' '));
// }
// stringToarray(str);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// const roots = arr.map((num) => {return num = `${num}`});
// console.log(roots);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//
//     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// console.log(nums.sort());


// let nums = [11, 21, 3];
//
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         let num1 = arr.sort((a, b) => a - b);
//         return num1
//     }
//     if (direction === 'descending') {
//         let num2 = arr.sort((a, b) => b - a);
//         return num2
//     }
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// let x = coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration;
// });
// console.log(x);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let x1 = coursesAndDurationArray.filter (u => u.monthDuration > 5);
// console.log(x1);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let x2 = coursesAndDurationArray.map((element, index) => {
// return {id: index +1, title: element.title, monthDuration: element.monthDuration};});
// console.log(x2);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

let  cards = [
    {cardSuit: 'spade', value: '6', color: 'black',},
    {cardSuit: 'spade', value: '7', color: 'black',},
    {cardSuit: 'spade', value: '8', color: 'black',},
    {cardSuit: 'spade', value: '9', color: 'black',},
    {cardSuit: 'spade', value: '10', color: 'black',},
    {cardSuit: 'spade', value: 'jack', color: 'black',},
    {cardSuit: 'spade', value: 'queen', color: 'black',},
    {cardSuit: 'spade', value: 'king', color: 'black',},
    {cardSuit: 'spade', value: 'ace', color: 'black',},
        {cardSuit: 'diamond', value: '6', color: 'red',},
        {cardSuit: 'diamond', value: '7', color: 'red',},
        {cardSuit: 'diamond', value: '8', color: 'red',},
        {cardSuit: 'diamond', value: '9', color: 'red',},
        {cardSuit: 'diamond', value: '10', color: 'red',},
        {cardSuit: 'diamond', value: 'jack', color: 'red',},
        {cardSuit: 'diamond', value: 'queen', color: 'red',},
        {cardSuit: 'diamond', value: 'king', color: 'red',},
        {cardSuit: 'diamond', value: 'ace', color: 'red',},
        {cardSuit: 'heart', value: '6', color: 'red',},
        {cardSuit: 'heart', value: '7', color: 'red',},
        {cardSuit: 'heart', value: '8', color: 'red',},
        {cardSuit: 'heart', value: '9', color: 'red',},
        {cardSuit: 'heart', value: '10', color: 'red',},
        {cardSuit: 'heart', value: 'jack', color: 'red',},
        {cardSuit: 'heart', value: 'queen', color: 'red',},
        {cardSuit: 'heart', value: 'king', color: 'red',},
        {cardSuit: 'heart', value: 'ace', color: 'red',},
        {cardSuit: 'clubs', value: '6', color: 'black',},
        {cardSuit: 'clubs', value: '7', color: 'black',},
        {cardSuit: 'clubs', value: '8', color: 'black',},
        {cardSuit: 'clubs', value: '9', color: 'black',},
        {cardSuit: 'clubs', value: '10', color: 'black',},
        {cardSuit: 'clubs', value: 'jack', color: 'black',},
        {cardSuit: 'clubs', value: 'queen', color: 'black',},
        {cardSuit: 'clubs', value: 'king', color: 'black',},
        {cardSuit: 'clubs', value: 'ace', color: 'black',},
    ];
    // - знайти піковий туз

// let x = cards.filter(u => u.cardSuit === 'clubs');
// console.log(x);
// let x1 = x.find(u => u.value === 'ace');
// console.log(x1);

// - всі шістки

// let x = cards.filter(u => u.value === '6');
// console.log(x);

// - всі червоні карти

// let x = cards.filter(u => u.color === 'red');
// console.log(x);

// - всі буби

// let x = cards.filter(u => u.cardSuit === 'diamond');
// console.log(x);

// - всі трефи від 9 та більше

// let x = cards.filter(u => u.cardSuit === 'clubs');
// console.log(x);
// let x1 = x.filter(u => u.value !== '6' && u.value !== '7' && u.value !== '8');
// console.log(x1);

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// піки, дзвуни, черви, хрести.
// let cards1 = {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// }

// console.log(cards.reduce((acc,x) => {
//     if (x.cardSuit === 'spade')
//          {acc.spades.push(x);}
//     if (x.cardSuit === 'diamond')
//          {acc.diamonds.push(x);}
//     if (x.cardSuit === 'heart')
//          {acc.hearts.push(x);}
//     if (x.cardSuit === 'clubs')
//          {acc.clubs.push(x);}
//     return acc;},
// {spades: [], diamonds: [], hearts: [], clubs: []}));


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

// let x = coursesArray.filter(el => el.modules.includes('sass'));
// console.log(x);
//
// // --написати пошук всіх об'єктів, в який в modules є docker
//
// let x1 = coursesArray.filter(el => el.modules.includes('docker'));
// console.log(x1);
