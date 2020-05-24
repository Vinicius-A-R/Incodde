const express = require('express');
const server = express();
const host = 'http://localhost:';
const port = 5000;

server.use(express.json());

const userController = require('./controllers/userController');

server.get('/users', userController.getAllUsers);

server.get(
  '/users/:index',
  userController.checkUserInArray,
  userController.getOneUser
);

server.post('/users', userController.checkUserExists, userController.newUser);

server.delete(
  '/users/:index',
  userController.checkUserInArray,
  userController.deleteUser
);

server.listen(port, () => {
  console.log(`Access server: ${host}${port}`);
});
