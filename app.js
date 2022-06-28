const express = require('express')
const app = express()
const port = 8080
const path = require('node:path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


