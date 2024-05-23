
const express = require('express')
const app = express();
const mysql = require('mysql');
const PORT = 8000


app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})
module.exports = app