
const express = require('express')
const app = express();
const mysql = require('mysql');
const PORT = 8000

const db = mysql.createConnection({
  host: '103.62.153.118',
  port: '3306',
  user: 'vienna',
  passowrd: '',
  database: 'dbgshop',
  insecureAuth: false
});

app.get('/get-roles', (req, res) => {
  const sql = 'SELECT * FROM role_type';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});


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