//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//


let url = new URL(location.href);
let json = url.searchParams.get('id');
let post = JSON.parse(json);
console.log(post);

let div = document.createElement('div');
div.classList.add('post');

let id = document.createElement('h5');
id.innerText = `ID: ${post.id}`;

let userid = document.createElement('h5');
userid.innerText = `UserID: ${post.userId}`;

let title = document.createElement('h5');
title.innerText = `Title: ${post.title}`;

let body = document.createElement('h5');
body.innerText = `Body: ${post.body}`;


div.append(id, userid, title, body);
document.body.appendChild(div);


let url2 = new URL(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
fetch(url2)
    .then(value => value.json())
    .then(coments => {
        for (const coment of coments) {
            let div = document.createElement('div');
            div.classList.add('coment');

            let postid = document.createElement('p');
            postid.innerText = `PostId: ${coment.postId}`;

            let id = document.createElement('p');
            id.innerText = `Id: ${coment.id}`;


            let name = document.createElement('p');
            name.innerText = `Name: ${coment.name}`;

            let email = document.createElement('p');
            email.innerText = `Email: ${coment.email}`;

            let body = document.createElement('p');
            body.innerText = `Body: ${coment.body}`;

            div.append(postid, id, name, email, body);
            document.body.appendChild(div);
        }

    })
