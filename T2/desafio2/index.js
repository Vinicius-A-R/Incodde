import { showList, addList } from './controller/handle.js';

const user = document.querySelector('#user');
const btnUser = document.querySelector('button#user');
const bodyUser = document.querySelector('.body-user');

const book = document.querySelector('#book');
const btnBook = document.querySelector('#btnBook');
const bodyBook = document.querySelector('.body-book');

let userList = [
  {
    id: '001',
    name: 'Vinicius',
  },
];

let bookList = [
  {
    id: '001',
    name: 'Senhor dos Aneis',
  },
];

showList(userList, bodyUser);
addList(btnUser, user, userList, bodyUser);

showList(bookList, bodyBook);
addList(btnBook, book, bookList, bodyBook);
