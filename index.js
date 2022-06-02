const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

app.get('/protected', (req, res) => {
  return res.send({ route: 'protected', body: req.body });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
