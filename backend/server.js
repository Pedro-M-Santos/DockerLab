'use strict';

const express = require('express');

// Constants
const PORT = 3000;
// const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<p>Hello World</p>');
});

app.listen(PORT);
console.log(`Running on PORT ${PORT}`);