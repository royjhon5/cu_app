
const express = require('express')
const app = express()
const PORT = 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})
module.exports = app