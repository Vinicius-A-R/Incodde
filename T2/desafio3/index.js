const express = require('express');

const path = require('path');
const port = 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.listen(port, () => {
  console.log(`Server was started -> port: ${port}`);
});
