const user = document.querySelector('#user');
const btnUser = document.querySelector('button#user');
const bodyUser = document.querySelector('.body-user');

let userList = [
  {
    id: '01',
    name: 'vinicius',
    books: [
      {
        id: '01',
        book: 'Senhor dos aneis',
      },
    ],
  },
];

//list users
userList.map((list) => {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');

  if (list !== '') {
    let n = 0;
    let id = '';
    userList.map((el) => {
      bodyUser.appendChild(tr);
      td1.innerHTML = `${el.id}`;
      td2.innerHTML = `${el.name}`;
      tr.appendChild(td1);
      tr.appendChild(td2);
    });
  }
});

//create a new user
btnUser.addEventListener('click', (e) => {
  e.preventDefault();

  if (user.value === '') {
    user.placeholder = 'Invalid User!';
  } else {
    let n = 0;
    let check = userList.find((el) => el.name === user.value);
    // let check = userList.find((el) => console.log('name: ' + el.name));
    console.log('name ' + check);

    if (check === user.value) {
      user.placeholder = 'User already exists!';
    } else {
      userList.name = user.value;

      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');

      let n = userList[0].id;
      let id = '';
      userList.map((el) => {
        id = '0' + parseInt(n);
        n++;
        console.log(n);
        userList.id = id;

        bodyUser.appendChild(tr);
        td1.innerHTML = `${id}`;
        td2.innerHTML = `${user.value}`;
        tr.appendChild(td1);
        tr.appendChild(td2);
      });
    }

    console.log(userList);

    user.value = '';
    user.addEventListener('focus', () => (user.placeholder = ''));
  }
});

const book = document.querySelector('#book');
const btnBook = document.querySelector('#btnBook');
const bodyBook = document.querySelector('.body-book');

//List Books
userList.map((list) => {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');

  if (list !== '') {
    let n = 0;
    let id = '';
    list.books.map((el) => {
      bodyBook.appendChild(tr);
      td1.innerHTML = `${el.id}`;
      td2.innerHTML = `${el.book}`;
      tr.appendChild(td1);
      tr.appendChild(td2);
    });
  }
});
