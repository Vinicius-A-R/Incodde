const express = require('express');

const path = require('path');
const port = 5000;

const localHost = 'http://localhost:5000';

const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.listen(port, () => {
  console.log(`Server was started -> port: ${port}`);
  console.log(`Click here to access -> ${localHost}/crud.html`);
  console.log(`Click here to access -> ${localHost}/google.html`);
});
