// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу
//     про поточний пост.
//

let url = new URL(location.href);
let json = url.searchParams.get('data');
let user = JSON.parse(json);

let div = document.createElement('div');
div.classList.add('post-block');


let info = document.createElement('p');
info.innerText = `ID:${user.id} Name: ${user.name} Username: ${user.username}`;


let email = document.createElement('p');
email.innerText = `Email: ${user.email}`;

let addres = document.createElement('p');
addres.innerText = 'Addres:'
let p1 = document.createElement('p');
p1.innerText = `Srteet: ${user.address.street}`;
let p2 = document.createElement('p');
p2.innerText = `Suite: ${user.address.suite}`;
let p3 = document.createElement('p');
p3.innerText = `City: ${user.address.city}`;
let p4 = document.createElement('p');
p4.innerText = `Zipcode: ${user.address.zipcode}`;
let p5 = document.createElement('p');
p5.innerText = `Geo: Lat: ${user.address.geo.lat} Lng: ${user.address.geo.lng}`;

addres.append(p1, p2, p3, p4, p5);


let phone = document.createElement('p');
phone.innerText = `Phone: ${user.phone}`;

let website = document.createElement('p');
website.innerText = `Website: ${user.website}`

let company = document.createElement('p');
company.innerText = `Company:`;
let name = document.createElement('p');
name.innerText = `Name: ${user.company.name}`;
let catchPhrase = document.createElement('p');
catchPhrase.innerText = `CatchPhrase: ${user.company.catchPhrase}`;
let bs = document.createElement('p');
bs.innerText = `Bs: ${user.company.bs}`;

company.append(name, catchPhrase, bs);

div.append(info, email, phone, website, addres, company);
document.body.appendChild(div);


let button = document.createElement('button');
button.classList.add('but');
button.innerText = `Posts of Current User`;
document.body.appendChild(button);
button.addEventListener('click', async () =>  {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(response => response.json())
    .then(posts =>{
        let div = document.createElement('div');
        div.classList.add('container');

        for (const post of posts) {
            let a = document.createElement('a');
            a.classList.add('info');
            a.innerText = `${post.id} ${post.title}`;
            a.href = 'post-details.html?id=' + JSON.stringify(post);
            div.appendChild(a);
        }

        document.body.appendChild(div);
    })});










