const user = document.querySelector('#user');
const btnUser = document.querySelector('button#user');
const bodyUser = document.querySelector('.body-user');

let userList = [
  {
    id: '001',
    name: 'Vinicius',
  },
];

let bookList = [
  {
    id: '001',
    book: 'Senhor dos Aneis',
  },
];

//list users
userList.map((list) => {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');

  console.log(list);

  if (list !== '') {
    let n = 0;
    let id = '';

    bodyUser.appendChild(tr);
    td1.innerHTML = `${list.id}`;
    td2.innerHTML = `${list.name}`;
    tr.appendChild(td1);
    tr.appendChild(td2);
  }
});

//create a new user
btnUser.addEventListener('click', (e) => {
  e.preventDefault();

  if (user.value === '') {
    user.placeholder = 'Invalid User!';
  } else {
    let n = 0;
    let check;

    userList.map((el) => {
      if (el.name === user.value) {
        check = true;
      }
    });

    if (check) {
      user.placeholder = 'User already exists!';
    } else {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');

      let newUser = {
        id: '',
        name: '',
        books: [
          {
            id: '',
            book: '',
          },
        ],
      };

      let date = new Date();
      newUser.id = date.getMilliseconds();
      newUser.name = user.value;

      userList.push(newUser);

      bodyUser.appendChild(tr);
      td1.innerHTML = `${newUser.id}`;
      td2.innerHTML = `${newUser.name}`;
      tr.appendChild(td1);
      tr.appendChild(td2);
    }

    user.value = '';
    user.addEventListener('focus', () => (user.placeholder = ''));
  }
});

const book = document.querySelector('#book');
const btnBook = document.querySelector('#btnBook');
const bodyBook = document.querySelector('.body-book');

//List Books
bookList.map((list) => {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');

  if (list !== '') {
    bodyBook.appendChild(tr);
    td1.innerHTML = `${list.id}`;
    td2.innerHTML = `${list.book}`;
    tr.appendChild(td1);
    tr.appendChild(td2);
  }
});

//create a new user
btnBook.addEventListener('click', (e) => {
  e.preventDefault();

  if (book.value === '') {
    book.placeholder = 'Invalid User!';
  } else {
    let n = 0;
    let check;

    bookList.map((el) => {
      console.log(el);
      if (el.book === book.value) {
        check = true;
      }
    });

    if (check) {
      book.placeholder = 'Book already exists!';
    } else {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');

      let newBook = {
        id: '',
        book: '',
      };

      let date = new Date();
      newBook.id = date.getMilliseconds();
      newBook.book = book.value;

      bookList.push(newBook);

      bodyBook.appendChild(tr);
      td1.innerHTML = `${newBook.id}`;
      td2.innerHTML = `${newBook.book}`;
      tr.appendChild(td1);
      tr.appendChild(td2);
    }

    book.value = '';
    book.addEventListener('focus', () => (book.placeholder = ''));
  }
});
