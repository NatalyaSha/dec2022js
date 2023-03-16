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
            let button = document.createElement('button');
            button.classList.add('button');
            button.innerText ='User Details';
            button.addEventListener('click', function()  {
                window.location.href = 'user-details.html?data=' + JSON.stringify(user)
            });
            div.append(a, button);
            document.body.appendChild(div);
        }
    })




