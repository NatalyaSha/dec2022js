// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну
// інфорацію про об'єкт на який клікнули

let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.classList.add('user-item');
            div.style.backgroundColor = 'green';
            div.style.fontSize = '20px';
            let a = document.createElement('a');
            a.innerText = `${user.id} ${user.name}`;
            a.href = 'user-details.html?data=' + JSON.stringify(user);
            div.appendChild(a);
            document.body.appendChild(div);
        }
    })




